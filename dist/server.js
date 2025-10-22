"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    // app.listen(3004, "0.0.0.0", () => {
    //   console.log("Server is running!")
    // })
    app_1.app.listen(process.env.PORT || 3004, () => {
        console.log("Server is running!");
    });
})
    .catch((err) => {
    console.log(err);
});
