<template>
	<div class="info">
	<div class="container">我是内容区2</div>
	
			<div class="container">
				<ul class="list-unstyled">
				<li v-for="node in nodes" :key="node.NodeID"><a href="javascript:;" @click="navTo(node)">{{node.NodeName}}</a></li>
				</ul>
	
				
			</div>

	
	
	
	
	
		
	</div>
</template>

<script>
	export default{
		metaInfo: {
			title: '资讯中心',
			meta: [
				{ description: '文章资讯的汇总' },
				{ keywords: '文章,资讯,信息,新闻' },				
			]
		},		
		data:function(){
			var model={nodes:[]};
			// var pid=this.$route.params.id;//变量读取ID
			var pid=1;//指定特定父ID
			window.console.log(pid);
			this.jsp("node_list",{"pid":pid}).then((ret)=>{
				model.nodes=JSON.parse(ret.result);
			})
			return model;
		},
		methods:{
			navTo:function(node){
				this.$router.push("/NodeContent/"+node.NodeID);
			}
		},
	}
</script>

