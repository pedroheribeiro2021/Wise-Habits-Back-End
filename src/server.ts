import { app } from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!")
    // app.listen(3004, "0.0.0.0", () => {
    //   console.log("Server is running!")
    // })
    app.listen(process.env.PORT || 3004, () => {
      console.log("Server is running!")
    })
  })
  .catch((err) => {
    console.log(err)
  })
