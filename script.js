let speed = 55;
let i = 0;
let str = `Nothing to see here, except for these links!`;

function customTypingText() {
    document.querySelector('textarea').value += str.charAt(i);
    i++;
    if (i < str.length) {
        setTimeout(customTypingText, speed);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    customTypingText();
});