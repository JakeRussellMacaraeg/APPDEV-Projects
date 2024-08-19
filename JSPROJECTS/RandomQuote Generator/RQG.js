const quotes = ["Forefathers One And All! Bear Witness!",
                "Foul Tarnished, in search of the Elden Ring. Emboldened by the Flame of Ambition. Someone must extinguish thy flame.", 
                "Brave tarnished, thy strength befits a crown", 
                "I will seek you as far as you may travel. To deliver you what is yours. Destined death.",
                "You will Witness true horror.",
                "The Fallen Leaves Tell A Story.",
                ]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = quotes[randomNumber]
    color.textContent = quotes[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * quotes.length)
}
