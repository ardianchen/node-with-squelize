import { equal } from 'assert'
import r from 'src/lib/resjson'

const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object
}

describe('[Library]', () => {
  let response = r(200, 'response send', {})

  it('Should return status_code 200', () => {
    equal(response.status_code, 200)
  })

  it('Should return message \'response send\'', () => {
    equal(response.message, 'response send')
  })

  it('Should return data Object', () => {
    equal(isObject(response.data), true)
  })
})
