export function findById(array, id) {
    let adventureMatch = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            adventureMatch = array[i];
            return adventureMatch;
        }
    }
}

export function renderAdventure(adventureData) {
    const section = document.createElement('section');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.value = adventureData.id;
    input.name = 'adventure-choice';
    input.classList.add('pack-div');

    const a = document.createElement('a');
    a.href = '../3-game-page/?id=' + adventureData.id;

    label.append(a);
    const image = document.createElement('img');
    image.src = adventureData.image;
    a.append(image);

    label.append(input);

    section.append(label);

    return section;
}

export function completedAdventure(adventureData) {
    const section = document.createElement('section');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.value = adventureData.id;
    input.name = 'adventure-choice';
    input.classList.add('pack-div');
    label.style.opacity = '0.15';

    const a = document.createElement('a');

    label.append(a);
    const image = document.createElement('img');
    image.src = adventureData.image;
    a.append(image);

    label.append(input);

    section.append(label);

    return section;
}
