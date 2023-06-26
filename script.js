const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

add?.addEventListener("click", () => {
    console.log("Adding");
});

subtract?.addEventListener("click", () =>{
    console.log("Subtracting");
});

multiply?.addEventListener("click", () =>{
    console.log("Multiplying");
});

divide?.addEventListener("click", () =>{
    console.log("Dividing");
});