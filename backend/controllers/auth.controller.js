const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('../config/db');

exports.register = (req, res) => {
  const { email, password, name = '', role = 'user' } = req.body;
  const db = getDb();
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (user) return res.status(400).json({ message: 'Пользователь уже существует' });
    const hash = bcrypt.hashSync(password, 8);
    db.run('INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)', [email, hash, name, role], function(err) {
      if (err) return res.status(500).json({ message: 'Ошибка регистрации' });
      res.json({ id: this.lastID, email, name, role });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const db = getDb();
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (!user) return res.status(400).json({ message: 'Неверный email или пароль' });
    if (!bcrypt.compareSync(password, user.password)) return res.status(400).json({ message: 'Неверный email или пароль' });
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
  });
};

exports.me = (req, res) => {
  const db = getDb();
  db.get('SELECT id, email, name, role FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (!user) return res.status(404).json({ message: 'Пользователь не найден' });
    res.json(user);
  });
}; 