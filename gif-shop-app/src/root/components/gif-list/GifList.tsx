import { useSelector } from "react-redux";
import { Gif } from "@/root/types/Gif.type";
import { GifItem } from "../gif-item/GifItem";

import { selectGifs } from "@/root/redux/selectors/gif-selector/gif.selector";


export const GifList = () => {
  const gifFoundList = useSelector(selectGifs);

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {gifFoundList.map((gif: Gif) => (
        <GifItem
        key={gif.id}
        item = {gif}
        />
      ))}
    </div>
  );
};


