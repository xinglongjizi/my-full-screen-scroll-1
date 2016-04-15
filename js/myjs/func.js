$(function(){

$('.full-screen').each(function(){
	var $group = $(this).find('.group');
	var $screen_div_array = $group.find('div');
	var nowIndex = 0;
	var timeout;

	function time_loop(){
		timeout = setTimeout(function(){
			if( nowIndex != ($screen_div_array.length - 1) ){
				scroll(nowIndex + 1);
			}else{
				scroll(0);
			}
		},3600);
	}
	function scroll(scrollIndex){
		var div_position_top , group_position_top;
		if( nowIndex < scrollIndex ){
			div_position_top = '100%';
			group_position_top = '-100%';
		}else{
			div_position_top = '-100%';
			group_position_top = '100%';
		}
		$screen_div_array.eq(scrollIndex).css({
			display: 'block',
			top: div_position_top,
		});
		$group.animate({
			top:group_position_top,
		},360,function(){
			$screen_div_array.eq(nowIndex).css({
				display: 'none',
			});
			$screen_div_array.eq(scrollIndex).css({
				top: 0,
			});
			$group.css({
				top: 0,
			});
			$('.nav-dot a').eq(scrollIndex).addClass('active');
			$('.nav-dot a').eq(nowIndex).removeClass('active');
			nowIndex = scrollIndex;
			clearTimeout(timeout);
			time_loop();
		});
	}
	time_loop();



























});
































































































});