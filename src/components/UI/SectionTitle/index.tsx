import React, { FC } from 'react'
import styles from './title.module.css'

interface SectionTitleProps {
  tag: string
  className?: string
}

const SectionTitle: FC<SectionTitleProps> = ({
  tag,
  children,
  className = '',
}) => {
  return React.createElement(
    tag,
    { className: `${styles.title} ${className} font-marker` },
    children
  )
}

export default SectionTitle
