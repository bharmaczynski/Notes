<template>
  <transition name="fade">
  <div
    v-if="displayDialog"
    class="dialog"
    @click="closeDialog($event)"
  >
    <div class="dialog__bg"></div>
    <div class="dialog__inner">
      <span class="dialog__title">News</span>
      <form>
        <div class="dialog__field">
          <input 
            :class="{ 'is-invalid': errors.has('title') }"
            type="text" 
            v-model="note.title"
            id="title"
            name="title"
            placeholder="Add title"
            v-validate="'required'"
          />
          <div 
            v-if="errors.has('title')"
            class="dialog__invalid-feedback"
          >
            The TITLE field is required.
          </div>
        </div>
        <div class="dialog__field">
          <textarea 
            :class="{ 'is-invalid': errors.has('title') }"
            type="text" 
            v-model="note.content"
            id="content"
            name="content"
            placeholder="Lorem ipsum..." 
            v-validate="'required'"
          />
          <div 
            v-if="errors.has('content')"
            class="dialog__invalid-feedback"
          >
            The CONTENT field is required.
          </div>
        </div>
        <div class="dialog__btns">
          <button 
            @click.prevent="saveNote()"
            class="btn"
          >
            Save
          </button>
          <button
            @click.prevent="displayDialog = !displayDialog"
            class="btn btn--secondary btn--narrower"
          >
            Cancel
          </button>
        </div>
      </form>
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
      note: {
        title: null,
        content: null,
      },
      displayDialog: false,

    }
  },
  mounted() {
    EventBus.$on('show-dialog', () => {
      this.displayDialog = true;
    })
  },
  methods: {
    ...mapActions([
      'addNote',
    ]),
    closeDialog(e){
      if (e.target.classList.contains('dialog__bg')) this.displayDialog = false;
    },
    async saveNote() {
      const isValid = await this.$validator.validate();
      if (!isValid) {
        return
      }

      try {
        const newNote = {
          title: this.note.title,
          content: this.note.content,
          status: 'New',
        };
        this.addNote(newNote);
        this.note = {};
        this.displayDialog = false;
      } catch(error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss">
.dialog {
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  form {
    display: flex;
    flex-direction: column;
    input, textarea {
      padding: 8px 12px;
      border-radius: 3px;
      border: 1px solid #cdcdcd;
      transition: border 0.2s ease;
      &::placeholder {
        color: #cdcdcd;
      }
      &:hover, &:focus {
        border: 1px solid #2d6695
      }
      &.is-invalid {
        border: 1px solid #db3b2d;
      }
    }
  }
}
.dialog__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.dialog__invalid-feedback {
  margin-top: 5px;
  font-size: 12px;
  color: #db3b2d
}
.dialog__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgba(#000, .4);
}
.dialog__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  transform: translateY(0);
}
.dialog__title {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
}
.dialog__btns {
  display: flex;
  button {
    margin-right: 10px;
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
  .dialog__inner {
    transition: opacity 0.3s ease, transform .3s ease;
  }
} 
.fade-enter, .fade-leave-to {
  .dialog__inner {
    transform: translateY(50px);
  } 
}

@media (max-width: 600px) {
  .dialog__inner {
    width: 90%;
  }
}
</style>
