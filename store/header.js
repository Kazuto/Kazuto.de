export const state = () => ({
  isMenuOpen: false,
  items: [
    {
      name: 'My work',
      target: '#portfolio',
    },
    {
      name: 'My skills',
      target: '#skills',
    },
    {
      name: 'Hire me',
      target: '#contact',
    },
  ],
})

export const actions = {
  toggleMenu({ commit }) {
    commit('SET_MENU')
  },
}

export const mutations = {
  SET_MENU(state) {
    state.isMenuOpen = !state.isMenuOpen
  },
}

export const getters = {
  getAllItems: (state) => {
    return state.items
  },
  getMenuState: (state) => {
    return state.isMenuOpen
  },
}
