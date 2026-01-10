// 3) წამოიღეთ და დაარენდერეთ მონაცემები API-დან


const main = document.getElementById("main")


function renderApi(data) {
    for(api of data) {
        main.innerHTML += `
         <div class="card">
            <h1>${api.title}</h1>
            <h1>${api.completed}</h1>
        </div>

        `
    }
}

async function GetData(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        renderApi(data)
        console.log(data)
    }catch (error) {
        console.log(error)
    }
}

GetData()