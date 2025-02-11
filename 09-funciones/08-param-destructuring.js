const config = {
    url : 'https://holamundo.io',
    direccion : {
        calle : 'Calle 1',
        numero : 123
    }
}

// const config = [
//    'https://holamundo.io',
//    145,
//    80
// ]
// function webserver([url, ...rest]){
//     // const {url} = config;
//     // const [url, bucket, port] = configuracion;
//     console.log(rest)
//     return url
// };
function webserver({url, ...rest}){
    // const {url} = config;
    // const [url, bucket, port] = configuracion;
    console.log(rest)
    return url
};

console.log(webserver(config))