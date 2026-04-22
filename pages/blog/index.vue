<template>
  <main class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">{{ t('blog.title') }}</h1>

    <div v-if="pending" class="text-center py-12">
      <p>{{ t('blog.loading') }}</p>
    </div>

    <div v-else-if="posts && posts.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in posts"
        :key="post._path"
        class="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink :to="post._path" class="block group">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 class="text-2xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="text-gray-600 dark:text-gray-400 mb-4">
            {{ post.description }}
          </p>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <time v-if="post.date" :datetime="post.date">
              {{ formatDate(post.date) }}
            </time>
            <span v-if="post.author">{{ post.author }}</span>
          </div>
        </NuxtLink>
      </article>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">{{ t('blog.noPosts') }}</p>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  headerStatic: true
})

const { t, locale } = useI18n()

const { data: posts, pending } = await useAsyncData(
  'blog-posts',
  () => queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: t('blog.title'),
  description: t('blog.description'),
})
</script>
