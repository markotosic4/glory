import { flowers,gifts} from "./data.js";
import { section3 } from "./section3.js";

// CREATE SECTION ELEMENT
let sectionHero = document.createElement("section");
let sectionStep1 = document.createElement("section");
let sectionStep2 = document.createElement("section");
export let sectionStep3 = document.createElement("section");
let sectionStep4 = document.createElement("section");
let sectionFinal = document.createElement("section");

sectionHero.setAttribute("id", "hero");
sectionStep1.setAttribute("id", "step1");
sectionStep2.setAttribute("id", "step2");
sectionStep3.setAttribute("id", "step3");
sectionStep4.setAttribute("id", "step4");
sectionFinal.setAttribute("id", "stepFinal");



// CREATE  BTN ELEMENTS 
let btnHero =document.createElement("button");
let btnStep1 = document.createElement("button");
let btnBackToHero = document.createElement("button");
let btnStep2 = document.createElement("button");
let btnBackToStep1 = document.createElement("button");
export let btnStep3 = document.createElement("input");
btnStep3.type = "submit";
export let btnBackToStep2 = document.createElement("button");
let btnStep4 = document.createElement("button");
let btnReset = document.createElement("button");

let heroLogo = document.createElement("img");
heroLogo.src = "photos/GLORY-svg.svg";
heroLogo.classList.add("logo");

let title1 = document.createElement("h1");
let title2 = document.createElement("h1");
let title3 = document.createElement("h1");
let title4 = document.createElement("h1");

title1.classList.add("title");
title2.classList.add("title");
title3.classList.add("title");
title4.classList.add("title");

sectionStep1.append(title1);
sectionStep2.append(title2);
sectionStep3.append(title3);
sectionStep4.append(title4);

sectionHero.append(heroLogo,btnHero);
document.body.append(sectionHero);

sectionHero.classList.add("section", "row");
sectionStep1.classList.add("section","row");
sectionStep2.classList.add("section","row");
sectionStep3.classList.add("section","row");
sectionStep4.classList.add("section","row");
btnHero.classList.add("btn","col-12","btnHero");


 btnStep1.classList.add("btn","col-12");
 btnStep2.classList.add("btn","col-12");
 btnStep3.classList.add("btn","col-12");
 btnStep4.classList.add("btn","col-12");
 btnBackToHero.classList.add("btn","col-12","btn2");
 btnBackToStep1.classList.add("btn","col-12","btn2");
 btnBackToStep2.classList.add("btn","col-12","btn2");
 btnReset.classList.add("btn","col-12","btn2");
 


sectionStep1.setAttribute("id", "step1");
btnHero.innerHTML = " Kreiraj svoj buket";
btnStep1.innerHTML = "nastavi";
btnBackToHero.innerHTML = "vrati se";
btnStep2.innerHTML = "nastavi";
btnBackToStep1.innerHTML = "vrati se";
btnStep3.value = "nastavi";
btnBackToStep2.innerHTML = "vrati se";
btnStep4.innerHTML = "Poruči";
btnReset.innerHTML = "Resetuj";

//////////////////////////////////////////////////////////////////
// CREATION  THE FINAL STEP
let ok = document.createElement("img");
ok.src = "photos/check-mark 1.png";
let text = document.createElement("h1");
text.innerHTML= "hvala<br>na poverenju";
sectionFinal.style.display = "none";
document.body.append(sectionFinal);


/////////////////////////////////////////////////////////////////////
let numberOfLilies = 0;
let numberOfRoses = 0;
let numberOfGerberas = 0;
let sum = 0;
///////////////////////////////////////////


// SECTION 1
///////////////////////////////////////////////////////////////////

    
    for(let i=0; i< flowers.length; i++){
        let article = document.createElement("article");
        article.classList.add("col-12");
        article.setAttribute("id", `${flowers[i].name}`);
        let img = document.createElement("img");
        let div = document.createElement("div");
        let label = document.createElement("label");
        let p = document.createElement("p");
        p.innerHTML = `cena po cvetu je ${flowers[i].price}`
        let div2 = document.createElement("div");
        let buttonMinus = document.createElement("button");
        let span = document.createElement("span");
        let buttonPlus = document.createElement("button");
        div2.append(buttonMinus, span, buttonPlus);
        div2.id = "div2"
        div.append(label, p, div2);
        span.id = `${flowers[i].label}`;
        span.innerHTML =0;
         let counter = 0;
        buttonPlus.id = `plus${flowers[i].label}`
        buttonMinus.id = `minus${flowers[i].label}`
        buttonMinus.innerHTML="-";
        buttonPlus.innerHTML="+";
        img.setAttribute("src", `${flowers[i].img}`)
        label.setAttribute("for", `${i}`);
        label.innerHTML=`${flowers[i].name}`;
        buttonPlus.addEventListener("click", plus);
        function plus () {
              if(buttonPlus.id == "plusgerber") {
                numberOfGerberas++;
                span.innerHTML = `${numberOfGerberas}`;
            } else if(buttonPlus.id == "pluslily") {
                 numberOfLilies++;
                 span.innerHTML = `${numberOfLilies}`;
            }else if(buttonPlus.id == "plusrose"){
                numberOfRoses++; 
                span.innerHTML = `${numberOfRoses}`;
            }  
            flowers.forEach( flower => {
                if(flower.label == span.id) {
                    sum += flower.price;
                }
            });
        }
        buttonMinus.addEventListener("click", ()=>{
                  if(buttonMinus.id == "minusgerber" && numberOfGerberas > 0) {
                    numberOfGerberas--;
                    span.innerHTML = `${numberOfGerberas}`;
                } else if(buttonMinus.id == "minuslily" && numberOfLilies > 0) {
                     numberOfLilies--; 
                     span.innerHTML = `${numberOfLilies}`;
                }else if(buttonMinus.id == "minusrose" && numberOfRoses > 0){
                    numberOfRoses--;
                    span.innerHTML = `${numberOfRoses}`;
                }  
                flowers.forEach( flower => {
                    if(flower.label == span.id && span.innerHTML > 0) {
                        sum -= flower.price;
                    }
                });
           
        })
    
        
        article.append(img, div);
        sectionStep1.append(article);
    }

    
    sectionStep1.append(btnStep1,btnBackToHero)
    sectionStep1.style.display = "none";

