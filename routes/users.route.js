const router = require("express").Router();

const c = require("../controller/users.controller");

router.get("/all", c.all);
router.get("/get/:id", c.get);
router.get("/add/:login/:name", c.add);
router.get("/del/:id", c.del);

module.exports = router;
