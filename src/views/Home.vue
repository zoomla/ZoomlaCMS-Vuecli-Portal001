<template>
  <div class="home">
	<header>
	<nav class="navbar navbar-expand-sm navbar-dark" id="home_nav"> <a class="navbar-brand" href="/"><img alt="逐浪CMS" src="../assets/logo_w.svg" /></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
	<div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample03">
	<ul class="navbar-nav home_top_nav">
	<li class="nav-item active"><a class="nav-link" href="/">首页</a></li>
	<li class="nav-item"><a class="nav-link" href="/#/info">资讯门户</a></li>
	<li class="nav-item"><a class="nav-link" href="/Class_2/Default" target="_blank">线上商城</a></li>
	<li class="nav-item"><a class="nav-link" href="/office" target="_blank">办公平台</a></li>
	<li class="nav-item"><a class="nav-link" href="/Bar/Index" target="_blank">社区贴吧</a></li>
	<li class="nav-item"><a class="nav-link" href="/Plugins/markdown/" target="_blank">Markdown</a></li>
	<li class="nav-item dropdown"> <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true"><i class="zi zi_caretdown"></i></a>
	<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	<a class="dropdown-item" href="/Class_1/Default" target="_blank">资讯中心</a>
	<a class="dropdown-item" href="/Class_84/Default" target="_blank">资源下载</a>
	<a class="dropdown-item" href="/Class_85/Default" target="_blank">图库中心</a>
	<a class="dropdown-item" href="/Class_99/Default" target="_blank">分类信息</a>
	<a class="dropdown-item" href="/Class_86/Default" target="_blank">在线视频</a>
	<a class="dropdown-item" href="/Class_3/Default" target="_blank">网店频道</a>
	<a class="dropdown-item" href="/Class_2/Default" target="_blank">在线商城</a>
	</div>
	</li>
	<li class="nav-item"><a class="nav-link" href="javascript:;" onClick="isSearch();"><i class="zi zi_searchBlack"></i></a></li>
	<li class="nav-item dropdown nav_user"> <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="zi zi_useralt"></i><span class="caret"></span> </a>
	<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	<a class="dropdown-item" href="/User/">用户登录</a> <a class="dropdown-item" href="/User/Register">注册会员</a> <a class="dropdown-item d-none" href="/User/Info/UserInfo">注册信息</a> <a class="dropdown-item d-none" href="/User/User/LogOut?returnurl=/">安全退出</a>
	</div>
	</li>
	<li class="nav-item"><a class="nav-link" href="/Class_1/NodePage" target="_blank"><i class="zi zi_blind"></i>无障碍</a></li>
	</ul>
	<ul class="home_search">
	<form action="/Search/SearchList">
	<i class="zi zi_searchBlack"></i>
	<input type="text" class="form-control" placeholder="输入关键字，回车查询" name="keyword" />
	<a onClick="isClose();" href="javascript:;"><i class="zi zi_windowclose"></i></a>
	</form>
	</ul>
	</div>
	<div class="homeNavBar">
	<a href="#menu-toggle" id="menu-toggle" onclick="slidebarBind();"><i class="zi zi_menu"></i></a>
	</div>
	</nav>
	</header>
	<!--header end-->


