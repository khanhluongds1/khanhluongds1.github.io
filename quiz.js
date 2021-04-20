const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const quizQuestions = [{

    question: "Khanh Luong hold a PhD degree in:",

    answers: {

      a: "Computer Science",

      b: "Human-computer interaction",

      c: "Interactive programming languages",

      d: "Low and high fidelity prototyping"

    },

    correctAnswer: "a"

  },

  {

    question: "Khanh works closely with:",

    answers: {

      a: "Undergraduate Students",

      b: "Honours students",

      c: "Higher Degree Research Students",

      d: "All of the above"

    },

    correctAnswer: "c"

  },

  {

    question: "Khanh's research keywords include:",

    answers: {

      a: "Multi-view data",

      b: "Matrix Factorization",

      c: "Data mining",

      d: "All of the above"

    },

    correctAnswer: "d"

  },

  {

    question: "Khanh is super passionate about:",

    answers: {

      a: "People",

      b: "Innovation",

      c: "Human-centred design",

      d: "All of the above and more!"

    },

    correctAnswer: "d"

  }];
function buildQuiz(){
    const output = [];
    for (i=0;i<quizQuestions.length; i++){
        const answers = [];
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                +'<input type = "radio" name = "question'+i+'"value="'+letter+'">'
                +letter+':'
                +quizQuestions[i].answers[letter]
                +'</label>'
                );
        }
        output.push(
            '<div class = "question">' + quizQuestions[i].question + '</div>'
            + '<div class = "answers">' + answers.join('')+'</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
}
function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;
    for(i=0;i<quizQuestions.length;i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(userAnswer===quizQuestions[i].correctAnswer){
            numCorrect++;
            //color the answer green
            answerContainers[i].style.color = 'lightgreen';
        }
        else{
            //color the wrong answer red
            answerContainers[i].style.color = 'red';
        }
    }
    if (numCorrect===0){
        resultContainer.innerHTML="That wasnt your best effort - you did not get a single answer correct.";
    }
    if (numCorrect===1){
        resultContainer.innerHTML="There is one answer correct.";
    }
    if (numCorrect===2){
        resultContainer.innerHTML="Your have two out of 4 answers correct.";
    }
    if (numCorrect===3){
        resultContainer.innerHTML="You have 3 answers correct.";
    }
    if (numCorrect===4){
        resultContainer.innerHTML="You have 4 out of 4 answers correct.";
    }
}
buildQuiz();
submitButton.onclick = function(){
    showResults();
}