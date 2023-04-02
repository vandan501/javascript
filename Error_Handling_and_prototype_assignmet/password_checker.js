/*Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.*/
class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
    
    get password() {
      return this._password.replace(/./g, "*");
    }
    
    set password(newPassword) {
      if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        return;
      }
      
      this._password = newPassword;
    }
  }
  
  const user = new User("john123", "password");
console.log(user.password); 

user.password = "newpassword";
console.log(user.password); 

user.password = "1234";
