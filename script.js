const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minutsText = document.querySelector("#minuts");
const secondText = document.querySelector("#seconds");
const newYear = "1 nov 2022";

function countDown() {
    const newYearDate = new Date(newYear);
    const currenDate = new Date();
    const totalSeconds = (newYearDate - currenDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minuts = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysText.innerHTML = days;
    hoursText.innerHTML = format(hours);
    minutsText.innerHTML = format(minuts);
    secondText.innerHTML = format(seconds);

}
countDown();
function format(time) {
    return time < 10 ? `0${time}` : time;
}
setInterval(countDown, 1000);
