import React, { useEffect } from 'react'
import { Background } from '../../components/Background'
import { Card } from '../../components/Card'
import { List } from '../../components/List'
import { userGetData } from '../../data/userData'

export function Users () {
  const userData = userGetData()

  useEffect(() => {
    userData.execute()
  }, [])

  return (
    <Background>
      <Card title={'Usuários'} sizeFull>
        {userData.data.map(user => (
          <List users={user} />
        ))}
      </Card>
    </Background>
  )
}
