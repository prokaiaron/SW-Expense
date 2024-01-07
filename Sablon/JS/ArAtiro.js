function ArAtiras() {
    let flowerar = 24900;
    let corear = 21900;
    let streetar = 12000;

    let penznem = JSON.parse(localStorage.getItem("penznem"));
    
    let nevek = document.querySelectorAll(".product-name");
    let arak = document.querySelectorAll(".product-price");

    for (let i = 0; i < nevek.length; i++) {
        let nev = nevek[i].textContent.charAt(0);

        if (penznem == "huf") 
        {
            if (nev == "F") 
            {
                arak[i].innerHTML = flowerar + " Ft";
            }
            if (nev == "C") 
            {
                arak[i].innerHTML = corear + " Ft";
            }
            if (nev == "S") 
            {
                arak[i].innerHTML = streetar + " Ft";
            }
        }
        if (penznem == "eur") 
        {
            if (nev == "F") 
            {
                arak[i].innerHTML = Math.round(flowerar / 380) + "€";
            }
            if (nev == "C") 
            {
                arak[i].innerHTML = Math.round(corear / 380) + "€";
            }
            if (nev == "S") 
            {
                arak[i].innerHTML = Math.round(streetar / 380) + "€";
            }
        }
    }
}
