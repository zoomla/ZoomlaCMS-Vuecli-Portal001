<template id="list">
	<div>
	<div class="container">
		<h1>模型名称：{{model.ModelName}}</h1>
		<p></p>
	</div>
<main class="container">
<div class="row ">
	<div class="col-12">
		<!--面包屑导航结束-->
		<div class="news_list" v-for="m in models" :key="m.ModelID" v-show="m.list.length>0">
			<div class="news_list_t"><a href="javascript:;">更多&gt;&gt;</a>
				<h2>{{m.ModelName}}</h2>
			</div>
			<div class="news_list_c">
				<ul class="list-unstyled">
					<li v-for="item in m.list" :key="item.GeneralID"><a href="javascript:;" v-on:click="navToContent(item)">{{item.Title}}</a><span>{{item.CreateTime.split('T')[0]}}</span></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</main>
</div>
</template>

<script>
	export default {
		name: 'list',
		data: function() {
			var ref = this;
			//ref.$route.params
			var model = {
				models: [],
				model: {ModelID: 0,ModelName: ""}
			};
			//model.node = ref.$parent.node_get(ref.$route.params.id);
			//model.nodes = ref.$parent.node_list(ref.$route.params.id);
			//model.nodes.unshift(model.node);
		this.jsp("model_get",{id:ref.$route.params.id}).then((ret)=>{
			ref.model=JSON.parse(ret.result);
		})
		this.jsp("model_list",{}).then((ret)=>{
			var models=JSON.parse(ret.result);
			for(let i=0;i<models.length;i++){
				models[i].list=[];
				ref.getList(models[i]);
			}
			ref.models=models;
			
		})
			return model;
		},
		methods: {
			navToContent: function(item) {
				this.$router.push("/content/" + item.GeneralID);
			},
			getList: function(m) {
				var ref = this;
					this.jsp("content_list",{"modelId":m.ModelID}).then((ret)=>{
					m.list=JSON.parse(ret.result);
					window.console.log(m.ModelName,m.list);
				})
				/*return new Promise((resolve) => {
				ref.jsp("content_list", {"modelId":m.ModelID}, function (ret) { 
					window.console.log(ret)
					resolve(ret); 
				});
			});*/
			},
		},
		mounted: function() {
			//每次载入均会执行此方法
			/*var ref = this;
			this.jsp("content_list", {
				modelId: 2
			}).then((data) => {
				ref.list N.parse(data.result);
			})
			*/
		},
	}
</script>
<style>
</style>
