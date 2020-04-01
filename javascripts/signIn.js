(function(){
	var form=document.getElementsByTagName('form')[0];
	var input=form.getElementsByTagName('input')[0];
	var button=form.getElementsByTagName('button')[0];
	var errorMessage=document.getElementById('errorMessage');
	var mainErrorM=errorMessage.getElementsByTagName('h4')[0];
	var subErrorM=errorMessage.getElementsByTagName('span')[0];
	button.onclick=function(){
		if (input.value=='') {
			input.errorType=1;
			replaceClassName(errorMessage,'showMessage','hidden')
			showErrorMessage(input);
			return false;
		}
		if(input.type=='password'&&input.value!=='dsqcxy'){
			mainErrorM.innerHTML='There was a problem';
			subErrorM.innerHTML='Your password is incorrect';
			replaceClassName(errorMessage,'hidden','showMessage')
			return false;
		}
		else{
			var phoneReg=/^\d+$/g;
			var emailReg=/^\w+@\w+(\.\w{2,})+$/g;
			if(phoneReg.test(input.value)&&input.value.length!==11){
				mainErrorM.innerHTML='Incorrect phone number';
				subErrorM.innerHTML='We cannot find an account with that mobile number';
				replaceClassName(errorMessage,'hidden','showMessage')
				return false;
			}

			if (!phoneReg.test(input.value) && !emailReg.test(input.value)) {
				mainErrorM.innerHTML='There was a problem';
				subErrorM.innerHTML='We cannot find an account with that email address';
				replaceClassName(errorMessage,'hidden','showMessage')
				return false;
			}
		}
		return true;
	}
	input.onkeyup=function(){
		if (this.errorType==1 && this.value!=='') {
			this.errorType=0;
			showErrorMessage(this);
		}
	}

})()