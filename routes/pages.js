const router = require("express").Router();

// Home page
router.get("/", (req, res) => {
  res.render("home", {
    walletAddress: process.env.WALLET_ADDRESS,
  });
});

module.exports = router;
