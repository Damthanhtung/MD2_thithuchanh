import {myloVe} from "../model/mylove";
export class MyLoveManager {
    listMyLoveManager : myloVe[] = [];
    add(myLove: myloVe) {
        this.listMyLoveManager.push(myLove);
    }
    findAll() {
        return this.listMyLoveManager;
    }
    edit(id: number, myLove: myloVe):void {
        let index = this.findById(id);
        if (index === -1) {
            console.log("Không tồn tại người yêu cần update");
        }else {
            this.listMyLoveManager[index]= myLove;
            console.log("Sửa thành công");
        }
    }
    findById(id: number):number {
        for (let i=0; i<this.listMyLoveManager.length; i++) {
            if (this.listMyLoveManager[i].id===id) {
                return i ;
            }
        }
        return -1;
    }
    remove(id: number):void {
        let index = this.findById(id);
        if(index===-1) {
            console.log("Không tồn tại người yêu cần xóa");
        } else {
            this.listMyLoveManager.splice(index,1);
            console.log("Xóa thành công");
        }
    }
    findMyLove(name: string) {
        return this.listMyLoveManager.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
    }



}
