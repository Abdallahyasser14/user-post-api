import { and } from "sequelize";
import User from "../../../DB/Models/user.model.js";

export const Signupservice= async(req,res)=>{

try {


    const {name,email,password,role}=req.body;


        const userfind = await User.findOne({ where: { email: email } });
    if (userfind) {
    return res.status(500).json({

    message :"EMAIL ALREADY EXISTS"
})
    } 
 

  const insertone= await User.create({name,email,password,role})
return res.status(200).json({

    message :`user added `
})

}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}








}


export const CreateOrUpdate= async(req,res,next)=>{

try {

  const userid= req.params.id;
  const finduser = await User.findByPk(userid);
if (finduser === null) {
 next()
}
    const {name,email,password,role}=req.body;


        let userfind=null;
    if (email)
         userfind = await User.findOne({ where: { email: email } });
        const updated={};
    if (email&& !userfind  ) {

updated.email=email;
   
}


if (name)
updated.name=name;

if (password)

updated.password=password;
if (role)
    updated.role=role;
    
 

  const insertone= 
await User.update(
 updated,
  {
    where: {
      id: userid,
    },
  },
);
return res.status(200).json({

    message :`user updated `
})

}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}


export const FindByEmail = async (req, res) => {
  try {
    const { email } = req.query; 

    if (!email) {
      return res.status(400).json({ message: "Email parameter is required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({ user });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


export const findByPK= async(req,res)=>{

try {
 const userid= req.params.id;
  const finduser = await User.findByPk(userid, {
  attributes: { exclude: ['role'] }
});
if (finduser === null) {
return res.status(500).json({

    message :"user not found"
})
}

return res.status(200).json({

   User : finduser
})
}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}}
