export const useSkillsStore = defineStore('skills', {
  state: () => ({
    all: [],
  }),

  actions: {
    async fetch() {
      const app = useNuxtApp()

      const { objects } = await app.$cosmic.objects
        .find({
          type: 'skills',
          locale: 'en-US',
        })
        .props(['slug', 'title', 'content', 'metadata'])

      this.all = objects
    },
  },

  getters: {
    getAll: (state) => {
      return state.all
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSkillsStore, import.meta.hot))
}
