<template>
  <div class="statsBox">
    <div class="statsBox__inner">
      <StatsItem 
        title="Total" 
        :value="stats.total" 
      />
      <StatsItem
        title="Completed"
        :value="stats.completed"
      />
      <StatsItem
        title="Not completed"
        :value="stats.notCompleted"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import StatsItem from '@/components/statsBox/Item';

export default {
  components: {
    StatsItem
  },
  data() {
    return {
      stats: {
        total: null,
        completed: null,
        notCompleted: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'allNotes'
    ]),
  },
  watch: {
    allNotes(value){
      this.setStats(value);
    }
  },
  methods: {
    setStats(value) {
      this.stats = {
        total: value.length,
        completed: value.filter(note => note.status === 'Completed').length,
        notCompleted: value.filter(note => note.status === 'Not completed').length
      }
    }
  }
}
</script>

<style scoped>
.statsBox {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.statsBox__inner {
  display: flex;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px rgba(10,10,10, 0.15);
  background: #fff;
}

@media (max-width: 600px) {
  .statsBox__inner {
    padding: 14px;
    flex-direction: column;
  }
}
</style>
