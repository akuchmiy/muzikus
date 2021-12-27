import { FC, FormEvent } from 'react'
import Input from '../../UI/Input'
import Button, { ButtonSizes } from '../../UI/Button'
import useInput from '../../../hooks/useInput'

interface SearchProps {
  className: string
}

const Search: FC<SearchProps> = ({ className }) => {
  const [search, , handleSearchChange] = useInput('')

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: query api and navigate to results
  }

  return (
    <form onSubmit={submitHandler} className={className}>
      <Input
        value={search}
        onChange={handleSearchChange}
        label={'Search'}
        placeholder={'Search'}
        type={'text'}
      />
      <Button size={ButtonSizes.medium}>Search</Button>
    </form>
  )
}

export default Search
