document.getElementById('btn-one').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-one i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-two').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-two i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-three').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-three i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-four').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-four i.fas');
    icon.classList.toggle('rotate');
});

let showSummary = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).text($(target).text() + message[index++]);
        setTimeout(function () { showSummary(target, message, index, interval); }, interval);
    }
}

$(function () {
    showSummary("#summary", "This portfolio was established whilst studying Full Stack Development at the Code Institute.", 0, 20);
});