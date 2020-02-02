<script>
import { onMount } from 'svelte';

export let src;

const id = `player-${Math.random()}`;

onMount(async () => {
  if (window.YT == undefined || window.YT.Player == undefined) { 
    window.onYouTubeIframeAPIReady = () => {
      init();
    };

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  init();
});

const getYouTubeIdFromParam = (url) => {
  if (url === undefined || url === null || !url.trim().length) {
    return null;
  }

  const
    parts = url.split('?'),
    parameters = parts[1].split('&')
  ;

  let youTubeId = '';

  for (let i = 0, total = parameters.length; i < total; i++) {
    const paramParts = parameters[i].split('=');
    if (paramParts[0] === 'v') {
      youTubeId = paramParts[1];
      break;
    }
  }

  return youTubeId;
};

function init() {
  if (global.YT && global.YT.Player) {
    _init();
  }
}

function _init() {
  console.log(src, getYouTubeIdFromParam(src));

  const player = new YT.Player(id, {
    height: '390',
    width: '640',
    videoId: getYouTubeIdFromParam(src),
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}

$: init();
</script>

<div id={id}></div>