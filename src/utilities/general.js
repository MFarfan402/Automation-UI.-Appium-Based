const wait_ms = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
};

module.exports = {
    wait_ms,
};