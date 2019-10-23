<template>
  <div class="notesList">
    <NotesListHeader />
    <NotesListContent />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import NotesListContent from '@/components/notesList/Content';
import NotesListHeader from '@/components/notesList/Header';

export default {
  components: {
    NotesListHeader,
    NotesListContent,
  },
}
</script>

<style lang="scss">
.notesList {
  display: flex;
  flex-direction: column;
}
</style>
