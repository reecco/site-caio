<template>
  <div class="contact">
    <h1>Me envie uma mensagem</h1>
    <div class="box-form">
      <form @submit="send">
        <p class="success-message">{{ successMessage }}</p>
        <p class="error-message"> {{ errorMessage }}</p>

        <input type="text" id="input-name" class="input name" placeholder="Nome" v-model="name">
        <input type="text" id="input-email" class="input email" placeholder="Email" v-model="email">
        <textarea type="text" id="textarea" class="textarea" placeholder="Mensagem" v-model="text"></textarea>

        <div class="box-button">
          <button class="btn-send">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../../service/api.js'

export default {
  name: 'Contact',

  data() {
    return {
      name: '',
      email: '',
      text: '',
      successMessage: '',
      errorMessage: ''
    }
  },

  methods: {
    async send(event) {
      event.preventDefault()

      const alert = 'Preencha os campos corretamente.'

      let emailInput = document.getElementById('input-email')
      let nameInput = document.getElementById('input-name')
      let textArea = document.getElementById('textarea')

      let email = this.email == '' || this.email == ' '
      let name = this.name == '' || this.name == ' '
      let text = this.text == '' || this.text == ' '

      if (email || name || text) {
        this.errorMessage = alert
        setTimeout(() => this.errorMessage = '', 5000)
      }

      if (email) {
        emailInput.style.backgroundColor = '#e08383'

        setTimeout(() => emailInput.style.backgroundColor = '', 5000)
      } else if (name) {
        nameInput.style.backgroundColor = '#e08383'

        setTimeout(() => nameInput.style.backgroundColor = '', 5000)
      } else if (text) {
        textArea.style.backgroundColor = '#e08383'

        setTimeout(() => textArea.style.backgroundColor = '', 5000)
      } else {
        const res = await api(this.name, this.email, this.text)

        if (res.status == 201) {
          this.successMessage = 'Mensagem enviada com sucesso!'
          setTimeout(() => this.successMessage = '', 5000)
        } else {
          this.alert = res.response.data.message
          setTimeout(() => this.alert = '', 4000)
        }

        this.email = ''
        this.name = ''
        this.text = ''
      }
    }
  },

  created() {
    document.title = 'Contato'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>