export const state = () => ({
  all: [],
})

export const actions = {
  async getProjects({ commit }) {
    const { objects } = await this.$cosmic.getObjects({
      type: 'projects',
      props: 'slug,title,content,metadata',
      locale: 'en-US',
    })
    commit('SET_PROJECTS', objects)
  },
}

export const mutations = {
  SET_PROJECTS(state, payload) {
    state.all = payload
  },
}

export const getters = {
  getAll: (state) => {
    return state.all
  },
  getFeatured: (state) => {
    return state.all.filter((project) => project.metadata.featured === true)
  },
  getNonFeatured: (state) => {
    return state.all.filter((project) => project.metadata.featured !== true)
  },
}
