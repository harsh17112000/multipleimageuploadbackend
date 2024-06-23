const userDB = require("../model/userModel");

// img upload
exports.ImageUpload = async (req, res) => {
    const files = req.files.length > 0 && req.files;
    const { username } = req.body;

    if (!username || !files) {
        res.status(400).json({ error: "All Fileds are required" })
    } else {
        try {
            const preuser = await userDB.findOne({ username: username });
            if (preuser) {
                res.status(400).json({ error: "This User Is already exist" })
            } else {
                // const finalUrl = [];

                // for(iteam of files){
                //     finalUrl.push(iteam["filename"])
                // }

                const finalUrl = files.map((element)=>element.filename)
                
                const userData = new userDB({
                    username,userprofile:finalUrl
                });

                await userData.save();
                res.status(200).json({message:"Image sucessfully uploaded",userData})
            }
        } catch (error) {
            console.log("catcth block", error)
            res.status(400).json({ error: error })
        }
    }
}

// getUserdata
exports.getUserdata = async(req,res)=>{
    try {
        const getUsers = await userDB.find();
        res.status(200).json(getUsers)
    } catch (error) {
        console.log("catcth block", error)
        res.status(400).json({ error: error })
    }
}