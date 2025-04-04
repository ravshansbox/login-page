import { type FC } from 'react'
import { useLocalization } from '../../localization'
import { css } from '@/stitches'
import logo from './logo.jpg?format=avif;webp&w=960;1440;1920;2400&as=picture'

const classes = {
  container: css({ display: 'inline-block' }),
  image: css({
    display: 'inline-block',
    borderRadius: '0.5rem',
    maxWidth: '100%',
  }),
}

export const Logo: FC = () => {
  const { t } = useLocalization()

  return (
    <picture className={classes.container()}>
      {Object.entries(logo.sources).map(([type, srcSet]) => (
        <source key={type} srcSet={srcSet} type={`image/${type}`} />
      ))}
      <img
        className={classes.image()}
        src={logo.img.src}
        alt={t('logo')}
        loading="lazy"
      />
    </picture>
  )
}
