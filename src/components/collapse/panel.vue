<template>
  <div class="ds-panel-wrapper">
    <div class="ds-collapse-header" @click="toggle">{{header}}</div>
    <collapse-transition>
      <div class="ds-collapse-content" v-show="isActive">
        <div class="ds-collapse-content-box">
          <slot/>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
import CollapseTransition from './collapse-transition';
export default {
  name: 'ds-panel',
  components: {
    CollapseTransition
  },
  data() {
    return {
      isActive: false
    };
  },
  props: {
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
