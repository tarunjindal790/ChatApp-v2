

class Global {
    constructor(){
        // this.AdjList=new Map(); //new line
        //setup canvas and create central dot

        this.globalRoom = [];
    }
    
    EnterRoom(id, name, room, img){
        //create a new circle at random location
        //connect it with the central dot
        // this.AdjList.set(v,[]);
        // this.AdjList.get(v).push(w);
        var roomName = {id, name, room, img};
        this.globalRoom.push(roomName);
        return roomName;
    }
    
    RemoveUser(id){
        var user = this.GetUser(id);
        if(user){
            this.users = this.globalRoom.filter((user) => user.id !== id);
        }
        return user;
    }
    
    GetUser(id){
        var getUser = this.globalRoom.filter((userId) => {
            return userId.id === id;
        })[0];
        return getUser;
    }
    
    GetRoomList(room){
        var roomName = this.globalRoom.filter((user) => user.room === room);
        
        var namesArray = roomName.map((user) => {
            return {
                name: user.name,
                img: user.img
            }
        });
        
        return namesArray;
    }
}

module.exports = {Global};