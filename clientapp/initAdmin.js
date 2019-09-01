const axios = require('axios');


axios.post(`http://localhost:5000/api/user/auth/register`, {
    first_name: 'admin',
    last_name: 'admin',
    email: 'admin@admin.net',
    password: 'admin',
    admin: true
}).then(() => console.log('Sucessfully created admin'))
    .catch(err => console.log("Error in processing: " + err));