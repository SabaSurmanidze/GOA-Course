const form = document.querySelector("form")
let search = form.searchInput
const find = document.getElementById("find")
const main = document.querySelector(".main")
const title = document.getElementById("title")

find.addEventListener("click" , (e) => {
    e.preventDefault();
    
    let place = search.value;
    if (search.value !== "") {
    search.value = ""
    fetch(`https://api.weatherapi.com/v1/current.json?key=bc72b43fe6184c96965120059261101&q=${place}&aqi=yes`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        title.textContent = data.location.name
        main.innerHTML = ""
        main.innerHTML += `
            <div class="wrapper"> 
                <img src=${data.current.condition.icon} />
                <p>${data.current.temp_c}°</p>
            </div>
            <div class="hero">
                <p class="text">${data.current.condition.text}</p>
                <div class="seperator"> <div/>
                <p class="time">${data.location.localtime}</p>
            </div>

        `
    })
    }
})