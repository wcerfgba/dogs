<script context="module">
export async function preload(page, session) {
  return { walk: page.params.walk };
}
</script>

<script>
import Release from '../components/Release';

export let walk;
</script>

<p>{walk}</p>