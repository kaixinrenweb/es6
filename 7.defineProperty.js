// 
let obj = {
    other: "",
    get name(){
        console.log("获取...");
        return this.other;
    },
    set name(val){
        console.log("设置...");
        this.other = val;
    }
};
obj.name = "uui";
console.log(obj.name);