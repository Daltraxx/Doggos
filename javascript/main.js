import { getBreedsList } from "./getBreedsList.js";
import { addDropdownOptions } from "./addDropdownOptions.js";
import { clearUL } from "./clearUL.js";
import { getDogsUL, displayDogsUl } from "./getAndDisplayDogs.js";


const breedNameToID = await getBreedsList();
const breedDropdown = document.querySelector('#breed-select');
const breedSubmitButton = document.querySelector('.breed-submit');
const dogsContainer = document.querySelector('.dogs-container');


addDropdownOptions(breedNameToID, breedDropdown);

const getDogs = async(breedID) => {
    const apiKey = 'live_MpIN6flxnOmsS538pI3kyUEFDpXsLOcpVC9XM0k2CLzj8NIM8jyzbjJ8CMrmPbRz';
    const endpoint = `https://api.thedogapi.com/v1/images/search?limit=11&breed_ids=${breedID}&api_key=${apiKey}`;
    try {
        const res = await fetch(endpoint);
        if (res.ok) {
            const dogs = await res.json();
            console.log(dogs);
            const dogsUL = getDogsUL(dogs);
            displayDogsUl(dogsContainer, dogsUL);
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
        clearUL('.dogs-ul');
        const breedId = breedNameToID.get(breedChoice);
        getDogs(breedId);
    }
}

breedSubmitButton.addEventListener('click', handleBreedSubmission);
breedDropdown.addEventListener('keydown', handleBreedSubmission);