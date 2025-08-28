import { Router } from "express";
const router = Router();

router.get("/:email", (req, res) => {
  //(x) - controller - (x) --> repository --> dao --> DB
  const { email } = req.params;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  /*
console.log(email.match(emailRegex));
    [
  'juan@mail.com',
  index: 0,
  input: 'juan@mail.com',
  groups: undefined
    ]
  ||
  null

  console.log(emailRegex.test(email)); //true || false
  */
if(!email.match(emailRegex)) return res.status(400).send({status:"error", error:"El email no es valido"})
 return res.send("email valido");
});

router.get('/get-email/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})', (req, res)=>{
    res.send('email valido')
})

router.get('/get-email2/:email2', (req, res)=>{
    res.send('email valido')
})

router.param('email2', (req, res, next, email2)=>{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = email2.match(emailRegex)
    if(!isValid) return res.status(400).json({status:"error", error:"El email no es valido"})
    next()
})

router.all('/admin/*', (req, res, next)=>{
    if(!req.user.admin) return res.status(403).send({status:"error", error:"No tienes permisos"})
    next()
})


// router.get('*', (req, res)=>{
//     res.status(404).send({status:"error", error:"No se encontro la ruta"})
// })

export default router;
