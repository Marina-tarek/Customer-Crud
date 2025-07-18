var content1 = document.createElement("div");
content1.innerHTML = `
<div class="curd-head">
<div class="search"><label for="search">search : </label> <input type="text" id="search"> <button>Search <i class="fa-solid fa-magnifying-glass"></i></button> </div> 
<div class="inputs"><label for="Fname"> First Name : </label><input type="text" id="Fname" >
<label for="Lname"> last Name : </label><input type="text" id="Lname">
<label for="age">Age : </label> <input type="number" id="age"> <button class="btn-add">Add <i class="fa-solid fa-user-plus"></i></button></div>
 </div>`
document.body.appendChild(content1)
var content2 = document.createElement("div")
content2.innerHTML = `<div class="crud-content"><table >
<thead>
 <tr><th>First Name</th><th>Last Name</th><th>Age</th><th colspan="2">Actions</th></tr>
 </thead>
 <tbody class="text-center">
 </tbody>
</table></div>`
document.body.appendChild(content2)

var firstName = document.getElementById("Fname")
var lastName = document.getElementById("Lname")
var Age = document.getElementById("age")
var btnAdd = document.querySelector(".btn-add")
var btnDelete = document.querySelector(".btn-delete")
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
    console.log("hello");
    var people = {
        fname: firstName.value,
        lname: lastName.value,
        age: Age.value

    }
    // if((firstName.value!=null) && ( lastName.value !=null) &&(Age.value !=null)){}
    console.log(people);
    custmerList.push(people)
    console.log(custmerList);

    clearInputs()
    showCstomer()
    localStorage.setItem("customer", JSON.stringify(custmerList))
}

function clearInputs() {
    firstName.value = null,
        lastName.value = null,
        Age.value = null
}

function showCstomer() {
    var cartona = '';
    for (let i = 0; i < custmerList.length; i++) {
        cartona += ` <tr>
<td >${custmerList[i].fname}</td>
<td>${custmerList[i].lname}</td>
<td>${custmerList[i].age}</td>
<td class="text-center"><button class="edit">Edit <i class="fa-solid fa-pen-to-square"></i></button><button class="btn-delete" onclick="deleteCustomer(${i})">Delete <i class="fa-solid fa-trash"></i></button></td>
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