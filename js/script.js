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


var m__daily = "Classic, Cinnamon Sugar, Chocolate Sticks, Whittakers Chocolate Dipped";
// var m__legend = "Banana Royale, Peach Magnifique, Banana Fantastique, Kiwi As";
// var m__deluxe = "Deluxe Totale Belge";
// var m_lunch = "Croque Monsieur, Caprese";
// var m__drinks = "Filter Coffee (Single Origin), Home-made Belgian Hot Chocolate, Juice, Soft Drinks";
// var m__combo = "Half dozen Classic Waffles, Half dozen Assorted Waffles (up to 3 dipped waffles), Classic Waffle + Filter Coffee, Classic Waffle + Home-made Belgian Hot Chocolate";

// var m__cat = "sweet"


var cl = m__daily.substring(25,40);
// var cs = m__daily.substring(25,40);
// var chs = m__daily.substring(25,40);
// var wht =;m__daily.substring(25,40);


// conditional display [sweet]
console.log('Sweet');
function myFunction(){
document.getElementById("menu__filter").value;
  document.getElementById("menu__grid").innerHTML = " "; //to clear the container

  // for(var i = 0; i < m__opt.length; i++) {
  // 	if (m__opt[i].category === "sweet") {
    document.getElementById("menu__grid").innerHTML
	+= '</br><div class="menu__list" id="daily">'
			+ '<h2 id="menu__daily" data-category="sweet">LA DAILY</h2>'
			+ '<p class="item">'+ cl +'</p>'
			// + '<p class="item">'+ cs +'</p>'
			// + '<p class="item">'+ chs +'</p>'
			// + '<p class="item">'+ wht +'</p>'
		+ '</div>'
		+ '</br>';

	// +'</br><div class="menu__list" id="legend">'
	// 		+'<h2 id="menu__legend" data-category="sweet'+ m__opt[i].title2 +'</h2>'
	// 		+'<p class="item">'+ m__opt[i].name5 +'</p>'
	// 		+'<p class="item">'+ m__opt[i].name6 +'</p>'
	// 		+'<p class="item">'+ m__opt[i].name7 +'</p>'
	// 		+'<p class="item">'+ m__opt[i].name8 +'</p>'
	// 	+'</div>'
	// 	+'</br>'

	// +'</br><div class="menu__list" id="deluxe">'
	// 		+'<h2 id="menu__deluxe" data-category="sweet">'+ m__opt[i].title3 +'</h2>'
	// 		+'<p class="item">'+ m__opt[i].name9 +'</p>'
	// 	+'</div>'
	// 	+'</br>';
	// 	}
	// }
}