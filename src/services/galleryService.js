import api from './api';

const url = 'http://localhost:5000/gallery';

export const getPictures = () => {
    return fetch(api.pictures)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getAll = () => {
    return fetch(api.gallery)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}