const title = document.getElementById("title")
const note = document.getElementById("note")
const preview = document.querySelector(".preview")
const tags = document.querySelectorAll(".tag")
const notePreview = document.querySelector(".note-preview")
const addNote = document.getElementById("Add")
let titleh1 = document.getElementById("title-h1")
let noteh1 = document.getElementById("note-p")
let tagp = document.getElementById("tag-h2")
let targetValue = ""


tags.forEach(tag => {
    tag.addEventListener("click" , (e) => {
        targetValue = e.target.textContent
    })
})




addNote.addEventListener("click" , () => {


    

    notePreview.style.display = "flex"

    const objectNote = {
            title: title.value,
            note: note.value,
            tags: targetValue
    }

    if (objectNote.title == "" && objectNote.note == "" && objectNote.tags =="" ) {
        notePreview.style.display = "none"
    }

        console.log(objectNote)
        titleh1.textContent =  `Tittle : ${objectNote.title}`
        noteh1.textContent = ` Description : ${objectNote.note}`
        tagp.textContent = objectNote.tags

    title.value = ""
    note.value = ""
    targetValue = ""
})







