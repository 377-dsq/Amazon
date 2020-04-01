(function(){
	var head=document.getElementById('head');
	var category=head.getElementsByClassName('cate')[0];
	var allDep=category.getElementsByClassName('allDep')[0];
	var select=category.getElementsByClassName('first')[0];
	var options=select.getElementsByTagName('option');
	select.onchange=function(){
		var index=select.selectedIndex;
		allDep.firstChild.innerText=options[index].text;
	}
	var language=document.getElementById('language');
	var login=document.getElementById('login');
	var cover=document.getElementById('cover');
	language.addEventListener('mouseenter',showCover,false);
	login.addEventListener('mouseenter',showCover,false);
	language.addEventListener('mouseleave',hideCover,false);
	login.addEventListener('mouseleave',hideCover,false);
	function showCover(){
		cover.style.display='block';
	}
	function hideCover(){
		cover.style.display='none';
	}
	
})()