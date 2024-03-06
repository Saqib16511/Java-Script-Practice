// let Q01 = document.getElementById("Q01");
// let select = document.getElementsByName("Qno1")
// let submit = document.getElementById("submit");

// let select = document.querySelector('input[name="Qno1"]:checked').value;
submit.onclick = ()=>{
        var answers = {};
        var questions = document.getElementsByTagName('input');
        for (var i = 0; i < questions.length; i++) {
          if (questions[i].type === 'radio' && questions[i].checked){
            answers[questions[i].name] = questions[i].value;
        }
    }
        sessionStorage.setItem('mcqAnswers', JSON.stringify(answers));
}