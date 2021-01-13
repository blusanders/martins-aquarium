import { useFish } from './FishDataProvider.js'

FishList();

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish);
}

