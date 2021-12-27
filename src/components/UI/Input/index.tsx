import React, { forwardRef, HTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string
  label?: string
  value: string | number | readonly string[] | undefined
}

type inputPropsWithOnChange = Omit<InputProps, 'onChange'> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
}

const WITH_LABEL_INPUT_TYPES = ['text', 'email', 'password', 'number']

const Input = forwardRef<HTMLInputElement, inputPropsWithOnChange>(
  (props, ref) => {
    const { label, type, value, ...rest } = props

    if (type && !WITH_LABEL_INPUT_TYPES.includes(type))
      return <input ref={ref} type={type} {...rest} value={value} />

    const scaledDownLabelStyle = value ? styles['has-text'] : ''

    return (
      <>
        <label className={`${styles.label} ${scaledDownLabelStyle}`}>
          <span>{label}</span>
          <input className={styles.input} ref={ref} type={type} {...rest} />
        </label>
      </>
    )
  }
)

Input.displayName = 'BasicInput'

export default Input
