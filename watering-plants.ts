/**
 * #Plan: For each plant in the garden, determine if the current units of water in the can
 * can be enough to water the next one. If it is, then go to the next one and water it.
 * if it is not, go back to the river, fetch water and go to the next plant.
 * hence, we will keep track of the current water in the can, and the number of steps so far
 */

function wateringPlants(plants: number[], capacity: number): number {
  let current = capacity;
  let res = 0;

  // we initialize i to -1 because we initially start at the river
  for (let i = -1; i < plants.length; i ++) {
      // if the capacity is not enough, add the number of steps needed to go back and forth
      // to the river for replenishment (returning to the current plant)
      if(current < plants[i + 1]) {
          res += 2 * (i + 1);
          current = capacity;
      }
      // increment res anyways because we need to make one step to go to the next plant
      res += i===-1 ? 0 : 1; // ignore the initial iteration
      current -= (i === plants.length - 1) ? 0 : plants[i + 1];
  };

  return res;
};