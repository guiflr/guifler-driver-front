import React, { useState } from 'react'
import { Background } from '../../../components/Background'
import { Container } from '../../../components/Container'
import { Card } from '../../../components/Card'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Select } from '../../../components/Select'
import { AddUserSchema, validator } from './controller'
import { useToastData } from '../../../data/zustand'
import { createUser } from '../../../controllers/createUser'

export function CreateUser () {
  const addToast = useToastData(state => state.addToast)

  const [hasError, setHasError] = useState({})
  const [isLoading, setIsLoading] = useState()

  async function handleSubmit (event) {
    setHasError({})
    setIsLoading(true)
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    const role = document.getElementById('role').value

    const userData = form.entries()

    const user = {}

    for (const [key, value] of userData) {
      user[key] = value === '' ? null : value
    }

    user.role = role

    const { success, errors } = validator(user)

    if (errors) {
      setHasError(errors)
      if (errors['passwordNotMath']) {
        addToast({ content: errors['passwordNotMath'], type: 'error' })
      }
    }

    if (success) {
      const response = await createUser(user)

      if (response.error) {
        addToast({ content: response.error, type: 'error' })
      } else {
        addToast({ content: 'Usuário cadastrado', type: 'success' })
      }
    }

    setIsLoading(false)
  }

  const roleOptions = [
    { value: 'admin', name: 'Administrador' },
    { value: 'creator', name: 'Criador' },
    { value: 'guest', name: 'Convidado' }
  ]

  return (
    <Background>
      <Container title={'Adicionar usuário'} sizeFull>
        <Card>
          <form onSubmit={event => handleSubmit(event)}>
            <Input
              placeholder={'Email'}
              type={'text'}
              name='email'
              required={true}
              error={hasError['email']}
            />
            <Input
              placeholder={'Nome de usuário'}
              type={'text'}
              name='username'
              required={true}
              error={hasError['username']}
            />
            <Input
              placeholder={'Senha'}
              type={'password'}
              name='password'
              required={true}
              error={hasError['password']}
            />
            <Input
              placeholder={'Confirmar senha'}
              type={'password'}
              name='passwordConfirm'
              required={true}
              error={hasError['passwordConfirm']}
            />
            <Select
              placeholder={'Nível'}
              name='role'
              required={true}
              error={hasError['role']}
              options={roleOptions}
              id={'role'}
            />
            <Button
              text={'Salvar'}
              type={'submit'}
              isLoading={isLoading}
              color='success'
            />
          </form>
        </Card>
      </Container>
    </Background>
  )
}
