console.log ('La Belle Waffles!');

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById('closeNav').addEventListener("click",function(){
  closeNav();
});

document.getElementById('openNav').addEventListener("click",function(){
  openNav();
});


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



var m__daily = "Classic, Cinnamon Sugar, Chocolate Sticks, Whittaker's Chocolate Dipped";
var m__legend = "Banana Royale, Peach Magnifique, Banana Fantastique, Kiwi As";
var m__deluxe = "Deluxe Totale Belge";
// var m__lunch = "Croque Monsieur, Caprese";
// var m__drinks = "Filter Coffee (Single Origin), Home-made Belgian Hot Chocolate, Juice, Soft Drinks";
var m__combo = "Half dozen Classic Waffles, Half dozen Assorted Waffles (up to 3 dipped waffles), Classic Waffle + Filter Coffee, Classic Waffle + Home-made Belgian Hot Chocolate";



var cl = m__daily.substring(0,7);
var cs = m__daily.substring(9,23);
var chs = m__daily.substring(25,41);
var wht = m__daily.substring(71,43);

var br = m__legend.substring(0,13);
var pm = m__legend.substring(15,31);
var bf = m__legend.substring(33,51);
var ka = m__legend.substring(53,60);

// var cm = m__lunch.substring(0,15);
// var cp = m__lunch.substring(24,17);

// var fc = m__drinks.substring(0,31);
// var fc = m__drinks.substring(35,64);
// var fc = m__drinks.substring(65,71);
// var fc = m__drinks.substring(72,82);

var cw = m__combo.substring(0,26);
var aw = m__combo.substring(28,80);
var cc = m__combo.substring(82,112);
var chc = m__combo.substring(114,162);


// conditional display [sweet]
console.log('Sweet');
function myFunction(){
document.getElementById("menu__filter").value;
  document.getElementById("menu__grid").innerHTML = " "; //to clear the container


	document.getElementById("menu__grid").innerHTML
	+= '</br><div class="menu__list" id="daily">'
			+ '<h2 id="menu__daily" data-category="sweet">LA DAILY</h2>'
			+ '<p class="item">'+ cl +'</p>'
			+ '<p class="item">'+ cs +'</p>'
			+ '<p class="item">'+ chs +'</p>'

			+ '<p class="item" type="button" data-toggle="modal" data-target="#myModal">'+ wht +'</p>'
						+ '<div class="modal fade" id="myModal" role="dialog">'
						+ '<div class="modal-dialog">'

						+ '<div class="modal-content">'
					+ '<div class="modal-header">'
					+  '<button type="button" class="close" data-dismiss="modal">&times;</button>'
					+  '<h4 class="modal-title">Whittaker\'s Chocolate Dipped</h4>'
					+  '</div>'


						+  '<div class="mySlides">'
						+   '<div class="numbertext">1 / 3</div>'
						+   '<img src="images/choco-milk.png" class="m_img">'
						+  '</div>'

						+  '<div class="mySlides">'
						+  '<div class="numbertext">2 / 3</div>'
						+    '<img src="images/choco-dark.png" class="m_img">'
						+  '</div>'

						+  '<div class="mySlides">'
						+   '<div class="numbertext">3 / 3</div>'
						+   '<img src="images/choco-white.png" class="m_img">'
						+  '</div>'

							+  '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>'
							+  '<a class="next" onclick="plusSlides(1)">&#10095;</a>'



					+  '<div class="modal-body">'
					+ '<p>A La Belle best seller, this Belgian Waffle is half dipped in Whittaker\'s chocolate and topped with a crushed freeze-dried strawberries, raspberries or hazelnuts.</p>'
					+ '<br>'
					+  '<p>'
					+ 	'Available with milk, dark and white chocolate versions.'
					+  '</p>'
					+  '<br>'
					+  '<p> {COST: $10} </p>'

					+  '</div>'
					+  '</div>'
				  
					+ '</div>'
					+ '</div>'
		+ '</div>'
		+ '</br>'

	+ '</br><div class="menu__list" id="legend">'
			+ '<h2 id="menu__legend" data-category="sweet">LA LEGEND</h2>'
			+ '<p class="item">'+ br +'</p>'
			+'<p class="item">'+ pm +'</p>'
			+'<p class="item">'+ bf +'</p>'
			+'<p class="item">'+ ka +'</p>'
		+'</div>'
		+'</br>'

	+'</br><div class="menu__list" id="deluxe">'
			+'<h2 id="menu__deluxe" data-category="sweet">LA DELUXE</h2>'
			+'<p class="item">'+ m__deluxe +'</p>'
		+'</div>'
		+'</br>'

	// + '</br><div class="menu__list" id="lunch">'
	// 		+ '<h2 id="menu__title" data-category="savoury">LA LUNCH</h2>'
	// 		+ '<p class="item">'+ cm +'</p>'
	// 		+'<p class="item">'+ cp +'</p>'
	// 	+'</div>'
	// 	+'</br>'

	+ '</br><div class="menu__list" id="combo">'
			+ '<h2 id="menu__title" data-category="sweet drinks">COMBO</h2>'
			+ '<p class="item">'+ cw +'</p>'
			+'<p class="item">'+ aw +'</p>'
			+'<p class="item">'+ cc +'</p>'
			+'<p class="item">'+ chc +'</p>'
		+'</div>'
		+'</br>';
}