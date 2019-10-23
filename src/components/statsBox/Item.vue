<template>
  <div class="statsItem">
    <span class="statsItem__title">{{ title }}</span>
    <span class="statsItem__value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: null,
    }
  }
}
</script>

<style lang="scss" scoped>
.statsItem {
  display: flex;
  flex-direction: column;
  min-width: 150px;
}
.statsItem__title {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 1.3;
}
.statsItem__value {
  margin-top: 3px;
  font-size: 20px;
}

@media (max-width: 600px) {
  .statsItem {
    justify-content: center;
    min-width: 120px;
    margin-bottom: 20px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .statsItem__title {
    font-size: 12px;
  }
  .statsItem__value {
    font-size: 16px;
  }
}
</style>
