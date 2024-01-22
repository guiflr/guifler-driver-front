import { z } from 'zod'

export const AddUserSchema = z.object({
  email: z
    .string({
      required_error: 'Email obrigatório',
      invalid_type_error: 'Email obrigatório'
    })
    .email({ message: 'Email inválido' }),
  username: z.string({
    required_error: 'Nome de usuário obrigatório',
    invalid_type_error: 'Nome de usuário obrigatório'
  }),
  role: z.enum(['admin', 'creator', 'guest'], {
    required_error: 'Nível obrigatório',
    invalid_type_error: 'Nível obrigatório'
  })
})

export function validator (user) {
  const validate = AddUserSchema.safeParse(user)

  const errors = {}
  if (validate.error) {
    validate.error.issues.forEach(error => {
      const [field] = error.path
      errors[field] = error.message
    })
  }

  if (validate.success) {
    return { success: true, errors: false }
  }

  return { errors, success: false }
}
