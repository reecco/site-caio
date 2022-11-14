import axios from 'axios'

const api = async (name, email, text) => {
  return await axios.post('https://api-email-caio.vercel.app/', {
    token: process.env.VUE_APP_CHAVE,
    name: name,
    fromEmail: email,
    text: text
  })
}

export default api