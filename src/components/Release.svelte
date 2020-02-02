<script>
import http from '../http';
import Foldable from './Foldable';
import Player from './Player';
import { getIn } from '../utils';

export let id;
export let folded = true;

let release = {};

(async () => {
  const req = await http.get(`/api/release/${id}`);
  release = req.data;
})();
</script>

<div class="release">
  <Foldable folded={folded}>
    <img slot="outside" src={release.thumb} alt={release.title} />
    <h2>{release.title}</h2>
    <Player src={getIn(release, 'videos', 0, 'uri')} />
  </Foldable>
</div>