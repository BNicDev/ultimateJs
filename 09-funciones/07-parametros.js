/**
 * {
 * url: ...
 * bucket: amazon s3
 * port: 80
 * }
 */

const config = {
    url : 'https://holamundo.io'
}

function configurarAPI(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI('https://holamundo.io')); // https://holamundo.io/145:80
// console.log(configurarAPI('https://chaomundo.io'));