const { getUsers, getUserById, getUserByEmail, insertUser, updateUser, deleteUser } = require("../services/user.service");
module.exports = {
      getUsers: async (req, res) => {
            try {
                  const users = await getUsers();
                  const usersResponse = users.map((user) => {
                        return {
                              id: user.idUser,
                              name: `${user.userdetail.firstName} ${user.userdetail.lastName}`,
                              email: user.email,
                              avatar: user.userdetail.avatar,
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
            } catch (error) {
                  return res.status(500).json({ Error: `Error del Servidor ${error}` });
            }
      },
      createUser: async (req, res) => {
            //return res.json(req.body);
            try {
                  const RESPONSE = await insertUser(req.body);
                  if (RESPONSE) {
                        return res.status(201).json("User created successfully");
                  } else {
                        return res.status(400).json("Somethings wrong");
                  }
            } catch (error) {
                  return res.status(500).json({ Error: `Error del Servidor ${error}` });
            }
      },
      deleteUser: async (req, res) => {},
      updateUser: async (req, res) => {},
      login: async (req, res) => {},
};
