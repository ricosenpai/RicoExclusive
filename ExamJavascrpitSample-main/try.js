const questions = [
    {
        question: `Which code statement correctly retrieves and returns an object from localStorage?`, 
        answers: [
            { text: "const retrieveFromLocalStorage = (storageKey) =>{return window.localStorage.getItem(storageKey);}", correct: false },
            { text: "const retrieveFromLocalStorage = () =>{return JSON.stringify(window.localStorage.getItem(storageKey));}", correct: false },
            { text: "constretrieveFromLocalStorage = (storageKey) =>{return window.localStorage[storageKey];}", correct: false },
            { text: "const retrieveFromLocalStorage = (storageKey) =>{return JSON.parse(window.localStorage.getItem(storageKey));}", correct: true }
        ]
    },
    {
        question: `Whichthree actions can be using the JavaScript browser console?
        Choose 3 answers:`, 
        answers: [
            { text: "Run code that is not related to page", correct: false },
            { text: "Display a report showing the performance of a page.", correct: true },
            { text: "View and change DOM the page.", correct: true },
            { text: "View and change security cookies.", correct: false },
            { text: "view , change, and debug the JavaScript code ofthe page.", correct: true }
        ]
    },
    {
        question: `Which option istrue about the strict mode in imported modules?`, 
        answers: [
            { text: "You can only reference notStrict() functions from the imported module.", correct: false},
            { text: "Add the statement use non-strict, before any other statements in the module to enablenot-strict mode.", correct: false },
            { text: "Imported modules are in strict mode whether you declare them as such or not.", correct: true},
            { text: "Add the statement use strict =false; before any other statements in the module to enablenot- strict mode.", correct: false }
        ]
    },
    {
        question: `Given a value, which three options can a developeruse to detect if the value is NaN?
        Choose 3 answers !`, 
        answers: [
            { text: "value == NaN", correct: false},
            { text: "value !== value", correct: true },
            { text: "Number.isNaN(value)", correct: true},
            { text: "Object.is(value, NaN)", correct: true }
        ]
    },
    {
        question: `In the browser, the window object is often used to assign variables that require the broadest scope 
        in an application Node.js application does not have access to the window object by default.
        Which two methods are used to address this ?
        Choose 2 answers`, 
        answers: [
            { text: "Create a new window object in the root file.", correct: false},
            { text: "Assign variables to the global object.", correct: true },
            { text: "Assign variables to module.exports and require them as needed.", correct: true},
            { text: "Use the document object instead of the window object.", correct: false }
        ]
    },
    {
        question: `A developer creates a generic function to log custom messages in the console. To do this, the function below is implemented.
        01 function logStatus(status){
        02 console./*Answer goes here*/{'Item status is: %s', status};
        03 }
        Which three console logging methods allow the use of string substitution in line 02?`, 
        answers: [
            { text: "Log", correct: true},
            { text: "Assert", correct: false },
            { text: "info", correct: true},
            { text: "Message", correct: false },
            { text: "Error", correct: true }
        ]
    },
    {
        question: `A developer needs to debug a Node.js web server because a runtime error keeps occurring 
        at one of the endpoints.
        The developer wants to test the endpoint on a local machine and make the request against a local 
        server to look at the behavior. In the source code, the server, js file will start the server. 
        the developer wants to debug the Node.js server only using the terminal.

        Which commandcan the developer use to open the CLI debugger in their current terminal window?`, 
        answers: [
            { text: "node -i server.js", correct: false },
            { text: "node inspect server.js", correct: true },
            { text: "node server.js inspect", correct: false },
            { text: "node start inspect server.js", correct: false }
        ]
    },
    {
        question: `A developer is debugging a web server that uses Node.js The server hits a runtimeerror every third 
        request to an important endpoint on the web server.
        The developer added a break point to the start script, that is at index.js at he root of the server's source code.
        The developer wants to make use of chrome DevTools to debug.

        Which command can be run to access DevTools and make sure the breakdown is hit ?`, 
        answers: [
            { text: "Node --inspect-brk index.js", correct: true},
            { text: "node -i index.js", correct: false},
            { text: "Node inspect index.js", correct: false},
            { text: "Node --inspect index.js", correct: false }
        ]
    },
    {
        question: `A test has a dependency on database. query. During the test, the dependency is replaced with an object 
        called database with the method, Calculator query, that returns an array. The developer does not need to 
        verify how many times the method has been called.
        Which two test approaches describe the requirement?
        Choose 2 answers`,
        answers: [
            { text: "Substitution", correct: true },
            { text: "Black box", correct: false },
            { text: "Stubbing", correct: true },
            { text: "White box", correct: false }
        ]
    },
    {
        question: `A test has a dependency on database.query. During the test the dependency is replaced with an object called 
        database with the method, query, that returns an array. The developer needs to verify how many times the method was 
        called and the arguments used each time.
        Which two test approaches describe the requirement?
        Choose 2 answers`, 
        answers: [
            { text: "Integration", correct: false},
            { text: "Mocking", correct: true},
            { text: "Black box", correct: false},
            { text: "White box", correct: true }
        ]
    },
    {
        question: `developer creates a new web server that uses Node.js. It imports a server library that uses events and 
        callbacks for handling server functionality.
        The server library is imported with require and is made available to the code by a variable named server. 
        The developer wants to log any issues that the server has while booting up.
        Given the code and the information the developer has, which code logs an error at boost with an event?`, 
        answers: [
            { text: `Try{
                        server.start();
                    } catch(error) {
                        console.log('ERROR', error);
                    }`, correct: false},
            { text: `Server.error ((server) => {
                        console.log('ERROR', error);
                    });`, correct: false},
            { text: `Server.on ('error', (error) => {
                        console.log('ERROR', error);
                    });`, correct: true},
            { text: `Server.catch ((server) => {
                        console.log('ERROR', error);
                    });`, correct: false }
        ]
    },
    {
        question: `A developer is leading the creation of a new browser application that will serve a single page application. The team wants to use a new web framework Minimalsit.js.The Lead developer wants to advocate for a more seasoned web framework that already has a community around it.
        Which two frameworks should the lead developer advocate for?
        Choose 2 answers`,
        answers: [
            { text: "koa", correct: false },
            { text: "Angular", correct: true },
            { text: "vue", correct: false },
            { text: "Express", correct: true }
        ]
    },
    {
        question: `A developer is leading the creation of a new web server for their team that will fulfill API requests from an existing client.
        The team wants a web server that runs on Node.Js, and they want to use the new web framework Minimalist.Js. The lead developer wants to advocate for a more seasoned back-end framework that already has a community around it.
        Which two frameworks could the lead developer advocate for?
        Choose 2 answers`,
        answers: [
            { text: "Express", correct: true },
            { text: "Angular", correct: false },
            { text: "Gatsby", correct: false },
            { text: "Koa", correct: true }
        ]
    },
    {
        question: `developer is trying to convince management that their team will benefit from using Node.js for a backend 
        server that they are going to create. The server will be a web server that handles API requests from a 
        website that the teamhas already built using HTML, CSS, and JavaScript.

        Which three benefits of Node.js can the developer use to persuade their manager?
        Choose 3 answers:`,
        answers: [
            { text: "Performs a static analysis on code before execution to look for runtime errors.", correct: true },
            { text: "Executes server-side JavaScript code to avoid learning a new language.", correct: false },
            { text: "Ensures stabilitywith one major release every few years.", correct: false },
            { text: "Uses non-blocking functionality for performant requesthandling.", correct: true },
            { text: "Installs with its own package manager to install and manage third-party libraries.", correct: true }
        ]
    },
    {
        question: `A team that works on a bigproject uses npm to deal with projects dependencies.
        A developer added a dependency does not get downloaded when they execute npm install.
        Which two reasons could be possible explanations for this?
        Choose 2 answers`, 
        answers: [
            { text: "The developer missed the option --addwhen adding the dependency.", correct: false },
            { text: "The developer missed the option --save when adding the dependency.", correct: true },
            { text: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production.", correct: true },
            { text: "duplicate", correct: false }
        ]
    },
    {
        question: `is below:
        &lt;input type="file" onchange="previewFile()"&gt;
        &lt;img src="" height="200" alt="Image Preview..."/&gt;

        The JavaScript portion is:

        01 function previewFile(){
        02     const preview = document.querySelector('img');
        03     const file = document.querySelector('input[type=file]').files[0];
        04      //line 4 code
        05     reader.addEventListener("load", () => {
        06         preview.src = reader.result;
        07     },false);
        08      //line 8 code
        09 }

        In lines 04 and 08, which code allows the user to select an image from their local computer ,
        and to display the image in the browser?`, 
        answers: [
            { text: `04 const reader = new File();
                     08 if (file) URL.createObjectURL(file);`, correct: false},
            { text: `04 const reader = new FileReader();
                     08 if (file) URL.createObjectURL(file);`, correct: false},
            { text: `04 const reader = new FileReader();
                     08 if (file) reader.readAsDataURL(file);`, correct: true},
            { text: `04 const reader = new File();
                     08 if (file) reader.readAsDataURL(file);`, correct: false }
        ]
    }       
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
//test
shuffleQuestions();

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex +1;
//     questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click",selectAnswer);
//     })
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     // Shuffle answers array to randomize order
//     let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

//     shuffledAnswers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");

//         // const pre = document.createElement("p"); // Create <pre> element
//         // pre.textContent = answer.text;
        
//         // button.classList.add("btn");
//         // button.appendChild(pre);


//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle answers array to randomize order
    let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add event listener to select an answer
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct")
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect")
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block";//it will show the next button if you click 1 answer button
// }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Toggle selected state and mark answer as correct or incorrect
    if (selectedBtn.classList.contains('selected')) {
        selectedBtn.classList.remove('selected');
        if (isCorrect) {
            selectedBtn.classList.remove('correct');
        } else {
            selectedBtn.classList.remove('incorrect');
        }
    } else {
        selectedBtn.classList.add('selected');
        if (isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }
    }

    // Check if the user has selected all correct answers
    const correctAnswers = Array.from(answerButtons.children).filter(button => button.dataset.correct === "true");
    const selectedAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected'));
    const selectedCorrectAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected') && button.dataset.correct === "true");

    if(selectedAnswers.length == 3 && correctAnswers.length == 3){
        //nextButton.style.display = "block";//comment this out to directly next the question
            // If all correct answers are selected, enable the "Next" button
        if (correctAnswers.length === selectedCorrectAnswers.length) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 1000);
    }else if(selectedAnswers.length == 2 && correctAnswers.length == 2){
        //nextButton.style.display = "block";//comment this out to directly next the question
            // If all correct answers are selected, enable the "Next" button
        if (correctAnswers.length === selectedCorrectAnswers.length) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 1000);
    }else if(correctAnswers.length == 1){
        //nextButton.style.display = "block";//comment this out to directly next the question
        if (isCorrect) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 2000);
        
    }else {
        nextButton.style.display = "none"; // Hide the "Next" button if not all correct answers are selected
    }
}
function  showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function  handledNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handledNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();