import {myloVe} from "./model/mylove";
import {MyLoveManager} from "./service/myLoveManager";
let myLoveManager = new MyLoveManager();
let ha = new myloVe(1,'Thu Hà','Bạch Dương','Vũng Tàu',1999,'lướt tiktok');
let thuyLiNh = new myloVe(2,'Thùy Linh','Kim Ngưu','Nghệ An',1998,'Xem phim');
let huong = new myloVe(3,'Thu Hường','Song Tử','Hà Nội',1999,'Ăn uống');
let nga = new myloVe(4,'Hằng Nga','Cự Giải','Sài Gòn',2000,'Chơi Game');
myLoveManager.add(ha);
myLoveManager.add(thuyLiNh);
myLoveManager.add(huong);
myLoveManager.add(nga);
console.log(myLoveManager.findAll());
console.log(myLoveManager.findAll());
myLoveManager.remove(2);
console.log(myLoveManager.findAll());
let ngan = new myloVe(5,'Kim Ngân','Ma Kết','Sài Gòn',1994,'Shopping');
myLoveManager.edit(4,ngan);
console.log(myLoveManager.findAll());
console.log("------Tìm kiếm tên gần nhất--------");
console.log(myLoveManager.findMyLove('ng'));



