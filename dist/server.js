"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Database connected!');
    app_1.app.listen(3003, () => {
        console.log('Server is running!');
    });
}).catch(err => {
    console.log(err);
});
