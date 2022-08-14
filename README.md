npx sequelize-cli model:generate --name kategori --attributes name:string

npx sequelize-cli model:generate --name member --attributes name:string,addres:string,city:string,gender:string,email:string

npx sequelize-cli model:generate --name produk --attributes kategori_id:integer,name:string,image:string,stok:string

npx sequelize-cli model:generate --name produk_member --attributes produk_id:integer,member_id:integer
