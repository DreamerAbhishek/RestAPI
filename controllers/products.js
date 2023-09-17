const getProducts = async (req, res) => {
  try {
    res.status(200).json({ msg: "Get Products Live Soon" });
  } catch (error) {
    console.log(error, "ERROR");
  }
};

const getBetaProducts = async (req, res) => {
  res.status(200).json({ msg: "Get Beta Products Live Soon" });
};

module.exports = { getProducts, getBetaProducts };
