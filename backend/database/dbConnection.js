import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "DOCTOR_APPOINTMENT_SYSTEM",
        })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log(`An error occured while connecting to database: ${err}`);
        });
};