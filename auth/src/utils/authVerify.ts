const jwt = require('jsonwebtoken')

const secret = process.env.SECRET_KEY

const generateToken = (userData: {
  userId: string
  email: string
  password: string
}) => {
  return jwt.sign(userData, secret, { expiresIn: process.env.EXPIRY_IN })
}

const verifyUserToken = (token: string) => {
  try {
    return jwt.verify(token, secret)
  } catch (err) {
    return null
  }
}

module.exports = { generateToken, verifyUserToken }
