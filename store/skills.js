export const state = () => ({
  all: [],
})

export const actions = {
  async getStacks({ commit }) {
    const { objects } = await this.$cosmic.getObjects({
      type: 'stacks',
      props: 'slug,title,content,metadata',
      locale: 'en-US',
    })
    commit('SET_STACKS', objects)
  },
}

export const mutations = {
  SET_STACKS(state, payload) {
    state.all = payload
  },
}

export const getters = {
  getAll: (state) => {
    return state.all
  },
}
