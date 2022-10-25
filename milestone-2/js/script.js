/* 
Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer				scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg

**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card 
*/

const employees = 
[
{
  name: "Wayne Barnett",
  task:"Founder & CEO",
  picture:"wayne-barnett-founder-ceo.jpg",
  email:"wayne@mail.com",
  cellNum:"2412741"
},

{
  name: "Angela Caroll",
  task:"Chief Editor",
  picture:"angela-caroll-chief-editor.jpg",
  email:"angela@mail.com",
  cellNum:"3141141"
},

{
  name: "Walter Gordon",
  task:"Office Manager",
  picture:"walter-gordon-office-manager.jpg",
  email:"walter@mail.com",
  cellNum:"8184141"
},

{
  name: "Angela Lopez",
  task:"Social Media Manager",
  picture:"angela-lopez-social-media-manager.jpg",
  email:"angelalopez@mail.com",
  cellNum:"114114141"
},

{
  name: "Scott Estrada",
  task:"Developer",
  picture:"scott-estrada-developer.jpg",
  email:"scottie@mail.com",
  cellNum:"83489141"
},

{
  name: "Barbara Ramos",
  task:"Graphic Designer",
  picture:"barbara-ramos-graphic-designer.jpg",
  email:"brb@mail.com",
  cellNum:"09230981024141"
},
]

const carousel = document.getElementById('card-carousel');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
let printObject;
let counter = 0;  
for( let employed of employees){
  console.log(employed)
  counter ++;
  for(let k in employed){
    console.log( k + ": " + employed[k]);
    console.log(counter)
    printObject =
    `
    <div class="card position${counter}">
      <img src="./assets/img/${employed.picture}" alt="">
      <small class="mt-4" id="name" >${employed.name}</small>
      <small id="task"> Founder & CEO</small>
      <small>Contact:</small>
      <small> ${employed.email}</small>
      <small>${employed.cellNum}</small>
    </div>
    `
  };
  carousel.innerHTML+=printObject;
}

