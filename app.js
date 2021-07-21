const express = require('express')
const app = express()
const port = '3000'
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')


////引擎樣板設定/////
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))


///// 根目錄路由 /////
app.get('/', (req, res) => {    
  res.render('index', {restaurants: restaurantList.results})

})

//// search bar路由 
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantSearched = restaurantList.results.filter((restaurant) => restaurant.category.toLowerCase().includes(keyword.trim().toLowerCase()) || restaurant.name.toLowerCase().includes(keyword.trim().toLowerCase()))  
  res.render('index', {restaurants: restaurantSearched, keyword})
})

////分頁路由 ////
app.get('/restaurants/:id', (req, res) => {
  
  const restaurant = restaurantList.results.find((restaurant) => restaurant.id.toString() === req.params.id)
  res.render('show', {restaurant})
})


/// server 監聽 ///
app.listen(port, () => {
  console.log(`This serverr is listening to http://localhost:${port}`)
})