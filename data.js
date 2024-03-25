let rose = {
    label: "rose",
    name: "Ruže",
    price: 150,
    img: "photos/rose.png",
    src: ""
};

let lily = {
    label: "lily",
    name: "Ljiljani",
    price: 120,
    img: "photos/lily.png",
};
let gerber = {
    label: "gerber",
    name: "Gerberi",
    price: 70,
    img: "photos/gerber.png",
}
export let flowers = [rose, lily,gerber];


let boxOfChocolates = {
    name: "Bombonjera",
    price: 500,
    img: "photos/boxOfChocolates.png",
    klasa: "b"
}

let chocolate = {
    name: "Čokolada",
    price: 500,
    img: "photos/chocolate.png",
    klasa:"c"
}

let champagne = {
    name: "Šampanjac",
    price: 500,
    img: "photos/champagne.png",
    klasa:"s"
}

export let gifts = [boxOfChocolates,chocolate, champagne];

export let payment = {
    cash: {
        img: "photos/cash.png",
        label: "keš"
    }, 
    card: {
        img: "photos/card.png",
        label: "kartica"
    }
}

