import { FC, FormEvent } from 'react'
import Input from 'Components/UI/Input'
import Button, { ButtonSizes } from 'Components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useInput from 'Hooks/useInput'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchProps {
  className: string
}

const Search: FC<SearchProps> = ({ className }) => {
  const [search, _, handleSearchChange] = useInput('')

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!search) return
    // TODO: query api and navigate to results
  }

  return (
    <form onSubmit={submitHandler} className={className}>
      <Input
        value={search}
        onChange={handleSearchChange}
        label={'Search music'}
        type={'text'}
      />
      <Button size={ButtonSizes.medium} aria-label={'Search'}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </form>
  )
}

export default Search
