import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const accessToken =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");

        if (!accessToken) {
            throw new ApiError(400, "Invalid user access");
        }

        const decodedAccessToken = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        );

        if (!decodedAccessToken) {
            throw new ApiError(400, "Invalid Access Token");
        }

        const user = User.findById(decodedAccessToken?._id).select(
            "-password refreshToken"
        );

        if (!user) {
            throw new ApiError(400, "Invalid Access token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
