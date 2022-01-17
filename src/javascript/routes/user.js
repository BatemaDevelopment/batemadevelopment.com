import db from '../db';

// The pool will emit an error on behalf of any idle clients
// It contains if a backend error or network partition happens
db.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Callback - Checkout a client
db.connect((err, client, done) => {
  if (err) {
    throw err;
  }

  db.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
});

// Promise - Checkout a client
db
  .connect()
  .then(client => {
    return client
      .query('SELECT * FROM users WHERE id = $1', [1])
      .then(res => {
        client.release();
        console.log(res.rows[0]);
      })
      .catch(err => {
        client.release();
        console.log(err.stack);
      });
  });

// async/await - Checkout a client
;(async () => {
  const client = await db.connect();

  try {
    const res = await client.query('SELECT * FROM users WHERE id = $1', [1]);
    console.log(res.rows[0]);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
})().catch(err => console.log(err.stack));