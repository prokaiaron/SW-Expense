function ArAtiras() {
    let flowerar = 24900;
    let corear = 21900;
    let streetar = 12000;

    let penznem = JSON.parse(localStorage.getItem("penznem"));
    
    let mainnevek = document.querySelectorAll(".product-name");
    let mainarak = document.querySelectorAll(".product-price");

    let shopnevek = document.querySelectorAll(".shop-nev");
    let shoparak = document.querySelectorAll(".shop-ar")


    for (let i = 0; i < mainnevek.length; i++) {
        let nev = mainnevek[i].textContent.charAt(0);

        if (penznem == "huf") 
        {
            if (nev == "F") 
            {
                mainarak[i].innerHTML = flowerar + " Ft";
            }
            if (nev == "C") 
            {
                mainarak[i].innerHTML = corear + " Ft";
            }
            if (nev == "S") 
            {
                mainarak[i].innerHTML = streetar + " Ft";
            }
        }
        if (penznem == "eur") 
        {
            if (nev == "F") 
            {
                mainarak[i].innerHTML = Math.round(flowerar / 380) + "€";
            }
            if (nev == "C") 
            {
                mainarak[i].innerHTML = Math.round(corear / 380) + "€";
            }
            if (nev == "S") 
            {
                mainarak[i].innerHTML = Math.round(streetar / 380) + "€";
            }
        }
    }





    for (let i = 0; i < shopnevek.length; i++) {
        let nev = shopnevek[i].textContent.charAt(0);

        if (penznem == "huf") 
        {
            if (nev == "F") 
            {
                shoparak[i].innerHTML = flowerar + " Ft";
            }
            if (nev == "C") 
            {
                shoparak[i].innerHTML = corear + " Ft";
            }
            if (nev == "S") 
            {
                shoparak[i].innerHTML = streetar + " Ft";
            }
        }
        if (penznem == "eur") 
        {
            if (nev == "F") 
            {
                shoparak[i].innerHTML = Math.round(flowerar / 380) + "€";
            }
            if (nev == "C") 
            {
                shoparak[i].innerHTML = Math.round(corear / 380) + "€";
            }
            if (nev == "S") 
            {
                shoparak[i].innerHTML = Math.round(streetar / 380) + "€";
            }
        }
    }




    let termekar = document.querySelector(".termek-ar");
    let termeknev = document.querySelector(".termek-nev");
    termeknev = termeknev.innerHTML.charAt(0);

        if (penznem == "huf") 
        {
            if (termeknev == "F") 
            {
                termekar.innerHTML = flowerar + " Ft";
            }
            if (termeknev == "C") 
            {
                termekar.innerHTML = corear + " Ft";
            }
            if (termeknev == "S") 
            {
                termekar.innerHTML = streetar + " Ft";
            }
        }
        if (penznem == "eur") 
        {
            if (termeknev == "F") 
            {
                termekar.innerHTML = Math.round(flowerar / 380) + "€";
            }
            if (termeknev == "C") 
            {
                termekar.innerHTML = Math.round(corear / 380) + "€";
            }
            if (termeknev == "S") 
            {
                termekar.innerHTML = Math.round(streetar / 380) + "€";
            }
        }
    
}
