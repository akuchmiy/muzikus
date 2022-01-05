import { FC } from 'react'
import List from 'Components/utility/List'
import { BandOnly } from 'Models/Band'
import styles from './bands.module.css'
import BandItem from 'Components/Lists/BandsList/components/BandItem'

interface BandListProps {
  bands: BandOnly[]
}

const BandsList: FC<BandListProps> = ({ bands }) => {
  return (
    <List<BandOnly>
      list={bands}
      style={styles.bands}
      render={(band) => {
        return <BandItem band={band} />
      }}
    />
  )
}

export default BandsList
