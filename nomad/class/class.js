class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  sayHello() {
    console.log(`my name is ${this.name}`);
    console.log(this);
  } // 'this' refers to whole class

  getProfile() {
    console.log(`${this.name} ${this.email} ${this.password}`);
  }

  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
}

const user = new User("Lee", "abc@gmail.com", "1234");

user.getProfile();
user.updatePassword("4321", "1234");
user.getProfile();

class Admin extends User {
  constructor(superAdmin) {
    this.superAdmin = superAdmin;
  }
  deleteWebsite() {
    console.log("Deleteing...");
  }
}

const admin = new Admin("Lee", "abc@gmail.com", "1234", true);

admin.deleteWebsite();
admin.getProfile();
