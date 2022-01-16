import db from '../db';

app.get('/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return console.error(err);
    }
    res.send(result.rows[0]);
  });
});