document.body.append(sectionStep1);

/////////////////////////////////////////////////////


//////////////////////////////////////
// SECTION 2
let additionalGifts = [];

for(let i=0; i< gifts.length; i++){
    let article = document.createElement("article");
    article.setAttribute("id", `${gifts[i].name}`);
    let img = document.createElement("img");
    img.setAttribute("src", `${gifts[i].img}`)
    let div = document.createElement("div");
    let label = document.createElement("label");
    div.append(label);
    let div2 = document.createElement("div");
    let input = document.createElement("input");
    let btnAdd = document.createElement("button");
    btnAdd.classList.add("addBtn")
    btnAdd.innerHTML= "dodaj";
    div2.append(btnAdd, input);
    btnAdd.setAttribute("id", `${gifts[i].klasa}`)

    input.setAttribute("id", `checkbox${gifts[i].name}`);
    input.setAttribute("type", "checkbox");
    label.innerHTML=`${gifts[i].name} +${gifts[i].price}`;
    
    article.append(img, div, div2);
    sectionStep2.append(article);
    sectionStep2.style.display="none";

    btnAdd.addEventListener("click", ()=>{
        gifts.forEach(gift => {
            if(gift.klasa == btnAdd.id) {
                additionalGifts.push(`${gift.name}`)
                sum += gift.price;
            }
        })
    });
}

sectionStep2.append(btnStep2,btnBackToStep1)
 document.body.append(sectionStep2);

////////////////////////////////////////////////////////////

//////////////////////////////////////
// SECTION 3
section3();

//////////////////////////////////////////////////////////////////
//////////////////////////////////////
// SECTION 4
let bouquet = document.createElement("h3");
bouquet.innerHTML= "buket:"
sectionStep4.append(bouquet);
sectionStep4.style.display = "none";


let giftTitle = document.createElement("h3");
giftTitle.innerHTML= "dodatni pokloni:"


let giftDiv = document.createElement("div");


document.body.append(sectionStep4);

/////////////////////////////////////////////////

btnHero.addEventListener("click",()=> {
  sectionStep1.style.display = "block";
  sectionHero.style.display = "none";
  
  title1.innerHTML=`<span>korak 1/4</span><br>odaberite cveće:`;
  
  document.body.style.backgroundImage = "none";
});



///////////////////////

btnStep1.addEventListener("click", ()=>{
    sectionStep2.style.display="block";
    sectionStep1.style.display="none";
    title2.innerHTML=`<span>korak 2/4</span><br>dodatni pokloni:`;
    
    
})

btnStep2.addEventListener("click", ()=>{
    sectionStep2.style.display="none";
    sectionStep3.style.display="block";
    title3.innerHTML=`<span>korak 3/4</span><br>način plaćanja:`;
    
    
})

let priceWithDiscount = 0;
btnStep3.addEventListener("click", (e)=>{
    e.preventDefault();
    let card = document.getElementById("card");
    let cash = document.getElementById("cash");
   if(cash.checked){
        if(sum > 2000) {
            let popUp1 = document.createElement("button");
            let popUp2 = document.createElement("button");
            popUp1.innerHTML = "izaberi karticu";
            popUp2.innerHTML = "ne zelim";
            sectionStep3.append(popUp1, popUp2);
            popUp1.addEventListener("click", ()=>{
                cash.checked = false;
                card.checked = true;
                priceWithDiscount = sum - sum * 0.1;
                sectionStep3.style.display="none";
                sectionStep4.style.display="block";
            });
            popUp2.addEventListener("click", ()=>{
                sectionStep3.style.display="none";
                sectionStep4.style.display="block";
            })
            
        }
                sectionStep3.style.display="none";
                sectionStep4.style.display="block";

   } else if(card.checked) {
            if(sum > 2000) {
                priceWithDiscount = sum - sum * 0.1;
            }else{
                console.log(`cena je ${sum}`);
            }
            sectionStep3.style.display="none";
            sectionStep4.style.display="flex";
   } else {
        console.log(`Molim vas odaberite jednu od opcija`);
   }

   createBouquet(); 
   printGifts();
   title4.innerHTML=`<span>korak 4/4</span><br>vaša porudžbina:`;

   printTotalPrice();
   sectionStep4.append(btnStep4, btnReset);

});


