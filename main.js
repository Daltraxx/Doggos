import { getBreedsList } from "./javascript/getBreedsList.js";

const imgContainer = document.querySelector('.dog');



const breedNameToID = await getBreedsList();
console.log(breedNameToID);


const getDogs = async() => {
    const apiKey = 'live_MpIN6flxnOmsS538pI3kyUEFDpXsLOcpVC9XM0k2CLzj8NIM8jyzbjJ8CMrmPbRz';
    const url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=${apiKey}`;
}