import { guiflerApi } from '../services/http/guiflerApi'

export async function makeLogin ({ email, password }) {
  try {
    const user = await guiflerApi.post('/signin', { email, password })

    localStorage.setItem('user', JSON.stringify(user))

    return { success: 'Bem vindo!' }
  } catch (err) {
    if (!err.response?.status) {
      return { error: 'Serviço indisponível' }
    }

    if (err.response.status === 401) {
      return { error: 'Email ou senha inválidos.' }
    }

    if (err.response.status === 500) {
      return { error: 'Ocorreu um erro no serviço de login.' }
    }

    if (err.response.status === 404) {
      return { error: 'Requisição inválida.' }
    }

    return { error: 'Serviço indisponível' }
  }
}
