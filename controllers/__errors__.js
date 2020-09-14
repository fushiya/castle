module.exports = (e, req, res) => {
	console.log(e.message);
	return res.status(500).json({message: "Something was triggered error"});
}
