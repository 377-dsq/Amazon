(function(){
	
	var form=document.getElementsByTagName('form')[0];
	var inputs=form.getElementsByTagName('input');
	var button=document.getElementsByTagName('button')[0];
	var info=document.getElementById('info');
	var password=document.getElementById('password');
	var len=inputs.length;
	button.addEventListener('click',checkForm,false)
	function checkForm(e){
		var errorCount=0;
		e.preventDefault();  //很重要，需要加上return false 才能阻止表单提交
		for (var i = 0; i <len ; i++) {
			inputs[i].errorType=0;
			showErrorMessage(inputs[i]);
			if (inputs[i].name!=='reenterPassword'&&inputs[i].value=="") {
				inputs[i].errorType=1;
				showErrorMessage(inputs[i]);
				if (inputs[i].errorType!==0) {info.style.display='none';}
			}
			else {switch (inputs[i].name){
				case 'email':
				var isEmail=/^\w+@\w+(\.(\w){2,})+$/g;
				if (!isEmail.test(inputs[i].value)) {
					inputs[i].errorType=2;
					showErrorMessage(inputs[i]);
					return false;
				};
				break;
				case 'password':
				if (inputs[i].value.length<6) {
					inputs[i].errorType=2;
					showErrorMessage(inputs[i]);
				};
				if (inputs[i].errorType!==0) {info.style.display='none';}
				break;
				case 'reenterPassword':
				if (password.errorType!==1) {
					if (inputs[i].value=="") {
						inputs[i].errorType=1;
						showErrorMessage(inputs[i]);
					}
					else if (inputs[i].value!==password.value) {
						inputs[i].errorType=2;
						showErrorMessage(inputs[i]);
					}
				}
				break;
			}
			}
			errorCount+=inputs[i].errorType;
		}
		if (errorCount===0) {form.submit();}
		else{return false;}
	}

	for (var i = 0; i < len; i++) {
				//errorType=0 无错误 1 没有数据 2 格式错误
		if (inputs[i].errorType!==0) {
			inputs[i].addEventListener('keyup',checkInput,false);
		};	
	}

	function checkInput(){
		if (this.errorType===1) {
			if (this.value!=='') {
				this.errorType=0;
				showErrorMessage(this);
			};
		}
		if (this.errorType===2){
			switch (this.name){
				case 'email':
				var isEmail=/^\w+@\w+(\.(\w){2,})+$/g;
				var condition=isEmail.test(this.value); 
				if (condition) {              //不能直接写if(isEmail.test(this.value))
					this.errorType=0;
					showErrorMessage(this);
				}
				break;
				case 'password':
				if (this.value.length>=6) {
					this.errorType=0;
					showErrorMessage(this);
				};
				break;
				case 'reenterPassword':
				if (this.value==password.value) {
					this.errorType=0;
					showErrorMessage(this);
				}
				break;
			}
		}
	}

})();
