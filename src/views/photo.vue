<template>
  <div class="photo">
<h1>{{ title }}</h1>	  
<i class="zi zi_tmQq"></i>
lorem+++
  </div>
</template>

<script>
  export default {
    name: 'post',
    data () {
      return {
        title: '我的地',
		description: '这是一篇文章1...',
		keywords: '逐浪,文章',
      }
    },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { vmid: 'description', name: 'description', content: this.description },
          { vmid: 'keywords', name: 'keywords', content: this.keywords }
        ]
      }
    },
    created () {
      this.initData()
    }
  }
</script>