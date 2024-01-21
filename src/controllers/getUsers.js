import { guiflerApi } from '../services/http/guiflerApi'

export async function getUsers () {
  try {
    const user = await guiflerApi.get('/users')

    return user
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
