const buttonNumber = document.getElementsByName('data-number');
const buttonOperation = document.getElementsByName('data-operation');
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');

var actualOperation = '';
var previousOperation = '';
var operation = undefined;


buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperation.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonEqual.addEventListener('click', function(){ 
    calculate();
    refreshDisplay();
});

buttonDelete.addEventListener('click', function(){
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
        case '%':
            calcula = previous % actual;
            break;
        default:
            return;
     }
     actualOperation = calcula;
     operation = undefined;
     previousOperation = '';
    };

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
