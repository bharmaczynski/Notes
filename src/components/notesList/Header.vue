<template>
  <div class="notesList__header">
    <HeaderItem title="ID">
      <label class="checkbox">
        <input type="checkbox">
        <i class="fas fa-check"></i>
      </label>
    </HeaderItem>
    <HeaderItem 
      title="Title"
      :wider="true" 
    />
    <HeaderItem
      title="Content"
      :wider="true"
    />
    <HeaderItem title="Status" />
  </div>
</template>

<script>
import HeaderItem from '@/components/notesList/HeaderItem';

export default {
  components: {
    HeaderItem,
  },
}
</script>

<style>
.notesList__header {
  display: flex;
}
</style>
