// CREATE SECTION ELEMENT
let sectionHero = document.createElement("section");
let sectionStep1 = document.createElement("section");
let sectionStep2 = document.createElement("section");
let sectionStep3 = document.createElement("section");
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
let btnStep3 = document.createElement("input");
btnStep3.type = "submit";
let btnBackToStep2 = document.createElement("button");
let btnStep4 = document.createElement("button");
let btnReset = document.createElement("button");

let naslov1 = document.createElement("h1");
let naslov2 = document.createElement("h1");
let naslov3 = document.createElement("h1");
let naslov4 = document.createElement("h1");

naslov1.classList.add("naslov");
naslov2.classList.add("naslov");
naslov3.classList.add("naslov");
naslov4.classList.add("naslov");

sectionStep1.append(naslov1);
sectionStep2.append(naslov2);
sectionStep3.append(naslov3);
sectionStep4.append(naslov4);

sectionHero.append(btnHero);
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
// KREIRANJE FINAL STEP
let ok = document.createElement("img");
ok.src = "photos/check-mark 1.png";
let tekst = document.createElement("h1");
tekst.innerHTML= "hvala<br>na poverenju";
sectionFinal.style.display = "none";
document.body.append(sectionFinal);


/////////////////////////////////////////////////////////////////////
let brLjiljana = 0;
let brRuza = 0;
let brGerbera = 0;
let sum = 0;
///////////////////////////////////////////


