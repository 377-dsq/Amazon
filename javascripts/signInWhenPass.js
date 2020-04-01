(function(){
	var text=document.getElementsByClassName('text')[0];
	var detailButton=text.getElementsByTagName('a')[0];
	var detail=document.getElementById('details');
	var arrowBorder=detail.getElementsByClassName('arrow-border')[0];
	var arrow=detail.getElementsByClassName('arrow')[0];
	var close=detail.getElementsByClassName('close')[0];
	var body=document.body||document.documentElement;
	detailButton.addEventListener('click',showDetail,false);
	window.addEventListener('resize',DetailLocation,false);
	close.addEventListener('click',hiddenDetail,false);
	body.addEventListener('click',hiddenDetail,false);
	detail.addEventListener('click',function(e){
		var event=e||window.event;
		event.stopPropagation();  //阻止事件冒泡到body上，从而实现点击detail时，不会隐藏datail
	},false);
	function showDetail(e){
		var event=e||window.event;
		event.stopPropagation();
		replaceClassName(detail,'hidden','showup');
		DetailLocation();

	}

	function hiddenDetail(){
		replaceClassName(detail,'showup','hidden');
	}

	function DetailLocation(){
		var arrowLeft=detail.clientWidth/2;
		var detailLeft=detailButton.offsetLeft-arrowLeft;
		arrowBorder.style.left=arrowLeft+'px';
		detail.style.left=detailLeft+'px';
		var buttonTop=detailButton.offsetTop;
		var detailHeight=detail.offsetHeight;
		var detailTop,arrowTop;
		var bodyTop=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(buttonTop,bodyTop,detailHeight);
		if (buttonTop-bodyTop>detailHeight) {
			replaceClassName(arrowBorder,'bottomArrowBorder','topArrowBorder');
			replaceClassName(arrow,'bottomArrow','topArrow');
			detailTop=buttonTop-detailHeight;
			arrowTop=detailHeight-8;
			arrow.style.top=-9+'px';
		}
		else{
			replaceClassName(arrowBorder,'topArrowBorder','bottomArrowBorder');
			replaceClassName(arrow,'topArrow','bottomArrow');
			detailTop=buttonTop+detailButton.offsetHeight;
			arrowTop=0;
			arrow.style.top=1+'px';
		}
		
		detail.style.top=detailTop+'px';
		arrowBorder.style.top=arrowTop+'px';
	}

})()