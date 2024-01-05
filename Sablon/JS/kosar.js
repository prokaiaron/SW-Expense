const termekek = [
    {id: "ss1", nev: "HOODIE", szin: "Sötétszürke", meret: "S", egysegar: 12000, kep: "../Pictures/ruha/streetart/sotel.png"},
    {id: "ss2", nev: "HOODIE", szin: "Sötétszürke", meret: "M", egysegar: 12000, kep: "../Pictures/ruha/streetart/sotel.png"},
    {id: "ss3", nev: "HOODIE", szin: "Sötétszürke", meret: "L", egysegar: 12000, kep: "../Pictures/ruha/streetart/sotel.png"},
    {id: "ss4", nev: "HOODIE", szin: "Sötétszürke", meret: "XL", egysegar: 12000, kep: "../Pictures/ruha/streetart/sotel.png"},
];

function Feltoltes() {
    let kosar_ids = JSON.parse(localStorage.getItem("kosar")) || [];
    
    let tablazat = document.getElementById("kosarelemek");
    tablazat.innerHTML = "";

    kosar_ids.forEach(elemid => {
        let termek = termekek.find(elem => elem.id == elemid);

        let sor = document.createElement("tr");
        
        let torlesGombCella = document.createElement("td");
        let torlesgomb = document.createElement("button");
        torlesgomb.textContent = "Törlés";
        torlesgomb.addEventListener("click", () => {
            Torles(termek.id);
        });
        torlesGombCella.appendChild(torlesgomb);
        sor.appendChild(torlesGombCella);

        let kep = document.createElement("td");
        let img = document.createElement("img");
        img.src = termek.kep;
        img.width = 100;
        kep.appendChild(img);
        sor.appendChild(kep);

        let termekNeveCella = document.createElement("td");
        termekNeveCella.textContent = termek.nev;
        sor.appendChild(termekNeveCella);

        let termekSzinCella = document.createElement("td");
        termekSzinCella.textContent = termek.szin;
        sor.appendChild(termekSzinCella);

        let termekMeretCella = document.createElement("td");
        termekMeretCella.textContent = termek.meret;
        sor.appendChild(termekMeretCella);

        let termekArCella = document.createElement("td");
        termekArCella.textContent = termek.egysegar;
        sor.appendChild(termekArCella);

        
        tablazat.appendChild(sor);
    });
}

function Torles(termekid) {
    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];
    let index_ = kosar.indexOf(termekid);
    if (index_ != -1) {
        kosar = kosar.splice(index_, 1)
    }
    localStorage.setItem("kosar", JSON.stringify(kosar));
    Feltoltes();
}