<div id="sidebar-wrapper">
<div class="sidebar_close">
<a href="#menu-toggle-out"  id="menu-toggle-out"><i class="zi z01-icon107"></i></a>
</div>
<h6><i class="zi z01-icon125"></i></h6>
<p>逐浪-中文排名第一的dotNET 高端CMS！<br/>
面向移动与办公提供丰富的应用功能&#x2193;</p>
<ul class="sidebar-nav">
<li><a href="/plat/"><img src="../assets/home_pic15.jpg" alt="能力办公" /></a><span>事务中心</span></li>
<li><a href="/office"><img src="../assets/home_pic13.jpg" alt="目标控制" /></a><span>目标控制</span></li>
<li><a href="/plat/blog"><img src="../assets/home_pic4.jpg" alt="日程管理"  /></a><span>日程管理</span></li>
<li><a href="/plat/"><img src="../assets/home_pic11.jpg" alt="客户资源" /></a><span>客户资源</span></li>
<li><a href="/office"><img src="../assets/home_pic18.jpg" alt="办公审批" /></a><span>办公审批</span></li>
<li><a href="/office"><img src="../assets/home_pic17.jpg" alt="企业百科" /></a><span>企业百科</span></li>
<li><a href="/office"><img src="../assets/home_pic16.jpg" alt="内部邮箱" /></a><span>内部邮箱</span></li>
<li><a href="/office"><img src="../assets/home_pic21.jpg" alt="日志博客" /></a><span>日志博客</span></li>
<li><a href="/office"><img src="../assets/home_pic12.jpg" alt="时间线" /></a><span>时间线</span></li>
</ul>
<div class="sidebar_ico">
<a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmWeixin" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmQq" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi z01-icon220" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi z01-icon224" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmWeibo" aria-hidden="true"></i></a>
</div>
</div>
<!-- Sidebar end -->

	<div class="well">
	<div class="webll_gradient"></div>
	<div id="carouselExampleIndicators" class="carousel slide icarousel" data-ride="carousel">

	<ol class="carousel-indicators">
	<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
	<div class="carousel-inner">
	<div class="carousel-item active ">
	<div class="carousel_photo1">
	<a href=""></a>
	</div>
	<div class="carousel-caption">
	<h1>智能门户/电商/移动/办公</h1>
	<p>基于dotNet Core+微软黑科技|web内核与CMS系统-融聚OA社区高端大数据内核.</p>
	<p><a class="btn-circle" href="{ZL:GetNodeLinkUrl(1)/}">立即开启</a></p>
	</div>
	</div>
	<div class="carousel-item ">
	<div class="carousel_photo2">
	<a href=""></a>
	</div>
	<div class="carousel-caption">
	<h1>智启未来好用的WEB引擎</h1>
	<p>完全开放的架构与SQL Server大数据平台支持企业发展和自主数据中心计算能力</p>
	<p><a class="btn-circle" href="{ZL:GetNodeLinkUrl(1)/}">立即开启</a></p>
	</div>
	</div>
	<div class="carousel-item">
	<div class="carousel_photo3">
	<a href=""></a>
	</div>
	<div class="carousel-caption">
	<h1>技术创新全栈开发领军产品</h1>
	<p>持续14年研发精湛之作-提供扎实互联网开发的基础.</p>
	<p><a class="btn-circle" href="{ZL:GetNodeLinkUrl(1)/}">立即开启</a></p>
	</div>
	</div>
	</div>
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
	</div>
	</div>
	<!--well end-->


<section class="container">
<div class="p-2 bg-info">
	接口在线调试：<a href="http://逐浪CMS部署网址/api/wxapp?action=model_list">http://逐浪CMS部署网址/api/wxapp?action=model_list</a>
	<hr>
	数据操作后台：	<a href="http://逐浪CMS部署网址/admin/Default">http://逐浪CMS部署网址/admin/Default</a>
	<hr>
	接口文件地址：	逐浪CMS部署目录：\Pages\API\WXAPP.cshtml
</div>
<div class="p-2 border">
	按模型ID变量输出模型列表 <a href="/#/list/2">/#/list/2</a>
	<hr>
	所有节点列表	<a href="/#/nodelist">/#/nodelist</a>
	<hr>
	父节点下的ID列表	<a href="/#/nodelist/1/">/#/nodelist/1/</a>
	<hr>
	父节点下的ID列表	<a href="/#/nodelist/2/">/#/nodelist/2/</a>
	<hr>
	读取当前节点下文章列表：<a href="/#/NodeContent/80">/#/NodeContent/80</a>
	<hr>
	按GID读取文章：<a href="/#/Content/27">/#/Content/27</a>
</div>

	

