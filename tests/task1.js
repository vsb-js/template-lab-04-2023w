import axios from "axios";

const currentServer = "http://localhost:3000"
const res = await axios.get(`${currentServer}/testing-json`)

const data = res.data;
console.log(data)

console.assert(Object.prototype.hasOwnProperty.call(data, 'firstname'), "Has field firstname")
console.assert(Object.prototype.hasOwnProperty.call(data, 'lastname'), "Has field lastname")
console.assert(Object.prototype.hasOwnProperty.call(data, 'home'), "Has field home")

console.log("You should not see any 'Assertion failed'");