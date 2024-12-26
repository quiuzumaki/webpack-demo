import _ from 'lodash'
import User from './user'

User.prototype.doSomothing = () => {
    console.log('Do homework')
}

const user = new User('quido', 20)

console.log(user.toString())
console.log('about.js')

const s = "quido"
export default s