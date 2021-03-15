'use strict';

let myAge,myJob,myEdu,myName,myTall;
let n=0,a=0,j=0,e=0,t=0;

function userName(){ 
    if(n != 1)
    {
    let myName = prompt('what is my name ?').toUpperCase();
    if(myName=='MURAD'){
        alert('your answer is correct')
            }
            else
            {alert('your answer is wrong')}
            n=1;
        }
            else
            {
                alert ('please choose another one you alredy entared this name');
            }
        }

function userAge()
{
    if (a != 1){
    let myAge= prompt('what is my age ?');
    if(myAge==32){
        alert('your answer is correct');
            }
            else
            {alert('your answer is wrong');}
            a=1;
        }
        else
        {
            alert ('please choose another one you alredy entared this age');  
        }
}
function userJob(){
    if(j != 1){
    let myJob = prompt('what is my job ?').toLowerCase();
        if(myJob=='web devloper'){
            alert('your answer is correct')
                }
                else
                {alert('your answer is wrong')}
                j=1;}
                else
        {
            alert ('please choose another one you alredy entared this job');  
        }
}
function useredu(){
    if(e != 1){
    let myEdu = prompt('what is my education ?').toLowerCase();
    if(myEdu=='engineer'){
        alert('your answer is correct')
            }
            else
            {alert('your answer is wrong')}
            e=1;}
            else
            {
                alert ('please choose another one you alredy entared this education');  
            }
}

function userTall(){
    if(t != 1){
    let myTall = prompt('what is my tall ?');
    if(myTall==165){
        alert('your answer is correct')
            }
            else
            {alert('your answer is wrong')}
            t=1;}
            else
            {
                alert ('please choose another one you alredy entared this tall');  
            }
}
function playGame() {
    while(n!=1 || a!=1 || j!=1 || e != 1 || t !=1) {
    alert('we have 5 qaustions about me please choose one of them');
    let userInput = prompt('please choose 1-name 2- age 3-job 4-Education 5- tall' ).toLowerCase();

switch (userInput) {

    case 'name':
       userName();
        break;
    case 'age':
       userAge();
        break;

    case 'job':
        userJob();
        break;

    case 'education':
        useredu();
        break;

    case 'tall':
        userTall();
            break;

     default:
         alert('please choose on of them');
         playGame();
                break; }

}
}
playGame();