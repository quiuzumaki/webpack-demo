import * as $ from 'jquery';


$('body')
    .append($('<span>').text('from another'));

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toString() {
        return `User(${this.name}, ${this.age})`
    }
}

export default User