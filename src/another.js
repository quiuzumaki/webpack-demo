import * as $ from 'jquery';
import User from './user'

const user = new User('quido', 20)
console.log(user.toString())

$('body')
    .append($('<span>').text('from another'));
