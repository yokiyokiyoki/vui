<template>
  <div class="ds-panel-wrapper">
    <div class="ds-collapse-header">{{header}}</div>
    <div class="ds-collapse-content">
      <div class="ds-collapse-content-box">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ds-panel',
  props: {
    disabled: {
      type: Boolean,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    key: {
      type: String,
      required: true
    }
  }
};
</script>
