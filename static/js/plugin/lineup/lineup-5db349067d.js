!function(){function o(t){this.parent=t}function e(t){this.parent=t}function t(){var t=this;t.draw=new o(t),t.computer=new e(t),console.log(t),t.def={radius:18,fontSize:20,hostBgColor:"#FF9000",hostFontColor:"#FFFFFF",guestBgColor:"#0D488A",guestFontColor:"#FFFFFF",changeFontSize:20,changeFontColor:"#FFFFFF"},t.basic={width:800,height:501,x:[150,350],y:[15,485],y_padding:10}}o.prototype.arc=function(t){var o=this.parent.ctx,e=t.x||0,n=t.y||0,r=t.color||"orange",t=t.radius||15;o&&(o.beginPath(),o.strokeStyle="#ffffff",o.lineWidth=5,o.fillStyle=r,o.arc(e,n,t,0,2*Math.PI,!0),o.stroke(),o.fill(),o.closePath())},o.prototype.text=function(t){var o=this.parent.ctx,e=t.val+"",n=t.x||0,r=t.y||0,t=t.color||"black";o&&(o.fillStyle=t,o.textAlign="center",o.textBaseline="middle",o.fillText(e,n,r+3))},o.prototype.change=function(t){var o=this.parent.ctx,e=t.x||0,n=t.y||0,r=t.color||"black";o&&(o.fillStyle=r,o.drawImage(this.parent.timg,e,n+=12,20,13),o.textAlign="start",o.fillText(t.change,e+20,n+10))},o.prototype.render=function(t){for(var o=this,e=o.parent.def,n=t.length,r=0;r<n;r++){var a=t[r];o.arc({x:a.x,y:a.y,radius:e.radius,color:a.bgColor||"orange"}),o.text({val:a.number,x:a.x,y:a.y,color:a.fontColor||"black"}),a.change&&(a.color=e.changeFontColor,a.size=e.changeFontSize,o.change(a))}},e.prototype.hostCompute=function(t,o){var e=this.parent.basic,n=this.parent.def,r=[],a=t.length,l=e.x[0],i=(e.x[1]-l)/(a-1),g=e.y_padding,s=e.y[0],h=e.y[1];o=o||{};for(var c=0;c<a;c++)for(var u=t[c],p=u.length,f=(h-s-2*g)/p,d=l+i*c,C=0;C<p;C++){var y={x:d,y:s+g+f*(C+.5),number:u[C],change:o[u[C]]||null,bgColor:n.hostBgColor,fontColor:n.hostFontColor};r.push(y)}return r},e.prototype.guestCompute=function(t,o){var e=this,n=e.parent.basic,r=e.parent.def,a=e.hostCompute(t,o=o||{}),l=a.length;width=n.width,height=n.height;for(var i=0;i<l;i++){var g=a[i];g.x=width-g.x,g.y=height-g.y,g.bgColor=r.guestBgColor,g.gontColor=r.guestFontColor}return a},e.prototype.goalieCompute=function(t){var o=this.parent.basic,e=this.parent.def,n=[],r={x:73,y:250,number:t.host,change:null,bgColor:e.hostBgColor,fontColor:e.hostFontColor},r=(n.push(r),{x:o.width-73,y:250,number:t.guest,change:null,bgColor:e.guestBgColor,fontColor:e.guestFontColor});return n.push(r),n};t.prototype.init=function(t){var o,e,n=this.def,t=document.getElementById(t);t&&t.getContext&&(o=t.getContext("2d"),(this.ctx=o).font=n.fontSize+"px "+n.fontFamily,(t=new Image).src="./../../../static/js/plugin/lineup/timg.png",this.timg=t,console.log(t),(e=new Image).onload=function(){o.drawImage(e,0,0)},e.src="./../../../static/js/plugin/lineup/footballStadium.jpg")},t.prototype.doDraw=function(t){var o=this;o.draw.render(o.computer.hostCompute(t.players.host,t.change.host)),o.draw.render(o.computer.guestCompute(t.players.guest,t.change.guest)),o.draw.render(o.computer.goalieCompute(t.goalie))};var n=new t;$.lineup=n}();