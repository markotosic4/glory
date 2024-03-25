import { sectionStep3,btnStep3, btnBackToStep2 } from "./script.js";
import { payment } from "./data.js";

export function section3 () {
let form = document.createElement("form");
let cash = document.createElement("div");
cash.id = "cashdiv";
let cashImg = document.createElement("img"); 
let cashText = document.createElement("p")
let cashRadio = document.createElement("input");
cashRadio.type ="radio";
cashRadio.name = "payment";
cashRadio.value = "cash"
cashRadio.id = "cash";
cashImg.src = `${payment.cash.img}`;
cashText.innerHTML=`${payment.cash.label}`
cash.append(cashImg, cashText, cashRadio);

let radioButtons = document.getElementsByName("payment");


let card = document.createElement("div");
card.id = "carddiv";
let cardImg = document.createElement("img"); 
let cardText = document.createElement("p")
let cardRadio = document.createElement("input");
cardRadio.type ="radio";
cardRadio.name = "payment";
cardRadio.value = "card";
cardRadio.id = "card";
cardImg.src = `${payment.card.img}`;
cardText.innerHTML=`${payment.card.label}`
card.append(cardImg, cardText, cardRadio);

form.append(cash, card, btnStep3, btnBackToStep2);

sectionStep3.append(form);
sectionStep3.style.display = "none";
document.body.append(sectionStep3);
}