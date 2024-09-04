const colors = ["green", "red", "rgba(133, 122, 200)", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the Background
btn.addEventListener("click", () =>{
    //target the body form the Background
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }else{
        links.classList.add('show-links');
    }*/
    links.classList.toggle('show-links')
})
