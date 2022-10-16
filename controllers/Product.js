const axios = require('axios')
const productSchema = require('../Models/product')
const cheerio = require('cheerio')
const flipkartUrl = "https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2";
const productData = []

const fetchProductData = async (req,res)=>{
  try {
      const response = await axios.get(flipkartUrl)
      const $=cheerio.load(response.data);
      const mobiles = $("._3Mn1Gg > ._1AtVbE")
      console.log(mobiles.length)
      mobiles.map((item,index)=>{
        image = $(index).find('._3exPp9').attr("src");
        title = $(index).find("._4rR01T").text();
        price = $(index).find("._30jeq3").text();
        originalPrice = $(index).find("._27UcVY").text();
        ratings = $(index).find("._2_R_DZ > span > span ").text();
        originalPrice = $(index).find("._27UcVY").text();
        offerPercentage = $(index).find("._3Ay6Sb > span").text();
        const specifications = [];
        $(index).find("ul >li").each(function(){
            specifications.push($(this).text());
          })
        productData.push({image,title,price,ratings,originalPrice,originalPrice,specifications,offerPercentage})
      })
          try {
            const datas = await productSchema.create(productData)
            res.status(200).json(datas)
          } catch (error) {
            console.log("error creating product")
          }
        } catch (error) {
         console.log(error);
     }
}



const getProductDetails = async (req,res) => {
try {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search || "";
  let sort = req.query.sort || "createdAt";
  req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
  let sortBy = {};
  if (sort[1]) {
    sortBy[sort[0]] = sort[1];
  } else {
    sortBy[sort[0]] = "desc";
  }
    // const datas = await productSchema.find()
    const movies = await productSchema.find({ title : { $regex: search, $options: "i" } })
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

      const total = await productSchema.countDocuments({
        name: { $regex: search, $options: "i" },
      });
      
     res.send({
      success:true,
      movies,
      total,
      page: page + 1,
      limit,
     })

} catch (error) {
  res.send({
    success : false,
    error : error,
    message:error.name
  })
}
}

module.exports={fetchProductData, getProductDetails}