const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (x = 0; x < 5; x++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + x + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function (e) {
    displayedImage.src = e.target.src;
  }
}


btn.onclick = function(){
  const btnClass = btn.getAttribute('class');
if (btnClass = "dark") {
  btn.setAttribute('light');
  btn.textContent = "Lighten";
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
  btn.setAttribute('dark');
  btn.textContent = "Darken";
  overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
}
