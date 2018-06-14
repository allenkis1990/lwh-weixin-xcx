// pages/fuck/fuck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    arr: [{ name: 'allen', age: 18 }, { name: 'tom', age: 28 }, { name: 'jack', age: 38 }],


    obj:{sex:'男',sport:'ball'},
    obj2: { name: 'allen', age: 18 },

    bigArr: [{ name: 'a1', list: [{ name: 'a1-1' }, { name: 'a2', list: [{ name: 'a2-1' }] }]},
      { name: 'b1', list: [{ name: 'b1-1' }] }],

    count:1
    

  },
 
  changeount:function(){
    this.data.count++;
    this.setData({
      count: this.data.count
    });
  },

  getCurrentPages: function () {
    var currentPages = getCurrentPages();
    console.log(currentPages);
  },

  touchstart:function(e){
    console.log('touchstart!!!');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    //重定向的页面离开才触发卸载
  console.log('卸载！！！！');
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