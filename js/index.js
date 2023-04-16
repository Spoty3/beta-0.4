document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    
});
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('dragstart', function(event) {
    event.preventDefault();
  });
}

window.addEventListener('scroll', function() {
  var arrow = document.getElementById('arrow');
  
  if (window.pageYOffset > 500) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});

var arrow = document.getElementById('arrow');
arrow.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

