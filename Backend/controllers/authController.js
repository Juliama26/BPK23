const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password)
    return res.status(400).json({message: "Email dan password harus diisi"});

  const toLowerCase = email.toLowerCase();
  try {
    const user = await User.findAll({where: {email: toLowerCase}});
    if (user.length === 0)
      return res.status(404).json({message: "Email tidak terdaftar"});
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) return res.status(400).json({message: "Password salah"});

    const userId = user[0].id;
    const name = user[0].fullName;
    const email = user[0].toLowerCase;
    const role = user[0].user_role;
    const accessToken = jwt.sign(
      {userId, name, email, role},
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "25s",
      }
    );
    const refreshToken = jwt.sign(
      {userId, name, email, role},
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.update({refresh_token: refreshToken}, {where: {id: userId}});
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({accessToken});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const whoami = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await User.findAll({where: {refresh_token: refreshToken}});
    if (!user[0]) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const userId = user[0].id;
        const name = user[0].fullName;
        const email = user[0].email;
        const role = user[0].user_role;
        const imageUrl = user[0].imageUrl;

        const accessToken = jwt.sign(
          {userId, name, email, role, imageUrl},
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({name, email, imageUrl, accessToken});
      }
    );
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await User.findAll({where: {refresh_token: refreshToken}});
  if (!user[0]) return res.sendStatus(404);

  const userId = user[0].id;

  await User.update({refresh_token: null}, {where: {id: userId}});
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = {whoami, login, logout};
