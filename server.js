const express = require('express');
const app = express();

const mockUserData=[
    {name: 'Mark'},
    {name:'Jill'}
]
app.get('/users',(req,res)=> {
   
    res.json({
        sucess:true,
        message: 'successfully Users!',
        users: mockUserData

    })
})

app.listen(8000, () => {

    app.get('users/:id', (req,res)=>{
        console.log(req.params.id);
        res.json({
            sucess:true,
            message:'got one user',
            user: req.params.id
        })
    })

    console.log("Server is up and running");
})
