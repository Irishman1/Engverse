export function findById(adventureData, id) {
    return adventureData.find(i => i.id === id);
}

export function renderLetters(letterChoices) {
    const imageDiv = document.createElement('div');
    for (let i = 0; i < letterChoices.length; i++) {
        const letter = letterChoices[i];
        const label = document.createElement('label');
        label.classList.add('letter-labels');
        const inputButton = document.createElement('input');
        inputButton.type = 'radio';
        inputButton.name = 'letter-select';
        inputButton.value = letter.id;
        label.appendChild(inputButton);
        const imgTag = document.createElement('img');
        imgTag.classList.add('letter-tiles');
        imgTag.src = letter.image;

        label.appendChild(imgTag);
        imageDiv.append(label);

    }
    return imageDiv;
}

export function renderGame(adventure) {
    const containerDiv = document.createElement('div');
    const backImage = document.createElement('img');
    backImage.src = adventure.background;
    backImage.style.background;
    const div1 = document.createElement('div');
    const letterChoices = adventure.letterChoices;
    const letterArray = renderLetters(letterChoices);

    div1.append(letterArray);
    containerDiv.append(backImage, div1);

    return containerDiv;

}


export function getRandomLetter(letterChoices) {
    const randomLetter = Math.floor(Math.random() * letterChoices.length);
    return letterChoices[randomLetter];

}
export function findLetterIndex(adventureData, id) {
    return adventureData.findIndex(i => i.id === id);
}