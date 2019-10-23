<template>
  <div 
    class="headerItem" 
    :class="{ 'headerItem--wider' : wider }"
  >
    <div class="headerItem__left">
      <slot></slot>
      <span class="headerItem__title">{{ title }}</span>
    </div>
    <div class="headerItem__right">
      <div class="headerItem__arrows">
        <i 
          @click="getOrderParameters(title, true)"
          class="fas fa-chevron-up"
        >
        </i>
        <i 
          @click="getOrderParameters(title, false)" 
          class="fas fa-chevron-down"
        >
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  },
  methods: {
    ...mapActions([
      'setSort',
    ]),
    getOrderParameters(title, ascending) {
      this.setSort({title, ascending})
    }
  }
}
</script>

<style lang="scss">
.headerItem {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: #989898;
  margin-right: 1px;
  &:last-child {
    margin-right: 0;
  }
  &--wider {
    flex: 2;
  }
}
.headerItem__left {
  display: flex;
  align-items: center;
}
.headerItem__title {
  margin-left: 8px;
  color: #f5f5f5;
  font-size: 12px;
}
.headerItem__arrows {
  display: flex;
  flex-direction: column;
  i {
    cursor: pointer;
    padding: 1px;
    color: #f5f5f5;
    font-size: 8px;
    opacity: 0.5;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
}

@media (max-width: 600px) {
  .headerItem {
    padding: 5px;
  }
  .headerItem__title {
    margin-left: 5px;
    font-size: 11px;
  }
}
</style>
