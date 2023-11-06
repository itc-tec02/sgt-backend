const app = require('./src/app');
const { sequelize } = require("./src/db");

// const ipAddress = "192.168.18.77"; // Dirección IP deseada.

app.listen(3001, () => {
    sequelize.sync();
    console.log(`listening on port :3001`);
})