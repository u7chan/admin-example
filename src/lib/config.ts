interface Config {
  USE_HTTPS: boolean
  BASE_PATH: string
  SESSION_EXPIRE_MINUTES: number
}

export const config: Config = {
  USE_HTTPS: process.env.USE_HTTPS === 'true',
  BASE_PATH: process.env.BASE_PATH || '',
  SESSION_EXPIRE_MINUTES: parseInt(process.env.SESSION_EXPIRE_MINUTES || '10', 10),
}
