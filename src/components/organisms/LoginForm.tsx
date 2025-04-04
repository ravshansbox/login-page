import { type FC } from 'react'
import { css } from 'styled-system/css'
import { useLocalization } from '../../localization'
import { Button, Form, Input, Link } from '../atoms'
import { FormField } from '../molecules'

const classes = {
  container: css({ display: 'flex', flexDirection: 'column' }),
  heading: css({ fontSize: '4xl', fontWeight: 'medium', textAlign: 'center' }),
  paragraph: css({ fontSize: 'xl', marginBlock: '1' }),
  form: css({ marginBlock: '4' }),
  forgotContainer: css({ display: 'flex', justifyContent: 'end' }),
}

export const LoginForm: FC = () => {
  const { t } = useLocalization()

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Authentication</h1>
      <p className={classes.paragraph}>Sign in to start using the platform</p>
      <Form
        className={classes.form}
        onSubmit={event => {
          event.preventDefault()
        }}
      >
        <FormField label={t('email')}>
          <Input type="email" name="email" />
        </FormField>
        <FormField label={t('password')}>
          <Input type="password" name="password" />
        </FormField>
        <div className={classes.forgotContainer}>
          <Link href="#">Forgot password?</Link>
        </div>
        <Button type="submit" primary>
          {t('signIn')}
        </Button>
      </Form>
    </div>
  )
}
