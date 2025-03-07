const url = ' https://jsonplaceholder.typicode.com/todos';
fetch(url, {
    method: 'POST', //put, patch, delete, get
    body:JSON.stringify({title: 'hola Mundo'}),
    headers: {
        'Content-Type': 'application/json',
        Authorization : 'api key'
    },
    cache: 'no-cache'// default, reload, force-cache, only-if-cached
})
    .then(response => {
        // return response.json();
        if (response.ok){
            return response.text();
        }
        return Promise.reject(response.status)
    })
    .then(data => console.log(data))
    .catch(msg => console.log(msg))
