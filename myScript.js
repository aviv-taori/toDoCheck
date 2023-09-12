let text ="";
let mystyley ;

function clickNewCheck(){
   let value1 = document.getElementById("addTask").value;
   console.log(value1)
   text += 
           ` <input type="checkbox" id="${value1}" name="${value1}" value="${value1}" onclick="clickOnCheck('${value1}')">
            <label id="${value1}lab"  for="${value1}" class="checks" style="text-decoration: none;"> ${value1}</label><br>`
   document.getElementById("change").innerHTML = text;
}

function clickOnCheck(value2){
    

    let checkBox = document.getElementById(value2);
    
    let deltext = document.getElementById(`${value2}lab`);

    if (checkBox.checked == true){
        deltext.style.textDecoration = "line-through" 
      } else if (checkBox.checked != true){
        deltext.style.textDecoration = "none"  
      }
}
