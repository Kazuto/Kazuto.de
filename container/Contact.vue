<template>
  <Section
    id="contact"
    class="py-20 md:py-32"
  >
    <Container>
      <Animation
        :y="-30"
        :opacity="0"
        :duration="0.6"
        :delay="0.3"
      >
        <h3 class="text-h2 text-secondary-500">{{ $t('contact.title') }}</h3>
      </Animation>

      <form
        id="app"
        novalidate
        class="form max-w-md"
        @submit.prevent="checkForm"
      >
        <transition name="fade">
          <Alert
            v-if="state.sendSuccessful"
            type="success"
            dismissible
            @close="state.sendSuccessful = false"
          >
            {{ $t('contact.successMessage') }}
          </Alert>
        </transition>

        <transition name="fade">
          <Alert
            v-if="state.sendFail"
            type="error"
            dismissible
            @close="state.sendFail = false"
          >
            {{ $t('contact.errorMessage') }}
          </Alert>
        </transition>

        <transition name="fade">
          <Alert
            v-if="state.errors.length"
            type="error"
          >
            <ul>
              <li
                v-for="error in state.errors"
                :key="error"
              >
                {{ error }}
              </li>
            </ul>
          </Alert>
        </transition>

        <Animation
          :y="-30"
          :opacity="0"
          :duration="0.6"
          :delay="0.5"
        >
          <FormInput
            id="name"
            :label="$t('contact.name')"
            :value="state.form.name"
            @update:value="(value) => (state.form.name = value)"
          />

          <FormInput
            id="email"
            :label="$t('contact.email')"
            :value="state.form.email"
            @update:value="(value) => (state.form.email = value)"
          />

          <FormTextArea
            id="message"
            :label="$t('contact.message')"
            :value="state.form.message"
            @update:value="(value) => (state.form.message = value)"
          />

          <Button
            type="submit"
            block
          >
            <span>
              {{ state.isSubmitting ? $t('contact.sending') : $t('contact.sendMessage') }}
            </span>
            <span
              v-if="state.isSubmitting"
              class="spinner"
            />
          </Button>
        </Animation>
      </form>
    </Container>
  </Section>
</template>

<script setup>
import { send } from '@emailjs/browser'

const { t } = useI18n()

const state = reactive({
  errors: [],
  isSubmitting: false,
  sendSuccessful: false,
  sendFail: false,
  form: {
    name: '',
    email: '',
    message: '',
  },
})

const checkForm = () => {
  state.errors = []

  if (!state.form.name) {
    state.errors.push(t('contact.errorNameRequired'))
  }

  if (!state.form.email) {
    state.errors.push(t('contact.errorEmailRequired'))
  } else if (!validEmail(state.form.email)) {
    state.errors.push(t('contact.errorEmailInvalid'))
  }

  if (!state.errors.length) {
    sendMail()
  }
}

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const sendMail = () => {
  const { public: config } = useRuntimeConfig()

  state.isSubmitting = true

  send(
    config.emailjsServiceId,
    config.emailjsTemplateId,
    state.form,
    config.emailjsPublicKey
  ).then(
    (result) => {
      result.status === 200
        ? (state.sendSuccessful = true)
        : (state.sendSuccessful = false)

      state.form.name = ''
      state.form.email = ''
      state.form.message = ''

      state.isSubmitting = false
    },
    (error) => {
      if (error) {
        state.sendFail = true

        state.isSubmitting = false
      }
    }
  )
}
</script>

<style lang="postcss"></style>
