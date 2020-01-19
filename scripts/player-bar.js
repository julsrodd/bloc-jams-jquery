{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }

      const nextSong = album.songs[nextSongIndex];
      helper.playPauseAndUpdate(nextSong);
    });

   $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex - 1;
     if (nextSongIndex >= album.songs.length) { return; }

     const nextSong = album.songs[nextSongIndex];
     helper.playPauseAndUpdate(nextSong);
   });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });
}
