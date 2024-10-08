$(document).ready(function () {
  let currentIndex = 0; 
  const images = $('#slideshow img'); 
  const totalImages = images.length; 

  function showImage(index) {
	images.removeClass('active-slide').addClass('inactive-slide'); 
	images.eq(index).addClass('active-slide').removeClass('inactive-slide'); 
  }

  showImage(currentIndex);

  $('#next-btn').on('click', function () {
	currentIndex = (currentIndex + 1) % totalImages; 
	showImage(currentIndex);
  });

  $('#prev-btn').on('click', function () {
	currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
	showImage(currentIndex);
  });

  $('.header-content').show();
});
