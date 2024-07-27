let display = document.getElementById('display');

//input function 
function inputFunc(input) {
    display.value += input;
};

//calculetion
function calculetor(input) {
    try {
        let x = eval(display.value);
        display.value = x;
    } catch (err) {
        display.value = 'Error'
    };

};

//clear button 
function reset() {
    display.value = '';
}