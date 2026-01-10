// 1) გამოიყენეთ https://dummyjson.com/docs/posts ეს API იმისათის რომ,
//  შეძლოთ პოსტების წამოღება და დარენდერება, როგორც ფბზე ხდება 
//   news feed. შექმენით navigation სადაც გექნებათ რამდენიმე ლინკი, 
//   News Feed, Registration, Authorization



const blogs = document.getElementById("blogs")


function renderBlogs(data) {
    for (post of data.posts) {
        console.log(post)    
        blogs.innerHTML += `
        <h1>tittle: ${post.title}</h1>
        <h7>tittle: ${post.body}</h7>
        <h1>tittle: ${post.tags[0]}</h1>

        
        `
    }
}

async function getData() {
    try{
        const res = await fetch('https://dummyjson.com/posts')
        const data = await res.json()
        const posts = data.posts
        console.log(posts)
        console.log(data)
        renderBlogs(data)


    }catch(error) {
        console.log(error)
    }
}

getData()
