import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Email: String,
    password: String,
    dataOfBirth: Date,
    instructor: Boolean,
    ownedCourses: [mongoose.SchemaType.ObjectId]
});

const user = mongoose.model("User", userSchema);

export class Users {
    async index() {
        try {
            const ret = await user.find();
            return ret;
        }
        catch (err) {
            throw new Error(`Can't get the users: ${err.message}`);
        }
    }
}