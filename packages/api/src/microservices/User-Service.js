const { User } = require(`../database/models`);
const bcrypt = require(`bcrypt`);

const saltRounds = 10; // You can adjust the number of salt rounds as needed

exports.submit = async (userData) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;

    await User.create(userData);
  } catch (error) {
    console.log(`Error saving the user:`, error);
    throw error;
  }
};

exports.getList = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(`Error fetching users:`, error);
    throw error;
  }
};
