import React from 'react'
import { Tree } from '../../components/Tree'
import { Background } from '../../components/Background'
import { Container } from '../../components/Container'

const documents = [
  {
    name: 'root',
    type: 'folder',
    files: [
      { name: 'one', type: 'file' },
      {
        name: 'children',
        type: 'folder',
        files: [
          { name: 'file', type: 'file' },
          { name: 'last', type: 'file' },
          {
            name: 'last',
            type: 'folder',
            files: [{ name: 'fim', type: 'file' }]
          }
        ]
      }
    ]
  },
  {
    name: 'root',
    type: 'file'
  }
]

export function Documents () {
  return (
    <Background>
      <Container title={'Documentos'} sizeFull>
        <Tree files={documents} />
      </Container>
    </Background>
  )
}
