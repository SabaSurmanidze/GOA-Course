function checker(){
    let check1 = document.getElementById("check1").checked
    let check2 = document.getElementById("check2").checked
    let h1 = document.getElementById("result") 
    result = check1 && check2
    h1.textContent += result
}