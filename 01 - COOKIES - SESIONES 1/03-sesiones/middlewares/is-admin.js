export const isAdmin = (req, res, next) => {
  if (req.session.info && req.session.info.admin) return next();
  return res.status(403).json({ msg: "No estas autorizado - Sólo usuarios administradores" });
};
