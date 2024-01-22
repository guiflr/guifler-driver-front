import React, { useEffect, useState } from 'react'
import { Background } from '../../../components/Background'
import { Container } from '../../../components/Container'
import { Card } from '../../../components/Card'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Select } from '../../../components/Select'
import { useToastData } from '../../../data/zustand'
import { createUser } from '../../../controllers/createUser'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../../controllers/getUser'
import { validator } from './controller'
import { updateUser } from '../../../controllers/updateUser'

export function UpdateUser () {
  const addToast = useToastData(state => state.addToast)
  const navigate = useNavigate()
  const param = useParams()

  const [hasError, setHasError] = useState({})
  const [isLoading, setIsLoading] = useState()
  const [user, setUser] = useState({})

  async function fetchUser () {
    const user = await getUser(param.id)

    setUser(user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  async function handleSubmit (event) {
    setHasError({})
    setIsLoading(true)

    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const role = document.getElementById('role').value
    const userData = form.entries()

    const userFields = {}
    for (const [key, value] of userData) {
      userFields[key] = value === '' ? null : value
    }
    userFields.role = role
    const { success, errors } = validator(userFields)

    if (errors) {
      setHasError(errors)
    }

    if (success) {
      const response = await updateUser({ ...userFields }, param.id)
      if (response.error) {
        addToast({ content: response.error, type: 'error' })
      } else {
        addToast({ content: 'Usuário atualizado', type: 'success' })
        navigate('/usuarios')
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
      <Container title={'Atualizar usuário'} sizeFull>
        <Card>
          <form onSubmit={event => handleSubmit(event)}>
            <Input
              placeholder={'Email'}
              type={'text'}
              name='email'
              value={user.email}
              required={true}
              error={hasError['email']}
              onChange={event => setUser(old => ({ ...old, email: event }))}
            />
            <Input
              placeholder={'Nome de usuário'}
              type={'text'}
              name='username'
              value={user.username}
              required={true}
              error={hasError['username']}
              onChange={value => setUser(old => ({ ...old, username: value }))}
            />
            <Select
              placeholder={'Nível'}
              name='role'
              required={true}
              error={hasError['role']}
              options={roleOptions}
              value={user.role}
              id={'role'}
              onChange={value => setUser(old => ({ ...old, role: value }))}
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
