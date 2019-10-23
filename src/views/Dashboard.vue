<template>
  <div>
    <StatsBox />
    <NotesList />
    <Dialog />
    <Snackbar />
  </div>
</template>

<script>
import StatsBox from '../components/statsBox/Component';
import NotesList from '../components/notesList/Component';
import Dialog from '../components/Dialog';
import Snackbar from '../components/Snackbar';

export default {
  components:{
    StatsBox,
    NotesList,
    Dialog,
    Snackbar,
  },
}
</script>

<style>

</style>