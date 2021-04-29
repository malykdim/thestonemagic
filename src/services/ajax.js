const api = 'https://parseapi.back4app.com';

const request = async (url, method, body = '') => {
    try {
        let response;
        if (method === 'POST') {
            response = await fetch(api + url, getOptions(method, body));
        } else {
            response = await fetch(api + url + body, getOptions(method));
        }
        
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
        
    } catch (err) {
        alert(err);
        throw err;
    }
};

function getOptions(method = 'GET', body = '') {
    const options = {
        method,
        headers: {
            'X-Parse-Master-Key': 'hYC7J1TV3gssZYQXLTvq7ApsVOXUX9KEMbS5PCWn',
            'X-Parse-Application-Id': 'xnluxCIpgfIf2tKfzIwpH4jS0GHBfu0RHkBXJJCV',
            'X-Parse-REST-API-Key': 'KRF2hY6NahfOt0hsmtO2LlqxZ9xn13TJZmyWmVA5'
        }
    };
    
    let sessionToken = sessionStorage.getItem('sessionToken');

    if (sessionToken !== null) {
        options.headers['X-Parse-Session-Token'] = sessionToken;
    }

    if (body && method === 'POST') {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export default request;
/* ****************************************************** */
// export async function get(url) {
//     return await request(url, getOptions());
// }

// export async function post(url, data) {
//     return await request(url, getOptions('post', data));
// }

// export async function put(url, data) {
//     return await request(url, getOptions('put', data));
// }

// export async function del(url) {
//     return await request(url, getOptions('delete'));
// }
/* ****************************************************** */
// export async function login(username, password) {
//     const result = await post(settings.host + '/login', {username, password});
    
//     sessionStorage.setItem('username', username);
//     sessionStorage.setItem('authToken', result.sessionToken);
//     sessionStorage.setItem('userId', result.objectId);
    
//     return result;
// }

// export async function register(email, username, password) {
//     const result = await post(settings.host + '/users', {email, username, password});
    
//     sessionStorage.setItem('username', username);
//     sessionStorage.setItem('authToken', result.sessionToken);
//     sessionStorage.setItem('userId', result.objectId);
    
//     return result;
// }

// export async function logout() {
//     const result = await post(settings.host + '/logout', {});
    
//     sessionStorage.removeItem('username');
//     sessionStorage.removeItem('authToken');
//     sessionStorage.removeItem('userId');
    
//     return result;
// }
/* ****************************************************** */
//  const token = sessionStorage.getItem('authToken');
// if (token != null) {
//     options.headers['X-Authorization'] = token;
// }
