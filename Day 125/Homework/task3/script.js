const button = document.querySelector("button");
const visitCount = document.getElementById("visitCount");

// get visits or start at 0
let visit = localStorage.getItem("visit");

if (visit) {
  visit = Number(visit)
  visit += 1
} 

localStorage.setItem("visit", visit);
visitCount.textContent = visit;

button.addEventListener("click", (e) => {
  e.preventDefault();
  visit = 0;
  localStorage.setItem("visit", visit);
  visitCount.textContent = visit;
});
