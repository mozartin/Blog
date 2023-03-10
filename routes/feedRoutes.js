const { Router } = require("express");
const feedController = require("../controllers/feedsController");

const route = Router();

route.get("/feed", feedController.feed_index);

route.get("/feed/:id", feedController.feed_details);

route.get("/feed/edit/:id", feedController.feed_update_get);

route.post("/feed/update/:id", feedController.feed_update_post);

route.get("/delete/:id", feedController.feed_delete);

route.post("/post", feedController.feed_post);

module.exports = route;
