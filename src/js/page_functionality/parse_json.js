export async function loadItems(src) {
    return await fetch(src)
        .then(raw => raw.text())
        .then(data => Papa.parse(data))
        .then(json => {
            return Promise.resolve(json.data);
        });
}
