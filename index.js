let buttonCleare = document.getElementById("cleare");
let buttonDelete = document.getElementById("delete");
let buttonAddRule = document.getElementById("addRule");
let buttonApply = document.getElementById("apply");

let inputField = document.getElementById("field");
let inputOperator = document.getElementById("operator");
let inputValue = document.getElementById("value");

let rools = document.getElementById("rools");

buttonCleare.addEventListener("click", cleareFields);
buttonAddRule.addEventListener("click", addRule);
buttonDelete.addEventListener("click", deleteRule);
buttonApply.addEventListener("click", apply);

function cleareFields() {
    inputField.selectedIndex = 0;
    inputOperator.selectedIndex = 0;
    inputValue.value = inputValue.getAttribute("placeholder");    
};

function deleteRule(){    
    if (rools.hasChildNodes()){
    rools.removeChild(rools.lastChild);
    }
}

function addRule() {
    let validate = validateFields();
    if (validate) {
        let newRool = document.createElement("li");
        const gitHubUrl = "https://api.github.com/search/repositories";
        let paramField = inputField.value;
        let paramOperator = inputOperator.value;
        let paramValue = inputValue.value;
        newRool.innerText = gitHubUrl+"?q="+paramField+paramOperator+paramValue;
        newRool.setAttribute("class","list-group-item");
        rools.appendChild(newRool);
    }
}

function validateFields() {
    let checkFields = (inputField.selectedIndex != 0) && (inputOperator.selectedIndex != 0) 
                        && (inputValue.value != inputValue.getAttribute("placeholder"));
    if (checkFields == true) {return true} else {return false};                     
}

function apply() {   
    let rool = rools.hasChildNodes() ? rools.lastChild.textContent : null;
    let data = {rool: rool};
    console.log(rool)  
    // let url = "http://localhost/gitTask/server.php";
    // fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, cors, *same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         "Access-Control-Allow-Origin": "http://localhost",
    //         'Content-Type': 'application/json',
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrer: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    // })
    // .then(response => response.json())
    // .then(res => console.log(res+'test'))
    // .catch(er=>console.log(er)); // парсит JSON ответ в Javascript объект

}