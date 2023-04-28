import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const secondNow = localStorage.getItem("videoplayer-current-time");


const timeListenerSecond = function(data) {
    player.getCurrentTime().then(function(seconds) {
        // _.throttle(
        localStorage.setItem("videoplayer-current-time", seconds),
        // 1000);
        console.log(seconds);
    }).catch(function(error) {
    });
};

player.on('timeupdate', _.throttle(timeListenerSecond, 1000));

player.setCurrentTime(secondNow).then(function(seconds) {})
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});


console.log(secondNow)