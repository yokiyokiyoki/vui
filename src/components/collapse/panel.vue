<template>
  <div class="ds-panel-wrapper">
    <div class="ds-collapse-header" @click="toggle">{{header}}</div>
    <transition name="collapse">
      <div class="ds-collapse-content" v-show="isActive">
        <div class="ds-collapse-content-box">
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'ds-panel',
  data() {
    return {
      isActive: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$parent.toggle({
        name: this.name,
        isActive: this.isActive
      });
    }
  }
};
</script>
