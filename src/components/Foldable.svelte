<style>
.folded .inside {
  display: none;
}
</style>

<script>
export let folded = true;

let _folded = folded;
</script>

<div class="foldable" class:folded={_folded}>
  <div class="outside" on:click={() => _folded = !_folded}>
    <slot name="outside"></slot>
  </div>
  <div class="inside">
    <slot></slot>
  </div>
</div>