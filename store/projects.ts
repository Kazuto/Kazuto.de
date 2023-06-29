export const useProjectStore = defineStore('projects', {
  state: () => ({
    all: [],
  }),

  actions: {
    async fetch() {
      const app = useNuxtApp()

      const { objects } = await app.$cosmic.objects
        .find({
          type: 'projects',
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
    getFeatured: (state) => {
      return state.all.find((project) => project.metadata.featured === true)
    },
    getNonFeatured: (state) => {
      return state.all.filter((project) => project.metadata.featured !== true)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
}
