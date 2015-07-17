var x;
var y;
var z;


var setRoofDimensions = function() {
  x = ((width / 2) + overhang_sides);
  y = height;
  z = ((depth / 2) + overhang_ends);
}

var onePointRoof = function () {
  //var x = ((width / 2) + overhang_sides);
  //var y = height;
  //var z = ((depth / 2)  + overhang_ends);

  var points = [
    new THREE.Vector3( x, y, z),
    new THREE.Vector3( (x * -1), y, z),
    new THREE.Vector3( x, y,(z * -1)),
    new THREE.Vector3((x * -1), y,( z * -1)),
    new THREE.Vector3(0, (y * 1.25), 0),
  ];

  return points;

}

var flatRoof = function () {
  //var x = ((width / 2) + overhang_sides);
  //var y = height;
  //var z = ((depth / 2)  + overhang_ends);

  var points = [
    new THREE.Vector3( x, y, z),
    new THREE.Vector3( (x * -1), y, z),
    new THREE.Vector3( x, y,(z * -1)),
    new THREE.Vector3((x * -1), y,( z * -1)),
  ];

  return points;

}

var splitRoof = function () {
  //var x = ((width / 2) + overhang_sides);
  //var y = height;
  //var z = ((depth / 2) + overhang_ends);

  var points = [
    new THREE.Vector3( x, y, z),
    new THREE.Vector3( (x * -1), y, z),
    new THREE.Vector3( x, y,(z * -1)),
    new THREE.Vector3((x * -1), y,( z * -1)),
    new THREE.Vector3(0, y*1.25, (z * -1)),
    new THREE.Vector3(0, y*1.25, z),
    new THREE.Vector3(0, y*1.25, 0),
  ];

  return points;

  }

var slantRoof = function () {
  //var x = ((width / 2) + overhang_sides);
  //var y = height;
  //var z = ((depth / 2) + overhang_ends);

  var points = [
    new THREE.Vector3( x, y, z),
    new THREE.Vector3( (x * -1), y, z),
    new THREE.Vector3( x, y,(z * -1)),
    new THREE.Vector3((x * -1), y,( z * -1)),
    new THREE.Vector3((x * -1), y*1.25, (z * -1)),
    new THREE.Vector3((x * -1), y*1.25, z),
  ];

return points;

}