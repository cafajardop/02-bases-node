const { getUUID, getAge } = require('../plugins');

const buildPerson = ({ name, birthday }) => {
    return {
        id: getUUID(),
        name,
        birthday,
        age: getAge(birthday)
    }
}
const obj = { name: 'John', birthday: '1977-04-21' }
const john = buildPerson(obj);

console.log({ john });