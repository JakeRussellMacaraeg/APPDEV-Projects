//Components for item 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //populare variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x = ` Hello <b>${name}</b>,  I See that you're from <b>${address}</b>,
    and you are also pursuing your degree of <b>${major}</b> and you can be contacted using <b>${telephone}</b>, `
    document.getElementById("output").innerHTML = x
})


// Components for item 2
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let sales = parseFloat(document.getElementById("sales").value)
    let profit = sales * 0.23;
    let x = `The Profit is <b>${profit}<b/>`
    document.getElementById("profitOutput").innerHTML = x
})


// Components for item 3
const distanceOutput = document.getElementById("distanceOutput")
const speed = 60; // miles per hour

distanceOutput.innerHTML = `
    Distance in 5 hours: ${speed * 5} miles<br />
    Distance in 8 hours: ${speed * 8} miles<br />
    Distance in 12 hours: ${speed * 12} miles
`


// Components for item 4
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    let miles = parseFloat(document.getElementById("miles").value)
    let gallons = parseFloat(document.getElementById("gallons").value)
    let mpg = miles / gallons
    document.getElementById("mpgOutput").innerHTML = `Miles-per-Gallon: <b>${mpg.toFixed(2)}</b>`
})


// Components for item 5
const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    let celsius = parseFloat(document.getElementById("celsius").value)
    let fahrenheit = (celsius * 9 / 5) + 32
    document.getElementById("fahrenheitOutput").innerHTML = `Fahrenheit Temperature: <b>${fahrenheit.toFixed(2)} °F</b>`
})


// Components for item number 6
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    let cookiesEaten = parseFloat(document.getElementById("cookiesEaten").value)
    let totalCalories = (cookiesEaten / 40) * 300
    document.getElementById("caloriesOutput").innerHTML = `Total Calories Consumed: ${totalCalories}`
})


// Components for item number 7
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    let males = parseFloat(document.getElementById("males").value)
    let females = parseFloat(document.getElementById("females").value)
    let total = males + females
    let malePercentage = (males / total) * 100
    let femalePercentage = (females / total) * 100
    document.getElementById("percentageOutput").innerHTML = `Percentage of Males: <b>${malePercentage}%</b> 
    <br />Percentage of Females: <b>${femalePercentage}%</b>`
})
