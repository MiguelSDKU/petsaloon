function save(item) {
  let list = read();
  list.push(item);

  console.log(item);
  let val = JSON.stringify(list);
  console.log(val);
  localStorage.setItem("services", val);
}

function read() {
  let data = localStorage.getItem("services");
  console.log(data);
  if (!data) {
    return [];
  } else {
    let list = JSON.parse(data);
    return list;
  }
}

function getServices() {
  //get list from LS
  let servicesList = read();
  console.log(servicesList);
  let option;

  //travel the array of services
  for (let i = 0; i < servicesList.length; i++) {
    let service = servicesList[i];

    option += `

              <option value="" >${service.title}</option>

    `;
  }

  //create the HTML <option>
  $("#txtService").append(option);
}
//notification to each alert
