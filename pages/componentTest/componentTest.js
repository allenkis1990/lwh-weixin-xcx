// pages/componentTest/componentTest.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'系统提示',
    content:'hello world!!!!! hello weixin xcx!!!',
    showDialog: false,
    loading:false,
    templateSrc:'/templates/a2.wxml11111',


    areaPath:null
    //valueArr:[]
  },

  showDialog:function(){
    this.setData({
      showDialog: true
    });
  },

  changeDialogContent:function(e){
    this.setData({
      content:e.detail.value
    });
  },


  cancel:function(e){
    console.log('cancel callBack');
    console.log(e);
  },

  ok:function(e){
    
    console.log(e);
    setTimeout(function(){
      console.log('ok callBack');


      e.detail.close();
      e.detail.closeLoading();
    },3000);

  },

  getPickerInfo:function(){
    console.log(this.data.areaPath);
  },

  openLwhAlert:function(){
    this.lwhAlert.open({title:'标题',content:'content'});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var arr=app.getAreaInfo();
    var shengId='fj',cityId='qz',areaId='hh';

    var sheng='福建',city='泉州市',area='嘿嘿区';

    if (areaId){
      this.data.areaPath={
        sheng: { name: sheng, id: shengId},
        city: { name: city, id: cityId},
        area: { name: area, id: areaId}
      };
    }else{
        this.data.areaPath={};
        
    }

    

    this.setData({
      areaPath: this.data.areaPath
    });
    //console.log(shengIndex, cityIndex, areaIndex);
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.lwhAlert=this.selectComponent('#lwh-dialog');
    console.log(this.lwhAlert);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})