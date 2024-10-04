function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");
}
let put = document.getElementById("changeThem")
console.log(put)
put.addEventListener('click', () =>  myFunction())