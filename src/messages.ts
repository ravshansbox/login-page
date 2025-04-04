export const languages = ['en', 'ru'] as const

export type Language = (typeof languages)[number]

export const messages = {
  logo: ['Logo', 'Логотип'],
  email: ['Email', 'Электронная почта'],
  password: ['Password', 'Пароль'],
  signIn: ['Sign in', 'Войти'],
} as const satisfies Record<string, [string, string]>

export type MessageKey = keyof typeof messages
