import { getBreedsList } from "./getBreedsList.js";
import { addDropdownOptions } from "./addDropdownOptions.js";

const imgContainer = document.querySelector('.dog');
const breedNameToID = await getBreedsList();
const breedDropdown = document.querySelector('#breed-select');
const breedSubmitButton = document.querySelector('.breed-submit');


addDropdownOptions(breedNameToID, breedDropdown);


const getDogs = async(breedID) => {
    const apiKey = 'live_MpIN6flxnOmsS538pI3kyUEFDpXsLOcpVC9XM0k2CLzj8NIM8jyzbjJ8CMrmPbRz';
    const endpoint = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=${breedID}&api_key=${apiKey}`;
    try {
        const res = await fetch(endpoint);
        if (res.ok) {
            const dogs = await res.json();
            console.log(dogs);
            imgContainer.src = dogs[0].url;
        } else {
            throw new Error('Not okay!');
        }
    } catch(error) {
        throw new Error(error);
    }

}


const handleBreedSubmission = (event) => {
    if (event.type === 'click' || event.key === 'Enter') {
        event.preventDefault();
        const breedChoice = breedDropdown.value;
        const breedId = breedNameToID.get(breedChoice);
        getDogs(breedId);
    }
}

breedSubmitButton.addEventListener('click', handleBreedSubmission);
breedDropdown.addEventListener('keydown', handleBreedSubmission);