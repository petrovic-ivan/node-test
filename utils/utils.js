module.exports.add = (a, b) => {
    return a + b;
};

module.exports.addAsync = (a, b, callback) => {
    const result = a + b;
    setTimeout(() => {
        callback(result);
    }, 1000);
};

module.exports.square = (a) => {
    return a * a;
};

module.exports.squareAsync = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    const names = fullName.split(' ');
    user.fn = names[0];
    user.ln = names[1];
    return user;
};