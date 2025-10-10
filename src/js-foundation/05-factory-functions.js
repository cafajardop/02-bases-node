


/** Funcion que crea una funcion */


// const makeBuildPerson = () => {

//     return () => {
//         return {

//         }
//     }
// }



const buildPerson = ({ name, birthday }) => {
    return {
        id: new Date().getTime(),
        name,
        birthday,
        age: new Date().getFullYear() = new Date(birthday).getFullYear()
    }
}
const obj = { name: 'John', birthday: '1984-03-03' }
const john = buildPerson(obj);