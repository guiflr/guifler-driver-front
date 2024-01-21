import React, { useState } from 'react'
import '../../index.css'
import { Background } from '../../components/Background'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { makeLogin } from '../../controllers/makeLogin'
import { useToastData } from '../../data/zustand'
import { getFieldsValue, validator } from './controller'

export function SignIn () {
  const addToast = useToastData(state => state.addToast)

  const [hasError, setHasError] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit (event) {
    setIsLoading(true)
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    const { email, password } = getFieldsValue(form)

    const { fieldsError, hasError } = validator({ email, password })

    setHasError(fieldsError)

    if (!hasError) {
      await fetchLogin({
        email,
        password
      })
    }

    setIsLoading(false)
  }

  async function fetchLogin ({ email, password }) {
    const response = await makeLogin({
      email,
      password
    })

    if (response.error) {
      addToast({ content: response.error, type: 'error' })
      return
    }

    addToast({ content: response.success, type: 'success' })
    setIsLoading(false)
  }

  return (
    <Background>
      <Card title={'Login'}>
        <form onSubmit={handleSubmit}>
          <Input
            id='email'
            placeholder={'Email'}
            type={'text'}
            name='email'
            required={true}
            error={hasError['email']}
          />
          <Input
            placeholder={'Senha'}
            type={'password'}
            name='password'
            required={true}
            error={hasError['password']}
          />
          <Button text={'Entrar'} type={'submit'} isLoading={isLoading} />
        </form>
      </Card>
    </Background>
  )
}
