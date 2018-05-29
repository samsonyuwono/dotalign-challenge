const duck = (bounds, pos, instructions) => {
  let state = {
    bounds: bounds.split(" "),
    pos: pos.split(" "),
    instructions
  };

  return Object.assign({}, start(state));
};

const start = state => ({
  moveDuck: () => {
    const maxX = state.bounds[0];
    const maxY = state.bounds[1];
    const s = ["N", "E", "S", "W"];
    const p = ["N", "W", "S", "E"];
    let x = +state.pos[0];
    let y = +state.pos[1];
    let orientation = state.pos[2];

    for (let i = 0; i < state.instructions.length; i++) {
      let instruction = state.instructions[i];
      let oldOrientation = orientation;
      switch (instruction) {
        case "P":
          orientation =
            p.indexOf(oldOrientation) === p.length - 1
              ? p[0]
              : p[p.indexOf(oldOrientation) + 1];
          break;
        case "S":
          orientation =
            s.indexOf(oldOrientation) === s.length - 1
              ? s[0]
              : s[s.indexOf(oldOrientation) + 1];
          debugger;
          break;
        case "F":
          switch (orientation) {
            case "N":
              if (y === maxY) continue;
              else y = y + 1;
              break;
            case "S":
              if (y === 0) continue;
              else y = y - 1;
              break;
            case "E":
              if (x === maxX) continue;
              else x = x + 1;
              break;
            case "W":
              if (x === 0) continue;
              else x = x - 1;
              break;
          }
      }
    }
    return console.log([x, y, orientation].join(" "));
  }
});

const duck1 = duck("5 5", "1 2 N", "PFPFPFPFF");
const duck2 = duck("5 5", "3 3 E", "FFSFFSFSSF");

duck1.moveDuck();
duck2.moveDuck();
