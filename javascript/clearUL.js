const clearUL = (className) => {
    const ul = document.querySelector(className);
    if (ul) {
        ul.remove();
    }
}

export { clearUL };