// SECTION 1
///////////////////////////////////////////////////////////////////

    
    for(i=0; i< cveće.length; i++){
        let article = document.createElement("article");
        article.classList.add("col-12");
        article.setAttribute("id", `${cveće[i].naziv}`);
        let img = document.createElement("img");
        let div = document.createElement("div");
        let label = document.createElement("label");
        let p = document.createElement("p");
        p.innerHTML = `cena po cvetu je ${cveće[i].cena}`
        let div2 = document.createElement("div");
        let buttonMinus = document.createElement("button");
        let span = document.createElement("span");
        let buttonPlus = document.createElement("button");
        div2.append(buttonMinus, span, buttonPlus);
        div2.id = "div2"
        div.append(label, p, div2);
        span.id = `${cveće[i].label}`;
        span.innerHTML =0;
         let brojac = 0;
        buttonPlus.id = `plus${cveće[i].label}`
        buttonMinus.id = `minus${cveće[i].label}`
        buttonMinus.innerHTML="-";
        buttonPlus.innerHTML="+";
        img.setAttribute("src", `${cveće[i].img}`)
        label.setAttribute("for", `${i}`);
        label.innerHTML=`${cveće[i].naziv}`;
        buttonPlus.addEventListener("click", plus);
        function plus () {
              if(buttonPlus.id == "plusgerber") {
                brGerbera++;
                span.innerHTML = `${brGerbera}`;
            } else if(buttonPlus.id == "plusljiljan") {
                 brLjiljana++;
                 span.innerHTML = `${brLjiljana}`;
            }else if(buttonPlus.id == "plusruza"){
                brRuza++; 
                span.innerHTML = `${brRuza}`;
            }  
            cveće.forEach( cvet => {
                if(cvet.label == span.id) {
                    sum += cvet.cena;
                }
            });
        }
        buttonMinus.addEventListener("click", ()=>{
                  if(buttonMinus.id == "minusgerber" && brGerbera > 0) {
                    brGerbera--;
                    span.innerHTML = `${brGerbera}`;
                } else if(buttonMinus.id == "minusljiljan" && brLjiljana > 0) {
                     brLjiljana--; 
                     span.innerHTML = `${brLjiljana}`;
                }else if(buttonMinus.id == "minusruza" && brRuza > 0){
                    brRuza--;
                    span.innerHTML = `${brRuza}`;
                }  
                cveće.forEach( cvet => {
                    if(cvet.label == span.id && span.innerHTML > 0) {
                        sum -= cvet.cena;
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
let dodaci = [];

for(i=0; i< dodatniPokloni.length; i++){
    let article = document.createElement("article");
    article.setAttribute("id", `${dodatniPokloni[i].naziv}`);
    let img = document.createElement("img");
    img.setAttribute("src", `${dodatniPokloni[i].img}`)
    let div = document.createElement("div");
    let label = document.createElement("label");
    div.append(label);
    let div2 = document.createElement("div");
    let input = document.createElement("input");
    let btnDodaj = document.createElement("button");
    btnDodaj.innerHTML= "dodaj";
    div2.append(btnDodaj, input);
    btnDodaj.setAttribute("id", `${dodatniPokloni[i].klasa}`)

    input.setAttribute("id", `checkbox${dodatniPokloni[i].naziv}`);
    input.setAttribute("type", "checkbox");
    label.innerHTML=`${dodatniPokloni[i].naziv} +${dodatniPokloni[i].cena}`;
    
    article.append(img, div, div2);
    sectionStep2.append(article);
    sectionStep2.style.display="none";

    btnDodaj.addEventListener("click", ()=>{
        dodatniPokloni.forEach(poklon => {
            if(poklon.klasa == btnDodaj.id) {
                dodaci.push(`${poklon.naziv}`)
                sum += poklon.cena;
            }
        })
    });
}

sectionStep2.append(btnStep2,btnBackToStep1)
 document.body.append(sectionStep2);

////////////////////////////////////////////////////////////

//////////////////////////////////////
// SECTION 3
let forma = document.createElement("form");
let kes = document.createElement("div");
kes.id = "cash";
let kesImg = document.createElement("img"); 
let kesText = document.createElement("p")
let kesRadio = document.createElement("input");
kesRadio.type ="radio";
kesRadio.name = "placanje";
kesRadio.value = "kes"
kesRadio.id = "kes";
kesImg.src = `${placanje.kes.img}`;
kesText.innerHTML=`${placanje.kes.label}`
kes.append(kesImg, kesText, kesRadio);

let radioButtons = document.getElementsByName("placanje");


let kartica = document.createElement("div");
kartica.id = "card"
let karticaImg = document.createElement("img"); 
let karticaText = document.createElement("p")
let karticaRadio = document.createElement("input");
karticaRadio.type ="radio";
karticaRadio.name = "placanje";
karticaRadio.value = "kartica";
karticaRadio.id = "kartica";
karticaImg.src = `${placanje.kartica.img}`;
karticaText.innerHTML=`${placanje.kartica.label}`
kartica.append(karticaImg, karticaText, karticaRadio);

forma.append(kes, kartica, btnStep3, btnBackToStep2);

sectionStep3.append(forma);
sectionStep3.style.display = "none";
document.body.append(sectionStep3);

//////////////////////////////////////////////////////////////////
//////////////////////////////////////
// SECTION 4
let buket = document.createElement("h3");
buket.innerHTML= "buket:"
sectionStep4.append(buket);
sectionStep4.style.display = "none";


let dodaciNaslov = document.createElement("h3");
dodaciNaslov.innerHTML= "dodatni pokloni:"


let dodaciDiv = document.createElement("div");


document.body.append(sectionStep4);

/////////////////////////////////////////////////

btnHero.addEventListener("click",()=> {
  sectionStep1.style.display = "block";
  sectionHero.style.display = "none";
  
  naslov1.innerHTML=`<span>korak 1/4</span><br>odaberite cveće:`;
  
  document.body.style.backgroundImage = "none";
});



///////////////////////

btnStep1.addEventListener("click", ()=>{
    sectionStep2.style.display="block";
    sectionStep1.style.display="none";
    naslov2.innerHTML=`<span>korak 2/4</span><br>dodatni pokloni:`;
    
    
})

btnStep2.addEventListener("click", ()=>{
    sectionStep2.style.display="none";
    sectionStep3.style.display="block";
    naslov3.innerHTML=`<span>korak 3/4</span><br>način plaćanja:`;
    
    
})

let cenaSaPopustom = 0;
btnStep3.addEventListener("click", (e)=>{
    e.preventDefault();
    let kartica = document.getElementById("kartica");
    let kes = document.getElementById("kes");
   if(kes.checked){
        if(sum > 2000) {
            let popUp1 = document.createElement("button");
            let popUp2 = document.createElement("button");
            popUp1.innerHTML = "izaberi karticu";
            popUp2.innerHTML = "ne zelim";
            sectionStep3.append(popUp1, popUp2);
            popUp1.addEventListener("click", ()=>{
                kes.checked = false;
                kartica.checked = true;
                cenaSaPopustom = sum - sum * 0.1;
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

   } else if(kartica.checked) {
            if(sum > 2000) {
                cenaSaPopustom = sum - sum * 0.1;
            }else{
                console.log(`cena je ${sum}`);
            }
            sectionStep3.style.display="none";
            sectionStep4.style.display="flex";
   } else {
        console.log(`Molim vas odaberite jednu od opcija`);
   }

   kreirajBuket(); 
   ispisDodataka();
   naslov4.innerHTML=`<span>korak 4/4</span><br>vaša porudžbina:`;

   ispisUkupneCene();
   sectionStep4.append(btnStep4, btnReset);

});


btnStep4.addEventListener("click", ()=>{
    sectionStep4.style.display="none";
    sectionFinal.style.display = "flex";
    sectionFinal.append(ok, tekst);
    document.body.style.backgroundImage = "url(photos/background-finalstep-mob.png)";
    setTimeout(()=> {
        reset();
        sectionFinal.style.display = "none";
    }, 2500);
});

btnReset.addEventListener("click", reset);

function reset () {
    if(cenaSaPopustom){
        cenaSaPopustom = 0;
    }
       cenaText.style.textDecoration="none";
        cenaBr.style.textDecoration="none";
        divCena.style.opacity = 1;
     
     kes.checked = false;
     kartica.checked = false;
     sectionStep4.style.display = "none"
     sectionHero.style.display = "flex";
     let spans = document.querySelectorAll("span");
     spans.forEach(span => {
        span.innerHTML = 0;
     });
     sum=0;
     brLjiljana = 0;
     brRuza = 0;
     brGerbera = 0;
     brojac = 0;

     // reset radio button
     let radioB = document.getElementsByName("placanje");
     for(let i=0;i<radioB.length;i++) {
         radioB[i].checked = false;
     }
     //////////////////////////////
     sectionStep4.querySelectorAll("img").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("div").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("p").forEach(img => {img.remove()});
     sectionStep4.querySelectorAll("p").forEach(img => {img.remove()});
      dodaci=[]; 
      document.body.style.backgroundImage = "url(photos/background-mob.png)";
      /* location.reload(); */
}




function kreirajBuket() {
    let divRuze = document.createElement("div");
    let divLjiljani = document.createElement("div");
    let divGerberi = document.createElement("div");

    if(brRuza > 0) {
        for(i=0; i<brRuza;  i++) {
           let ruza = document.createElement("img");
           divRuze.append(ruza);
           ruza.src = `photos/ruza-mob.png`;
           sectionStep4.append(divRuze);
        }
    } 
     if(brLjiljana > 0) {
        for(i=0; i<brLjiljana;  i++) {
            let ljiljan = document.createElement("img");
            divLjiljani.append(ljiljan);
            ljiljan.src = `photos/ljiljan-mob.png`;
            sectionStep4.append(divLjiljani);
         }
    } 
     if(brGerbera > 0) {
        for(i=0; i<brGerbera;  i++) {
            let gerber = document.createElement("img");
            divGerberi.append(gerber);
            gerber.src = `photos/gerber-mob.png`;
            sectionStep4.append(divGerberi);
         }
    }
    
}

 function ispisDodataka () {
    let div = document.createElement("div");
    div.id ="dodatakDiv";
    sectionStep4.append(dodaciNaslov);
    for(i=0; i< dodaci.length; i++) {
        console.log(dodaci[i]);
        let img = document.createElement("img");
        let naziv = document.createElement("p");
        div.append(img, naziv);
        dodatniPokloni.forEach(poklon => {
            if(poklon.naziv == dodaci[i]) {
                img.src = `${poklon.img}`;
                naziv.innerHTML = `${poklon.naziv}`;
            }
        });
        sectionStep4.append(div);
    }
}
let divCena = document.createElement("div");
let cenaText = document.createElement("h3");
cenaText.innerHTML = "cena:";
let divPopust = document.createElement("div");
let cenaBr = document.createElement("h3");
let cenaPopustText = document.createElement("h3");
cenaPopustText.innerHTML = "cena sa popustom:";
let cenaPopustBr = document.createElement("h3");
divCena.append(cenaText, cenaBr);
divPopust.append(cenaPopustText, cenaPopustBr);

function ispisUkupneCene () {
    cenaBr.innerHTML = `${sum}`;
    sectionStep4.append(divCena);

    if(cenaSaPopustom){
        cenaPopustBr.innerHTML = `${cenaSaPopustom}`;
        cenaText.style.textDecoration="line-through";
        cenaBr.style.textDecoration="line-through";
        divCena.style.opacity = 0.5;
        sectionStep4.append(divPopust);
    }
    
}

let backBtn = document.getElementsByClassName("btn2");
console.log(backBtn);
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

// PRAVIO SAM ZA MOBILNU VERZIJU NISAM STIGAO ZA DESKTOP DA SREDIM
