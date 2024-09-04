let count = 30;
const value = document.querySelector("#value");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
let timer;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true; 
    timer = setInterval(() => {
        count--;
        value.textContent = count;

        if (count <= 0) {
            clearInterval(timer); 
            count = 0; 
            startBtn.disabled = false; 
        }
    }, 1000);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    count = 30; 
    value.textContent = count;
    value.style.color = "black";
    startBtn.disabled = false; 
});
