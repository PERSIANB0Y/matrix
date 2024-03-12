document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('resize', function() {});

var background = document.getElementById("background");

var window_pos_X = window.screenX; // opened browser position from left of screen.
var window_pos_Y = window.screenY; // opened browser position from top of screen.
var window_size_H = window.innerHeight; // window height size.
var window_size_W = window.innerWidth; // window width size.
var Y_cubes = 0; // all the cubes that can be placed in one column.
var X_cubes = 0; // all the cubes that can be placed in one line.

for (let i = 1; i <= window_size_W; i += 100) {
  // Add 1 to the variable for every 100px
  var X_cubes = X_cubes + 1;
}

for (let i = 1; i <= window_size_H; i += 100) {
  // Add 1 to the variable for every 100px
  var Y_cubes = Y_cubes + 1;
  for (let i = 1; i <= Y_cubes; i += 10){
    var Y_cubes = Y_cubes;
  }
}

var all_cubes = Y_cubes * X_cubes; // all the cubes that can be placed in the background.

for (let i = 0; i < all_cubes; i++){
  var cubes = document.createElement("div");
  cubes.className = "cubes";
  background.appendChild(cubes);
}

console.log("window position from : ", "Top:", window_pos_Y, "  Left:", window_pos_X);
console.log("window size : ", "height:", window_size_H, "  width:", window_size_W);
console.log("cubes can fit in the screen : ", " in one line:", X_cubes, "  in one column:", Y_cubes, "  Total:", all_cubes);

});
