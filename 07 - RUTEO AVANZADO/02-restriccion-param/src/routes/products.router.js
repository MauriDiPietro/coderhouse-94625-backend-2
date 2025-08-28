import { Router } from "express";
const router = Router();

// router.route('/')
//   .get(getAll)
//   .post(create)

router.get("/", (req, res) => {
  res.send("endpoint get products");
});

router.post("/", (req, res) => {
  res.send("endpoint post products");
});

// router.route('/:id')
//   .get(getById)
//   .put(updateById)
//   .delete(deleteById)

router.delete("/:id", (req, res) => {
  res.send("endpoint delete products ");
});

router.get("/:id", (req, res) => {
  res.send("endpoint get products by id");
});

router.put("/:id", (req, res) => {
  res.send("endpoint put products by id");
});

export default router;
