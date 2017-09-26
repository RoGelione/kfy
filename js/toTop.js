$(function(){
			if($("meta[name=toTop]").attr("content")=="true"){
					$("#toTop").click(function(event) {
								$("html,body").animate({
									scrollTop:"0px"},
									300
									)
							});
				}
			var ktop = parseInt($("#kefu").css("top"));/*开始时的高度，初始130多*/
			var temp = $(window).scrollTop();/*网页打开时滑条离顶部的高度*/
			var ntop = ktop + temp; /*now（现在，实时的高度）*/
			if($(this).scrollTop()<100){
					$("#kefu").css("display","none");
			}else{
				$("#kefu").css("display","block");/*这里初始化*/
				$("#kefu").animate({top:ntop+'px'},10);/*10比较平滑，高了存在延迟，低了就太快了*/
			}
		$(window).scroll(function(event){	
			var sHeight = '';
			sHeight =$(window).scrollTop();
			ntop = ktop + sHeight;/*实时的高度*/
//			console.log(sHeight);
			$("#kefu").animate({top:ntop+'px'},15);
			temp = sHeight;
			if($(this).scrollTop()<100){
					$("#kefu").css("display","none");
			}else{
				$("#kefu").css("display","block");
			}
		});	
});