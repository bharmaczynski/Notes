<template>
  <div class="notesList__content">
    <NoteItem 
      v-for="note in sortedItems"
      :key="note.id"
      :note="note" 
    />
    <div class="addBtn">
      <button 
        @click="triggerDialog()"
        class="btn btn--wider"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { EventBus } from '@/event-bus.js';

import NoteItem from '@/components/notesList/NoteItem';

export default {
  components: {
    NoteItem,
  },
  created() {
    this.fetchNotes();
  },
  computed: {
    ...mapGetters([
      'sortedItems',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchNotes',
      'deleteNote',
    ]),
    triggerDialog() {
      EventBus.$emit('show-dialog');
    },
    removeNote() {
      this.deleteNote();
    }
  }
}
</script>

<style lang="scss">
.notesList {
  display: flex;
  flex-direction: column;
}
.addBtn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
