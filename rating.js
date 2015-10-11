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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// generate a blinking star
function toggle() {
	var blink = document.getElementById('blink');
	var vis = blink.style.visibility; // can not set it as global. vis is not an object so resetting it won't change the actual visibility on the object

	if(vis === 'visible' || vis === '') {
		blink.style.visibility = 'hidden';
	} else {
		blink.style.visibility = 'visible';
	}
}


//this is the blink function!!!

//(function (){
//	toggle();
//	window.setInterval(toggle, 500);
//})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use ul and li for star. jQuery

$('#another_star').on('mouseover', hoverHandler);

$('#another_star').on('mouseout', function(){ 
	$('li').each(function(){// equal to foreach
		$(this).html('&#9734');
		$(this).removeClass('selected');
		$(this).attr('style', '');// this is a way to reset stly. jquery uess inline style to overwrite css
	});
});

$('#another_star').on('click', clickHandler);

function hoverHandler(e) {

	var hoverIndex = $(e.target).attr('id').split('_')[1];
	// select all siblings before it plus itself
	$('#star_'+ hoverIndex).prevAll('li').andSelf().html('&#9733').addClass('selected');
	//select all siblings after it
	$('#star_'+ hoverIndex).nextAll('li').html('&#9734').removeClass('selected');
}

function clickHandler(e) {
	var hoverIndex = $(e.target).attr('id').split('_')[1];

	$('#star_'+ hoverIndex).prevAll('li').andSelf().html('&#9733').addClass('selected');

	$('#star_'+ hoverIndex).nextAll('li').html('&#9734').removeClass('selected');

//	for(var i = 1; i <= Number(hoverIndex); i++) {
//		var $leftStar = $('#star_'+ String(i));
//		console.log($leftStar);
//		$leftStar.html('&#9733');
//		$leftStar.addClass('selected');
//	}
//	
//	for(var i = Number(hoverIndex)+1; i <= 5 ; i++) {
//		var $rightStar = $('#star_'+ String(i));
//		$rightStar.html('&#9734');
//		$rightStar.removeClass('selected');
//	}
	
	$(this).off('mouseover');
	$(this).off('mouseout');
}