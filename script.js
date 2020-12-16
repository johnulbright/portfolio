//Smooth Numbers
let calculations = 0;
//Source: https://www.johndcook.com/blog/2020/01/06/smooth-numbers/

//let max=5000;
//let y=5;


function run(e){
    e.preventDefault();
    console.log("i ran")
    console.log(max);

}




let smoothCount = 0;
let smoothNumbers = [];
const submitButton = document.querySelector(".number_inputs");
submitButton.addEventListener('submit', run);

function run(e) {
    e.preventDefault();
    smoothCount = 0;
    smoothNumbers = []
    const max = document.querySelector('.max').value;
    const y = document.querySelector('.prime').value;
    for (let i=1;i<=max;i++){
        let factors=[];
        for (let k=1;k<=i;k++){
          if(i%k==0&&isPrime(k)){
            factors.push(k);
          }
        }
      //  console.log(i+': '+factors);
        if(factors.pop()<=y){
          smoothCount++;
          smoothNumbers.push(i);
          printToScreen(i);
          }
      }
    printSummary(smoothCount,max, y)

}
function isPrime(num) {
    let itIsPrime = true;
    for (let j = 2; j <= num / 2; j++) {
        if (num % j == 0) {
            itIsPrime = false;
        }
    }
    return itIsPrime;
}
function printSummary(smoothCount,x,y){
    let u=Number.parseFloat(Math.log(x)/Math.log(y)).toPrecision(3);
    let exp=Number.parseFloat(Math.pow(u,-u)).toPrecision(3);
    let act=Number.parseFloat(smoothCount/x).toPrecision(3);
    document.querySelector("#x").innerText=x;
    document.querySelector("#y").innerText=y;
    document.querySelector("#x2").innerText=x;
    document.querySelector("#y2").innerText=y;
    document.querySelector("#u").innerText=u;
    document.querySelector("#expProp").innerText=exp;
    document.querySelector("#expCount").innerText=Math.round(Math.pow(u,-u)*x);
    document.querySelector("#actProp").innerText=act;
    document.querySelector("#actCount").innerText=smoothCount;
    document.querySelector(".summary").style.display="block";
}

function printToScreen(anyText) {
    let newText = document.createElement('span');
    newText.innerText = anyText;
    document.querySelector('.results').appendChild(newText);
}