import { Hero } from "@/interfaces/HeroInterface";
import { Heroes } from "@/interfaces/HeroesInterface";
import { handleReturnAllHeroes } from "@/utils/handleReturnAllHeroes";

export const handleDataChange = (data: Heroes[], setList: (list: Hero[]) => void) => {
  const Heroes = handleReturnAllHeroes(data)
  setList(Heroes)
}