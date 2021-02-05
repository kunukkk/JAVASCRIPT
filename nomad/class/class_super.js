class User {
  constructor({ name, email, password }) {
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

const admin = new User({
  name: "Lee",
  email: "abc@gmail.com",
  password: "1234",
});

class Admin extends User {
  //   constructor(superAdmin) {
  //     this.superAdmin = superAdmin;
  //   }
  // 상속을 받은 class에서 constructor를 생성하면
  // 부모 class의 constructor가 사라진다.
  constructor({ name, email, password, admin, isActive }) {
    super({ name, email, password });
    // 부모 constructor에 내용을 추가하기 위해서는 super()을 사용한다.
    this.admin = admin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleteing...");
  }
}

const admin = new Admin({
  name: "Lee",
  email: "abc@gmail.com",
  password: "1234",
  admin: true,
  isActive: true,
});

admin.getProfile();
