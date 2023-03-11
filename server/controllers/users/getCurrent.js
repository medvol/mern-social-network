export const getCurrent = async (req, res) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile,
    impressions,
  } = req.user;


  res.json({
    user:{
      _id,
    firstName,
    lastName,
    email,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile,
    impressions,
    }
  });
};
