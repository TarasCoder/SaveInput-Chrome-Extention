let myLeads = [];
let url = "";
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const urlBtn = document.getElementById("url-btn");

urlBtn.addEventListener("click", getUrl);

inputBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  myLeads.push(inputEl.value);
  renderLeads();
});

function getUrl(ev) {
  ev.preventDefault();
  url = window.location.href;
  myLeads.push(url);
  renderLeads();
  console.log(myLeads)
}

function renderLeads() {
  // option 1*********

  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
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
  // let li = document.createElement("li");
  // for (let i = 0; i < myLeads.length; i++) {
  //   li.textContent = myLeads[i];
  //   ulEl.append(li);
  //   inputEl.value = "";
  // }
}
