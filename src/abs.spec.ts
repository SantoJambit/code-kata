import { canMakeWord } from './abc';

test.each([
    ['A', true],
    ['BARK', true],
    ['BOOK', false],
    ['TREAT', true],
    ['COMMON', false],
    ['SQUAD', true],
    ['CONFUSE', true],
])('canMakeWord(%j) should return %j', (word, expected) => {
    expect(canMakeWord(word)).toBe(expected);
});
