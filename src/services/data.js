import * as auth from './auth.js';
import * as ajax from './ajax.js';

const host = 'https://parseapi.back4app.com';
ajax.settings.host = host;

export const login = auth.isLogged;
export const logout = auth.logOut;

/* ****************************************************** */
// function createPointer(name, objectId) {
//     return {
//         __type: 'Pointer',
//         className: name,
//         objectId: objectId
//     };
// }

// function addOwner(object) {
//     const userId = sessionStorage.getItem('userId');
//     object.owner = createPointer('_User', userId);
    
// }

// export async function getMosaics() {
//     return await ajax.get(host + '/classes/Gallery');
// }

// export async function getOne(objectId) {
//     return await ajax.get(host + '/classes/Gallery/' + objectId);
// }

// export async function createMosaic(mosaic) {
//     addOwner(mosaic);    
//     return await ajax.post(host + '/classes/Gallery', mosaic);
// }

// export async function updateMosaic(objectId, mosaic) {
//     return await ajax.put(host + '/classes/Gallery/' + objectId, mosaic);
// }

// export async function deleteMosaic(objectId) {
//     return await ajax.del(host + '/classes/Gallery' + objectId);
// }