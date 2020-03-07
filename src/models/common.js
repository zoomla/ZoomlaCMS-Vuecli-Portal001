exports.install = function(Vue,options){
// 参数：method（API名），data（请求参数对象）
  Vue.prototype.jsp = function(action,data){
        //const baseUrl = 'http://win100:90/Cloud/API?appId=SSY5UF6SUK&appKey=sZ2Mx7BvAgEWr7i6JDh4vPLFluMuR4pn&action=';
        const baseUrl = 'http://win100:90/API/WXAPP?apiId=75e118bc2737690f43b865b6f380dbcd&apiKey=ccc4775b238d788f3f94e0e6b0b76af7&action=';

		let url = baseUrl+action;
        // jsonp请求参数和get方法类似，都是params的方式拼接
        for(let item in data){
             url += `&${item}=${data[item]}`;
        }
        return this.$jsonp(url);
    };
	Vue.prototype.util={
		alert:function(msg,cb){
			alert(msg);cb();
		}
		
	};
  Vue.prototype.B_User={
	login:function(){
		
	},
	get:function(){
		return {userId:1,userName:"admin",honeyName:'徐子林',trueName:"逐浪软件",mobile:"18890554432"};
		return localStorage.getItem("sys_mu");
	},
	set:function(mu){
		localStorage.setItem("sys_mu",mu);
	},
  }
}