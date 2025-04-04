import {
  createContext,
  type FC,
  type PropsWithChildren,
  use,
  useState,
} from 'react'
import { Language, languages, MessageKey, messages } from './messages'

const getDefaultLanguage = () => {
  for (const userLanguage of navigator.languages) {
    const index = languages.indexOf(userLanguage as Language)
    if (index > -1) return index
  }
  return 0
}

type LocalizationContextValue = {
  t: (key: MessageKey) => string
}

const LocalizationContext = createContext<LocalizationContextValue>({
  t: key => key,
})

export const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language] = useState(getDefaultLanguage)

  return (
    <LocalizationContext.Provider value={{ t: key => messages[key][language] }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => use(LocalizationContext)
