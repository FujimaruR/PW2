class UserSingleton {
    constructor() {
      if (UserSingleton.instance) {
        return UserSingleton.instance;
      }
  
      this.username = null;
      UserSingleton.instance = this;
    }
  
    setUsername(username) {
      this.username = username;
    }
  
    getUsername() {
      return this.username;
    }
  
    static getInstance() {
      return UserSingleton.instance || new UserSingleton();
    }
  }
  
  export default UserSingleton;
  