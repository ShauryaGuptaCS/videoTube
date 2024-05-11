import mongoose, { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = Schema(
    {
        videoFile: {
            type: String,//cloudinary url
            required: true,
        },
        thumbnail: {
            type: String,//cloudinary url
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            red: "User",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(mongooseAggregatePaginate);

export const Video = model("Video", videoSchema);
