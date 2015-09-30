var rating;
var starDiv = document.getElementById('rating');

function ratingFunction(e) {
	var allStar = starDiv.children; // children, non-text nodes(only elements); childnode: all child nodes including text
//	console.log(allStar);
	for (var i =0; i < allStar.length; i++) {
		allStar[i].removeAttribute('className');
		allStar[i].innerHTML = '&#9734';
	};
	var clickedId = e.target.getAttribute('id');
	rating = Number(clickedId);
	for( var i = 1; i <= clickedId; i++) {
		var star = document.getElementById(i)
		star.setAttribute('className', 'selected'); 
		star.innerHTML = '&#9733';	
	}
	console.log(rating);
}
starDiv.addEventListener('click', ratingFunction);



// generate a blinking star
function toggle() {
	var blink = document.getElementById('blink');
	var vis = blink.style.visibility; // can not set it as global. vis is not an object so resetting it won't change the actual visibility on the object

	if(vis === 'visible' || vis === '') {
		blink.style.visibility = 'hidden';
	} else {
		blink.style.visibility = 'visible';
	}
	var blink = document.getElementById('blink');
	var vis = blink.style.visibility;
}


(function (){
	toggle();
	window.setInterval(toggle, 500);
})();