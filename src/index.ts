import app from "./App"
const port = 8585
app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    return console.log(`server is listening on ${port}`)
})