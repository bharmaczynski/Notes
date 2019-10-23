import axios from 'axios';

const state = {
  notes: [],
  sortBy: 'id',
  sortAscending: true,
};

const getters = {
  allNotes: (state) => state.notes,
  sortedItems: (state) => {
    const sortKey = state.sortBy.toLowerCase();
    const tempState = state.notes;
    if (sortKey === 'id') {
      tempState.sort((a, b) => parseFloat(a[sortKey]) - parseFloat(b[sortKey]));
    } else {
      tempState.sort((a, b) => {
        let compare = 0;
        if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
          compare = 1;
        } else if(b[sortKey].toLowerCase() > a[sortKey].toLowerCase()) {
          compare = -1;
        }
        return compare;
      });
    };
    if (!state.sortAscending) tempState.reverse();
    return tempState;
  }
};

const actions = {
  async fetchNotes({ commit }) {
    const response = await axios.get('http://localhost:3000/notes');
    commit('setNotes', response.data);
  },
  async addNote({ commit }, note) {
    const response = await axios.post('http://localhost:3000/notes', note);
    commit('newNote', response.data);
  },
  async deleteNote({ commit }, id) {
    await axios.delete(`http://localhost:3000/notes/${id}`);
    commit('removeNote', id);
  },
  async setSort({ commit }, payload) {
    commit('setSort', payload);
  }
}

const mutations = {
  setNotes: (state, notes) => state.notes = notes,
  newNote: (state, note) => state.notes.push(note),
  removeNote: (state, id) => state.notes = state.notes.filter(note => note.id !== id ),
  setSort: (state, payload) => {
    state.sortBy = payload.title;
    state.sortAscending = payload.ascending;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}