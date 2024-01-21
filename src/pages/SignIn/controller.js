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

  const fields = {}

  keys.forEach(key => {
    if (data[key] === '') {
      fields[key] = true
    } else {
      fields[key] = false
    }
  })

  const hasError = Object.values(fields).find(value => value)

  console.log({ fieldsError: fields, hasError })

  return { fieldsError: fields, hasError }
}
