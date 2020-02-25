<template id="myContent">
<div>
<div class="container">
		<h1>文章标题：{{conMod.Title}}</h1>
		<abbr>
		<span id="CreateTime">发表：{{conMod.createTime.split('T')[0]}}</span> <span id="Hits">浏览数：0</span>
		</abbr>
		<div class="myContent" v-html="conMod.content"></div>
	</div>
</div>
</template>

<script>
export default {
name: 'myContent',
 data: function () {
	var ref = this;
	var id = ref.$route.params.id;
	var model = {conMod: {createTime:""}, node: {}};
	this.jsp("content_get",{"id":id}).then((ret)=>{
		model.conMod=JSON.parse(ret.result)[0];
		this.jsp("model_get",{"id":model.conMod.modelId}).then((ret)=>{model.node=JSON.parse(ret.result);})
	})
	return model;
},
methods: {
	navToList: function () { this.$route.push("/list/" + this.conMod.ModelID); }
},
mounted:function(){

},
}
</script>
