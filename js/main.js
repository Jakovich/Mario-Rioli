$(document).ready(function() {
  $('.doors-item__color-btn').click(function(){
    $currentButton = $(this);
    var $currentSrc = $currentButton.attr('data-src');
    var $currentImg = $currentButton.parents('.doors-item').find('img');
    $currentImg.attr('src', $currentSrc);
  })
  
})