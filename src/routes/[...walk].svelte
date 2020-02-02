<script context="module">
export async function preload(page, session) {
  const walk = page.params.walk;
  const steps = [];

  for (let i = 0; i <= walk.length - 2; i += 2) {
    steps.push([ walk[i], walk[i + 1] ]);
  }

  return { steps };
}
</script>

<script>
import Release from '../components/Release';
import Artist from '../components/Artist';
import Label from '../components/Label';

const components = {
  release: Release,
  artist: Artist,
  label: Label,
};

export let steps;

const prev = steps.slice(0, -1);
const curr = steps[steps.length - 1];

</script>

{#each prev as step}
  <svelte:component this={components[step[0]]} id={step[1]} folded={true} />
{/each}

{#if Array.isArray(curr)}
<svelte:component this={components[curr[0]]} id={curr[1]} folded={false} />
{/if}