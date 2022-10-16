var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/video',async (req,res)=>{
// //  range is the position where we are
// const range = req.headers.range;
//     const videoPath = './papa.mp4';
//     const videoSize = fs.statSync(videoPath).size;

//     const chunkSize = 0.5 ** 6 // 0.5mb
//     const start = Number(range.replace(/\D/g, ''));
//     const end = Math.min(start + chunkSize, videoSize -1);  //ending logiv

//     const contentLength = end - start + 1;

//     const headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type": "video/mp4"
//     }
//     res.writeHead(206, headers);

//     const stream = fs.createReadStream(videoPath, { start, end })
//     stream.pipe(res);
// });


module.exports = router;
