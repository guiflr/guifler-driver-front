import { guiflerApi } from '../services/http/guiflerApi'

export async function updateUser (user, userId) {
  try {
    const response = await guiflerApi.put(`/users/${userId}`, user)

    return response.data
  } catch (err) {
    console.log(err)
    if (err.response.status === 400) {
      return { error: 'Algum dado informado esta incorreto' }
    }

    if (err.response.status === 401) {
      return { error: 'Usuário não autorizado.' }
    }

    if (err.response.status === 403) {
      return { error: 'Usuário sem permissão.' }
    }

    if (err.response.status === 500) {
      return { error: 'Ocorreu um erro no serviço de login.' }
    }

    if (err.response.status === 404) {
      return { error: 'Requisição inválida.' }
    }
  }
}
