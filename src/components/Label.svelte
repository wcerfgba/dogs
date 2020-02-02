<script>
import http from '../http';
import Foldable from './Foldable';
import { getIn } from '../utils';

export let id;
export let folded = true;

let label = {};

(async () => {
  const req = await http.get(`/api/label/${id}`);
  label = req.data;
})();
</script>

<div class="label">
  <Foldable folded={folded}>
    <img slot="outside" src={getIn(label, 'images', 0, 'uri')} alt={label.name} />
    <h2>{label.name}</h2>
  </Foldable>
</div>