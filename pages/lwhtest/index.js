
//调用app.js里面的方法
var app=getApp();
//工具函数文件 暂时不支持绝对路径
var tool=require('../../utils/common');

// pages/lwhtest/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'lwh'

  },


  goFuck:function(){
    wx.navigateTo({
      url: '/pages/fuck/fuck',
      success:function(){
        console.log('跳转成功！！！');
      }
    })
  },

  goWxs:function(){
    wx.navigateTo({
      url: '/pages/wxs/wxs',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goForm:function(){
    wx.navigateTo({
      url: '/pages/form/form?a=1&b=2',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goMedia:function(){
    wx.navigateTo({
      url: '/pages/media/media',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goComponentTest:function(){
    wx.navigateTo({
      url: '/pages/componentTest/componentTest',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goRequest:function(){
    wx.navigateTo({
      url: '/pages/request/request',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goLwhAlert:function(){
    wx.navigateTo({
      url: '/pages/lwhAlert/lwhAlert',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },
  goCss: function () {
    wx.navigateTo({
      url: '/pages/css/css',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  goAPI: function () {
    wx.navigateTo({
      url: '/pages/API/API',
      success: function () {
        console.log('跳转成功！！！');
      }
    })
  },

  changeName:function(){
    console.log(this.data);
    this.setData({
      name:'刘伟恒'
    });
    
  },

  loading:function(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
  },

  say: function (e){
    console.log(e.currentTarget.dataset.arguments);
  },
  

  getCurrentPages:function(){
    //数组的最后一个是当前页面
    var currentPages = getCurrentPages();
    console.log(currentPages);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app);
    app.sayHello();
    tool.doSomeThing();

    wx.setStorageSync('lwhArr', [{a:1},{a:2}]);
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
    //属于tabBar的才触发隐藏
    console.log('隐藏！！！！');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  

    console.log('卸载！');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
    console.log('下拉！！！');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底！！！');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
    console.log('分享！！！');

  },
  //页面滚动
  onPageScroll:function(scrollTop){
    console.log('scroll');
    console.log(scrollTop);
  },

  //当前page是tab页时点击触发
  onTabItemTap:function(){
    console.log('tab');
  }
})