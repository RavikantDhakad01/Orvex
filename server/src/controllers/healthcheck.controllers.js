import ApiResponse from "../utils/ApiResponse.js";

const healthCheck = async (req, res) => {

        return res.status(200).json(new ApiResponse(200, {}, "Server is running"))
}

export { healthCheck }