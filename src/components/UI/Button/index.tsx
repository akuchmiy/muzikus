import { FC, HTMLAttributes } from 'react'
import styles from './button.module.css'

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes
  reversed?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  size = ButtonSizes.medium,
  className = '',
  reversed,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        reversed ? styles.reverse : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
