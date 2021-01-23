
const touchPerformByCoordinates = async (client, x, y) => {
    await client.touchPerform([
        {action: 'press', options:{x: x, y: y}},
        {action: 'release'}
    ]);
};

const wait_ms = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
};

module.exports = {
    touchPerformByCoordinates,
    wait_ms,
};
