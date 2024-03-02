let previous_number = "";
let operator_selected = "";
let should_i_clear = false;



let clear_button = document.querySelector('#clear-button');
clear_button.addEventListener('click', setValueToZero);

function operator(){
    let textbox_content = document.querySelector('#textbox')
    const new_previous_number = parseFloat(previous_number);
    const current_number = parseFloat(textbox_content.textContent);

    if(operator_selected === "+"){
        textbox_content.textContent = new_previous_number + current_number;        
    }
    else if(operator_selected === "/"){
        textbox_content.textContent = new_previous_number / current_number;        
    }
    else if(operator_selected === "*"){
        textbox_content.textContent = new_previous_number * current_number;        
    }
    else if(operator_selected === "-"){
        textbox_content.textContent = new_previous_number - current_number;        
    }
    previous_number = "";
    operator_selected = "";
    clearOpacity();
}

function letAddOperator(){
    if(operator_selected === ""){
        previous_number = grabValueOnTextbox();
        operator_selected = "+";
        document.querySelector('#addition-button').style.cssText = "opacity: 70%";
    }
    else{
        clearOpacity();
        operator_selected = "+";    
        document.querySelector('#addition-button').style.cssText = "opacity: 70%";
    }
}

function letMultiplicationOperator(){
    if(operator_selected === ""){
        previous_number = grabValueOnTextbox();
        operator_selected = "*";
        document.querySelector('#multiply-button').style.cssText = "opacity: 70%";
    }
    else{
        clearOpacity();
        operator_selected = "*";    
        document.querySelector('#multiply-button').style.cssText = "opacity: 70%";
    }
}

function letDivisionOperator(){
    if(operator_selected === ""){
        previous_number = grabValueOnTextbox();
        operator_selected = "/";
        document.querySelector('#division-button').style.cssText = "opacity: 70%";
    }
    else{
        clearOpacity();
        operator_selected = "/";    
        document.querySelector('#division-button').style.cssText = "opacity: 70%";
    }
}

function letSubtractionOperator(){
    if(operator_selected === ""){
        previous_number = grabValueOnTextbox();
        operator_selected = "-";
        document.querySelector('#subtract-button').style.cssText = "opacity: 70%";
    }
    else{
        clearOpacity();
        operator_selected = "-";    
        document.querySelector('#subtract-button').style.cssText = "opacity: 70%";
    }
}

function grabValueOnTextbox(){
    return document.querySelector('#textbox').textContent;
}

let operator_buttons = document.querySelectorAll('.operator-button');
operator_buttons.forEach((e) => {
    e.addEventListener('click',() => {
        should_i_clear = true;
        
    })
})

function addNumberToTextbox(new_value){
    if((should_i_clear == true)){
        clearTextbox();
    }
    let old_value = document.querySelector('#textbox');
    if(old_value.textContent === "0" && new_value != ".") {clearTextbox();}
    old_value.textContent = old_value.textContent + new_value;
    should_i_clear = false;
}

function turnValueToNegative(){
    let old_value = document.querySelector('#textbox');
    old_value.textContent = parseFloat(old_value.textContent) * -1;
}

function clearTextbox(){
    let old_value = document.querySelector('#textbox');
    old_value.textContent = "";
}

function setValueToZero(){
    clearOpacity();
    let old_value = document.querySelector('#textbox');
    old_value.textContent = "0";
}

function clearOpacity(){
    const operator_buttons = document.querySelectorAll('.operator-button');
    operator_buttons.forEach((e) => {
        e.style.cssText = 'opacity: 100%';
    })
}