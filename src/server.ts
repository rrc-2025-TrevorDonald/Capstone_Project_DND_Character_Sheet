import app from "./app";

app.listen(process.env.PORT || 10000, () => {
    console.log(`Server is running on port 10000`);
});