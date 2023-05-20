const { check, body } = require("express-validator");
const db = require("../database/models");
const { getUserByEmail } = require("../services/user.service");

const userRegisterValidationRules = () => {
      return [
            /* check("name").notEmpty().withMessage("Name is required"),
    check("last_name").notEmpty().withMessage("Last name is required"), 
            check("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
            body("email").custom(async (value) => {
                  const user = await getUserByEmail(value);
                  if (user) {
                        return Promise.reject("This email is already registered");
                  }
            }),
            check("pass")
                  .notEmpty()
                  .withMessage("Password is required")
                  .isLength({
                        min: 6,
                        max: 12,
                  })
                  .withMessage("Password must be between 6 and 12 characters"),
            body("pass2")
                  .custom((value, { req }) => (value !== req.body.pass ? false : true))
                  .withMessage("Passwords do not match"),
            check("terms").isString("on").withMessage("You must accept the bases and conditions"),
            check("phone").optional().isMobilePhone().withMessage("Invalid phone number format"),
            check("rol").isInt().withMessage("Invalid role"),
            check("avatar").optional().isURL().withMessage("Invalid avatar URL"),*/
            check("nombre").notEmpty().withMessage("El nombre es obligatorio").bail().isLength({ min: 3, max: 30 }).withMessage("En nombre debe tener entre 3 y 20 caracteres"),
            check("apellido").notEmpty().withMessage("El apellido es obligatorio").bail().isLength({ min: 3, max: 20 }).withMessage("En apellido debe tener entre 3 y 20 caracteres"),

            check("email").notEmpty().withMessage("El email es obligatorio").bail().isEmail().withMessage("Email invalido"),
            body("email").custom(async (value) => {
                  const user = await getUserByEmail(value);
                  if (user) {
                        return Promise.reject("Este email ya estar registrado");
                  }
            }),
            check("pass")
                  .notEmpty()
                  .withMessage("Debes escribir tu contraseña")
                  .bail()
                  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,12}$/)
                  .withMessage("La contraseña debe contener entre 8 o 12 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial"),

            body("pass2")
                  .notEmpty()
                  .withMessage("La contraseña no es valido")
                  .bail()
                  .custom((value, { req }) => (value !== req.body.pass ? false : true))
                  .withMessage("Las contraseñas no coinciden"),

            check("terms").isString("on").withMessage("Debes aceptar los términos y condiciones"),
      ];
};

module.exports = {
      userRegisterValidationRules,
};
