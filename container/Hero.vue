<template>
  <Section id="landing" class="text-white bg-secondary-500 box-shadow relative overflow-hidden" name="landing" fluid>
    <span class="absolute -right-72 -bottom-20 z-0 select-none saturate-50 opacity-20" aria-hidden="true">
      <nuxt-img class="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]" src="images/undraw_coding.svg"
        alt="illustration" />
    </span>

    <Container>
      <div class="z-10 w-full h-screen flex place-items-center">
        <div class="w-3/4 md:w-2/3 lg:w-1/2">
          <h1 id="title" class="text-display4 font-bold uppercase mb-8 !leading-tight">
            Uniquely crafted web experiences
          </h1>

          <div id="cta" class="flex flex-wrap gap-4">
            <Button tag="a" href="#portfolio" color="primary">Check my work</Button>
            <Button tag="a" href="#about">More about me</Button>
          </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a class="transition ease-cubic-bezier duration-500 opacity-100 hover:opacity-60" href="#portfolio"
            name="portfolio" aria-label="portfolio">
            <ScrollIndicator />
          </a>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup>
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 0.75 },
  })

  tl.from('#title', { y: -100, opacity: 0, delay: 0.3 }).to('#title', {
    y: 0,
    opacity: 1,
  })

  tl.from('#cta', { opacity: 0, delay: 0, duration: 0.5 }).to('#cta', {
    opacity: 1,
  })
})
</script>

<style lang="postcss"></style>
