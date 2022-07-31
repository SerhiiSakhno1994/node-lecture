/*
1. Взять из заголовков заголовок authorization.
2. Проверить, что первое слово в заголовке - Bearer.
2.1. Если нет - вернуть 401 ошибку.
3. Проверить, что второе слово в заголовке - токен, который мы шифровали,
и  он не истек.
3.1. Если нет - вернуть 401 ошибку.
4. Найти в базе пользователя с id, закодированом в токене.
4.1. Если нет - вернуть 401 ошибку.
5. Прикрепить к объекту Request пользователя в свойство user.
*/

const jwt = require("jsonwebtoken");

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);

const { createError } = require(`${basedir}/helpers`);

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(createError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);
    console.log(user);

    if (!user || !user.token) {
      next(createError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, error.message));
  }
};

module.exports = auth;
