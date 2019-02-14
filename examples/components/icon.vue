<template>
  <div class="icon">
    <ds-icon type="descend" size="25"></ds-icon>
    <ds-icon type="descend" rotate="180"></ds-icon>
    <ds-icon type="descend" spin></ds-icon>
    <ds-icon type="descend" custom="custom-icon"></ds-icon>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
  .custom-icon {
    padding: 5px;
    border-radius: 50%;
    border: 1px solid #000;
    background: #eee;
  }
</style>

