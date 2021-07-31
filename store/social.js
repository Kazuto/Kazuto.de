export const state = () => ({
  all: [
    // {
    //   name: 'youtube',
    //   url: 'https://www.youtube.com/kazutode',
    //   color: '#FF0000'
    // },
    {
      name: 'gitlab',
      url: 'https://gitlab.com/dev_kazuto',
      color: '#FC6D26',
    },
    // {
    //   name: 'github',
    //   url: 'https://github.com/Kazuto',
    //   color: '#24292E'
    // },
    {
      name: 'twitter',
      url: 'https://www.twitter.com/dev_kazuto',
      color: '#1DA1F2',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kai-mayer/',
      color: '#2867B2',
    },
    // {
    //   name: 'instagram',
    //   url: 'https://www.instagram.com/dev_kazuto',
    //   color: '#E1306C'
    // },
    // {
    //   name: 'twitch',
    //   url: 'https://twitch.tv/dev_kazuto',
    //   color: '#6441A4'
    // }
  ],
})

export const getters = {
  getAll: (state) => {
    return state.all
  },
}
