export function makeUser(formData) {
    return {
        name: formData.get('user-name'),
        pack: formData.get('back-pack'),
        completed: []
    };
}

export function saveToLocalStorage(dataKey, data) {
    const stringyData = JSON.stringify(data);
    localStorage.setItem(dataKey, stringyData);
}

export function getFromLocalStorage(dataKey) {
    const stringyData = localStorage.getItem(dataKey);
    const data = JSON.parse(stringyData);
    return data;
}