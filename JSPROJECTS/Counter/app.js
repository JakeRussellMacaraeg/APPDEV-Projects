let count = 0;
const value = document.querySelector("#value")
const btns = document.querySelectorAll('.btn')
console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decreaseByFive')) {
            count -= 5
        } else if (styles.contains('increaseByFive')) {
            count += 5
        } else if (styles.contains('random')) {
            count = Math.floor(Math.random() * 301) - 150
        }else{   
            count = 0 
        }

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }

        value.textContent = count
    })
})