var content1 = document.createElement("div");
content1.innerHTML = `
<div class="curd-head">
<div class="search"> <input  type="text"  class="search-input" placeholder="search only by one letter character.."> <button class="btn-search" onclick="searchCustomer()">Search <i class="fa-solid fa-magnifying-glass"></i></button> </div> 
<div class="inputs"><label for="Fname"> First Name : </label><input type="text" id="Fname" >
<label for="Lname"> last Name : </label><input type="text" id="Lname">
<label for="age">Age : </label> <input type="number" id="age"> 
<button class="btn-add">Add <i class="fa-solid fa-user-plus"></i></button>
<button onclick="saveUpdating()"id="saveUpdate" class="display-none">SaveUpdate <i class="fa-solid fa-floppy-disk"></i></button> 
</div>
</div>`
document.body.appendChild(content1)
var content2 = document.createElement("div")
content2.innerHTML = `<div class="crud-content"><table >
<thead> <tr><th>First Name</th><th>Last Name</th><th>Age</th><th colspan="2">Actions</th></tr> </thead>
 <tbody class="text-center">
 </tbody>
</table></div>`
document.body.appendChild(content2)

var firstName = document.getElementById("Fname")
var lastName = document.getElementById("Lname")
var Age = document.getElementById("age")
var btnAdd = document.querySelector(".btn-add")
var btnDelete = document.querySelector(".btn-delete")

var btnSearch = document.querySelector(".btn-search")
var saveUpdate = document.querySelector("#saveUpdate")
var searchInput = document.querySelector(".search-input")
btnAdd.setAttribute("onclick", "addCustomer()")

var custmerList;

///geded
if (localStorage.getItem("customer") == null) {
    custmerList = [];
} else {
    custmerList = JSON.parse(localStorage.getItem("customer"))
    showCstomer()
}

function addCustomer() {

    var people = {
        fname: firstName.value,
        lname: lastName.value,
        age: Age.value,
        isEdit: false
    }
    console.log(firstName.value);

    if ((firstName.value != "") && (lastName.value != "") && (Age.value != "")) {
        console.log(people);
        custmerList.push(people)
        console.log(custmerList);
        clearInputs()
        showCstomer()
        localStorage.setItem("customer", JSON.stringify(custmerList))
    } else {
        alert("you Must fill all information detalies")
    }

}

function clearInputs() {
    firstName.value = null,
        lastName.value = null,
        Age.value = null
}

function showCstomer() {
    var cartona = '';
    for (let i = 0; i < custmerList.length; i++) {
        cartona += ` <tr><td id="one" class="info"><div>${custmerList[i].fname}</div><input id="f${i}" type="text" value="${custmerList[i].fname}" class="test display-none"></td>
<td id="two" class="info"><div>${custmerList[i].lname}</div><input id="l${i}" type="text" value="${custmerList[i].lname}" class="test display-none"></td>
<td id="three" class="info"><div>${custmerList[i].age}</div><input id="a${i}"  type="text" value="${custmerList[i].age}" class="test display-none"></td>
<td class="text-center"><button onclick="editInformation(${i})" id="btn-edit">Edit <i class="fa-solid fa-pen-to-square"></i></button>
<button onclick="saveupdating(${i})"id="btn-save" class="display-none">Save <i class="fa-solid fa-floppy-disk"></i></button>
<button class="btn-delete" onclick="deleteCustomer(${i})">Delete<i class="fa-solid fa-trash"></i></button></td>
</tr>`
    }
    document.querySelector("tbody").innerHTML = cartona
}

function deleteCustomer(deleteIndex) {
    custmerList.splice(deleteIndex, 1)
    console.log(custmerList);
    showCstomer()
    localStorage.setItem("customer", JSON.stringify(custmerList))
}

