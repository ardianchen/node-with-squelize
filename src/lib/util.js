export const hostname = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `${process.env.HOSTNAME}:${process.env.PORT}`
    case 'test':
      return 'http://localhost'
    default:
      return process.env.PRODHOSTNAME
  }
}
