import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { email } = req.body;
  res
    .cookie("user", email, { maxAge: 10000 })
    .send("cookie generada con exito");
});

router.get('/get-cookie', (req, res)=>{
    console.log(req.cookies);
    
})

export default router;
