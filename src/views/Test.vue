<template>
	<div>
	这是一个示例
	<h1>{{msg}}</h1>
	<button type="button" @click="showAlert">test click</button>
	<table class="table table-bordered table-striped">
		<thead><tr><th>ID</th><th>标题</th><th>创建时间</th></tr></thead>
	</table>
	</div>
</template>

<script>
export default {
  name: 'test',
  data(){
	return{
		msg:"这是一个页面This is an test page!!",
		list:[]
	}; 
  },
  methods:{
	//两种写法
	showAlert:function(){alert("2322323");},
	showAlert2(){alert("3333");},
  },

}
</script>

<style>
</style>
