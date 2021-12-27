import { ChangeEvent, FC, FormEvent, useState } from 'react'
import Input from '../../UI/Input'
import Button, { ButtonSizes } from '../../UI/Button'

interface SearchProps {
  className: string
}

const Search: FC<SearchProps> = ({ className }) => {
  const [search, setSearch] = useState<string>('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value)
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: query api and navigate to results
  }

  return (
    <form onSubmit={submitHandler} className={className}>
      <Input
        value={search}
        onChange={handleChange}
        label={'Search'}
        placeholder={'Search'}
        type={'text'}
      />
      <Button size={ButtonSizes.medium}>Search</Button>
    </form>
  )
}

export default Search
