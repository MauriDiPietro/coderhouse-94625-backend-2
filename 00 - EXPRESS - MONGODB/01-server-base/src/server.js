import express from "express";
import { productManager } from "./manager/product-manager.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  try {
    // console.log(req.query);
    const products = await productManager.getAll();
    const { value } = req.query;
    if (!value) res.json(products);
    const productsFiltered = products.filter((p) => p.price <= parseInt(value));
    //! PRECIO MENOR A ___ |BUSCAR|
    res.json(productsFiltered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await productManager.getById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = await productManager.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));
