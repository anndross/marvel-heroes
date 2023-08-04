import { Heroes } from "@/interfaces/HeroesInterface";

export const handleToggleFavoriteById = (array: Heroes[], id: string) => {
  array.forEach(object => {
    const key = Object.keys(object)[0];
    const objectArray = object[key];

    const foundObject = objectArray.find(obj => obj.id === id);
    if (foundObject) {
      foundObject.isFavorite = !foundObject.isFavorite;
    }
  });

  return array;
}
