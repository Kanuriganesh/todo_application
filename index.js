const localStorageData = localStorage.getItem("data")
const parsedData = JSON.parse(localStorageData) || []
console.log(parsedData , "this is from local storage")

var usersDataList = []  //storing the usersList

const inputData = document.getElementById("inputData"); //Input element 

const deleteItemFromusersDataList = (uniqueId) => {
    console.log('delete item from the list')
    const newData = usersDataList.filter(each => each.id != uniqueId)
    console.log(newData, "delete the list item")
    usersDataList = newData;
    localStorage.setItem("data", JSON.stringify(usersDataList))
    const childElement = document.getElementById(uniqueId)
    document.getElementById("list").removeChild(childElement)

}
const creatingThroughusersDataList = (eachItem) => {   
    console.log("this is new items section")
    console.log(eachItem)
    const listItem = document.createElement("li");   // creating a list item       
    listItem.id = eachItem.id;
    const spamEle = document.createElement("span")
    spamEle.textContent = eachItem.input;   // inserting the text to the list item   
    listItem.appendChild(spamEle)
    const checkBox = document.createElement("input") // creating a checkbox     
    checkBox.checked = eachItem.isChecked ? true : false;  // showing checked option based on localStorage   
    checkBox.type = 'checkbox';  // adding the type of the check box   
    checkBox.classList.add("checkboxStyling")
    listItem.prepend(checkBox) // adding the checkbox to the list item   
    checkBox.addEventListener("click", function () {
        if (checkBox.checked) {      
            eachItem.isChecked = true
            spamEle.classList.add("specialStyling")  

        }
        else {
             eachItem.isChecked =false
            spamEle.classList.remove("specialStyling")
        }   
        const new_data  =  usersDataList.map(each =>{
             if(each.id === eachItem.id){
                return eachItem
             }
             else{
                 return each;
             }
        }) 
        usersDataList = new_data
        localStorage.setItem("data", JSON.stringify(usersDataList))
       
    })

    const bttnElem = document.createElement("button"); // creating the button element 
    bttnElem.textContent = 'Delete'; // adding the text to the button element   

    listItem.appendChild(bttnElem)   // adding the button element to the  list element      
    bttnElem.addEventListener("click", function () {
        deleteItemFromusersDataList(eachItem.id)  // deleting the list item from the usersDataList
    })
    document.getElementById("list").appendChild(listItem)     // adding the list item to the main list 
    listItem.classList.add("listClass") // adding the class to the main list    
    inputData.value = ''  // emptying the input element   
}
const userData = () => {
    if (!inputData.value) {
        return '';
    }
    const newItem = {
        input: inputData.value,
        id: Date.now(),
        isChecked :false
    }
    usersDataList.push(newItem);  //inserting the data into a list   
    localStorage.setItem("data", JSON.stringify(usersDataList))
    creatingThroughusersDataList(newItem)

}

inputData.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        userData();
    }
})

//initilzing the DOM from local storage 
    usersDataList = parsedData
    usersDataList.forEach(eachItem =>{
         creatingThroughusersDataList(eachItem)
    })