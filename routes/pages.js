const router = require("express").Router();

// Home page
router.get("/", (req, res) => {
  res.render("home", {
    walletAddress: process.env.WALLET_ADDRESS,
    title: "Solana Giveaway",
  });
});

module.exports = router;
