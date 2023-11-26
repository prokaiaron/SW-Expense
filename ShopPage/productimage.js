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