const GroupModel = require("../models/group.model");
const UserModel = require("../models/users.model");
const objectID = require("mongoose").Types.ObjectId;

module.exports.createGroup = async (req, res) => {
  const { name, createurId } = req.body;

  if (!objectID.isValid(createurId))
    return res.status(400).json({ message: "Id Invalid" });

  const newGroup = new GroupModel({
    createurId,
    name,
    membres: [createurId],
    admin: [createurId],
    evenements: [],
  });

  try {
    const group = await newGroup.save();
    addGroupeToMenbre = await UserModel.findByIdAndUpdate(
      createurId,
      {
        $addToSet: { group: group._id },
      },
      { new: true }
    );
    return res.status(200).json(group);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports.addMember = async (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).json({ message: "id Invalid" });

  const { idMembre } = req.body;
  try {
    addMembreToGroup = await GroupModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { membres: idMembre } },
      { new: true }
    );

    addGroupToMembre = await UserModel.findByIdAndUpdate(
      idMembre,
      { $addToSet: { group: req.params.id } },
      { new: true }
    );

    res.status(201).json({ addMembreToGroup, addGroupToMembre });
  } catch {
    res.status(200).json({ message: "Une erreur est survenue !" });
  }
};

module.exports.removeMembre = async (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).json({ message: "id Invalid" });

  const { idMembre } = req.body;
  try{
    removeMembreToGroup = await GroupModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { membres : idMembre }
      }
    )

    removeGroupToMembre = await UserModel.findByIdAndUpdate(
      idMembre,
      {
        $pull: { group : req.params.id }
      }
    )
    res.status(201).json({message: removeMembreToGroup})
  }catch(err){
    res.status(200).json(err)
  }
  
};
