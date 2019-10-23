<template>
  <div
    class="noteItem__cell" 
    :class="{ 'noteItem__cell--wider' : wider }"
  >
    <slot></slot>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    wider: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
.noteItem__cell {
  display: flex;
  flex: 1;
  padding: 10px;
  &--wider {
    flex: 2;
  }
  span {
    margin-left: 8px;
    font-size: 14px;
  }
  label ~ span {
    color: #2d6695;
  }
}

@media (max-width: 600px) {
  .noteItem__cell {
    padding: 8px 5px;
    span {
      font-size: 10px;
    }
  }
}
</style>
