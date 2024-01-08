const { User } = require(`../database/models`);
const bcrypt = require(`bcrypt`);

const saltRounds = 10;

exports.submit = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

    await User.create(userData);
  } catch (error) {

    // eslint-disable-next-line no-console
    console.log(`Error saving the user:`, error);
    throw error;
  }
};

exports.getList = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error fetching users:`, error);
    throw error;
  }
};
