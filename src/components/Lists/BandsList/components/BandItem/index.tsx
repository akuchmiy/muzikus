import React, { FC } from 'react'
import Image from 'next/image'
import { BandOnly } from 'Models/Band'
import FileService from 'Services/file'
import styles from './band.module.css'

interface BandItemProps {
  band: BandOnly
}

const BandItem: FC<BandItemProps> = ({ band }) => {
  const imagePath = FileService.getStaticImagePath(band.id, band.picture)

  return (
    <section className={styles.band}>
      <div className={styles.image}>
        <Image
          className={styles.innerImg}
          src={imagePath}
          alt={''}
          layout={'fill'}
        />
      </div>
      <span className={`${styles.name} font-marker`}>{band.name}</span>
    </section>
  )
}

export default BandItem
