const User = require("../models/users");
const { getNextSequenceValue } = require("../helpers");

class UserService {
  getAllUsers() {
    return User.find({});
  }

  getUserById(userId) {
    return User.findOne({ id: userId }).then((userData) => {
      if (userData) {
        return userData;
      }
      throw new Error("User not found");
    });
  }

  async createUser(reqBody) {
    const userId = await getNextSequenceValue("userid");
    const user = new User({
      id: userId,
      ...reqBody,
    });
    return user.save().then((userData) => {
      return userData;
    });
  }

  updateUser(userId, reqBody) {
    return User.update({ id: userId }, { ...reqBody });
  }

  deleteUserById(userId) {
    return User.remove({ id: userId }).then((deteled) => {
      if (deteled) {
        return deteled;
      }
      throw new Error("User not deleted");
    });
  }

  userTypeAhead(input) {
    return User.find({
      $or: [
        { firstName: new RegExp(input, 'i') },
        { lastName: new RegExp(input, 'i') },
        { email: new RegExp(input, 'i') },
      ],
    });
  }
}

module.exports = UserService;
