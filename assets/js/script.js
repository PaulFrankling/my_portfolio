// rotation for arrow icons on click of accordion dropdown
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