btnStep4.addEventListener("click", ()=>{
    sectionStep4.style.display="none";
    sectionFinal.style.display = "flex";
    sectionFinal.append(ok, text);
    document.body.style.backgroundImage = "url(photos/background-finalstep-mob.png)";
    setTimeout(()=> {
        reset();
        sectionFinal.style.display = "none";
    }, 2500);
});

btnReset.addEventListener("click", reset);

function reset () {
    if(priceWithDiscount){
        priceWithDiscount = 0;
    }
       priceText.style.textDecoration="none";
        priceNum.style.textDecoration="none";
        divPrice.style.opacity = 1;
     
     cash.checked = false;
     card.checked = false;
     sectionStep4.style.display = "none"
     sectionHero.style.display = "flex";
     let spans = document.querySelectorAll("span");
     spans.forEach(span => {
        span.innerHTML = 0;
     });
     sum=0;
     numberOfLilies = 0;
     numberOfRoses = 0;
     numberOfGerberas = 0;
     let counter = 0;

     // reset radio button
     let radioB = document.getElementsByName("payment");
     for(let i=0;i<radioB.length;i++) {
         radioB[i].checked = false;
     }
     //////////////////////////////
     sectionStep4.querySelectorAll("img").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("div").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("p").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("p").forEach(img => {img.remove()});
      additionalGifts=[]; 
      document.body.style.backgroundImage = "url(photos/background-mob.png)";
      /* location.reload(); */
}




function createBouquet() {
    let divRoses = document.createElement("div");
    let divLilies = document.createElement("div");
    let divGerbera = document.createElement("div");

    if(numberOfRoses > 0) {
        for(let i=0; i<numberOfRoses;  i++) {
           let rose_ = document.createElement("img");
           divRoses.append(rose_);
           rose_.src = `photos/rose-mob.png`;
           sectionStep4.append(divRoses);
        }
    } 
     if(numberOfLilies > 0) {
        for(let i=0; i<numberOfLilies;  i++) {
            let lily = document.createElement("img");
            divLilies.append(lily);
            lily.src = `photos/lily-mob.png`;
            sectionStep4.append(divLilies);
         }
    } 
     if(numberOfGerberas > 0) {
        for(let i=0; i<numberOfGerberas;  i++) {
            let gerber = document.createElement("img");
            divGerbera.append(gerber);
            gerber.src = `photos/gerber-mob.png`;
            sectionStep4.append(divGerbera);
         }
    }
    
}

 function printGifts () {
    let div = document.createElement("div");
    div.id ="giftDiv";
    sectionStep4.append(giftTitle);
    for(let i=0; i< additionalGifts.length; i++) {
        let img = document.createElement("img");
        let name = document.createElement("p");
        div.append(img, name);
        gifts.forEach(gift => {
            if(gift.name == additionalGifts[i]) {
                img.src = `${gift.img}`;
                name.innerHTML = `${gift.name}`;
            }
        });
        sectionStep4.append(div);
    }
}
let divPrice = document.createElement("div");
divPrice.classList.add("totalPrice")
let priceText = document.createElement("h3");
priceText.innerHTML = "cena:";
let divDiscount = document.createElement("div");
divDiscount.classList.add("discountPrice")
let priceNum = document.createElement("h3");
let priceDiscountText = document.createElement("h3");
priceDiscountText.innerHTML = "cena sa popustom:";
let priceDiscountNum = document.createElement("h3");
divPrice.append(priceText, priceNum);
divDiscount.append(priceDiscountText, priceDiscountNum);

function printTotalPrice () {
    priceNum.innerHTML = `${sum}`;
    sectionStep4.append(divPrice);

    if(priceWithDiscount){
        priceDiscountNum.innerHTML = `${priceWithDiscount}`;
        priceText.style.textDecoration="line-through";
        priceNum.style.textDecoration="line-through";
        divPrice.style.opacity = 0.5;
        sectionStep4.append(divDiscount);
    }
    
}

let backBtn = document.getElementsByClassName("btn2");
for(let i=0; i< backBtn.length; i++){
    backBtn[i].addEventListener("click", back);
}
function back(e) {
if(sectionStep1.style.display != "none"){
     sectionHero.style.display="flex";
    sectionStep1.style.display = "none";
    document.body.style.backgroundImage = "url(photos/background-mob.png)";

} else if(sectionStep2.style.display != "none"){
    sectionStep1.style.display = "block";
    sectionStep2.style.display = "none";

}else if(sectionStep3.style.display != "none"){
    sectionStep2.style.display = "block";
    sectionStep3.style.display = "none";
    e.preventDefault();

}
}


