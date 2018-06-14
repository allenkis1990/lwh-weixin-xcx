// pages/wxs测试/wxs.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperArr: [{ bgColor: 'red', width: '350px', height: '150px' }, { bgColor: 'blue', width: '350px', height: '150px' }, { bgColor: 'pink', width: '350px', height: '150px' }],
    iconArr: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
  },

  animationfinish:function(e){
    console.log(e)
  },

  doThen:function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
          console.log('timeout!');
          resolve('回调！');
        },3000);
    });
  },

  btnFn:function(){
    var that=this;
    this.data.loading=true;
    this.data.disabled = true;
    this.setData({
      loading: this.data.loading,
      disabled: this.data.disabled
    });
    setTimeout(function(){
      that.setData({
        loading: !that.data.loading,
        disabled: !that.data.disabled
      });
    },2000);
  },


  getUserDetail:function(options){
    console.log(options)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
      this.doThen().then(function(data){
          console.info(data);
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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