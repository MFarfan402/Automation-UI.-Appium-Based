
const touchPerformByCoordinates = async (client, x, y) => {
    await client.touchPerform([
        {action: 'press', options:{x: x, y: y}},
        {action: 'release'}
    ]);
};

module.exports = {
    touchPerformByCoordinates,
};
