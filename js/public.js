$(function(){
	var swiper1 = new Swiper('.swiper-container', {
		direction : 'vertical',
		noSwiping : true
	});

	$(".ico-music").click(function(){
		// 正在播放
		if($(this).hasClass("play")){
			$(this).removeClass("play");
			$("#bgm")[0].pause(); 
		}else {
			$(this).addClass("play");
			$("#bgm")[0].play(); 
		}
	})

	//一般情况下，这样就可以自动播放了，但是一些奇葩iPhone机不可以 
    document.getElementById('bgm').play(); 
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效 
    document.addEventListener("WeixinJSBridgeReady", function () { 
        document.getElementById('bgm').play(); 
    }, false); 

	$(".go-next").click(function(){
		swiper1.slideNext();
	})

	$("#show-layer").click(function(){
		$(".share-layer").show();
		$(this).removeClass("swing");
	})

	$(".share-layer").click(function(){
		$(this).hide();
		$("#show-layer").addClass("swing");
	})
})