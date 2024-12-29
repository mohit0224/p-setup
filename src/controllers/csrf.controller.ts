import asyncHandler from "../utils/asyncHandler.utils";
import { apiResponse } from "../utils/httpResponse.utils";

export const setCSRFToken = asyncHandler((req, res) => {
    const csrfToken = req.csrfToken();
    res.status(200).json(new apiResponse(200, "CSRF token generated successfully", req, csrfToken));
});

