const { User } = require(`../database/models`);

exports.submit = async (userData) => {

  try {
    await User.create(userData);
  } catch (error) {

    // eslint-disable-next-line no-console
    console.log(`Error saving the assessment:`, error);
    throw error;
  }
};

exports.getList = async () => {

  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    // handle the error (e.g., logging, throwing an exception)
    // eslint-disable-next-line no-console
    console.log(`Error fetching assessments:`, error);
    throw error;
  }
};
