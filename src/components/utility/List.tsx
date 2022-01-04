import { ReactElement } from 'react'

interface ListProps<T> {
  list: T[]
  render: (listItem: T) => ReactElement
  style: string
}

const List = <T extends { id: string }>({
  render,
  list,
  style,
}: ListProps<T>) => {
  return (
    <>
      <ul className={style}>
        {list.map((listItem) => {
          return <li key={listItem.id}>{render(listItem)}</li>
        })}
      </ul>
    </>
  )
}

export default List
