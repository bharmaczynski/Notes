<template>
  <div class="noteItem">
    <NoteItemCell :title="String(note.id)" >
      <label 
        @click="triggerSnackbar()"
        class="checkbox"
      >
        <input type="checkbox">
        <i class="fas fa-check"></i>
      </label>
    </NoteItemCell>
    <NoteItemCell
      :title="note.title"
      :wider="true"
    />
    <NoteItemCell
      :title="note.content"
      :wider="true"
    />
    <NoteItemCell :title="note.status" />
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js';
import NoteItemCell from '@/components/notesList/NoteItemCell';

export default {
  components: {
    NoteItemCell,
  },
  props: {
    note: {
      type: Object,
      default: null,
    }
  },
  methods: {
    triggerSnackbar() {
      EventBus.$emit('show-snackbar', this.note.id);
    },
  }
}
</script>

<style lang="scss">
.noteItem {
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}
</style>
