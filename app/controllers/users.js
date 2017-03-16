var Todos = db.collection('todos'); 
var Users = db.collection('userdata')

var addText = async(req, res) => {
    var text = req.body['text']
    var data = {} 
    if (text) {
        data.text = text
        try {
            await Todos.insert(data)
        } catch(err) {
            return res.json({ success: false, error: '添加失败' + err })
        }
    }

    try {
        var todos = await Todos.find({}).toArray()
    } catch(err) {
        return res.json({ success: false, error: err })
    }
    data = {}
    data.list = todos
    return res.json({ success: true, data: data })
}

var addUser = async(req, res) => { /*注册*/
    var user = req.body['user']
    console.log(user.username)
    var data = {}
    var samename = await Users.find({username:user.username}).toArray()
    console.log(samename[0])
    if(samename[0]==undefined){
        data.username = user.username
        data.password = user.password
        data.power = user.power
        try{
            await Users.insert(data)
        } catch(err) {
            return res.json({ success: false, error: 'addUser fail'+err})
        }
    }else{
        console.log("username is repeat")
    }
    // try {
    //     var users = await Users.find({}).toArray()
    // } catch(err) {
    //     return res.json({ success: false, error: err})
    // }
    // data = {}
    // data.list = users
    // return res.json({ success: true, data: data})
    //console.log(data)
}

var loginUser = async(req, res) => {
    var user = req.body['user']
    console.log(user.username)
    var data = {}
    var userdata = await Users.find({username:user.username}).toArray()
    console.log(userdata[0].username)
    try
    {
        if(userdata[0]!=undefined){
            if(user.password == userdata[0].password){
                console.log("you in home")
                return res.json({login:true})
            }else{
                console.log("Oh no")
                return res.json({login:false})
            }
        }
    }catch(err){
        return res.json({error: 'loginUser fail' + err})
    }
}

module.exports = {
    addText,
    addUser,
    loginUser
}