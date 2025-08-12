export const isAdmin = (req, res, next) => {
  if (req.session.info && req.session.info.role === 'admin') return next();
  return res.status(403).json({ msg: "No tenes permisos para acceder a este recurso" });
};
