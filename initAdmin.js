const fetch = require('node-fetch');
require('dotenv').config()

fetch(`http://localhost:${process.env.PORT}/api/user/auth/register`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    first_name: 'admin',
    last_name: 'admin',
    email: 'admin@admin.net',
    password: 'admin',
    admin: true,
  })
}).then(() => console.log('Sucessfully created admin'))
  .catch(err => console.log(`Error in processing: ${err}`));
