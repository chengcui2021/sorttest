const { sortByDistance } = require('../sort');

describe('sort the mast by distance from given mast', () => {
    const coordinates = [{x:54,y:79},{x:90,y:100},{x:54,y:60},{x:10,y:12},{x:1,y:1}];
    sortByDistance(coordinates, {x:50,y:50})
    test('should determine the closest mast for (50, 50) is (54, 60)', () => {
        expect(coordinates[0]).toEqual({ x: 54, y: 60 });
    });
});