export function getFieldsValue (form) {
  const data = {}
  for (const [key, value] of form.entries()) {
    data[key] = value
  }

  const { password, email } = data

  return { password, email }
}


export function validator (data) {
  const keys = Object.keys(data)

  const fields = new Map()

  keys.forEach(key => {
    if (data[key] === '') {
      fields.set([key], true)
    } else {
      fields.set([key], false)
    }
  })

  const hasError =  Object.values(fields).find(value => value)


  return { fieldsError: fields, hasError}
}
