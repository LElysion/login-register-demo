var Todos = db.collection('todos'); 

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
module.exports = {
    addText
}
