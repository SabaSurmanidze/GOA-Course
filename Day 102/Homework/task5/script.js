// 5. დაამატეთ მოვლენის მსმენელი სათაურში, რომელიც pointerover-ზე კონსოლში გამოიტანს „Mouse is here!“ ტექსტს.




const btn = document.getElementById("btn")

function console(){
    console.log('Mouse is here!')
}
btn.addEventListener('pointerover' , console )