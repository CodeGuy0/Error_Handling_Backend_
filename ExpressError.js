//.................This is my custom error which I made my own............
//....I can name it anything..................

class ExpressError extends Error {
     constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
     }
}

module.exports = ExpressError;
