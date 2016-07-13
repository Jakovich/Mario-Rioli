$(document).ready(function() {
  $('.doors-item__color-btn').click(function(){
    $currentButton = $(this);
    var $currentSrc = $currentButton.attr('data-src');
    var $currentImg = $currentButton.parents('.doors-item').find('img');
    var imageReplace = new Image();
    imageReplace.onload = function() {
      $currentImg.attr('src', $currentSrc);
    }
    $currentImg.attr('src', 'img/ajax-loader.gif');
    imageReplace.src = $currentSrc;
  })
  
})
