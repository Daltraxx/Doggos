const getDogsUL = (dogs) => {
    const ul = document.createElement('ul');
    ul.classList.add('dogs-ul');
    for (let dog of dogs) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = dog.url;
        img.alt = `picture of ${dog.breeds[0].name} dog`;
        li.appendChild(img);
        ul.appendChild(li);
    }

    return ul;
}

const displayDogsUl = (container, ul) => {
    container.appendChild(ul);
}

export { getDogsUL, displayDogsUl };