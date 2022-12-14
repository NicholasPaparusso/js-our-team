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
  email:"wayne@mail.com"
},

{
  name: "Angela Caroll",
  task:"Chief Editor",
  picture:"angela-caroll-chief-editor.jpg",
  email:"angela@mail.com"
},

{
  name: "Walter Gordon",
  task:"Office Manager",
  picture:"walter-gordon-office-manager.jpg",
  email:"walter@mail.com"
},

{
  name: "Angela Lopez",
  task:"Social Media Manager",
  picture:"angela-lopez-social-media-manager.jpg",
  email:"angelalopez@mail.com"
},

{
  name: "Scott Estrada",
  task:"Developer",
  picture:"scott-estrada-developer.jpg",
  email:"scottie@mail.com"
},

{
  name: "Barbara Ramos",
  task:"Graphic Designer",
  picture:"barbara-ramos-graphic-designer.jpg",
  email:"brb@mail.com"
},
]
  
for( let employed of employees){
  console.log(employed)
  for(let k in employed){
    console.log( k + ": " + employed[k])
  }
}