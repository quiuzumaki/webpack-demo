import _ from 'lodash';
import * as $ from 'jquery';

console.log(
  _.join(['Index', 'module', 'loaded!'], ' ')
);

$('body')
    .append($('<span>').text('from index'));
