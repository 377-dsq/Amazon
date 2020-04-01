(function(){
	(function banner(){
		var banner=document.getElementById('banner');
		var lis=banner.getElementsByTagName('li');
		var left=banner.getElementsByClassName('left')[0];
		var right=banner.getElementsByClassName('right')[0];
		var len=lis.length;
		var i=0
		var move=setTimeout(moveLeft,1000);
		function moveLeft(){
			var a=lis[0].firstChild;
			a.style.left=0;
			a.style.transform='translateX(100%)';
			var moveBanner=setTimeout(moveleftbanner,250);
		}
		function moveleftbanner(){
			i++;
			var start=lis[0].innerHTML;
			lis[0].innerHTML=lis[1].innerHTML;
			lis[1].innerHTML=lis[2].innerHTML;
			lis[2].innerHTML=lis[3].innerHTML;
			lis[3].innerHTML=start;
			lis[0].firstChild.style.left='50%';
			lis[0].firstChild.style.transform='translateX(-50%)';
			move=setTimeout(moveLeft,1000);
			if (i>=len) {
				clearTimeout(move);
			}
		}
		function moveRight(){
			var a=lis[0].firstChild;
		a.style.left=0;
		a.style.transform='translateX(-100%)';
		var moveBanner=setTimeout(moverightbanner,250);
		}

		function moverightbanner(){
			var start=lis[3].innerHTML;
			lis[3].innerHTML=lis[2].innerHTML;
			lis[2].innerHTML=lis[1].innerHTML;
			lis[1].innerHTML=lis[0].innerHTML;
			lis[0].innerHTML=start;
			lis[0].firstChild.style.left='50%';
			lis[0].firstChild.style.transform='translateX(-50%)';
		}
		left.onclick=moveLeft;
		right.onclick=moveRight;
	})();
	
	(function pagecontent(){
		(function desktopFunc(){
		var desktop=document.getElementById('desktop');
		var moveLeft=desktop.getElementsByClassName('moveLeft')[0];
		var moveRight=desktop.getElementsByClassName('moveRight')[0];
		var ul=desktop.getElementsByTagName('ul')[0];
		var lis=ul.getElementsByTagName('li');
		var content=desktop.getElementsByClassName('desktopcontent')[0];
		var scrollBar=desktop.getElementsByClassName('scrollBar')[0];
		var bar=desktop.getElementsByClassName('bar')[0];
		var ulOutwidth=content.clientWidth;
		var ulInwidth=ul.offsetWidth;
		var maxUlLeft=ulInwidth-ulOutwidth;
		var scrollBarWidth=scrollBar.clientWidth;
		var barWidth=ulOutwidth/ulInwidth*scrollBarWidth;
		var maxBarLeft=scrollBarWidth-barWidth;
		moveLeft.onclick=function(){
			if (ul.offsetLeft==0||ul.offsetLeft=='0px') {
				ul.style.marginLeft='35px';
				setTimeout(rebackleft,300);
			}
			else{
				ul.style.left=0;
				showScrollBar();
			};
		};
		function rebackleft(){
			ul.style.marginLeft=0;
		}
		moveRight.onclick=function(){	
			if (ul.offsetLeft==(-maxUlLeft)) {
				ul.style.marginLeft='-35px';
				setTimeout(rebackRight,300);
			}
			else{
				ul.style.left=-maxUlLeft+'px';
				showScrollBar();
			};
		};
		function rebackRight(){
			ul.style.marginLeft=0;
		}
		moveLeft.addEventListener('mouseenter',showScrollBar,false);
		moveLeft.addEventListener('mouseleave',hideScrollBar,false);
		moveRight.addEventListener('mouseenter',showScrollBar,false);
		moveRight.addEventListener('mouseleave',hideScrollBar,false);	
		for (var i = 0,len=lis.length; i < len; i++) {
			lis[i].addEventListener('mouseenter',showScrollBar,false);
			lis[i].addEventListener('mouseleave',hideScrollBar,false);
		}
		bar.addEventListener('mouseover',showScrollBar,false);
		bar.addEventListener('mouseleave',hideScrollBar,false);
		function showScrollBar(){
			var ulLeft=parseFloat(ul.style.left)||0;
			var barLeft=-ulLeft/maxUlLeft*maxBarLeft;
			bar.style.width=barWidth+'px';
			bar.style.marginLeft=barLeft+'px';
			bar.style.opacity=1;
		}
		function hideScrollBar(){
			setTimeout(hide,500);
		}
		function hide(){
			bar.style.opacity=0;
		}
		var movebar=false;
		var startPoint;
		var barMarginLeft;
		bar.onmousedown=function(e){
			var e=window.event||e;
			movebar=true;
			startPoint=e.clientX;
			barMarginLeft=parseFloat(bar.style.marginLeft)||0;
		}
		pageContent.onmousemove=function(e){
			var e=window.event||e;
			if (movebar==false) {return;}
			else{
				bar.style.transition="none";
				ul.style.transition='none';
				var point=e.clientX;
				var barLeft=barMarginLeft+point-startPoint;
				if (barLeft>=maxBarLeft) {
					barLeft=maxBarLeft;
				}
				if (barLeft<=0) {
					barLeft=0;
				}
				bar.style.marginLeft=barLeft+'px';
				var ulLeft=-barLeft/maxBarLeft*maxUlLeft;
				ul.style.left=ulLeft+'px';
				bar.style.opacity=1;
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

			}
		}
		pageContent.onmouseup=function(){
			movebar=false;
			bar.style.transition="all 0.5s ease-in-out";
			ul.style.transition='all 0.5s ease-in-out';
		}
		})();
		

		(function bestSellFunc(){
			var bestsell=document.getElementById('BestSell');
			var sectionContent=bestsell.getElementsByClassName('sectionContent');
			var ul=bestsell.getElementsByTagName('ul');
			var moveLeft=bestsell.getElementsByClassName('moveLeft');
			var moveRight=bestsell.getElementsByClassName('moveRight');
			var scrollBar=bestsell.getElementsByClassName('scrollBar');
			var bar=bestsell.getElementsByClassName('bar');
			var lis=bestsell.getElementsByTagName('li');
			document.addEventListener('mousemove',drag,false);
			document.addEventListener('mouseup',dragEnd,false);
			for (var i = 0, sectionLen=sectionContent.length ; i < sectionLen; i++) {
				moveLeft[i].index=i;
				moveRight[i].index=i;
				bar[i].index=i;
				moveLeft[i].addEventListener('mouseenter',function(){showMove.call(this);showScrollBar.call(this)},false);
				moveRight[i].addEventListener('mouseenter',function(){showMove.call(this);showScrollBar.call(this)},false);
				moveLeft[i].addEventListener('mouseleave',function(){hideMove.call(this);hideScrollBar.call(this)},false);
				moveRight[i].addEventListener('mouseleave',function(){hideMove.call(this);hideScrollBar.call(this)},false);
				bar[i].addEventListener('mouseenter',function(){showMove.call(this);showScrollBar.call(this)},false);
				bar[i].addEventListener('mouseleave',function(){hideMove.call(this);hideScrollBar.call(this)},false);
				moveLeft[i].addEventListener('click',moveLeftFunc,false);
				moveRight[i].addEventListener('click',moveRightFunc,false);
				bar[i].addEventListener('mousedown',dragStart,false);
				var li=ul[i].getElementsByTagName('li');
				for (var j = 0; j < li.length; j++) {
					li[j].index=i;
					li[j].addEventListener('mouseenter',function(){showMove.call(this);quickLook.call(this);showScrollBar.call(this);},false);
					li[j].addEventListener('mouseleave',function(){hideMove.call(this);removeQuickLook.call(this);hideScrollBar.call(this);},false);
				}


			}

		

		function showMove(){
			var i=this.index;
			var ulInwidth=ul[i].offsetWidth;
			var ulOutwidth=sectionContent[i].clientWidth;
			var ulMaxLeft=ulInwidth-ulOutwidth;
			if(ul[i].offsetLeft==0){
				moveLeft[i].style.opacity=0.5;
			}
			else{
				moveLeft[i].style.opacity=1;
			}
			if(ul[i].offsetLeft==-ulMaxLeft){
				moveRight[i].style.opacity=0.5;
			}
			else{
				moveRight[i].style.opacity=1;
			}
		}

		function hideMove(){
			var m=this.index
			moveLeft[m].style.opacity=0;
			moveRight[m].style.opacity=0;
		}

		function quickLook(){
			var div=document.createElement('div');
			div.className='quickLook';
			div.innerHTML='<span>Quick look</span>';
			this.appendChild(div);
		}
		function removeQuickLook(){
			var div=this.getElementsByClassName('quickLook')[0];
			this.removeChild(div);
		}

		function showScrollBar(){
			var i=this.index;
			var ulInwidth=ul[i].offsetWidth;
			var ulOutwidth=sectionContent[i].clientWidth;
			var scrollBarWidth=scrollBar[i].clientWidth;
			var barWidth=scrollBarWidth/ulInwidth*ulOutwidth;
			bar[i].style.width=barWidth+'px';
			var ulMaxLeft=ulInwidth-ulOutwidth;
			var barMaxLeft=scrollBarWidth-barWidth;
			var ulLeft=ul[i].offsetLeft;
			var barLeft=barMaxLeft/ulMaxLeft*(-ulLeft);
			bar[i].style.marginLeft=barLeft+'px';
			bar[i].style.opacity=1;
		}
		function hideScrollBar(){
			var i=this.index;
			bar[i].style.opacity=0;
		}

		function moveLeftFunc(e){
			var i=this.index;
			var ulInwidth=ul[i].offsetWidth;
			var ulOutwidth=sectionContent[i].clientWidth;
			var ulMaxLeft=ulInwidth-ulOutwidth;
			var ulLeft=ul[i].offsetLeft;
			if (ulLeft==0) {
				ul[i].style.left='30px';
				setTimeout(function(){ul[i].style.left=0;},300);
			}
			else{
				var lis=ul[i].getElementsByTagName('li');
				var margin=10;
				var lisLen=lis.length;
				var liStartLeft=0;
				var liEndLeft=0;
				var endindex=0;
				for (var j = 0; j < lisLen; j++) {
					liEndLeft+=parseFloat(lis[j].offsetWidth)+margin;
					if (liEndLeft>(-ulLeft)) {
						endindex=j;
						liEndLeft-=parseFloat(lis[j].offsetWidth)-margin;
						break;
					};
				}
				for (var k = 0; k < lisLen; k++) {
					if (ulOutwidth>=liEndLeft) {
						ulLeft=0;
						moveLeft[i].style.opacity=0.5;
						break;
					}
					liStartLeft+=parseFloat(lis[k].offsetWidth)+margin;
					if(liStartLeft+ulOutwidth>=liEndLeft){
						ulLeft=-liStartLeft;
						break;
					}
				}
				ul[i].style.left=ulLeft+'px';
			}
			var scrollBarWidth=scrollBar[i].clientWidth;
			var barWidth=bar[i].offsetWidth;
			var barMaxLeft=scrollBarWidth-barWidth;
			var barLeft=barMaxLeft/ulMaxLeft*(-ulLeft);
			bar[i].style.marginLeft=barLeft+'px';
			bar[i].style.opacity=1;
		}
		function moveRightFunc(e){
			e=window.event||e;
			e.cancelBubble=false;
			var i=this.index;
			var ulInwidth=ul[i].offsetWidth;
			var ulOutwidth=sectionContent[i].clientWidth;
			var ulMaxLeft=ulInwidth-ulOutwidth;
			var ulLeft=ul[i].offsetLeft;
			if ((-ulLeft)>=ulMaxLeft-10) {
				ul[i].style.left=ulLeft-30+'px';
				setTimeout(function(){ul[i].style.left=ulLeft+'px';},300);
			}
			else{
				var lis=ul[i].getElementsByTagName('li');
				var left=ulOutwidth-ulLeft;
				var margin=10;
				var lisLen=lis.length;
				var liLeft=0;
				for (var j = 0; j < lisLen; j++) {
					liLeft+=parseFloat(lis[j].offsetWidth)+margin;
					if (liLeft>left) {
						ulLeft=parseFloat(lis[j].offsetWidth)+margin-liLeft;
						break;
					}
				}
				if(Math.abs(ulLeft)>=ulMaxLeft){
					ulLeft=-ulMaxLeft;
					moveRight[i].style.opacity=0.5;
				}
				ul[i].style.left=ulLeft+'px';
			}
			var scrollBarWidth=scrollBar[i].clientWidth;
			var barWidth=bar[i].offsetWidth;
			var barMaxLeft=scrollBarWidth-barWidth;
			var barLeft=barMaxLeft/ulMaxLeft*(-ulLeft);
			bar[i].style.marginLeft=barLeft+'px';
			bar[i].style.opacity=1;
		}
		function dragStart(e){
			e=window.event||e;
			this.startPoint=e.clientX;
			this.oldLeft=parseFloat(this.style.marginLeft);
			this.drag=true;
		}
		function drag(e){
			for (var i = 0,len=bar.length; i < len; i++) {
				if(bar[i].drag==true){
					var scrollBarWidth=scrollBar[i].clientWidth;
					var barWidth=bar[i].offsetWidth;
					var barMaxLeft=scrollBarWidth-barWidth;
					var ulInwidth=ul[i].offsetWidth;
					var ulOutwidth=sectionContent[i].clientWidth;
					var ulMaxLeft=ulInwidth-ulOutwidth;
					var variety=e.clientX-bar[i].startPoint;
					var newLeft=bar[i].oldLeft+variety;
					var ulLeft;
					ul[i].style.transition='none';
					bar[i].style.transition='none';
					if (newLeft<=0) {
						newLeft=0;
						ulLeft=0;
						moveLeft[i].style.opacity=0.5;
					}else if (newLeft>=barMaxLeft) {
						newLeft=barMaxLeft;
						ulLeft=-ulMaxLeft;
						moveRight[i].style.opacity=0.5
					}else{
						ulLeft=-newLeft/barMaxLeft*ulMaxLeft
						moveLeft[i].style.opacity=1;
						moveRight[i].style.opacity=1;
					}
					bar[i].style.marginLeft=newLeft+'px';
					ul[i].style.left=ulLeft+'px';
					bar[i].style.opacity=1;
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				}
				else{
					bar[i].drag=false;
				}
			}
		}

		function dragEnd(){
			for (var i = 0,len=bar.length; i < len; i++){
				if (bar[i].drag==true) {
					bar[i].drag=false;
					ul[i].style.transition='all 0.5s ease-in-out';
					bar[i].style.transition='all 0.5s ease-in-out';
					bar[i].style.opacity=0;
					moveLeft[i].style.opacity=0;
					moveRight[i].style.opacity=0;
				}
			}
		}

		})()

	})();
})();
