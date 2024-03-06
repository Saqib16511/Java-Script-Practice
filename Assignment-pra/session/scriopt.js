

// QNO.01
let select = document.getElementsByName('Qno1');
let answers = "";
let qno1 = document.getElementById("Q.01");
let hello = qno1.getAttribute('id');

// QNO.02
let ques2 = document.getElementsByName("Qno2");
let secanswer = "";
let qno2 = document.getElementById("Q.02");
let hii =qno2.getAttribute('id');

// QNO.03
let question3 = document.getElementsByName("Qno3"); 
let ans3 = "";
let qno3 = document.getElementById("Q.03");
let result = qno3.getAttribute("id");

submit.onclick = ()=>{
    // Qno.01
   for(i = 0;i < select.length;i++){
    if(select[i].checked ){
        answers += select[i].value;
        sessionStorage.setItem(hello, JSON.stringify(answers))
    }
   }   
// QNO.02
   for(a = 0;a < ques2.length;a++){
    if(ques2[a].checked){
        secanswer += ques2[a].value;
        sessionStorage.setItem(hii, JSON.stringify(secanswer)); 
    }
   }
//    QNO03
   for(j = 0;j < question3.length;j++){
    if(question3[j].checked){
        ans3 += question3[j].value;
        sessionStorage.setItem(result, JSON.stringify(ans3))
    }
   }
}