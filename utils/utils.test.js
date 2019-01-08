const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    const result = utils.add(1, 2);

    expect(result).toBe(3, 'It is 3.');
});

it('should add two numbers async', (done) => {
    utils.addAsync(1, 2, (sum) => {
        expect(sum).toBe(3, 'It is 3.');
        done();
    });

});

it('should square number', () => {
    const result = utils.square(2);

    expect(result).toBe(4);
});

it('should square number async', (done) => {
    const result = utils.squareAsync(2, (res) => {
        expect(res).toBe(4);
        done();
    });

});

it('should extract names', () => {
    const result = utils.setName({}, 'Ivan Petrovic');

    expect(result.fn).toBe('Ivan');
    expect(result.ln).toBe('Petrovic');
    expect(result).toEqual({ fn: 'Ivan', ln: 'Petrovic' });
});