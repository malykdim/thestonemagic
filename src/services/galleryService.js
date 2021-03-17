// module revealing pattern
function getAll() {
    const gallery = 'http://localhost:5000/gallery';
    
    return fetch(gallery)
    .then(res => res.json())
    .catch(error => {
        console.error(`vizualiziraj ${error}`); // toaster message
    });
}

// ako iskam private function / pomoshtna funkciq wytre za modula 

export default getAll;