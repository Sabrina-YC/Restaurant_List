# 餐廳清單 Restaurant_List
一個用node.js打造的餐廳清單網站，提供使用者瀏覽與查詢，例如：餐廳類別、名稱、評比、地址等相關資訊。

## 產品功能
* 可依名稱與類別搜尋
* 點擊圖片可瀏覽餐廳詳細資訊，如類別、地址、Google地圖、電話與簡介
* 點擊「我的餐廳清單」可回到總頁面

## 環境設定
* Node.js

## 專案安裝流程

1. 開啟終端機(terminal)，複製此專案至本機電腦。
```
git clone https://github.com/pierceshih15/restaurantList.git
```

2. 進入此專案資料夾
```
cd restaurant_list
```

3. 在終端機安裝npm套件
```
npm install
```

4. 安裝nodemon套件執行app.js檔案
```
npm install -g nodemon //在全域(-g)安裝nodemon
nodemon app.js         //以nodemon開啟app.js
```

5. 當終端機出現以下回覆，表示連上本機伺服器。
```
This serverr is listening to http://localhost:3000   
```

6. 在Browser輸入 http://localhost:3000 開啟餐廳清單頁面，如以下畫面。頁面出現後即可使用瀏覽查詢餐廳資訊。
![image](https://user-images.githubusercontent.com/86601502/126461931-6161a685-ff0c-4010-9ac3-c4561232dc8e.png)


## 專案開發人員
* **Sabrina Chi** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
