<template>
  <transition name="fade">
  <div
    v-if="displaySnackbar"
    class="snackbar"
    @click="closeSnackbar($event)"
  >
    <div class="snackbar__bg"></div>
    <div class="snackbar__inner">
      <span class="snackbar__title">
        <i class="fas fa-exclamation-triangle"></i>
        <span>Do You want to delete this news?</span>
      </span>
      <div class="snackbar__btns">
        <button 
          @click.prevent="displaySnackbar = !displaySnackbar"
          class="btn btn--red btn--narrower"
        >
            No
        </button>
        <button
          @click.prevent="removeNote"
          class="btn btn--white btn--narrower"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { EventBus } from '@/event-bus.js';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      displaySnackbar: false,
      noteId: null,
    }
  },
  mounted() {
    EventBus.$on('show-snackbar', (id) => {
      this.displaySnackbar = true;
      this.noteId = id;
    })
  },
  methods: {
    ...mapActions([
      'deleteNote',
    ]),
    closeSnackbar(e){
      const items = document.querySelectorAll('.noteItem__cell .checkbox input');
      [...items].forEach(item => item.checked = false);
      if (e.target.classList.contains('snackbar__bg')) this.displaySnackbar = false;
    },
    removeNote() {
      this.deleteNote(this.noteId);
      this.displaySnackbar = false;
    },
  },
}
</script>


<style lang="scss">
.snackbar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.snackbar__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgba(#000, .4);
}
.snackbar__inner {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: auto;
  padding: 6px;
  border-radius: 3px;
  background: #db3b2d;
  transform: translateY(0);
}
.snackbar__title {
  margin-left: 5px;
  color: #fff;
  font-size: 14px;
  span {
    margin-left: 5px;
  }
}
.snackbar__btns {
  display: flex;
  .btn {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  .snackbar__inner {
    transition: opacity 0.3s ease, transform .3s ease;
  }
} 
.fade-enter, .fade-leave-to {
  .snackbar__inner {
    transform: translateY(50px);
  } 
}

@media (max-width: 600px) {
  .snackbar__inner {
    width: 90%;
  }
  .snackbar__title {
    font-size: 12px;
  }
}
</style>
