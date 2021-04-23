const express = require('express');
const app = express();

const mockUserData=[
    {name: 'Mark'},
    {name:'Jill'}
]
app.get('/users',(req,res)=> {
    res.json({
        sucess:true,
        message: 'successfully got users. Nice!',
        users: mockUsersData

    })
})

app.listen(8000, () => {
    console.log("Server is up and running");
})
