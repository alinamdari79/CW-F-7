const tableBody = document.getElementById("tableBody");

const array = [
  { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
  { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
  { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
];
array.map((item) => {
  const row = tableBody.insertRow();
  row.style.backgroundColor = "lightgray";
  const nameCell = row.insertCell(0);

  const countCell = row.insertCell(1);

  const priceCell = row.insertCell(2);

  const discountCell = row.insertCell(3);
  nameCell.textContent = item.name;
  countCell.textContent = item.count;
  priceCell.textContent = item.pricePerOne;
  discountCell.textContent = item.discount;
});
// for (const element of array) {
//   let total =
//     (element.count * element.pricePerOne * (100 - element.discount)) / 100;
//   console.log(total);
//   element.total = total;
//   let per = (element.pricePerOne * (100 - element.discount)) / 100;
// }
console.table(array);
