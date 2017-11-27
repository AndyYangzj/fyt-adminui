jQuery(document).ready(function() {
	jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
	fyt.memClose();
	fyt.clearCache();
	$("#li-mess,.log-user,.sel-site").hover(function(e){
        $(this).find(".soa-user-down").stop(true,false).toggle(200);
    });
});

var ismopen=false,fyt={
	//点击内容区域全屏
	memClose:function(){
		$(".mem-close").click(function(){
			if(!ismopen){
				$(".soa-wal-content,.soa-l-fixed").addClass('active');
				ismopen=true;
			}else{
				$(".soa-wal-content,.soa-l-fixed").removeClass('active');
				ismopen=false;
			}			
		});
	},
	//清楚缓存
	clearCache:function(){
		$(".clearCache").click(function(){
			toastr.options.closeDuration = 300;
			toastr.success("缓存清除成功~");  
		});
	}
}
var multitabs = $('#content_wrapper').multitabs({
	init: [{
		iframe: true,
		type: 'main',
		title: '首页',
		url: 'default.html'
	}]
});
/* $("#jquery-accordion-menu a.multitabs").click(function(){
 	var urls=$(this).attr('data-url'),title=$(this).attr('data-title');
 	$(document).data('multitabs').create({
         iframe : true,
         title : title,
         url : urls
     }, true)
 });*/

