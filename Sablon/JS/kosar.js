const termekek = [
    {id: "ss1", nev: "HOODIE", szin: "Sötétszürke", meret: "S", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss2", nev: "HOODIE", szin: "Sötétszürke", meret: "M", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss3", nev: "HOODIE", szin: "Sötétszürke", meret: "L", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "ss4", nev: "HOODIE", szin: "Sötétszürke", meret: "XL", egysegar: 12000, kep: "../Pictures/ruha/streetart/grafitti dark back no gb.png"},
    {id: "sv1", nev: "HOODIE", szin: "Világosszürke", meret: "S", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv2", nev: "HOODIE", szin: "Világosszürke", meret: "M", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv3", nev: "HOODIE", szin: "Világosszürke", meret: "L", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
    {id: "sv4", nev: "HOODIE", szin: "Világosszürke", meret: "XL", egysegar: 15000, kep: "../Pictures/ruha/streetart/vilhat_nobg.png"},
];



function Feltoltes() {
    let kosar_ids = JSON.parse(localStorage.getItem("kosar")) || [];
    
    let tablazat = document.getElementById("kosarelemek");
    tablazat.innerHTML = "";
    
    let termekdarab = {};
    kosar_ids.forEach(elemid => {
        if (!termekdarab[elemid]) 
        {
            termekdarab[elemid] = 1;    
        }
        else
        {
            termekdarab[elemid]++;
        }
    })


    kosar_ids.forEach(elemid => {
        if (kosar_ids.includes(elemid))
        {
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
            kep.setAttribute("class", "d-none d-md-block");
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
            egysegar1.textContent = termek.egysegar;
            egysegar1.setAttribute("style", "vertical-align: middle;");
            sor.appendChild(egysegar1);

            let darab_cella = document.createElement("td");
            let darab_input = document.createElement("input");
            darab_input.setAttribute("type", "number");
            darab_input.setAttribute("value", 1);
            darab_input.setAttribute("style", "width: 40px;");
            darab_cella.setAttribute("style", "vertical-align: middle;");
            darab_cella.appendChild(darab_input);
            sor.appendChild(darab_cella);

            let ar1 = document.createElement("td");
            ar1.textContent = termek.egysegar;
            ar1.setAttribute("style", "vertical-align: middle;");
            sor.appendChild(ar1);

            tablazat.appendChild(sor);
        }
        
    });
}

function Torles(termekid) {
    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];

    for (let i = 0; i < kosar.length; i++)
    {
        if (kosar[i] == termekid)
        {
            kosar.splice(i, 1);
        }
    }

    localStorage.setItem("kosar", JSON.stringify(kosar));
    Feltoltes();
}