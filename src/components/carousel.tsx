import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideImage,
} from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";
import { GameType } from "../types/types";

const bearSlideItemData = ({
  images,
}: {
  images: GameType["short_screenshots"];
}): TBearSlideItemDataList =>
  images.map((row) => {
    return {
      key: row.id,
      children: <BearSlideImage imageUrl={row.image} />,
    };
  });

const Slider = (images: { images: GameType["short_screenshots"] }) => {
  return (
    <BearCarousel
      data={bearSlideItemData(images)}
      isEnableLoop
      isEnableNavButton
      isEnablePagination
      isDebug={false}
    />
  );
};

export default Slider;
