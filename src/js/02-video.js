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

    player.setCurrentTime(localStorage.getItem(KEY)).then(function(seconds){
    seconds = localStorage.getItem(KEY);
      }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
              console.log(error.name);   
                break;
  
            default:
              console.log('some other error occurred');
                break;
        }
      });
