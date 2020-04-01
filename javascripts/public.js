function replaceClassName(ele,oriClass,newClass){
	if (typeof ele !=='undefined') {
		var oldClass=ele.className;
		if (oldClass.indexOf(oriClass)===-1) {return false;}
		else{
			var classN=oldClass.replace(oriClass,newClass);
			ele.setAttribute('class',classN);
		}
	}
}

function removeClassName(ele,classN){
	var oldClass=ele.className;
	if (oldClass.indexof(classN)!==-1) {
		var newClassName=oldClass.replace(classN,'');
		ele.setAttribute('class',newClassName);
	}
}

function showErrorMessage(ele){
	var parent=ele.parentNode;
	var messageNode;
	if(ele.errorType===0){
		if(parent.getElementsByClassName('show').length>0){
			messageNode=parent.getElementsByClassName('show')[0];
			replaceClassName(messageNode,'show','errorInfo');
			replaceClassName(ele,'error','normal');
		}
	}
	if (ele.errorType===1) {
		messageNode=parent.getElementsByClassName('showWhenVoid')[0];
		replaceClassName(messageNode,'errorInfo','show');
		replaceClassName(ele,'normal','error');
	}
	if (ele.errorType===2) {
		messageNode=parent.getElementsByClassName('showWhenWrongFormat')[0];
		replaceClassName(messageNode,'errorInfo','show');
		replaceClassName(ele,'normal','error');
	}
}

