import axios from "axios";

const currentServer = "http://localhost:3000"
const res = await axios.get(`${currentServer}/vehicles`)

const data = res.data;
console.log(data)

console.assert(Array.isArray(data), "Response is array");
console.assert(data.length == 10, "Array has correct length");

console.assert(Object.prototype.hasOwnProperty.call(data[0], 'model') == false, "The object should not have model field!")

console.log("You should not see any 'Assertion failed'");