let questions = [
    'Введи команду /start, для начала общения.', //0
    'Привет, меня зовут Чат-бот, а как зовут тебя?', //1
    'Введи второе число.', //2
    'Введи одно из действий: -, +, *, /', //3
    'Всего доброго, если хочешь поговорить пиши /start', //4
    'Я не понимаю, введите другую команду!' //5
];
let num = 0;
let a, b, c;
function answer() {
    let text = document.getElementsByName('text-area')[0];
    if (text.value == '/stop') {
        num = 0;
        createPersonAnswer();
        setTimeout(createBotAnswer, 1000, questions[4]);
        document.getElementsByName('text-area')[0].value = '';
    } else if (text.value == '/start') {
        createPersonAnswer();
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, questions[1]);
        document.getElementsByName('text-area')[0].value = '';
        num++;
    } else if (num == 1 || text.value == '/number') {
        createPersonAnswer();
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, `Привет ${text.value}, приятно познакомится. Я умею считать, введи числа которые надо посчитать.`);
        document.getElementsByName('text-area')[0].value = '';
        num++;
    } else if (num == 2) {
        a = document.getElementsByName('text-area')[0].value;
        createPersonAnswer();
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, questions[2]);
        document.getElementsByName('text-area')[0].value = '';
        num++;
    }  else if (num == 3) {
        b = document.getElementsByName('text-area')[0].value;
        createPersonAnswer();
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, questions[3]);
        document.getElementsByName('text-area')[0].value = '';
        num++;
    } else if (num == 4) {
        c = document.getElementsByName('text-area')[0].value;
        createPersonAnswer();
        let result = calculator(c, a, b)
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, result);
        document.getElementsByName('text-area')[0].value = '';
        num = 0;
    } else {
        setTimeout(createBotAnswerAwait, 1000);
        setTimeout(createBotAnswer, 3000, questions[5]);
    };
}
function createBotAnswerAwait() {
    const chat = document.getElementsByClassName('chat')[0];
    let question = document.createElement('div');
    question.className = "questionAwait";
    question.innerHTML =  '...';
    chat.prepend(question);
    setTimeout(() => question.remove(), 1000);
}
function createBotAnswer(answer) {
    const chat = document.getElementsByClassName('chat')[0];
    let question = document.createElement('div');
    question.className = "question";
    question.innerHTML =  answer;
    chat.prepend(question);
}
function createPersonAnswer() {
    const chat = document.getElementsByClassName('chat')[0];
    let personAnswer = document.createElement('div');
    personAnswer.className = "personAnswer";
    personAnswer.innerHTML =  document.getElementsByName('text-area')[0].value;
    chat.prepend(personAnswer);
}
function calculator(x,y,z) {
    switch (x) {
     case "+":
     return Number(y)+Number(z);
     break;
     case "-":
     return Number(y)-Number(z);
     break;
     case "*":
     return Number(y)*Number(z);
     break;
     case "/":
     return Number(y)/Number(z);
     break;
     }
}
/*РАБОТАЕТ v0 function button(arg) {
    const chat = document.getElementsByClassName('chat')[0];
    alert('Hey');
    let question = document.createElement('div');
    question.className = "question";
    question.innerHTML =  'Привет, меня зовут Чат-бот, а как зовут тебя?';
    chat.append(question);
}
function answer() {
   let text = document.getElementsByName('text-area')[0].value;
   if (text == '/start') {
       button();
   } else {
    const chat = document.getElementsByClassName('chat')[0];
    let question = document.createElement('div');
    question.className = "question";
    question.innerHTML =  'Я не понимаю, введите другую команду!';
    chat.append(question);
   }
}*/
/*РАБОТАЕТ v1 function answer() {
    let text = document.getElementsByName('text-area')[0];
    if (text.value == '/start') {
        createPersonAnswer();
        setTimeout(5000);
        createBotAnswer('Привет, меня зовут Чат-бот, а как зовут тебя?');
        document.getElementsByName('text-area')[0].value = '';
    } else if (text.value == '/name') {
        createPersonAnswer();
        setTimeout(3000);
        createBotAnswer(`Привет ${text.value}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`)
        document.getElementsByName('text-area')[0].value = '';
    } else {
        createBotAnswer('Я не понимаю, введите другую команду!');
    }
}
function createBotAnswer(answer) {
    const chat = document.getElementsByClassName('chat')[0];
    let question = document.createElement('div');
    question.className = "question";
    question.innerHTML =  answer;
    chat.prepend(question);
}
function createPersonAnswer() {
    const chat = document.getElementsByClassName('chat')[0];
    let personAnswer = document.createElement('div');
    personAnswer.className = "personAnswer";
    personAnswer.innerHTML =  document.getElementsByName('text-area')[0].value;
    chat.prepend(personAnswer);
}*/