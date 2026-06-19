

const checkin = (req,res,next)=>{
    if (req.body.material ==="Bomb"){
        return res.status(403).json({"message":"bahuth danger he ye ladka"})
    }
    next();
}

module.exports = checkin