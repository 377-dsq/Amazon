function addLoadEvent(event){
	var oldEvent=window.onload;
	if (typeof oldEvent!=='function') {
		window.onload=event;
	}
	else{
		window.onload=function(){
			oldEvent();
			event();
		}
	}
}

function getElement(ele,info){
	if (document.getElementById(info)) {  return document.getElementById(info);};
	if (ele.getElementsByTagName(info).length>0) {   return ele.getElementsByTagName(info);};
	if (ele.getElementsByClassName(info).length>0) {
		var res=ele.getElementsByClassName(info);
		if (res.length==1) {return res[0];}
		else{return res;}
	}
	else {return false;};
}

function addClass(ele,classname){
	if (ele.classname==='') {ele.className=classname}
	else {
			oldClassname=ele.className;
			ele.className+=oldClassname+" "+classname;
		};
}

function replaceClass(ele,oldname,newname){
	var classname=ele.className;
	var pattern='(\\s+|^)'+oldname+'(\\s+|$)';
	var reg=new RegExp(pattern,'g');
	var newN=' '+newname+' ';
	var newClassname=classname.replace(reg,newN);
	ele.className=newClassname;
}

function getCoordinate(ele){
	ele.left=ele.offsetLeft;
	ele.top=ele.offsetTop;
	var parent=ele.offsetParent
	while(parent.tagName!=='BODY'){
		ele.left+=parent.offsetLeft;
		ele.top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return;
}