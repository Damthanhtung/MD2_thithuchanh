import {myloVe} from "./model/mylove";
import {MyLoveManager} from "./service/myLoveManager";
let input = require(`readline-sync`);
let myLoveManager = new MyLoveManager();
let ha = new myloVe(1,'Thu Hà','Bạch Dương','Vũng Tàu',1999,'lướt tiktok');
let thuyLiNh = new myloVe(2,'Thùy Linh','Kim Ngưu','Nghệ An',1998,'Xem phim');
let huong = new myloVe(3,'Thu Hường','Song Tử','Hà Nội',1999,'Ăn uống');
let nga = new myloVe(4,'Hằng Nga','Cự Giải','Sài Gòn',2000,'Chơi Game');
myLoveManager.add(ha);
myLoveManager.add(thuyLiNh);
myLoveManager.add(huong);
myLoveManager.add(nga);
let zodiacs = ['Bạch Dương','Kim Ngưu', 'Song Tử', 'Cự Giải'];
function add() {
    let id = +input.question('Enter id: ');
    let name = input.question('Enter name: ');
    let zodiacOfIndex = +input.question(`Choice zodiac: \n 1.Bạch Dương \n 2.Kim Ngưu \n 3.Song Tử \n 4.Cự Giải`);
    let zodiac = zodiacs[zodiacOfIndex-1];
    let homeTown = input.question('Enter homeTown: ');
    let yearOfBirth = +input.question('Enter yearOfBirth: ');
    let interests = input.question('Enter interests: ');
    let menu = new myloVe(id,name,zodiac,homeTown,yearOfBirth,interests);
    myLoveManager.add(menu);
}

function edit() {
    let id = +input.question('Enter id: ');
    let name = input.question('Enter name: ');
    let zodiac = input.question('Enter zodiac: ');
    let homeTown = input.question('Enter homeTown: ');
    let yearOfBirth = +input.question('Enter yearOfBirth: ');
    let interests = input.question('Enter interests: ');
    let menu = new myloVe(id,name,zodiac,homeTown,yearOfBirth,interests);
    myLoveManager.edit(id,menu);

}

function remove() {
    let id = +input.question(`Nhập người yêu cần xóa: `);
    myLoveManager.remove(id);
}

function display() {
    console.log("--------Danh sách người yêu là:------------");
    console.log(myLoveManager.findAll());
}

function findLove() {
    let name =input.question('Nhập tên người yêu cần tìm');
    console.log(myLoveManager.findMyLove(name));
}

function menu() {
    let menu = `--------menu người yêu-------
    1.Thêm người yêu
    2.Sửa người yêu
    3.Xóa người yêu
    4.Hiển thị người yêu
    5.Tìm kiếm người yêu
    0.Thoát`
    let choice = -1;
    do {
        console.log(menu);
        choice = +input.question(` Enter your selection: `);
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                edit();
                break;
            case 3:
                remove();
                break;
            case 4:
                display();
                break;
            case 5:
                findLove();
                break;
        }
    } while (choice != 0);
}
menu();
