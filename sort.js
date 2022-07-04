const coordinates =[{x:54,y:79},{x:90,y:100},{x:54,y:60},{x:10,y:12},{x:1,y:1}];

//caculate the distance between 2 mast
const distance = (coor1, coor2) => {
   const x = coor2.x - coor1.x;
   const y = coor2.y - coor1.y;
   return Math.sqrt((x*x) + (y*y));
};

//sort the group of masts from given mast
const sortByDistance = (coordinates, point) => {
   const sorter = (a, b) => distance(a, point) - distance(b, point);
   coordinates.sort(sorter);
};
sortByDistance(coordinates, {x:50,y:50});

console.log(coordinates);

module.exports = { sortByDistance }