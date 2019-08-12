const check = {

  checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.send("I dont use this function");
  },
  checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
      return res.send("Already logged in");
    }
    next()
  }

}

export default check;