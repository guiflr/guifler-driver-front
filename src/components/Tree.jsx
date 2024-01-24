import React, { useState } from 'react'
import { Folder } from './Folder'
import { File } from './File'

export function Tree ({ files, show = true }) {
  const [isVisible, setIsVisible] = useState(true)

  return files.map((file, index) => {
    return (
      <div class={`pl-5 ${show ? 'block' : 'hidden'}`}>
        {file.type === 'file' && <File text={file.name} />}
        {file.type === 'folder' && (
          <Folder text={file.name} onClick={() => setIsVisible(!isVisible)} isVisible={isVisible} />
        )}
        {file.type === 'folder' && <Tree files={file.files} show={isVisible} />}
      </div>
    )
  })
}
