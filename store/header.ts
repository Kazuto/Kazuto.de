export const useHeaderStore = defineStore('header', {
  state: () => ({
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
  }),

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },

  getters: {
    getAllItems: (state) => {
      return state.items
    },
    getMenuState: (state) => {
      return state.isMenuOpen
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHeaderStore, import.meta.hot))
}
