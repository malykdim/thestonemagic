const api = 'https://parseapi.back4app.com';
// https://parseapi.back4app.com/users
// https://parseapi.back4app.com/classes/Gallery

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
            if (data.sessionToken) {
                sessionStorage.setItem('sessionToken', data.sessionToken);
            }
            return data;
        } catch (err) {
            return response;
        }
        
    } catch (err) {
        alert(err.message);
        throw err;
    }
};

export const isLogged = () => {
    if (sessionStorage.getItem('sessionToken')) {
        return true;
    }
    return false;
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