function searchCustomer() {
    isValid = false;
    var term = searchInput.value;
    console.log(searchInput.value);
    cartona = ``
    for (let i = 0; i < custmerList.length; i++) {
        if (custmerList[i].fname.toLowerCase().includes(term.toLowerCase()) == true || custmerList[i].lname.toLowerCase().includes(term.toLowerCase()) == true) {
            cartona += ` <tr>
<td class="info">${custmerList[i].fname}</td>
<td class="info">${custmerList[i].lname}</td>
<td class="info">${custmerList[i].age}</td>
<td class="text-center"><button onclick="editInformation(${i})" id="btn-edit">Edit <i class="fa-solid fa-pen-to-square"></i></button>
<button onclick="saveUpdating(${i})" id="btn-save" class="display-none">Save <i class="fa-solid fa-floppy-disk"></i></button>
<button class="btn-delete" onclick="deleteCustomer(${i})">Delete <i class="fa-solid fa-trash"></i></button></td>
</tr>`
            isValid = true
        } else {
            isValid = false
        }
    }
    document.querySelector("tbody").innerHTML = cartona
    if (searchInput.value == '') {
        alert("This input is empty")
        console.log(custmerList);
        custmerList = JSON.parse(localStorage.getItem("customer"))
        showCstomer()
    }
    if (isValid == false) {
        alert("Not found in First name and last name ")
        showCstomer()
    }
    clearSearch()
}


function clearSearch() {
    searchInput.value = null
}

////////// var updateIndex;
function editInformation(x) {
    ///////// updateIndex=x;
    var btnEdit = document.querySelectorAll("#btn-edit")[x]
var btnSave = document.querySelectorAll("#btn-save")[x]
 btnEdit.classList.add("display-none")
 btnSave.classList.remove("display-none")
 var row = document.querySelectorAll("tbody tr")[x]
var ar=[0,1,2]
var tabledesc;
var tableInput;
for (let i = 0; i < ar.length; i++) {
tabledesc=row.querySelectorAll("div")[i]
console.log(tabledesc);
 tableInput=tabledesc.nextElementSibling
console.log(tableInput);
    tabledesc.classList.add("display-none")
    tableInput.classList.remove("display-none")
}

    //////////////// // firstName.value = custmerList[x].fname
    //////////////// lastName.value = custmerList[x].lname
    //////////// Age.value = custmerList[x].age
       ////btnAdd.classList.add("display-none")
    /////////saveUpdate.classList.remove("display-none")
    
    //     for (let i = 0; i < custmerList.length; i++) {
    //     var input=document.getElementsByTagName("td")[btn]

    //     }
    //   console.log(input.value);
    // var rowInput=document.querySelectorAll("tbody tr td")
    // console.log(row);
    // rowInput.inputs.classList.remove("display-none")
    //     console.log(btn);

}


function saveupdating(x) {
    var btnEdit = document.querySelectorAll("#btn-edit")[x]
var btnSave = document.querySelectorAll("#btn-save")[x]
 btnEdit.classList.remove("display-none")
 btnSave.classList.add("display-none")

  var row = document.querySelectorAll("tbody tr")[x]
var ar=[0,1,2]
var tabledesc;
var tableInput;
for (let i = 0; i < ar.length; i++) {
tabledesc=row.querySelectorAll("div")[i]
console.log(tabledesc);
 tableInput=tabledesc.nextElementSibling
console.log(tableInput);
    tabledesc.classList.remove("display-none")
    tableInput.classList.add("display-none")

    console.log(row.querySelectorAll(".test")[i].value);

}
    custmerList[x].fname = row.querySelectorAll(".test")[0].value
   custmerList[x].lname = row.querySelectorAll(".test")[1].value
    custmerList[x].age = row.querySelectorAll(".test")[2].value
showCstomer()


   //////////////////////////////// console.log("hello");
   /////////////////////////////// btnAdd.classList.remove("display-none")
    ///////////////////////////saveUpdate.classList.add("display-none")
    ///////////////////custmerList[updateIndex].fname = firstName.value
   ///////////////// custmerList[updateIndex].lname = lastName.value
    //////////////////////////custmerList[updateIndex].age = Age.value
    /////////////////////showCstomer()
    ///////////////////localStorage.setItem("customer", JSON.stringify(custmerList))
   /////////////////// clearInputs()
    // var btnEdit = document.querySelectorAll("#btn-edit")
    // var btnSave = document.querySelectorAll("#btn-save")
    // console.log(x);
    // btnEdit[x].classList.remove("display-none")
    // btnSave[x].classList.add("display-none")



 

}




////------------------------------------------------
// function updateInput() {
//     // var inputInfo{
//     //     editFName:Fname
//     // }
// }

//-------------------------------------
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }


//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>



/*
local storage  related to browser where open as google chrom will not found in firefox 
حسب المكان الي اتفتحت عليه
setitem
get item 
remove item
clear(format)
lenght عدد الكي المخزنة في 

session storage
الفرق عن 
locaol storage 
لو قفلت ال صفحة بتاعتي
session storage when close tab (browser) will be cleared
but
locaol storage when close the brower or tab will not cleared 
*/