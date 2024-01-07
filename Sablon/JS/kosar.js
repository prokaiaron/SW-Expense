const termekek = [
    {id: "ss1", nev: "HOODIE", szin: "Sötétszürke", meret: "S", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss2", nev: "HOODIE", szin: "Sötétszürke", meret: "M", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss3", nev: "HOODIE", szin: "Sötétszürke", meret: "L", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss4", nev: "HOODIE", szin: "Sötétszürke", meret: "XL", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},

    {id: "sv1", nev: "HOODIE", szin: "Világosszürke", meret: "S", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv2", nev: "HOODIE", szin: "Világosszürke", meret: "M", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv3", nev: "HOODIE", szin: "Világosszürke", meret: "L", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv4", nev: "HOODIE", szin: "Világosszürke", meret: "XL", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},

    {id: "cb1", nev: "HOODIE", szin: "Fekete", meret: "S", egysegar: 23900, kep: "../Pictures/ruha/coreblack/ccoreblackback.png"},
    {id: "cb2", nev: "HOODIE", szin: "Fekete", meret: "M", egysegar: 23900, kep: "../Pictures/ruha/coreblack/ccoreblackback.png"},
    {id: "cb3", nev: "HOODIE", szin: "Fekete", meret: "L", egysegar: 23900, kep: "../Pictures/ruha/coreblack/ccoreblackback.png"},
    {id: "cb4", nev: "HOODIE", szin: "Fekete", meret: "XL", egysegar: 23900, kep: "../Pictures/ruha/coreblack/ccoreblackback.png"},

    {id: "cw1", nev: "HOODIE", szin: "Fehér", meret: "S", egysegar: 23900, kep: "../Pictures/ruha/corewhite/corewhtieback.png"},
    {id: "cw2", nev: "HOODIE", szin: "Fehér", meret: "M", egysegar: 23900, kep: "../Pictures/ruha/corewhite/corewhtieback.png"},
    {id: "cw3", nev: "HOODIE", szin: "Fehér", meret: "L", egysegar: 23900, kep: "../Pictures/ruha/corewhite/corewhtieback.png"},
    {id: "cw4", nev: "HOODIE", szin: "Fehér", meret: "XL", egysegar: 23900, kep: "../Pictures/ruha/corewhite/corewhtieback.png"},

    {id: "fc1", nev: "HOODIE", szin: "Fekete", meret: "S", egysegar: 26490, kep: "../Pictures/ruha/flowers/flowerback.png"},
    {id: "fc2", nev: "HOODIE", szin: "Fekete", meret: "M", egysegar: 26490, kep: "../Pictures/ruha/flowers/flowerback.png"},
    {id: "fc3", nev: "HOODIE", szin: "Fekete", meret: "L", egysegar: 26490, kep: "../Pictures/ruha/flowers/flowerback.png"},
    {id: "fc4", nev: "HOODIE", szin: "Fekete", meret: "XL", egysegar: 26490, kep: "../Pictures/ruha/flowers/flowerback.png"},
];



function Feltoltes() {
    let kosar_ids = JSON.parse(localStorage.getItem("kosar")) || [];
    
    let penznem = JSON.parse(localStorage.getItem("penznem"));

    let tablazat = document.getElementById("kosarelemek");
    tablazat.innerHTML = "";
    
    let hozzaadva = [];
    kosar_ids.forEach(elem => {
        if (!hozzaadva.includes(elem))
        {
            hozzaadva.push(elem);
        }
    });

    let darab = [];
    hozzaadva.forEach(elem => {
        darab.push([elem, 0]);
    });
    
    kosar_ids.forEach(elem => {
        let darab_index = darab.findIndex(x => x[0] == elem);
        darab[darab_index][1]++;
    });

    hozzaadva.forEach(elemid => {
        
            let termek = termekek.find(elem => elem.id == elemid);

            let sor = document.createElement("tr");
            
            let torlesgomb_cella = document.createElement("td");
            let torlesgomb = document.createElement("button");
            torlesgomb.textContent = "Törlés";
            torlesgomb.setAttribute("class", "btn btn-danger");
            torlesgomb_cella.setAttribute("style", "vertical-align: middle;");
            torlesgomb.addEventListener("click", () => {
                Torles(termek.id);
            });
            torlesgomb_cella.appendChild(torlesgomb);
            sor.appendChild(torlesgomb_cella);

            let kep = document.createElement("td");
            let img = document.createElement("img");
            img.src = termek.kep;
            img.width = 100;
            kep.setAttribute("class", "d-none d-md-table-cell");
            kep.appendChild(img);
            sor.appendChild(kep);

            let nev1 = document.createElement("td");
            nev1.textContent = termek.nev;
            nev1.setAttribute("style", "vertical-align: middle;");
            sor.appendChild(nev1);

            let szin1 = document.createElement("td");
            szin1.textContent = termek.szin;
            szin1.setAttribute("style", "vertical-align: middle;");
            sor.appendChild(szin1);

            let meret1 = document.createElement("td");
            meret1.textContent = termek.meret;
            meret1.setAttribute("style", "vertical-align: middle;");
            sor.appendChild(meret1);

            let egysegar1 = document.createElement("td");
            if (penznem == "huf")
            {
                egysegar1.textContent = termek.egysegar;
            }
            if (penznem == "eur")
            {
                egysegar1.textContent = Math.round(termek.egysegar / 380);
            }
            egysegar1.setAttribute("style", "vertical-align: middle;");
            let egysegarid = "egysegar" + termek.id;
            egysegar1.setAttribute("id", egysegarid);
            egysegar1.setAttribute("class", "d-none d-md-table-cell")
            sor.appendChild(egysegar1);

            let mennyiseg = darab[darab.findIndex(x => x[0] == termek.id)][1];
            let darab_cella = document.createElement("td");
            let darab_input = document.createElement("input");
            darab_input.setAttribute("type", "number");
            darab_input.setAttribute("value", mennyiseg);
            darab_input.setAttribute("style", "width: 40px;");
            darab_input.setAttribute("min", 1);
            let darabid = "darabszam" + termek.id;
            darab_input.setAttribute("id", darabid);
            darab_input.addEventListener("change", () => {
                Add(termek.id);
            });
            darab_cella.setAttribute("style", "vertical-align: middle;");
            darab_cella.appendChild(darab_input);
            sor.appendChild(darab_cella);

            let ar1 = document.createElement("td");
            if (penznem == "huf")
            {
                ar1.textContent = termek.egysegar * mennyiseg;
            }
            if (penznem == "eur")
            {
                ar1.textContent = Math.round(termek.egysegar / 380) * mennyiseg;
            }
            ar1.setAttribute("style", "vertical-align: middle;");
            let vegosszegid = "vegosszeg" + termek.id;
            ar1.setAttribute("id", vegosszegid);
            sor.appendChild(ar1);

            tablazat.appendChild(sor);
    });

   Vegosszeg();
}

function Torles(termekid) {
    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];
    kosar = kosar.filter(elemid => elemid != termekid);
    localStorage.setItem("kosar", JSON.stringify(kosar));
    Feltoltes();
}

function Add(id) {
    let kosar_ids = JSON.parse(localStorage.getItem("kosar")) || [];
    kosar_ids.forEach(elem => {
        let egysegarid = "egysegar" + elem;
        let egysegar = document.getElementById(egysegarid).innerHTML;

        let darabid = "darabszam" + elem;
        let darab = document.getElementById(darabid).value;

        let vegosszegid = "vegosszeg" + elem;
        document.getElementById(vegosszegid).textContent = egysegar * darab;
        
    });
    kosar_ids.push(id);
    localStorage.setItem("kosar", JSON.stringify(kosar_ids));
    Vegosszeg();
}

function Vegosszeg() {
    let kosar_ids = JSON.parse(localStorage.getItem("kosar")) || [];
    let penznem = JSON.parse(localStorage.getItem("penznem"));
    let penznemvege;
    if (penznem == "huf")
    {
        penznemvege = " Ft";
    }
    if (penznem == "eur")
    {
        penznemvege = "€";
    }

    let vegosszeg = 0;
    let egyszer = [];
    kosar_ids.forEach(elem => {
        if (!egyszer.includes(elem))
        {
            egyszer.push(elem);
        }
    });
    egyszer.forEach(elem => {
        let vegosszegid = "vegosszeg" + elem;
        let vegosszegelem = parseInt(document.getElementById(vegosszegid).innerHTML);
        vegosszeg += vegosszegelem;
    });
    document.getElementById("fizetendo").innerHTML = vegosszeg + penznemvege;
}

function Penzvaltas(id) {
    localStorage.setItem("penznem", JSON.stringify(id));
    Feltoltes();
    Szinvaltas();
}

function Szinvaltas() {
    let penznem = JSON.parse(localStorage.getItem("penznem"));
    if (penznem == "huf")
    {
        document.getElementById("hufId").setAttribute("class", "penznemGomb penznemGombSelect");
        document.getElementById("eurId").setAttribute("class", "penznemGomb");
    }
    else
    {
        document.getElementById("eurId").setAttribute("class", "penznemGomb penznemGombSelect");
        document.getElementById("hufId").setAttribute("class", "penznemGomb");
    }
}