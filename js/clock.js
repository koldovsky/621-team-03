setInterval(updateTime, 1000);
function updateTime() {
   const clockContainer = document.querySelector('.clock');
   clockContainer.innerText = new Date().toLocaleTimeString();
}
updateTime();
