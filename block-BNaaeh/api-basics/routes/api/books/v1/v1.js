let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({"message": "hello"});
});

router.get("/:id", (req, res, next) => {
    console.log(req.params.id);
    res.status(200).json({"message": `Serving ${req.params.id}`});
});

router.post("/", (req, res, next) => {
    res.status(200).json({"message": "Create a Book"});
});

router.put("/:id", (req, res, next) => {
    res.status(200).json({"message": "Update a book"});

});

router.delete("/:id", (req, res, next) => {
    res.status(200).json({"message": "To Delete the book"});
})

module.exports = router;