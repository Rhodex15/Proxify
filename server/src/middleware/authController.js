import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {

    try {

        const authHeader = req.header.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Not authorized"
            })
            console.log("Not authorized")
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = { id: decoded.userId };
        next();
    }
    catch(error){
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    };
}
