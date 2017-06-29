// 创建节点、设置属性、获取对象
function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
function Canvas(){
    this.pos = []; this.numMax = 768;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.rx = this.width/2;
    this.ry=this.height/2;
    this.cxt; this.v = 1.25; //点的速度
    this.dcolor=2;
}
Canvas.prototype.createEle = function(){
    var ele = document.createElement("canvas");
    ele.id = "canvas";
    ele.value = "sorry,your browser can not support this!";

    ele.width = this.width;
    ele.height = this.height;
    this.cxt = ele.getContext('2d');
    document.body.appendChild(ele);
}
Canvas.prototype.setCircle = function(){
    var color, flag;
    for(var i=0; i<this.numMax;i++){
        var r = ((i/128)+1 )*40; //距离圆心初始半径，一共6层
        var rotate =  (i%128)*2.8125*(Math.PI/180); //一层128个，夹角2.8125

        flag = i/128;
        if( 0 <= flag && flag < 1.0){
            color = 'rgb(255,0,'+(i%128)*this.dcolor+')';
        }else if(1.0 <= flag && flag < 2.0){
            color = 'rgb('+(255-(i%128)*this.dcolor)+',0,255)';
        }else if(2.0 <= flag && flag < 3){
            color = 'rgb(0,'+(i%128)*this.dcolor+',255)';
        }else if(3 <= flag && flag < 4){
            color = 'rgb(0,255,'+(255-(i%128)*this.dcolor)+')';
        }else if(4 <= flag && flag < 5){
            color = 'rgb('+(i%128)*this.dcolor+',255,0)';
        }else if(5 <= flag && flag < 6){
            color = 'rgb(255,'+(255-(i%128)*this.dcolor)+',0)';
        }

        this.pos[i] = {
            r_max: 240, //6层间隔50,最大300
            rotate: rotate,//所在点的相对角度
            x: r*Math.cos(rotate)+this.width/2,
            y: r*Math.sin(rotate)+this.height/2,
            color: color,

        }
    }
}
Canvas.prototype.draw = function(x,y,r,color){
    this.cxt.save();
    this.cxt.beginPath();
    this.cxt.fillStyle = color;
    this.cxt.arc(x, y, r, 0, Math.PI*2, true);
    this.cxt.fill();
    this.cxt.restore();
}
Canvas.prototype.animate = function(){
    var dx;
    this.cxt.clearRect(0,0,this.width,this.height);
    for(var i=0;i<this.pos.length-1;i++){
        dx = Math.sqrt(Math.pow(this.ry - this.pos[i].y, 2)+Math.pow(this.rx - this.pos[i].x, 2));
        if( dx < 1 || dx > 300){

            // 重置位置
            this.pos[i].x = this.pos[i].r_max*Math.cos(this.pos[i].rotate)+this.width/2;
            this.pos[i].y = this.pos[i].r_max*Math.sin(this.pos[i].rotate)+this.height/2;
        }

        //速度
        this.pos[i].vx = -this.v*Math.cos(this.pos[i].rotate);
        this.pos[i].vy = -this.v*Math.sin(this.pos[i].rotate);

        // 移动
        this.pos[i].x += this.pos[i].vx;
        this.pos[i].y += this.pos[i].vy;
        // 大小渐变
        this.pos[i].r = Math.sqrt(Math.pow(this.ry - this.pos[i].y, 2)+Math.pow(this.rx - this.pos[i].x, 2))/80;

        this.draw(this.pos[i].x, this.pos[i].y, this.pos[i].r, this.pos[i].color);

    }
    window.requestAnimationFrame(this.animate.bind(this));

}
Canvas.prototype.changeV = function(){
    var self = this;
    var count = 1;
    setInterval(function(){
        self.v = 1.25 * Math.pow(2, count);
        if(count++ > 3) {count = 1;}
    },5000);
}

var canvas = new Canvas();
canvas.createEle();
canvas.setCircle();
canvas.animate();
canvas.changeV();