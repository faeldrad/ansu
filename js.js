var coll = document.getElementsByClassName("divisor");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("divisorativo");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["images/p1.jpg", "images/p2.jpg", "images/p3.jpg", "images/p4.jpg", "images/p5.jpg", "images/p6.jpg", "images/p7.jpg", "images/p8.jpg"]);

var countDownDate = new Date("May 11, 2021 09:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var hours = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 *60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
	document.getElementById("timer").innerHTML = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "Começou!";
		}
}, 1000);