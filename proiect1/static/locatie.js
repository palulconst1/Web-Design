x = 450  // center
y = 310   // center
r = 100   // radius
a = 0    // angle (from 0 to Math.PI * 2)

function rotate(a) {
  
  var px = x + r * Math.cos(a); // <-- that's the maths you need
  var py = y + r * Math.sin(a);
  
  document.querySelector('#point').style.left = px + "px";
  document.querySelector('#point').style.top = py + "px";  
}

setInterval(function() {
  a = (a + Math.PI / 360) % (Math.PI * 2);
  rotate(a);
}, 5);

function fctDel() {
    var x = document.getElementById("del");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function wordCount(words) {
	var count = 0;
	for (var i = 0; i < words.length; i++) {
		count += words[i].textContent.split(' ').length;
	}
	return count;
}

function nrCuv()
{
var wordsInPost = wordCount(document.querySelectorAll(".posts-content"));
let pr = document.getElementById('cuvinte');
pr.innerHTML=wordsInPost;
}