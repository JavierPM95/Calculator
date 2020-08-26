const buttomNumber = document.getElementsByName('data-number');
const buttomOperation = document.getElementsByName('data-operation');
const buttomEqual = document.getElementsByName('data-equal');
const buttomDelete = document.getElementsByName('data-delete');
var result = document.getElementById('result');

var actualOperation = '';
var previousOperation = '';
var operation = undefined;


buttomNumber.forEach(function(buttom){
    buttom.addEventListener('click', function(){
        addNumber(buttom.innerText);
    })
});

 buttomOperation.forEach(function(buttom){
    buttom.addEventListener('click', function(){
        selectOperation(buttom.innerText);
    })
 });

 buttomEqual.addEventListener('click', function(){ 
    calculate();
     refreshDisplay();
 });

 buttomDelete.addEventListener('click', function(){
     clear();
     refreshDisplay();
 });

 function selectOperation(op){
     if(actualOperation === '') return;
     if(previousOperation !== ''){
         calculate();
     }
     operation = op.toString();
     previousOperation = actualOperation;
     actualOperation = '';
 }

 function calculate(){
     var calcula;
     const previous = parseFloat(previousOperation);
     const actual = parseFloat(actualOperation);
     if(isNaN(previous) || isNaN(actual)) return;
     switch(operation){
         case '+':
             calcula = previous + actual;
             break;
        case '-':
            calcula = previous - actual;
            break;
        case '*':
            calcula = previous * actual;
            break;
        case '/':
            calcula = previous / actual;
            break;
        default:
            return;
     }
 }

 function addNumber(number){
     actualOperation = actualOperation.toString() + number.toString();
     refreshDisplay();
 };

 function refreshDisplay(){
     result.value = actualOperation;
 };

function clear(){
    actualOperation = '';
    previousOperation = '';
    operation = undefined;
};


clear();
