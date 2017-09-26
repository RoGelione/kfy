$(function(){
	var flag=true;
	/*搜索*/
	$(".search-img").bind("click",function(event){
		if (flag) {
			console.log(!flag)
			$("#search").css("display","block");
//			moveup();
			flag=false;
			if (event.stopPropagation) {
				event.stopPropagation();
			}else if (window.event) {
				window.event.cancelBubble = true;
			}
		$(document).bind("click",sc);	
		}
	})
		function sc(event){
		var inp = document.getElementById("input");
		if(!(event.target===inp)){
			if (!flag){
			$(".search form").css("display","none");
//			moveup();
			flag=true;
			$(document).off("click");
			}
		}
	}
	$(".esp li:last-child").find('a').css({"padding-bottom":"0px","padding-top":"14px","border-bottom":"none"});
	$(".esp li:last-child").css({"border-bottom-right-radius":"8px","border-bottom-left-radius":"8px"});
	$(".esp li:first-child").css({"border-top-right-radius":"8px","border-top-left-radius":"8px"});
	/*点击搜索框不隐藏--火狐需要把此方法写成上面的样子*/
//	$(document).bind("click",function(event){
//		var inp = document.getElementById("input");
//		if (event.stopPropagation) {
//				event.stopPropagation();
//			}else if (window.event) {
//				window.event.cancelBubble = true;
//			}
//			console.log(event.target+","+inp)
//		alert(event.target.nodeName);
//		if(!(event.target===inp)){
//			if (!flag){
//			$(".search form").css("display","none");
////			moveup();
//			flag=true;
//			}
//		}
//	})
}) 