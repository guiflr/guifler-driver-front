import React, { useEffect } from 'react'
import { Background } from '../../components/Background'
import { Card } from '../../components/Card'
import { List } from '../../components/List'
import { userGetData } from '../../data/userData'
import { useNavigate } from 'react-router-dom'

export function Users () {
  const userData = userGetData()
  const navigate = useNavigate()

  useEffect(() => {
    userData.execute()
  }, [])
  console.log('userData', userData)

  return (
    <Background>
      <Card
        title={'Usuários'}
        sizeFull
        hasButton
        onClick={() => navigate('/usuarios/adicionar')}
      >
        {userData.data.map(user => (
          <List user={user} />
        ))}
        {!userData.data.length && (
          <p class='text-white flex justify-center'>
            Nenhum usuário cadastrado
          </p>
        )}
      </Card>
    </Background>
  )
}
