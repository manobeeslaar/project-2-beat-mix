// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function drumArray(arrayName) {
  switch (arrayName) {
    case 'kicks': return kicks;
    case 'snares': return snares;
    case 'hiHats': return hiHats;
    case 'rideCymbals': return rideCymbals;
    default: return;
  }
};

function between(indexNumber) {
  return indexNumber >= 0 && indexNumber <= 16;
};

function toggleDrum(arrayName, indexNumber) {
  let drum = drumArray(arrayName);
  if (between(indexNumber) && drum[indexNumber] === false) {
    return drum[indexNumber] = true;
  } else if (between(indexNumber) && drum[indexNumber] === true) {
    return drum[indexNumber] = false;
  }
};

function clear(arrayName, indexNumber) {
  let drum = drumArray(arrayName);
  if (drum) {
  return drum.fill(false);
  }
};

function invert(arrayName) {
  let drum = drumArray(arrayName);
  if (!drum) {
    return;
  };
  for (let iIndex = 0; iIndex < drum.length; iIndex++) {
    drum[iIndex] = !drum[iIndex];
  };
};

function getNeighborPads(x, y, size) {
  const neighborPads = [];
  if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
    return neighborPads;
  }
  neighborPads.push([x - 1, y]);
  neighborPads.push([x, y - 1]);
  neighborPads.push([x + 1, y]);
  neighborPads.push([x, y + 1]);
  return neighborPads.filter(function(neighbor) {
    return neighbor.every(function(val) {
      return val >= 0 && val < size;
    });
  });
};
