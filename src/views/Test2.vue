<template>
	<div>
	这是一个示例
	
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
				model: {NodeID: 0,NodeName: ""}
			};
			//model.node = ref.$parent.node_get(ref.$route.params.id);
			//model.nodes = ref.$parent.node_list(ref.$route.params.id);
			//model.nodes.unshift(model.node);
		this.jsp("model_get",{id:ref.$route.params.id}).then((ret)=>{
			ref.model=JSON.parse(ret.result);
		})
		this.jsp("node_list",{}).then((ret)=>{
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
