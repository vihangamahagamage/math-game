const questionSection = document.querySelector("#question-section");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const startButton = document.querySelector("#start");
const score = document.querySelector("#score");
const submitButton = document.querySelector("#submit-button");
const q = document.querySelector("#q");
const timeOutput = document.querySelector("#time");
let correctAnswer = 0 ;
let timer;
let timeLeft = 10;

// Start Timer Function
function startTimer(){
    timeLeft=10;
    timeOutput.textContent = timeLeft;

    clearInterval(timer);

    timer = setInterval(()=> {
        timeLeft--;
        timeOutput.textContent = timeLeft;

        if(timeLeft <=0){
            clearInterval(timer);
            console.log("Time Out");
            autoNextQuestion();
        }
    },1000);
}

// End Game Function
function endGame(){
    clearInterval(timer);
    startButton.classList.remove("hidden");
    questionSection.classList.add("hidden");
    answer.value = "";
    score.textContent = 0;
    q.textContent = 0;
}

// Auto Next Question Function
function autoNextQuestion(){
    q.textContent++;

    if(q.textContent<=10){
        generateQuestion();
        answer.value="";
        startTimer();
    }else{
        endGame();
    }
}

// Start Game Function
function startGame(){
    startButton.classList.add("hidden");
    questionSection.classList.remove("hidden");
    score.textContent = 0;
    q.textContent = 1;
    generateQuestion();
    startTimer();
}

// Js Random Number function
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function generateQuestion(){
    let num1 = randomNumber(10,100);
    let num2 = randomNumber(10,100);
    question.textContent = num1 +"+"+ num2;
    correctAnswer = num1+num2;
    console.log(correctAnswer);
}

// Next Question Function
function nextQuestion(){
    // Check if the answer is empty
    if(answer.value ==""){
        alert("Please Enter your Answer");
        return;
    }else if(answer.value == correctAnswer){
            score.textContent++;
            console.log("Answer is correct");    
    }else{
        console.log("Answer is wrong");      
    }

    q.textContent++;
    console.log(q.textContent);
    // Check if the question number is less than or equal to 10
    if(q.textContent<=10){
        generateQuestion();
        answer.value = "";
        startTimer();   
    }else{
        clearInterval(timer);
        alert("Game Over! Your Score: " + score.textContent);
        startButton.classList.remove("hidden");
        questionSection.classList.add("hidden");
        answer.value = "";
        score.textContent = 0;
        q.textContent = 0;
    }           
}

startButton.onclick = startGame;
submitButton.onclick = nextQuestion;

        