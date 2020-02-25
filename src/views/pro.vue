<template>
  <div class="pro">
      <HelloWorld msg="Welcome to Your Vue.js App"/>

    <multiselect
      v-model="selected"
      :options="options">
    </multiselect>
  </div>
</template>

<script>
/*	如何两个组件引用？
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'pro',
  components: {
    HelloWorld
  }
}
*/
  import Multiselect from 'vue-multiselect'
  export default {
    components: { Multiselect },
    data () {
      return {
        selected: null,
        options: ['我的下拉', '你的下拉', '他的下拉']
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>