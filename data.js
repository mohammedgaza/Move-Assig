let data = {};
let dataDisplayHtml = "";

/*
let dataDisplayHtml1 = "";
let dataDisplayHtml2 = "";
let dataDisplayHtml3 = "";

const dataDisplayElement = document.getElementById("left");
const dataDisplayElement1 = document.getElementById("mid");
const dataDisplayElement2= document.getElementById("right");
const dataDisplayElement3 = document.getElementById("des");*/

const dataDisplayElement = document.getElementById("data-display");


const urlSearchParams = new URLSearchParams(window.location.search);
data = Object.fromEntries(urlSearchParams.entries());
 
function displayData() {
  Object.entries(data).forEach((pair) => {
    var key = pair[0];
    var value = pair[1];
        
    dataDisplayHtml += `<p>${value}</p>`; 
   // <img src = ${value} alt =".." />`;
    


   /* dataDisplayHtml += `<p style="color:blue; margin: auto;"> ${(value)} </p>`;
  /* dataDisplayHtml  += `<p style="color:blue; margin-left: -40px;margin-top: -60px;"> ${(value)} </p>`;
   dataDisplayHtml1 += `<p style="color:red; margin-left: 60px; padding: 5px 10px;"> ${(value)} </p>`;
   dataDisplayHtml2 += `<p style="color:blue; margin-left: -50px;margin-top: 0px;"> ${(value)} </p>`;
   dataDisplayHtml3 += `<p style="color:blue; margin-left: -40px;margin-top: -60px; "> ${(value)} </p>`;
*/
  });
   
   
   /*
  if (dataDisplayElement) dataDisplayElement.innerHTML = dataDisplayHtml;
  if (dataDisplayElement1) dataDisplayElement1.innerHTML = dataDisplayHtml1;
  if (dataDisplayElement2) dataDisplayElement2.innerHTML = dataDisplayHtml2;
  if (dataDisplayElement3) dataDisplayElement3.innerHTML = dataDisplayHtml3;*/
  if (dataDisplayElement) dataDisplayElement.innerHTML = dataDisplayHtml;
  
}

displayData();

const urlParam = new URLSearchParams(window.location.search)
let data1 = {};
data1 = Object.fromEntries(urlParam.entries());
console.log(data1)

function card(data1)
{

    const card = document.querySelector(".card")
    card.innerHTML = `
    
         <img src = ${data1.file} alt =".." />

    
   
    `
}
 card(data1)

