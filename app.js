let myLeads;
let url = "";
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
} else {
  myLeads = [];
}

tabBtn.addEventListener("click", saveTab);
deleteBtn.addEventListener("dblclick", deleteAll);
inputBtn.addEventListener("click", saveInput);

function saveInput(ev) {
  ev.preventDefault();
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  // ulEl.innerHTML = ""; if using OPTION 3
  renderLeads(myLeads);
};

function saveTab(ev) {
  ev.preventDefault();
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
}

function deleteAll(ev) {
  ev.preventDefault();
  localStorage.clear();
  myLeads = [];
  // ulEl.innerHTML = ""; or this will also clear the DOM
  renderLeads(myLeads);
}

function renderLeads(array) {
  // option 1*********

  let listItems = "";
  for (let i = 0; i < array.length; i++) {
    listItems += `
            <li>
                <a target="_blank" href="${array[i]}">
                    ${array[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
  inputEl.value = "";

  // option 2******************
  // let li = document.createElement("li");
  // li.textContent = inputEl.value;
  // ulEl.append(li);
  // inputEl.value = "";
  // console.log(myLeads);

  // option 3*******************

  // for (let i = 0; i < array.length; i++) {
  //   let li = document.createElement("li");
  //   li.textContent = array[i];
  //   ulEl.append(li);
  //   inputEl.value = "";
  // }
}
