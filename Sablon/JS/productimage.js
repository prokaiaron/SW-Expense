var thumbnailItems = document.querySelectorAll('[id^="carousel-selector-"]');
  var carouselItems = document.querySelectorAll('.carousel-item');

  thumbnailItems.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
     
      thumbnailItems.forEach(function(item) {
        item.parentElement.classList.remove('active');
      });

     
      carouselItems.forEach(function(item) {
        item.classList.remove('active');
      });

      thumbnail.parentElement.classList.add('active');
      carouselItems[index].classList.add('active');
    });
  });

function Kosarba(id) {
  let Kosar = JSON.parse(localStorage.getItem("kosar")) || [];
  Kosar.push(id);
  localStorage.setItem("kosar", JSON.stringify(Kosar));
  console.log(Kosar);
}

let meret = 1;
function MeretValtas() {
  let size = this.id;
  if (size == "meretS") {
    meret = 1;
  }
  if (size == "meretM") {
    meret = 2;
  }
  if (size == "meretL") {
    meret = 3;
  }
  if (size == "meretXL") {
    meret = 4;
  }
}