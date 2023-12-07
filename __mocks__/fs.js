const fs = jest.genMockFromModule('fs');
const _fs = jest.requireActual('fs');

Object.assign(fs, _fs);

const readMocks = {};

fs.setMock = (path, error, data) => {
    readMocks[path] = [error, data];
}


fs.readFile = (path, options, callback) => {
    //fs.readFile('xxx' , fn);
    if (callback === undefined) { callback = options }

    if (path in readMocks) {
        callback(...readMocks[path]);
    } else {
        _fs.readFile(path, options, callback);
    }
}

const writeMocks = {};

fs.writeFile = (file, data, options, callback) => {
    if (callback === undefined) {callback = options;}
}

module.exports = fs;
