//用于创建随机验证码
//将验证码可能的值保存在一个数组中，Math.floor(Math.random()*len)会产生一个随机的索引值，将对应位置的值赋给验证的每一个值即可。
function createVerifyCode(){
	var items=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];//验证码为数字和字母
	var count=4;//记录验证码的数量
	var len=items.length;
	var code='';//保存验证码的值
	for (var i = 0; i <count ; i++) {
		var index=Math.floor(Math.random()*len);
		code+=items[index];
	}
	return code;
}

//将随机验证码加入DOM中，同时实现点击修改验证码
function addVerifyCode(){
	var verifyCode=document.getElementById('verifyCode');
	var changeCode=document.getElementById('changeCode');
	verifyCode.innerHTML=createVerifyCode();
	changeCode.onclick=function(){
		verifyCode.innerHTML=createVerifyCode();
	}
}

//验证验证码是否正确，若正确则跳转
function robotCheck(){
	var input=document.getElementsByTagName('input');
	var submit=input[1];
	var verifyCode=document.getElementById('verifyCode');
	submit.onclick=function(){
		var inputValue=input[0].value;
		var verifyCodeValue=verifyCode.innerText;
		if (inputValue==='') {
			alert('Please type the characters in the image');
			verifyCode.innerHTML=createVerifyCode();
			return false;
		}
		else if (inputValue!==verifyCodeValue) {
			alert('The characters it is not correct');
			verifyCode.innerHTML=createVerifyCode();
			return false;
		}
		else{
			window.open('default.html','_self')
		}
	}

}

addLoadEvent(addVerifyCode);
addLoadEvent(robotCheck);

