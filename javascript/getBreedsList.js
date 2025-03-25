const getNameToIDMap = (breedList) => {
    const nameToIDMap = new Map();
    breedList.forEach((breed) => nameToIDMap.set(breed.name, breed.id));
    return nameToIDMap;
}


const getBreedsList = async() => {
    const url = 'https://api.thedogapi.com/v1/breeds';

    try {
        const res = await fetch(url);
        if (res.ok) {
            const breedList = await res.json();
            return getNameToIDMap(breedList);
        } else {
            throw new Error('Not okay! :(');
        }
    } catch(error) {
        throw new Error(error);
    }

}


export { getBreedsList };