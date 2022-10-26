
const carousel = document.getElementById('card-carousel');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
let printObject;

const employees = 
[
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
  name: "Wayne Barnett",
  task:"Founder & CEO",
  picture:"wayne-barnett-founder-ceo.jpg",
  email:"wayne@mail.com",
  cellNum:"2412741"
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


let counter = 0;  
for( let employed of employees){
  counter ++;
  for(let k in employed){
    printObject =
    `
    <div class="card position${counter}">
      <img src="./assets/img/${employed.picture}" alt="">
      <small class="mt-4" id="name" >${employed.name}</small>
      <small id="task">${employed.task}</small>
      <small>Contact:</small>
      <small> ${employed.email}</small>
      <small>${employed.cellNum}</small>
    </div>
    `
  };
  carousel.innerHTML+=printObject;
}


btnNext.addEventListener('click', function(){
  carouselSlideNext();
})
btnPrev.addEventListener('click', function(){
  carouselSlidePrev();
})


let printedCards = document.getElementsByClassName('card');
let carouselCounter = 1;
let card;

function carouselSlideNext(){
  for (let i = 0; i < printedCards.length+1 ; i++){
    
    card = printedCards[i];
    carouselCounter++;
    card.className = `card position${carouselCounter}`; 
    if(carouselCounter > printedCards.length){
      carouselCounter= 1;
      card.className = `card position${carouselCounter}`;
      }

  }
}

// function carouselSlidePrev(){

//   for (let i = 0; i < printedCards.length; i++){
//     card = printedCards[i];
    
//     if(carouselCounter === 1){
//       carouselCounter = printedCards.length;
//       card.className = `card position${carouselCounter}`
//       }else if(carouselCounter !== 1){
//         carouselCounter--; 
//         card.className = `card position${carouselCounter}`
//       }
//   }
// }


