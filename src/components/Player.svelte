<script>
import { onMount } from 'svelte';

export let src;

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

const id = getYouTubeIdFromParam(src);

onMount(async () => {
  const module = await import('../mediaplayer');
});
</script>

{#if id !== null}
<lite-youtube videoid={id}></lite-youtube>
{/if}