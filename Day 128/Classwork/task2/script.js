// github user search program

const form = document.querySelector("form")
const search = form.search
const main = document.getElementById("main")

function renderApi(data) {
    console.log(data)
    main.innerHTML = `
    <h2>User: ${data.login}</h2>
    <img src= ${data.avatar_url}>
    <h2>Followers: ${data.followers}</h2>
    <h2>repository: ${data.public_repos}</h2>
    `

}

form.addEventListener("submit" , async (e) => {
    e.preventDefault()
    username = search.value
    try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        console.log(data)
        renderApi(data)
    }catch (error) {
        console.log(error)
    }
} )
