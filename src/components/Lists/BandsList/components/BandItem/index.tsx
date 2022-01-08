import { FC } from 'react'
import Image from 'next/image'
import { BandOnly } from 'Models/Band'
import FileService from 'Services/file'
import styles from './band.module.css'

interface BandItemProps {
  band: BandOnly
}

const BandItem: FC<BandItemProps> = ({ band }) => {
  const imagePath = FileService.getStaticImagePath(band.picture)

  return (
    <section className={styles.band}>
      <div className={styles.image}>
        <Image
          className={styles.innerImg}
          src={imagePath}
          alt={''}
          layout={'fill'}
          sizes={'50vw'}
          unoptimized={true}
        />
      </div>
      <span className={`${styles.name} font-marker`}>{band.name}</span>
    </section>
  )
}

export default BandItem
