import mongoose from "mongoose"
import { genSalt, hash } from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password:{
        type: String,
        requierd: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        requierd: false,
    },
    color: {
        type: Number,
    },
    profileSetup: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function(next) {
    const salt = await genSalt()
    this.password = await hash(this.password, salt);
    next();
})

const User = mongoose.model("Users", userSchema)


 export default User;