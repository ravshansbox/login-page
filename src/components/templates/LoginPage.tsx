import { useEffect, type FC } from 'react'
import { css } from 'styled-system/css'
import { LoginForm, Logo } from '../organisms'

const classes = {
  main: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '4',
    minHeight: 'full',
    md: {
      flexDirection: 'row',
      gap: '8',
    },
  }),
  logoContainer: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '4',
  }),
  loginFormContainer: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '4',
    minWidth: '1/3',
  }),
  fullHeight: css({ height: 'full' }),
}

export const LoginPage: FC = () => {
  useEffect(() => {
    const elements = [
      document.documentElement,
      document.body,
      document.querySelector('#root'),
    ]
    elements.forEach(element => element.classList.add(classes.fullHeight))
    return () => {
      elements.forEach(element => element.classList.remove(classes.fullHeight))
    }
  }, [])

  return (
    <main className={classes.main}>
      <section className={classes.logoContainer}>
        <Logo />
      </section>
      <section className={classes.loginFormContainer}>
        <LoginForm />
      </section>
    </main>
  )
}
