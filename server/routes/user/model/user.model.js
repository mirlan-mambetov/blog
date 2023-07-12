import { model, Schema } from "mongoose"

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: Schema.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
)
export default model("User", UserSchema)
