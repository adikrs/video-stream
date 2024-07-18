export const login = (req,res)=> {
console.log("User is active")
console.log(res);
res.json(`User ${req.query.name} is logged In! `)
}