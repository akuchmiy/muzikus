import { FC } from 'react'
import { BandOnly } from 'Models/Band'
import BandItem from 'Components/Lists/BandsList/components/BandItem'
import { Swiper, SwiperSlide } from 'swiper/react'

interface BandListProps {
  bands: BandOnly[]
}

const SWIPER_BREAKPOINTS = {
  340: {
    slidesPerView: 2.5,
  },
  480: {
    slidesPerView: 3.5,
  },
  640: {
    slidesPerView: 4.5,
  },
  960: {
    slidesPerView: 6.5,
  },
}

const BandsList: FC<BandListProps> = ({ bands }) => {
  return (
    <Swiper slidesPerView={1.5} breakpoints={SWIPER_BREAKPOINTS} navigation>
      {bands.map((band) => {
        return (
          <SwiperSlide key={band.id}>
            <BandItem band={band} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default BandsList
