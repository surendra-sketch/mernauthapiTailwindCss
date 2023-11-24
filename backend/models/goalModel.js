import mongoose from "mongoose";
const { model, models, Schema } = mongoose;

const GoalSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requireed: true,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Goal = models.Goal || model("Goal", GoalSchema);

export default Goal;
