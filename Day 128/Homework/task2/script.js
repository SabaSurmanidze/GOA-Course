// 2) შექმენით გასაფილტრი ველი, საიდანაც შეგეძლებათ 
// სპეციფიკური თეგის მქონე პოსტების არჩევა, პოსტის
//  სათაურით მოძებნა, სორტირება ანუ დალაგება
//   ზრდადობით სათაურის მიხედვით, დასერვჩის
//    შემდეგ უნდა ამოაგდოს მხოლოდ ის ერთი
//     კონკრეტული პოსტი რომელის მონაცემები
//      ემთხვევა მოძიებულს, შეიძლება ერთი არ ი
//      ყოს რამდენიმეს დარენდერებაც არის შესაძლებელი,
//       დავალების შესასრულებლად გამოიყენეთ იგივე API-ის
//        მესამე ვერსია https://dummyjson.com/posts/search?q=${საძიებო სიტყვა}


const blogs = document.querySelector(".blogs")
const form = document.querySelector("form")
const input = form.search

function renderBlogs(data) {
    for(post of data.posts) {
        console.log(post)    
        blogs.innerHTML += `
        <h1>tittle: ${post.title}</h1>
        <h7>tittle: ${post.body}</h7>
        `
    }
}

async function getData(item) {
    try {
        const res = await fetch(`https://dummyjson.com/posts/search?q=${item}`)
        const data = await res.json()
        console.log(data)
        console.log(item)
        renderBlogs(data)
    }catch(error){
        console.log(error)
    }
}


form.addEventListener("submit" , (e) => {
    e.preventDefault()
    getData(input.value)
})