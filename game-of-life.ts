/**
 Do not return anything, modify board in-place instead.
 */

/**
   Since we are modifying the grid in place, we will represent:
   - cells that are dead, and will start living by a 2;
   - cells that are living, and will go extinct by a 3;
   - dead cells that will remain dead by a 0;
   - living cells that will remain living by a 1;
 */
function gameOfLife(board: number[][]): void {
  let directions = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  let ROWS = board.length, COLS = board[0].length;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let liveNei = 0;

      for (let [dr, dc] of directions) {
        // skip if the direction leads us out of bounds
        if (r + dr < 0 || c + dc < 0 || r + dr === ROWS || c + dc === COLS) continue;

        liveNei += board[r + dr][c + dc] % 2; // will increment by one for 1 and 3
      };

      if (board[r][c] === 1 && liveNei < 2) {
        board[r][c] = 3; // dies by underpopulation
      } else if (board[r][c] === 1 && (liveNei === 2 || liveNei === 3)) {
        board[r][c] = 1 // does not change the value
      } else if (board[r][c] === 1 && liveNei > 3) { // living cell with more than three living neighbours
        board[r][c] = 3;
      } else if (board[r][c] === 0 && liveNei === 3) {
        board[r][c] = 2;
      }
    }
  };


  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 2) {
        board[r][c] = 1
      } else if (board[r][c] === 3) {
        board[r][c] = 0;
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] === 3) {
        board[r][c] = 0
      }
    }
  }
};