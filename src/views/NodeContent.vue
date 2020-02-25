<template>
<div>
	<div class="container">
	<ul class="list-unstyled">
	<li  v-for="item in list" :key="item.GeneralID"><a href="javascript:;" @click="navTo(item)">{{item.Title}}</a></li>
	</ul>
	</div>
</div>
</template>

<script>
	export default {
		data: function() {
			var model = {
				list: []
			};
			var nid = this.$route.params.nid;
			this.jsp("content_list", {"nid": nid}).then((ret) => {
				model.list = JSON.parse(ret.result);
			});
			return model;
		},
		methods: {
			navTo:function(item){this.$router.push("/Content/"+item.GeneralID);}
		}
	}
</script>

<style>
</style>
