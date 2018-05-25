class Duck {
  constructor(row, col, dir) {
    this.rows = rows;
    this.cols = cols;
    this.dir = dir;
  }

  output() {
    console.log(this.row + " " + this.column + " " + this.direction);
  }
}

class Pond {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.initPond();
  }

  initPond() {
    this.board = new Array(this.rows);
    for (var r = 0; r < this.rows; r++) {
      this.board[r] = new Array(this.cols);
      for (var c = 0; c < this.rows; c++) {
        this.board[r][c] = ".";
      }
    }
  }
  orientation(duck, command) {
    var dirToNum = { N: 1, W: 2, S: 3, E: 4 };
    // key value pair using dictionary for number to direction
    var numToDir = { 1: "N", 2: "W", 3: "S", 4: "E" };

    // get number of the currect direction and save in variable
    var val = dirToNum[duck.dir];

    if (command === "S") {
      // if moving starboard side i.e. right then subtract
      val -= 1;
      if (val < 1) {
        val = 4;
      }
    } else if (command === "P") {
      // if moving port side i.e. left then add
      val += 1;
      if (val > 4) {
        val = 1;
      }
    } else {
      console.log("Invalid change direction command: " + command);
      process.exit(1);
    }
    // convert computed number to direction again
    duck.dir = numToDir[val];
    debugger;
  }

  move() {
    //where is it going?
  }

  process() {}

  start() {
    //instantiate new move
  }
}

let pond = new Pond(10, 10);
