const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Substitua com uma chave secreta segura

// Função para gerar um token
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

// Função para verificar um token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Expects "Bearer <token>"

    if (token == null) return res.sendStatus(401); // Se não houver token, retorna 401

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Se o token for inválido, retorna 403
        req.user = user; // Salve as informações do usuário no objeto req
        next(); // Continue para a próxima função/middleware
    });
}


module.exports = { generateToken, authenticateToken };