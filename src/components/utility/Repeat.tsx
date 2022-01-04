import React, { FC, Fragment } from 'react'

interface RepeatProps {
  times?: number
}

const Repeat: FC<RepeatProps> = ({ times = 2, children }) => {
  return (
    <>
      {[...Array(times)].map((e, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  )
}

export default Repeat
