var questions = [
    		'Введи команду /start, для начала общения.', //0
    		'Привет, меня зовут Чат-бот, а как зовут тебя?', //1
    		'Привет, (name), приятно познакомится.', //2
        'Я умею считать! Введи одно число.', //3
    		'Введи второе число.', //4
    		'Введи одно из действий: -, +, *, /', //5
    		'Всего доброго, если хочешь поговорить пиши /start' //6
		];

		var num = 0;
		var output	= document.querySelector("#result");
		var inputBox = document.querySelector("#ans");	
		output.innerHTML 	= questions[num];

		function showResponse() {
			var error = false;
		  	var input = inputBox.value;
        var a, b, d, x, y, c;
	  		if (input == '/start') {	
			    num = 1; //Привет, меня зовут
			}
    		else if (num == 1) {
	    		num = 2;
	    		questions[num] = questions[num].replace("(name)",inputBox.value); //'Привет, (name), приятно
	  		}
			else if (num == 2) {
				num = 3; //Я умею считать! Введи одно число
        a = inputBox.value;
	    	}
       else if (num == 3) {
				num = 4; //Введи второе число
        b = inputBox.value; 
	    	}
       else if (num == 4) {
				num = 5; //Введи одно из действий
        d = inputBox.value;
       }
       else if (num == 5) {
        output.innerHTML = sol(d, a, b);
        setTimeout(3000);
				num=6; //Всего доброго, если хочешь
	    	}
	    	else{
	     		error = true;	
	    	}
	    	if(!error){
	    		output.innerHTML = questions[num];
			    inputBox.value = "";
			    inputBox.setAttribute("placeholder", "Введите ответ");
	    	}else{
	    		num = 0;
	    		output.innerHTML = 'Я не понимаю, введите другую команду!';
	    	}
	  		
		}

 function sol(x, y, z) {
         switch (x) {
          case "+":
          return y+z;
          break;
          case "-":
          return y-z;
          break;
          case "*":
          return y*z;
          break;
          case "/":
          return y/z;
          break;
          } 
	    	}

		$(document).on("keypress", function (event) {
		  	if (event.key === "Enter") {
		    	showResponse();
		  	}
		})

$( "#ans" ).focus();