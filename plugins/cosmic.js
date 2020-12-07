const Cosmic = require('cosmicjs')
const api = Cosmic()

export default ({ app }, inject) => {
  const bucket = api.bucket({
    slug: app.$config.cosmicBucketSlug,
    read_key: app.$config.cosmicReadKey,
  })

  inject('cosmic', bucket)
}
