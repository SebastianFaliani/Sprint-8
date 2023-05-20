const { User, UserDetail } = require("../database/models");
const bcrypt = require("bcrypt");

const getUsers = async () => {
      try {
            return await User.findAll({
                  include: [{ association: "userdetail" }],
            });
      } catch (error) {
            console.error("Error while fetching users:", error);
            throw new Error("Error fetching users");
      }
};

const getUserById = async (id) => {
      try {
            return await User.findByPk(id, {
                  include: [{ association: "userdetail" }],
            });
      } catch (error) {
            console.error("Error while fetching user:", error);
            throw new Error("Error fetching user");
      }
};

const getUserByEmail = async (email) => {
      try {
            return await User.findOne({
                  where: {
                        email,
                  },
            });
      } catch (error) {
            console.error("Error while fetching user:", error);
            throw new Error("Error fetching user");
      }
};

const insertUser = async (userData) => {
      console.log(userData);
      try {
            createUser = await User.create({
                  email: userData.email,
                  password: bcrypt.hashSync(userData.pass, 12),
                  typeOfAccess: "user",
            });
            return (createUserDetail = await UserDetail.create({
                  firstName: userData.nombre,
                  lastName: userData.apellido,
                  avatar: "default-image.png",
                  idUser: createUser.idUser,
            }));
      } catch (error) {
            console.error("Error while insert user:", error);
            throw new Error("Error insert user");
      }
};

const updateUser = async (userData) => {
      try {
            return await User.update(userData, { where: { id: userData.id } });
      } catch (error) {
            console.error("Error while update user:", error);
            throw new Error("Error update user");
      }
};

const deleteUser = async (userId) => {
      try {
            return await User.destroy({ where: { id: userData.id } });
      } catch (error) {
            console.error("Error while delete user:", error);
            throw new Error("Error delete user");
      }
};

module.exports = {
      getUsers,
      getUserById,
      getUserByEmail,
      insertUser,
      updateUser,
      deleteUser,
};
