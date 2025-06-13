// 8. საიტზე დაამატეთ პარაგრაფი, რომელზე მაუსის მიტანის დროსაც ის ჩანაცვლდება სხვა პარაგრაფით და განსხვავებული ტექსტით.

const p = document.getElementById("p")

p.addEventListener("mouseover" , function () {
    p.textContent = "bye"
})