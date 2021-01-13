import { useFish } from './FishDataProvider.js'
import { FishList } from "./fishList.js";

FishList();

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish);
}

