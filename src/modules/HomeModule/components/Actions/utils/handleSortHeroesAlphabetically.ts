export const sortHeroesAlphabetically = (data: any[], sequence: 'z-a' | 'a-z') => {
  return data.sort((a: any, b: any) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    const sequenceA = (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    const sequenceZ = (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;

    return sequence === 'a-z' ? sequenceA : sequenceZ
  });
}