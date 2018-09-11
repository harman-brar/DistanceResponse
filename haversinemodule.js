exports.HaversineCalc = function(lat1, long1, lat2, long2) {

  // radians converter for trigonometric functions in haversine formula
  const toRad = x => (x * Math.PI) / 180;

  // radius of earth in kilometers
  var r = 6371;

  var l1 = lat2-lat1;
  // difference of latitude converted to radians
  var diffLat = toRad(l1);

  var l2 = long2-long1;
  // difference of longitude converted to radians
  var diffLon = toRad(l2);

  // haversine function applied to difference of latitude
  var havLat = Math.sin(diffLat/2) * Math.sin(diffLat/2);
  // haversine function applied to difference of longitude
  var havLon = Math.sin(diffLon/2) * Math.sin(diffLon/2);

  // haversine formula
  var a = havLat + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * havLon;
  var h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  // solving for distance
  var distance = r * h;

  return distance;

}
