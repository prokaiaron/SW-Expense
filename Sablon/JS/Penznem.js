function Penzvaltas(id) {
    localStorage.setItem("penznem", JSON.stringify(id));
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