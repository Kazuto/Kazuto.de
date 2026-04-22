<template>
  <main class="container mx-auto px-4 py-16">
    <article
      v-if="post"
      class="mx-auto max-w-3xl"
    >
      <NuxtLink
        to="/blog"
        class="text-primary hover:text-primary-700 mb-8 inline-flex items-center"
      >
        <svg
          class="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {{ t('blog.backToList') }}
      </NuxtLink>

      <header class="mb-8">
        <h1 class="mb-4 text-4xl font-bold md:text-5xl">{{ post.title }}</h1>

        <div
          class="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400"
        >
          <time
            v-if="post.date"
            :datetime="post.date"
            class="flex items-center"
          >
            <svg
              class="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {{ formatDate(post.date) }}
          </time>

          <span
            v-if="post.author"
            class="flex items-center"
          >
            <svg
              class="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {{ post.author }}
          </span>

          <span
            v-if="post.readingTime"
            class="flex items-center"
          >
            <svg
              class="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {{ post.readingTime }}
          </span>
        </div>

        <p
          v-if="post.description"
          class="mt-4 text-xl text-gray-600 dark:text-gray-400"
        >
          {{ post.description }}
        </p>
      </header>

      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="mb-8 w-full rounded-lg"
      />

      <div class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <footer class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
        <div
          v-if="post.tags && post.tags.length > 0"
          class="flex flex-wrap gap-2"
        >
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-gray-800 px-3 py-1 text-sm text-white"
          >
            #{{ tag }}
          </span>
        </div>
      </footer>
    </article>

    <div
      v-else
      class="mx-auto max-w-3xl py-12 text-center"
    >
      <h1 class="mb-4 text-4xl font-bold">{{ t('blog.notFound') }}</h1>
      <NuxtLink
        to="/blog"
        class="text-orange-500 hover:text-orange-600"
      >
        {{ t('blog.backToList') }}
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  headerStatic: true,
})

const { t, locale } = useI18n()
const route = useRoute()

const { data: post } = await useAsyncData(
  `blog-post-${route.path}`,
  () => queryContent(route.path).findOne(),
  {
    watch: [() => route.path],
  }
)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

if (post.value) {
  useSeoMeta({
    title: post.value.title,
    description: post.value.description || post.value.title,
    ogTitle: post.value.title,
    ogDescription: post.value.description || post.value.title,
    ogImage: post.value.image || 'https://kazuto.de/images/og-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: post.value.title,
    twitterDescription: post.value.description || post.value.title,
    twitterImage: post.value.image || 'https://kazuto.de/images/og-image.png',
  })
}
</script>
