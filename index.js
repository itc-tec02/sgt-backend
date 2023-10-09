const app = require('./src/app');
const { sequelize } = require("./src/db");

const ipAddress = "192.168.0.60"; // Dirección IP deseada

app.listen(3001, ipAddress, () => {
    sequelize.sync();
    console.log(`listening on ${ipAddress}:3001`);
})