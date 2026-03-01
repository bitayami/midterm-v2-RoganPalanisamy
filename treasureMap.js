/*
We have a grid with multiple hidden treasures marked as 'X'. We need a report on how many there are and exactly where they are.

Instruction
Create a function named treasureMap that receives an array of arrays (grid). 
It must return an object with this structure:
{
  treasureCount: number,
  coordinates: [ [x, y], [x, y] ... ]
}
*/




const treasureMap = function (grid) {
  let treasureCount = 0;
  let coordinates = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "X") {
        treasureCount++;
        coordinates.push([x, y]);
      }
    }
  }

  return {
    treasureCount,
    coordinates
  };
};

const grid = [
  ['.', 'X', '.', '.', '.'],
  ['.', '.', 'X', '.', '.'],
  ['X', '.', '.', 'X', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', 'X', '.', '.', 'X']
];


console.log(treasureMap(grid))


module.exports = treasureMap;
