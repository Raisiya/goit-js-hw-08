import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const onPlay = throttle((data) =>
    localStorage.setItem(CURRENT_TIME, data.seconds), 1000);

player.on('timeupdate', onPlay);
const time = localStorage.getItem(CURRENT_TIME);
if (time) {
    player.setCurrentTime(JSON.parse(time));  
};