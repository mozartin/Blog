const { Router } = require("express");
const feedController = require("../controllers/feedsController");
const { requireAuth } = require("../middleware/authMiddleware");

const route = Router();

route.get("/feed", requireAuth, feedController.feed_index);

route.get("/feed/:id", requireAuth, feedController.feed_details);

route.get("/feed/edit/:id", requireAuth, feedController.feed_update_get);

route.post("/feed/update/:id", requireAuth, feedController.feed_update_post);

route.get("/delete/:id", requireAuth, feedController.feed_delete);

route.get("/post", requireAuth, feedController.feed_get);

route.post("/post", requireAuth, feedController.feed_post);

module.exports = route;
