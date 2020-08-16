const { Router } = require("express");
const router = Router();
const Stores = require("../models/stores");

//GET stores
router.get("/stores", async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;

  const getStores = await Stores.paginate({}, { limit: limit, page: page });
  res.send(getStores);
});
//POST stores
router.post("/stores", async (req, res) => {
  const { name, location } = req.body;

  const newStore = new Stores({
    name: name,
    location: location,
  });

  await newStore.save();

  res.status(200).json(newStore);
});

//PUT store
router.put("/stores/:id", async (req, res) => {
  const updateStore = await Stores.findByIdAndUpdate(req.params.id, req.body, {
    new: false,
  });
  res.json(updateStore);
});

//Delete Store
router.delete("/stores/:id", async (req, res) => {
  const removeStore = await Stores.findByIdAndDelete(req.params.id);
  res.json(removeStore);
});

module.exports = router;
