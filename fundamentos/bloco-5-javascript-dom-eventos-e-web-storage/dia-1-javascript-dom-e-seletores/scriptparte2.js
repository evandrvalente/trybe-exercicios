let emergency = document.querySelector('.emergency-tasks');
emergency.style.background = 'pink';
let emergencyTitle = document.getElementsByClassName('title-emergency')[0];
emergencyTitle.style.background = 'purple';
let emergencyTitle2 = document.getElementsByClassName('title-emergency')[1];
emergencyTitle2.style.background = 'purple';

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.background = 'yellow';
let emergencyTitle3 = document.getElementsByClassName('title-noemergency');
for (let index in emergencyTitle3) {
    emergencyTitle3[index].style.background = 'black';
};
