const router = require("express").Router();
const articleRoutes = require("./article-api");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;