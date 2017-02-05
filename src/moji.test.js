import test from 'ava';
import { lib as emojiDict } from 'emojilib';
import { prop } from 'ramda';

import makeSearch from './moji.js';

const search = makeSearch({});

test('Moji search', t => {
  t.deepEqual(search('funny').map(prop('char')).sort(), ['😃', '😄'].sort());
  t.deepEqual(search('fist').map(prop('char')).sort(), ['👊', '✊'].sort());
  t.deepEqual(search('blah'), []);
  t.deepEqual(search('laugh').map(prop('char')).sort(), ['😄', '😅', '😆', '😆'].sort());
});

