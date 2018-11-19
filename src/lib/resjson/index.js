export default (code, message, data) => {
  let response = {}

  if (code) {
    response.status_code = code
  }

  if (message) {
    response.message = message
  }

  if (data) {
    response.data = data
  }

  return response
}
