const crypto = require('crypto')

function generateJwtSecret() {
  // Generate a random 256-bit (32-byte) buffer
  const buffer = crypto.randomBytes(32)
  // Convert the buffer to a base64-encoded string
  const jwtSecret = buffer.toString('base64')

  return jwtSecret
}

const jwtSecret = generateJwtSecret()
console.log('JWT Secret:', jwtSecret)
