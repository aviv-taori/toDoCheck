let text =""

function clickCheck(){
   let value1 = document.getElementById("addTask").value;
   console.log(value1)
   text += 
           ` <input type="checkbox" id="${value1}" name="${value1}" value="${value1}">
            <label for="${value1}" class="checks> ${value1}</label><br>`
   document.getElementById("change").innerHTML = text;
}
