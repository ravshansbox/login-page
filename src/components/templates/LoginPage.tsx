import { useEffect, type FC } from 'react'
import { css } from '@/stitches'
import { LoginForm, Logo } from '../organisms'

const classes = {
  main: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    minHeight: '100vh',
    '@md': {
      flexDirection: 'row',
      gap: '2rem',
    },
  }),
  logoContainer: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
  }),
  loginFormContainer: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    minWidth: '30%',
  }),
  fullHeight: css({ height: '100%' }),
}

export const LoginPage: FC = () => {
  useEffect(() => {
    const elements = [
      document.documentElement,
      document.body,
      document.querySelector('#root'),
    ]
    const fullHeight = classes.fullHeight()
    elements.forEach(element => element.classList.add(fullHeight))
    return () => {
      elements.forEach(element => element.classList.remove(fullHeight))
    }
  }, [])

  return (
    <main className={classes.main()}>
      <section className={classes.logoContainer()}>
        <Logo />
      </section>
      <section className={classes.loginFormContainer()}>
        <LoginForm />
      </section>
    </main>
  )
}
