let playlist = {
  'The Beatles' : 'Yellow Submarine'
};

function updatePlayList(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}