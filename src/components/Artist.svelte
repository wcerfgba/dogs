<script>
import http from '../http';
import Foldable from './Foldable';
import { getIn }  from '../utils';

export let id;
export let folded = true;

let artist = {};

(async () => {
  const req = await http.get(`/api/artist/${id}`);
  artist = req.data;
})();
</script>

<div class="artist">
  <Foldable folded={folded}>
    <img slot="outside" src={getIn(artist, 'images', 0, 'uri')} alt={getIn(artist, 'name')} />
    <h2>{getIn(artist, 'name')}</h2>
  </Foldable>
</div>