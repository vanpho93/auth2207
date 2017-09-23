const bcrypt = require('bcrypt');

// Bam mat khau

bcrypt.hash('123', 8)
.then(encrypted => console.log(encrypted));

// Compare
bcrypt.compare('123', '$2a$08$bdHFFOa1Ym/64jN4Sm4dOk89PWgQm8/QPqM9Sf0kysp39Zd.zbxC')
.then(same => console.log(same))
.catch(err => console.log(err.message));