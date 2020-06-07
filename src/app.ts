import express, { Application } from "express";

const app: Application = express();

app.get("/", (_, res) => {
    res.send("Server is listening");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on ${port}`));
