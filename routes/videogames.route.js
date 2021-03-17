const router = require("express").Router();

const c = require("../controller/videogames.controller");

router.get("/all", c.all);
router.get("/get/:id", c.get);
router.get("/add/:name", c.add);
router.get("/del/:id", c.del);

module.exports = router;
