playlist = {};

function updatePlayList(object, key, value){
  return Object.assign({}, object, {[key]:value})
}