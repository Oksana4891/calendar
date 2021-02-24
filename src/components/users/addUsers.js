import  User from './user';
import Admin from './admin';
 
 
 const userArr= [];

function addUsers(name, nameClass) {
const user = new nameClass (`${name}`);
       userArr.push(user);
       user.render();
}


addUsers("Oksana", User);
addUsers("Kate", Admin);
addUsers("Alex", Admin);
addUsers("Mark", User);
addUsers("Dima", User);

export default userArr;