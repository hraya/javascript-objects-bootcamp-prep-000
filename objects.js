let playlist = {
  'The Beatles' : 'Yellow Submarine'
};

function updatePlayList(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}