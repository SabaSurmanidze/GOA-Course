// საიტზე გქონდეთ ღილაკი, რომელზე დაჭერისას მანამდე არსებულ დივში
//  დაემატება პარაგრაფი, ხოლო იმ პარაგრაფში დაემატება ტექსტი,

// bonus:
// ასევე დივში დაემატება ღილაკიც და იმ ღილაკშიც ტექსტი.

function showText(){
    let main = document.getElementById("div")
    let NewElem = document.createElement("h1")
    let text = document.createTextNode("new text")
    main.appendChild(NewElem)
    NewElem.append(text)
    let newbtn = document.createElement("button")
    let text2 = document.createTextNode("click")
    main.appendChild(newbtn)
    newbtn.appendChild(text2)
}

