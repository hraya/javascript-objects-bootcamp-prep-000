var playlist = {
  'The Beatles': 'Yellow Submarine',
  'Timon and Pumba': 'Hakuna Matata'
}

function updatePlaylist(playlist, artisName, songTitle) {

  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}