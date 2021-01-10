
const touchPerformByCoordinates = (client, x, y) => {
    client.touchPerform([
        {action: 'press', options:{x: x, y: y}},
        {action: 'release'}
    ]);
};

module.exports = {
    touchPerformByCoordinates
};
