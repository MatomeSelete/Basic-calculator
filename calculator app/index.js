let display = document.querySelector("#screen")



// DISPLAY VALUES ON THE CALCULATOR SCREEN
function button(number) {
    let value = display.value += number
    console.log(value)

}

//  SHOW RESULTS 
function result() {
    let result = display.value;
    let logResult = eval(result);
    display.value = logResult;
}

