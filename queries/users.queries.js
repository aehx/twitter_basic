const User = require('../database/models/user.model');

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword
      }
    })
    return newUser.save();
  } catch(e) {
    throw e;
  }
}

exports.findUserPerEmail = (email) => {
  return User.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
}

exports.findUserPerUsername = (username) => {
  return User.findOne({username}).exec();
}

exports.searchUsersPerUsername = (search) => {
  const regExp = `^${ search }`;
  const reg = new RegExp(regExp);
  return User.find({ username: { $regex: reg } }).exec();
}
exports.addUserIdToCurrentUserFollowing = (currentUser, userId) => {
  return User.updateOne({_id: currentUser._id}, { $push: { following: userId } });
}

exports.removeUserIdToCurrentUserFollowing = (currentUser, userId) => {
  return User.updateOne({_id: currentUser._id}, { $pull: { following: userId } });
}