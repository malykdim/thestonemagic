import api from './api';

export const getAll = () => {
    return fetch(api.gallery)
        .then(res => res.json())
        .catch(error => console.log(error));
}