// const user = {name: "Hernan"};

// if(true){
//     const name = "David";
// }

// user.lastname = "David";

// console.log(user);

/* Desestructuración de objetos */

// const usr = {
//     id: 1,
//     name: "cecilia",
//     lastname: "Apellido",
//     cc: 123456789,
//     brithday: '12-9-1980',

//     getFullName(){
//         return `${ this.name } ${ this.lastname }`
//     }
// }

// const { name, lastname, cc, ...data } = usr;

// console.log(name, lastname, cc, usr.getFullName());

// const formatterUsr = ({ cc, brithday }) => {
//     return `La cedula ${ cc } cumple el: ${ brithday }`;
// }

// console.log(formatterUsr(usr));

// const arrayData = [ 6, 7, 8, 9 ];

// const [ q1, q2, q3, q4 ] = arrayData;

// console.log(q4);

/* Arrow function */

// function sum1(a, b){
//     return a * b;
// }

// const sum = (a, b) => a * b;

// console.log('Total: ', sum(2, 5));

/* Callbacks */
const usrs = [ 
    {
        id: 1,
        name: "cecilia",
        lastname: "Apellido",
        cc: 123456789,
        brithday: '12-9-1980',

        getFullName(){
            return `${ this.name } ${ this.lastname }`
        }
    }
]

const getUserById = (id, callback) => {
    const usr = usrs[0];

    setTimeout(() => {
        callback(usr);
    }, 2000)
}

console.log("Inicio");

getUserById(1, ( user )=> {
    console.log("Nombre: ", user.name);
    console.log("cc: ", user.cc);
});

// getUserById(1, (user) => {
//     new Email.to = user.mail;
//     Email.send();
// });

