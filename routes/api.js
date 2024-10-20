__path = process.cwd()
var express = require('express');
var fs = require('fs')
var router  = express.Router();
const { xvideos, XDL, xnxxs, hentaivid, hentais } = require(__path + "/lib/nsfw.js")
const tt = JSON.parse(fs.readFileSync(__path + "/lib/paptt.json"))

router.get('/xnxxsearch', async (req, res, next) => {
     var q = req.query.q
     if (!q) return res.json({ status: false, message: "Enter parameter q" })
     xnxxs(q).then((result) => {
     res.json(result)
     }).catch((e) => { res.json({ 
     status: false, 
     message: e 
     })
     })
})
router.get('/xdownload', async (req, res, next) => {
     var url = req.query.url
     if (!url) return res.json({ status: false, message: "Enter parameter url" })
     if (!(url.includes("xnxx.com") || url.includes("xvideos.com"))) return res.json({ status: false, message: "url salah" })
     XDL(url).then((result) => {
     res.json({
     status: true,
     result: result
     })
     }).catch((e) => { res.json({ 
     status: false, 
     message: e 
     })
     })
})
router.get('/xvideosearch', async (req, res, next) => {
     var q = req.query.q
     if (!q) return res.json({ status: false, message: "Enter parameter q" })
     xvideos(q).then((result) => {
     res.json({
     status: true,
     result: result
     })
     }).catch((e) => { res.json({ 
     status: false, 
     message: e 
     })
     })
})

router.get('/hentaisearch', async (req, res, next) => {
     var q = req.query.q
     if (!q) return res.json({ status: false, message: "Enter parameter q" })
     hentais(q).then((result) => {
     res.json({
     status: true,
     result: result
     })
     }).catch((e) => { res.json({ 
     status: false, 
     message: e 
     })
     })
})

router.get('/hentai', async (req, res, next) => {
     hentaivid().then((result) => {
     res.json({ 
     status: true, 
     result})
     }).catch((e) => { res.json({ 
     status: false, 
     message: e 
     }) })
})

router.get('/paptt', async (req, res, next) => {
     const data = tt[Math.floor(Math.random() * tt.length)]
     res.json({
     status: true,
     data
     })
})
module.exports = router