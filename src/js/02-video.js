import Player from '@vimeo/player';
    const iframe = document.querySelector('iframe');
     const player = new Vimeo.Player(iframe);
 
     const KEY = "videoplayer-current-time";
     const throttle = require('lodash.throttle');

     const onPlay = function(timeupdate) {
      localStorage.setItem(KEY, timeupdate.seconds)

      console.log(timeupdate.seconds);
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));

    const setTime = localStorage.getItem(KEY);

    if (setTime) {
      player.setCurrentTime(setTime)
    }
   
