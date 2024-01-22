import { guiflerApi } from '../services/http/guiflerApi'

export async function getUser (id) {
  try {
    const user = await guiflerApi.get(`/users/${id}`)

    return user.data
  } catch (err) {
    console.log(err)
    if (err.response.status === 401) {
      return { error: 'Usuário não autorizado.' }
    }

    if (err.response.status === 500) {
      return { error: 'Ocorreu um erro no serviço de login.' }
    }

    if (err.response.status === 404) {
      return { error: 'Requisição inválida.' }
    }
  }
}
