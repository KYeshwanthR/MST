import {User} from './login.js'

document.getElementById('btn').addEventListener('click',()=> {
    let username = document.getElementById('name').value;
    let passwordd = document.getElementById('password').value;
    let user1 = new User("abc",'123');
    document.writeIn(user1.validateUser(username,password));
});
