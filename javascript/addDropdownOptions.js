const addDropdownOptions = (map, dropdown) => {
    const iterator = map.keys();
    let breed = iterator.next().value;
    while (breed) {
        const option = document.createElement('option');
        const breedText = document.createTextNode(breed);
        option.appendChild(breedText);
        dropdown.appendChild(option);
        breed = iterator.next().value;
    }
}

export { addDropdownOptions };