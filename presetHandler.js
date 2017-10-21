// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, indexNumber, newPresetArray) => {
  if (method === 'GET') {
  let preset = getPreset(indexNumber);
  if (preset) {
    return [200, preset];
  } else {
    return [404];
  }
} else if (method === 'PUT') {
  let newPreset = createUpdatePreset(indexNumber, newPresetArray);
    if (newPreset) {
      return [200, newPreset];
    } else {
      return [404];
    }
  } else {
    return [400];
  }
};

function getPreset(indexNumber) {
  return presets[indexNumber] || null;
};

function createUpdatePreset(indexNumber, array) {
  if (!presets[indexNumber]) {
    return;
  }
  presets[indexNumber] = array;
  return presets[indexNumber];
};




// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
