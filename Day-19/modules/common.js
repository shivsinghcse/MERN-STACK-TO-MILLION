const type = {
    'Content-Type': 'application/json'
}

const getMessage = (msg) => {
    return JSON.stringify({
        message  : msg
    });
}


module.exports = {
    type,
    getMessage
}