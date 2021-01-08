const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});

module.exports = function setKey(key, value) {
    client.set(key, value)
}

module.exports = function getKey(key) {
    return client.get(key)
}

