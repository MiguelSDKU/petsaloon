function displayRow() {
  let table = document.getElementById("pets");
  let rows = "";
  for (let objects = 0; objects < pets.length; objects++) {
    rows += `
      <tr id="${objects}">
        <th scope="row" >${objects + 1}</th>
        <td>${pets[objects].name}</td>
        <td>${pets[objects].age}</td>
        <td>${pets[objects].gender}</td>
        <td>${pets[objects].breed}</td>
        <td>${pets[objects].color}</td>
        <td class="td-flex">  
          <button class="btn btn-danger" onClick="deletePet(${objects});">Delete</button>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-secondary">Archive</button>

        </td>
      </tr>
    `;
  }
  table.innerHTML = rows;
}
