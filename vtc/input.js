function filterUserInput(input){
    let inputNumber = Number(input.value);
    let isInputNumber = Boolean(inputNumber);//is this correct?
    if(isInputNumber){
        console.log("Valid Input:" + inputNumber);
        return inputNumber
    }else{
        console.log("Invalid Input:" + inputNumber);
        return true;
    }
}