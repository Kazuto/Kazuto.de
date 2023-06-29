import { createBucketClient } from '@cosmicjs/sdk'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const cosmic = createBucketClient({
    bucketSlug: config.public.cosmicBucketSlug,
    readKey: config.public.cosmicReadKey,
  })

  nuxtApp.provide('cosmic', cosmic)
})
