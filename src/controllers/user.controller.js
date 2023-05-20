const { getUsers, getUserById, getUserByEmail } = require("../services/user.service");
module.exports = {
      getUsers: async (req, res) => {
            try {
                  const users = await getUsers();
                  const usersResponse = users.map((user) => {
                        return {
                              id: user.idUser,
                              name: `${user.userdetail.firstName} ${user.userdetail.lastName}`,
                              email: user.email,
                              detail: `/api/users/${user.idUser}`,
                        };
                  });
                  const RESPONSE = {
                        count: users.length,
                        users: usersResponse,
                  };
                  return res.status(200).json(RESPONSE);
            } catch (error) {
                  return res.status(500).json({ Error: `Error del Servidor ${error}` });
            }
      },
      getUserById: async (req, res) => {
            try {
                  const ID_USER = req.params.id;
                  const user = await getUserById(ID_USER);
                  if (user) {
                        const RESPONSE = {
                              id: user.idUser,
                              name: `${user.userdetail.firstName} ${user.userdetail.lastName}`,
                              email: user.email,
                              phone: `${user.userdetail.phone}`,
                              avatar: `${user.userdetail.avatar}`,
                        };
                        return res.status(200).json(RESPONSE);
                  } else {
                        return res.status(400).json("User does not exist");
                  }
            } catch (error) {}
      },
      createUser: async (req, res) => {},
      deleteUser: async (req, res) => {},
      updateUser: async (req, res) => {},
      login: async (req, res) => {},
};
