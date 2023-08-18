import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideImage
} from "bear-react-carousel"
import "bear-react-carousel/dist/index.css"
import {GameResponse} from "../types"

const bearSlideItemData = ({
  images
}: {
  images: GameResponse["short_screenshots"]
}): TBearSlideItemDataList =>
  images.map(row => {
    return {
      key: row.id,
      children: <BearSlideImage imageUrl={row.image} />
    }
  })

const Slider = (images: {images: GameResponse["short_screenshots"]}) => {
  return (
    <BearCarousel
      data={bearSlideItemData(images)}
      isEnableLoop
      isEnableNavButton
      isEnablePagination
      isDebug={false}
    />
  )
}

export default Slider