</section>







	<section class="container well_ins">
	<ul class="row">
	<li><a href="http://www.z01.com/login9.html" target="_blank"><i class="zi zi_download" zico="下载"></i> Down and develop <span>下载逐浪CMS进行开发</span></a></li>
	<li><a href="http://v.z01.com/mb" target="_blank"><i class="zi zi_cube"></i> Beautiful template<span>精美模模板</span></a></li>
	<li><a href="#"><i class="zi zi_tmNpm"></i> npm i zoomla</a></li>
	<li><a href="http://help.z01.com/y2016" target="_blank"><i class="zi zi_textbook"></i> Learn<span>在线产品手册</span></a></li>
	</ul>
	</section>
	<!--well_ins end-->

	<section class="container home_slogin">
	<div class="row">
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_laptop"></i> 新可视开发模式！</h3>
	<p>可视化开发，拖拽式设计，成倍的提升开发效率，即使不懂任何代码也能做出卓越的网站！</p>
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(1)/}" class="btn btn-light btn-sm" target="_blank">体验不凡！</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi z01-icon019"></i> 门户平台开发</h3>
	<p>强大的内核管理系统，模板云全面开放，领先的Zoomla!逐浪CMS2 系列产品家族，无论是电商、门户、企业门户或是移动应用均可手到擒来。</p>
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(1)/}" class="btn btn-light btn-sm">进入门户平台</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_briefcase"></i> 办公系统</h3>
	<p>面向中国企业的办公系统，符合国情与习惯的软件服务。</p>
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(1)/}" class="btn btn-light btn-sm">进入门户平台</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_cubes"></i> 移动APP与微信</h3>
	<p>公众号、APP、小程序快速生成，为企业部署APP提代使得，不植入任何后台广告，确保企业的权益收益不植入任何后台广告，确保企业的权益收益。</p>
	<div class="text-center">
	<div class="btn-group">
	<a href="http://app.z01.com" class="btn btn-light btn-sm" target="_blank">在线生成</a> <a href="/app/" class="btn btn-light btn-sm">本地部署</a>
	</div>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_fonts"></i> 逐浪字库</h3>
	<p>我们试图创造一个开放的、面向人人平等并传承汉字精华的字库体系。</p>
	<div class="btn-group">
	<a href="http://www.ziti163.com/down" target="_blank" class="btn btn-light btn-sm">下载</a> <a href="http://www.ziti163.com/webfont" target="_blank" class="btn btn-light btn-sm">WebFont</a> <a href="http://v.ziti163.com/" target="_blank" class="btn btn-light btn-sm">字体大师</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_tmFreecamp" aria-hidden="true"></i> 企业门户框架</h3>
	<p>一个简洁明亮高效的企业网站框架，国际风范。</p>
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(209)/}" class="btn btn-light btn-sm" target="_blank">View</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_tmGoogle" aria-hidden="true"></i> 谷歌移动框架</h3>
	<p>基于AngularJS等新框架技术。</p>
	<div class="text-center">
	<a href="/gg.shtml" class="btn btn-light btn-sm" target="_blank">View</a>
	</div>
	</div>
	</div>
	<div class="col-sm-6 col-md-4 col-lg-3">
	<div class="home_slogin_c">
	<h3><i class="zi zi_tmWeixin" aria-hidden="true"></i> 微信WEUI框架</h3>
	<p>基于微信界面架构的平台系统。</p>
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(144)/}" class="btn btn-light btn-sm" target="_blank">View</a>
	</div>
	</div>
	</div>
	</div>
	</section>
	<!--home_slogin end-->	
	
	
	<section class="container home_news">
	<ul class="wow bounceInUp" data-wow-delay="0.5s">
	<li class="col-md-3 col-12">
	<div class="t1">
	<div class="img-auto">
	<a href="{ZL:GetInfoUrl(6)/}" title="我是新的文章" target="_blank"><img class="img-fluid" src="/UploadFiles/demo/ad1.jpg" alt="我是新的文章"></a>
	</div>
	<a href="{ZL:GetNodeLinkUrl(1)/}">资讯快递</a>
	<p>快速便捷内容管理系统</p>
	</div>
	<div class="t2">
	<p>快速便捷内容管理系统，方便建立各种资讯、新闻、门户、学术网站</p>
	<p><a href="{ZL:GetNodeLinkUrl(83)/}">全新简洁风格文章-基于可视设计</a></p>
	</div>
	</li>
	<li class="col-md-3 col-12">
	<div class="t1">
	<div class="img-auto">
	{ZL.Label id="首页输出最新资讯列表_图库" NodeID="85" ShowNum="1" TitleNum="30" SysNum="68" /}
	</div>
	<a href="{ZL:GetNodeLinkUrl(85)/}">图库风景</a>
	<p>发布图库、图像以及您的相册.</p>
	</div>
	<div class="t2">
	<p><a href="{ZL:GetNodeLinkUrl(98)/}">全新简洁图库列表预览-基于可视设计</a></p>
	</div>
	</li>
	<li class="col-md-3 col-12">
	<div class="t1">
	<div class="img-auto">
	{ZL.Label id="首页输出最新资讯列表_商城" NodeID="2" ShowNum="1" TitleNum="30" SysNum="68" /}
	</div>
	<a href="{ZL:GetNodeLinkUrl(2)/}">城热卖中</a>
	<p>发起购买、发布商品及电子商务交易.</p>
	</div>
	<div class="t2">这个冬天我们奉献最时尚的衣装和折扣</div>
	</li>
	<li class="col-md-3 col-12">
	<div class="t1">
	<div class="img-auto">
	{ZL.Label id="首页输出最新资讯列表_社区" ShowNum="1" TitleNum="30" SysNum="68" /}
	</div>
	<a href="/Bar//Index">社区帖吧</a>
	<p>论坛帖吧问答应有尽有.</p>
	</div>
	<div class="t2">
	通微信商城直接购买，免安装APP</div>
	</li>
	</ul>	
	<div class="text-center">
	<a href="{ZL:GetNodeLinkUrl(1)/}" class="home_newsMore">MORE<i class="zi zi_arrowRight"></i></a>
	</div>
	</section>
	<!-- home_news end -->


	<section class="home_store">
	<div class="home_storeMask">
	</div>
	<div class="container">
	<div class="row">
	<div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
	<a href=""><img src="../assets/nic1.png" class="center-block img-fluid" alt="" /></a>
	<a href=""><img src="../assets/nic2.png" class="center-block img-fluid" alt="" /></a>
	<a href=""><img src="../assets/nic3.png" class="center-block img-fluid" alt="" /></a>
	<a href=""><img src="../assets/nic4.png" class="center-block img-fluid" alt="" /></a>
	</div>
	<div class="col-lg-3 col-md-4 col-xs-12 hidden-xs">
	<div class="e-bx_banner">
	<ul>
	<li><a href="http://pano.z01.com/" target="_blank"><i class="zi zi_gamepad"></i> VR虚拟现实与全景</a></li>
	<li><a href="https://demo.z01.com/dai/" target="_blank"><i class="zi zi_eye"></i> 在线试戴</a></li>
	<li><a href="/User/UserFunc/AdPlanAdd" target="_blank"><i class="zi zi_handpeace"></i> 智能广告</a></li>
	<li><a href="{ZL:GetLastinfo(100)/}" target="_blank"><i class="zi zi_newspaper"></i> 数字出版</a></li>
	<li><a href="{ZL:GetNodeLinkUrl(112)/}" target="_blank"><i class="zi zi_book"></i> 电子杂志</a></li>
	<li><a href="{ZL:GetSpecialPage(1)/}" target="_blank"><i class="zi zi_donate"></i> 内容专题</a></li>
	</ul>
	</div>
	</div>
	</div>
	</div>
	</section>
	<!--home_store end -->

	<section class="home_elit">
	<div class="container">
	<div class="row">
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_tmLinode" aria-hidden="true"></i> 开放免费</h3>
	<p>完全开放、永久免费，并提供多种服务方案满足用户成长，超过10万的网站选用Zoomla!逐浪CMS。</p>
	</div>
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_database"></i> 面向大数据和企业管理</h3>
	<p>只能做网站？那不是逐浪CMS的目标，我们融入开发模板可以自由组装，是WEB系统的中间件！</p>
	</div>
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_cloud"></i> 云端模板自由妆扮</h3>
	<p>独有的逐浪模板云台，可以让你自由的下载各类免费的模板方案，V商发挥到了极致。</p>
	</div>
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_heart"></i> 强大的二次开发</h3>
	<p>编程接口使你应对数据库、代码、表现层轻松自如。</p>
	</div>
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_cubes"></i> 电商应用</h3>
	<p>商城、网站、三维全景、在线试戴，使电商具备了灵活的基因。</p>
	</div>
	<div class="col-sm-6 col-md-4">
	<h3><i class="zi zi_certificate"></i> 中国特色能力中心与ERP</h3>
	<p>CRM管理、OA管理，这一切使逐浪CMS具备了智能办公的条件，而不局限于内容发布。</p>
	</div>
	</div>
	</div>
	</section>
	<!--home_elit end -->

	<section class="home_quict">
	<div class="container">
	<div class="row">
	<div class="col home_quict_l">
	<div class="row">
	<div class="col-6 col-sm-3">
	<a href="{ZL:GetNodeLinkUrl(86)/}" target="_blank"><i class="zi zi_video"></i></a> <span><a href="{ZL:GetNodeLinkUrl(86)/}" target="_blank">视频</a></span>
	</div>
	<div class="col-6 col-sm-3">
	<a href="{ZL:GetNodeLinkUrl(2)/}" target="_blank"><i class="zi zi_shoppingcart"></i></a> <span><a href="{ZL:GetNodeLinkUrl(2)/}" target="_blank">商城</a></span>
	</div>
	<div class="col-6 col-sm-3">
	<h3><a href="/Office" target="_blank"><i class="zi zi_cloud"></i></a></h3>
	<p><a href="/Office" target="_blank">办公</a></p>
	</div>
	<div class="col-6 col-sm-3">
	<h3><a href="/Dai/" target="_blank"><i class="zi zi_eye"></i></a></h3>
	<p><a href="/Dai/" target="_blank">试戴</a></p>
	</div>
	</div>
	</div>
	<div class="col home_quict_r">
	<div class="row">
	<div class="col-6 col-sm-3">
	<h3><a href="http://pano.z01.com/" target="_blank"><i class="zi zi_binoculars"></i></a></h3>
	<p><a href="http://pano.z01.com/" target="_blank">全景</a></p>
	</div>
	<div class="col-6 col-sm-3">
	<h3><a href="/User/Exam/QuestionManage" target="_blank"><i class="zi zi_shoppingcart"></i></a></h3>
	<p><a href="/User/Exam/QuestionManage" target="_blank">组卷</a></p>
	</div>
	<div class="col-6 col-sm-3">
	<h3><a href="/Plat/Blog/" target="_blank"><i class="zi zi_cubes"></i></a></h3>
	<p><a href="/admin/Site/SiteConfig.aspx" target="_blank">站群</a></p>
	</div>
	<div class="col-6 col-sm-3">
	<h3><a href="{ZL:GetNodeLinkUrl(86)/}" target="_blank"><i class="zi zi_music"></i></a></h3>
	<p><a href="{ZL:GetNodeLinkUrl(86)/}" target="_blank">音乐</a></p>
	</div>
	</div>
	</div>
	</div>
	</div>
	</section>
	<!--home_quict ned-->
	

	<section class="container home_club">
	<div class="row">
	<div class="col-md-4">
	<div class="home_club_l">
	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
	<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
	</ol>
	<div class="carousel-inner">
	<div class="carousel-item active">
	<a href="PItem?id=14"><img class="d-block w-100" src="/UploadFiles/demo/ad5.jpg" alt="设计人应该知道设计中常见的劫难，和秒秒学来看看吧！" style=""></a>
	<div class="carousel-caption d-none d-md-block">
	<p>设计人应该知道设计中常见的劫难，和秒秒学来看看吧！</p>
	</div>
	</div>
	<div class="carousel-item ">
	<a href="PItem?id=13"><img class="d-block w-100" src="/UploadFiles/demo/ad2.jpg" alt="11款导航PNG源文件" style=""></a>
	<div class="carousel-caption d-none d-md-block">
	<p>11款导航PNG源文件</p>
	</div>
	</div>
	<div class="carousel-item ">
	<a href="PItem?id=2"><img class="d-block w-100" src="/UploadFiles/demo/ad3.jpg" alt="商城网站php源码模板 时尚简约大方 支持电脑手机微信app版本" style=""></a>
	<div class="carousel-caption d-none d-md-block">
	<p>商城网站php源码模板 时尚简约大方 支持电脑手机微信app版本</p>
	</div>
	</div>
	<div class="carousel-item ">
	<a href="PItem?id=1"><img class="d-block w-100" src="/UploadFiles/demo/ad4.jpg" alt="11个实用经典的SQL小贴士" style=""></a>
	<div class="carousel-caption d-none d-md-block">
	<p>11个实用经典的SQL小贴士</p>
	</div>
	</div>
	</div>
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
	</div>
	</div>
	</div>
	<div class="col-md-8 home_club_m">
	<div class="row">
	{ZL.Label id="首页输出帖子列表" TitleNum="40" ShowNum="20" /}
	</div>
	</div>
	</div>
	</section>
	<!--home_club end -->	
	
	
	<div class="container">
	<img class="img-fluid" src="../assets/home_bottombg.jpg" alt="" />
	</div>
	<footer>
	<div class="container">
	<div class="row">
	<div class="col-md-4 foot_l">
	<h5>关于我们</h5>
	<p>逐浪软件致力提供高品质的WEB内核产品，<br/>
	提升中国站长与开发者的应用水平。 </p>
	<a href="{ZL:GetInfoUrl(20)/}" class="btn btn-outline-light btn-sm">浏览详情</a>
	<a href="/Page/MailSend?email={$WebmasterEmail/}&t=给站长发邮件&c=站长留言" class="btn btn-outline-light btn-sm">给站长发邮件</a>
	<p> <a href="http://www.miitbeiang.gov.cn" target="_blank" >沪ICP备201820528号</a> <a href="{$ManageDir/}login" target="_blank">管理登录</a> </p>
	<a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_phone " zico="话筒黑"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmQq" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmWeixin" aria-hidden="true"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_msgchat" zico="聊天气泡"></i></a> <a href="//weibo.com/zoomla" target="_blank"><i class="zi zi_tmWeibo" zico="微博"></i></a>
	</div>
	<div class="col-md-2">
	<h5>功能导航</h5>
	<ul>
	<li><a href="/guest/" target="_blank">留言反馈</a></li>
	<li><a href="/baike" target="_blank">站长百科</a></li>
	<li><a href="/dai/" target="_blank">真人试戴</a></li>
	<li><a href="/Plugins/Camera.aspx" target="_blank">在线拍照</a></li>
	<li><a href="{ZL:GetNodeLinkUrl(106)/}" target="_blank">快速帮助</a></li>
	</ul>
	</div>
	<div class="col-md-2">
	<h5>快速链接</h5>
	<ul>
	<li><a href="{ZL:GetInfoUrl(22)/}" target="_blank">法律声明</a></li>
	<li><a href="{ZL:GetNodeLinkUrl(77)/}" target="_blank">帮助中心</a></li>
	<li><a href="{ZL:GetInfoUrl(21)/}" target="_blank">联系我们</a></li>
	<li><a href="{ZL:GetNodeLinkUrl(106)/}" target="_blank">网站地图</a></li>
	<li><a href="/Tools/" target="_blank">维护工具</a></li>
	</ul>
	</div>
	<div class="col-md-3 footShow">
	<h5>精彩提示</h5>
	<ul>
	<li><a href="/plat/"><img src="../assets/home_pic15.jpg" alt="事务中心"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic13.jpg" alt="目标控制"/></a></li>
	<li><a href="/plat/blog"><img src="../assets/home_pic4.jpg" alt="日程管理"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic11.jpg" alt="客户资源"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic18.jpg" alt="办公审批"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic17.jpg" alt="企业百科"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic16.jpg" alt="内部邮箱"/></a></li>
	<li><a href="/office"><img src="../assets/home_pic21.jpg" alt="日志博客"/></a></li>
	</ul>
	</div>
	</div>
	</div>
	<div class="copyright">
	{$Copyright/}
	</div>
	</footer>
	
	
  </div>
  
</template>

<script>
// @ is an alias to /src
/*
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
*/

 //右则bar开关器
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-out").click(function(e) {
e.preventDefault();
$("#wrapper").removeClass("toggled");
});


</script>
