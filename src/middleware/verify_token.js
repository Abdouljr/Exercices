const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(403).json({status: false, message: "Token invalide"});
            };
            req.user = user;
            next();
        });
    }else {
        return res.status(401).json({status: false, message: "Utilisateur non-authentifié"});
    };
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.userType === "Admin"
         || req.user.userType === "Client"
         || req.user.userType === "Vendor"
         || req.user.userType === "Driver") {
            next();
        }else {
            return res.status(403).json({status: false, message: "Vous n'avez pas la permission"});
        };
    });
};

const verifyVendor = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.userType === "Admin" || req.user.userType === "Vendor") {
            next();
        }else {
            return res.status(403).json({status: false, message: "Vous n'avez pas la permission"});
        };
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.userType === "Admin") {
            next();
        }else {
            return res.status(403).json({status: false, message: "Vous n'avez pas la permission"});
        };
    });
};

const verifyDriver = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.userType === "Driver") {
            next();
        }else {
            return res.status(403).json({status: false, message: "Vous n'avez pas la permission"});
        };
    });
};


module.exports = {
    verifyTokenAndAuthorization,
    verifyToken,
    verifyVendor,
    verifyAdmin,
    verifyDriver
};