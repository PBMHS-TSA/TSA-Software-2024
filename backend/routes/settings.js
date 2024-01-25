const express = require('express')
const router = express.Router()
const passport = require('passport')
const db = require("../db/datauser")

const { ensureAuth, ensureGuest, adminlist } = require("./../auth/authentication.js")


function generateUUID() { // Public Domain/MIT
    return 'xxxxyxxx-xxxxx-xxxxx-yxxxxy-xyxxxxxy-xxxxxyxxxxy-xyyyyxy-xyyyxy-xxxxxx-yxxxxxxxxxxyxxxyy-xyyyxxxxxy'.replace(/[xy]/g, function(c) {
        var r = Math.floor(Math.random() * 2)+1//random number between 1 and 2
        var e = Math.floor(Math.random() * 26)//random number between 0 and 26
        var f = Math.floor(Math.random() * 5)//random number between 0 and 10
        let letter = "abcdefghijklmnopqrstuvwxyz".split("")
        let symbol = "*%$#@".split("")
        let number = "56789".split("")
        if (c=='x') {
			if (r==1) return letter[e]
			else return letter[e].toUpperCase()
		}else if (c=='y') {
			if (r==1) return number[f]
			else return symbol[f]
		}
        return "J"
    });
}
router.get('/account', (req, res) => {
	res.render('account', {user:req.user})
})

router.get('/', ensureAuth, (req, res) => {
	res.redirect('/settings/account')
})
router.get('/developers/api', ensureAuth, (req,res) => {
	let k =db.Database.getUsersKeys(req.user.id)
	let t=""
	console.log(k)
	let keys = []
	if (k && k==[]){
		if (k[0]==undefined ) keys.push({"name": `"${k.name}"`})
		else for (let f of k) {keys.push({"name":`"${f.name}"`});}
	}
	res.render('apikeys', {user: req.user, keys: keys})
	
	})

	
router.post('/developers/api/create', ensureAuth, (req,res) => {
	if (req.body.keyname==undefined || req.body.keyname==" " || req.body.keyname=="") {res.status(201).send("A Key name wasn't provided"); return;}
		let newkey = generateUUID()
		db.Database.createKey(req.body.keyname,req.user.id, newkey)
		res.send(newkey)
})
router.post('/developers/api/delete', ensureAuth, (req,res) => {
	if (adminlist.includes(req.user.id) && req.body.userId!=undefined) {req.body.userId=req.user.id}
	let keyname = req.body.keyname
	if (keyname==undefined || keyname==" " || keyname=="") {res.status(201).send("A Key name wasn't provided"); return;}
	let t = db.Database.deleteKey(keyname, req.body.userId||req.user.id)
	if (t==true) res.status(200).send("Deleted key " + keyname)
	else res.status(201).send("Unable to delete " + keyname)
})
module.exports = router