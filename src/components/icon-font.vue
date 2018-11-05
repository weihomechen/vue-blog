<template>
  <svg class="icon" aria-hidden="true" :style="svgStyle">
    <use v-bind:xlink:href="iconName" :style="useStyle"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    type: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.type}`;
    },
    svgStyle() {
      return {
        fontSize: this.fontSize
      };
    },
    useStyle() {
      return {
        color: this.color
      };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
