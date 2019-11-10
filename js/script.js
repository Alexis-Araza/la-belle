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


// var $grid = ('menu__grid').isotope({
//   itemSelector: 'list__sort',
//   layoutMode: 'fitRows',
//   getSortData: {
//     name: 'item',
//     price: 'price',
//     category: '[data-category]',
//   }
// });

// // bind filter button click
// ('menu__filter').on( 'click', 'button', function() {
//   var filterValue = ( this ).attr('menu__sort');
//   // use filterFn if matches value
//   $grid.isotope({ filter: filterValue });
// });


var m__opt = [
  {
    name: "Classic",
  }
];