import app from "./app";

const PORT: string | 10000 = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});