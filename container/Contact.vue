<template>
  <Section id="contact">
    <Container>
      <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.3">
        <Typography variant="h1" tag="h3" class="contact__title">
          Hire me
        </Typography>
      </Animation>

      <form id="app" novalidate class="form" @submit.prevent="checkForm">
        <transition name="fade">
          <Alert v-if="state.sendSuccessful" type="success" dismissible @close="sendSuccessful = false">
            The email was send successfully
          </Alert>
        </transition>

        <transition name="fade">
          <Alert v-if="state.sendFail" type="error" dismissible @close="sendFail = false">
            Your email could not be sent. Please try again later.
          </Alert>
        </transition>

        <transition name="fade">
          <Alert v-if="state.errors.length" type="error">
            <ul>
              <li v-for="error in state.errors" :key="error">
                {{ error }}
              </li>
            </ul>
          </Alert>
        </transition>

        <Animation :y="-30" :opacity="0" :duration="0.6" :delay="0.5">
          <div class="form__group">
            <input id="name" v-model="state.form.name" placeholder="Name" type="text" aria-labelledby="name" name="name"
              class="form__control" />
            <label for="name" class="form__label" aria-label="Name Input Field">Name</label>
          </div>
          <div class="form__group">
            <input id="email" v-model="state.form.mail" placeholder="Email" type="text" aria-labelledby="email" name="email"
              class="form__control" />
            <label for="email" class="form__label" aria-label="E-Mail Input Field">Email</label>
          </div>
          <div class="form__group">
            <textarea id="message" v-model="state.form.message" placeholder="Message" rows="7" aria-labelledby="message"
              name="message" class="form__control" />
            <label for="message" class="form__label" aria-label="Name Input Field">Message</label>
          </div>
          <Button type="submit" block>
            <span>
              {{ state.isSubmitting ? 'Sending...' : 'Send Message' }}
            </span>
            <span v-if="state.isSubmitting" class="spinner" />
          </Button>
        </Animation>
      </form>
    </Container>
  </Section>
</template>

<script setup>
import emailjs from '@emailjs/browser'

const state = reactive({
  errors: [],
  isSubmitting: false,
  sendSuccessful: false,
  sendFail: false,
  form: {
    name: '',
    mail: '',
    message: '',
  },
})

const checkForm = (e) => {
  state.errors = []

  if (!state.form.name) {
    state.errors.push('Please enter a name')
  }

  if (!state.form.mail) {
    state.errors.push('Please enter a email')
  } else if (!validEmail(state.form.mail)) {
    state.errors.push('The email has to be valid')
  }

  if (!state.errors.length) {
    sendMail(e)
  }
}

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const sendMail = (e) => {
  const config = useRuntimeConfig()

  state.isSubmitting = true

  emailjs
    .sendForm(
      config.emailjsServiceId,
      config.emailjsTemplateId,
      e.target,
      config.emailjsUserId
    )
    .then(
      (result) => {
        result.status === 200
          ? (state.sendSuccessful = true)
          : (state.sendSuccessful = false)

        state.form.name = ''
        state.form.mail = ''
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

<style scoped lang="scss">
.section {
  padding: 5rem 0;

  @include bp(md) {
    padding: 8rem 0;
  }
}

.contact__title {
  font-weight: 700;
  margin-bottom: 2rem;
}

.contact {
  width: 100%;
}

.form {
  @include bp(sm) {
    width: 450px;
  }

  &__group {
    position: relative;
  }

  &__control {
    background: $form-bg;
    color: $form-color;
    font-size: $font-size-sm;
    padding: $form-control-padding;
    margin-bottom: 1.5rem;

    border-radius: $border-radius;
    transition: $transition-ease;

    width: 100%;
    resize: none;
    -moz-appearance: none;

    border: $form-border;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      font-weight: 500;
      letter-spacing: 1px;
      color: transparent;
    }

    &:hover {
      background: $form-bg-hover;
    }

    &:focus+.form__label,
    &:not(:placeholder-shown)+.form__label {
      background: $body-bg;
      padding: 0 4px;

      color: $form-color;
      transform: translateY(-1.6rem) scale(0.7);
    }
  }

  &__label {
    position: absolute;
    display: block;

    top: clamp(1rem, 2.6vw, 0.4rem);
    left: 1.2rem;
    transform-origin: 0 0;

    font-size: $font-size-base;
    font-weight: $form-label-font-weight;
    letter-spacing: $form-label-letter-spacing;

    color: $form-color;

    transition: $transition-ease;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
