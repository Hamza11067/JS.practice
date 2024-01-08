const quizData = [ 
    {
        question : 'Which city is capital of Pakistan?',
        a        : 'Lahore',
        b        : 'Karachi',
        c        : 'Multan',
        d        : 'Islamabad',
        correct  : 'd'
    },
    {
        question : 'Which is a markup language?',
        a        : 'HTML',
        b        : 'CSS',
        c        : 'JavaScript',
        d        : 'Python',
        correct  : 'a'
    },
    {
        question : 'What does HTML stands for?',
        a        : 'Cascading style sheet',
        b        : 'Hypertext markup language',
        c        : 'High level language',
        d        : 'None of these',
        correct  : 'b'
    },
    {
        question : 'Which is used for styling?',
        a        : 'HTML',
        b        : 'CSS',
        c        : 'JavaScript',
        d        : 'Python',
        correct  : 'b'
    },
    {
        question : 'What does CSS stands for?',
        a        : 'Civil services sector',
        b        : 'Civil styles sector',
        c        : 'Cascading style sheet',
        d        : 'Hypertext Markup Language',
        correct  : 'c'
    }
]

let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type = 'radio']");

// to load the question
const loadQuestion = () =>{
    if (total === index) {
        return quizEnd()
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = ` ${index + 1}) ${data.question} `;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}

// to submit the question
document.querySelector('.submit').addEventListener(
    'click',
    function () {
        const data = quizData[index];
        const ans = getAnswer();

        // Check if an option is selected before moving to the next question
        if (ans === undefined) {
            alert("Please select an option before proceeding.");
            return;
        }

        if (ans === data.correct) {
            correct++;            
        } else {
            incorrect++;
        }
        index++;
        loadQuestion();
    }
)

// to get answer
const getAnswer = () =>{
    let ans;
    allInputs.forEach(
        (inputE1) => {
            if (inputE1.checked){
                ans = inputE1.value;
            }
        }
    ) 
    return ans;
}

// to rest inputs for next question
const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

// to end the quiz
// const quizEnd = () => {
//     document.getElementsByClassName("container")[0].innerHTML = `
//         <div class="col">
//             <h3 class="w-100">You've scored ${correct} / ${total} </h3>
//         </div>
//     `
// }

// to end the quiz
const quizEnd = () => {
    const container = document.querySelector(".container");
    
    // Create a table element
    const table = document.createElement("table");
    table.classList.add("resultTable");
    
    // Create header row
    const headerRow = table.insertRow(0);
    const headerCell = headerRow.insertCell(0);
    // headerCell.innerHTML = "Quiz Result";
    headerCell.innerHTML = `<h2 class ="resultHeading">Quiz Result</h2>`;

    // Create data rows
    const totalRow = table.insertRow(1);
    const totalCell = totalRow.insertCell(0);
    totalCell.textContent = `Total Questions: ${total}`;

    const correctRow = table.insertRow(2);
    const correctCell = correctRow.insertCell(0);
    correctCell.textContent = `Correct Answers: ${correct}`;

    const incorrectRow = table.insertRow(3);
    const incorrectCell = incorrectRow.insertCell(0);
    incorrectCell.textContent = `Incorrect Answers: ${incorrect}`;



    const percentage = correct/total*100 ;

    const percentageRow = table.insertRow(4);
    const percentageCell = percentageRow.insertCell(0);
    percentageCell.textContent = `Percentage : ${percentage}%`;

    // creating a reattempt button to restart quiz
    const reAttempt = document.createElement("button");
    reAttempt.addEventListener("click", function () {
        // Reload the page
        location.reload();
    });
    reAttempt.classList.add("restart");
    reAttempt.innerText = "ReStart";

    // Append the table to the container
    container.innerHTML = "";
    container.appendChild(table);
    container.appendChild(reAttempt);
}

// to load the initial question 
loadQuestion(index);