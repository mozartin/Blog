const FEED = require("../models/FEED");
const moment = require("moment");

const feed_index = (req, res) => {
  FEED.find()
    .populate("user")
    .sort({ updatedAt: -1 })
    .then((result) => {
      console.log(result);
      res.render("index", { title: "Home", feeds: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const feed_details = (req, res) => {
  FEED.findById(req.params.id).then((result) => {
    res.render("details_feed", {
      title: "Article Details",
      feed: result,
    });
  });
};

const feed_update_get = (req, res) => {
  FEED.findById(req.params.id).then((result) => {
    res.render("edit_feed", {
      title: "Edit Article",
      feed: result,
    });
  });
};

const feed_update_post = (req, res) => {
  FEED.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/feed/${req.params.id}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const feed_post = (req, res) => {
  // console.log(req.params.id);
  const time = moment(Date.now()).format("hh:mma");
  const date = moment(Date.now()).format("D MMMM YYYY");

  const feed = new FEED({
    ...{ user: req.params.id },
    ...req.body,
    ...{ created_time: time, created_date: date },
  });
  feed
    .save()
    .then((result) => {
      res.redirect("/feed");
    })
    .catch((err) => {
      console.log(err);
    });
};

const feed_delete = (req, res) => {
  FEED.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/feed");
    })
    .catch((err) => {
      console.log(err);
    });
};

const feed_get = (req, res) => {
  res.render("post_feed", { title: "post" });
};

module.exports = {
  feed_index,
  feed_details,
  feed_update_get,
  feed_update_post,
  feed_post,
  feed_delete,
  feed_get,
};
