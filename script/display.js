// display.js
function displayRow() {
  let table = document.getElementById("pets");
  let rows = "";
  for (let objects = 0; objects < pets.length; objects++) {
    rows += `
      <tr>
        <th scope="row">${objects + 1}</th>
        <td>${pets[objects].name}</td>
        <td>${pets[objects].age}</td>
        <td>${pets[objects].gender}</td>
        <td>${pets[objects].breed}</td>
      </tr>
    `;
  }
  table.innerHTML = rows;
}
