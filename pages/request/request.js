// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.28.251:8088/cookie',
      method:'GET',
      header: {
        //'content-type': 'application/json',
        'cookie':'name=eliza.3tUyvSRf3hxFyF6CbmnOB71IztFkxzUayTu/hGELIC4'
      },
      success: function (res) {
        console.log(res);
        //console.log(res.data)
      }
    })


    //构造函数
    function AlertMessage() {
      let pages = getCurrentPages()
      let curPage = pages[pages.length - 1]
      this.__page = curPage
      this.__timeout = null
      //附加到page上，方便访问
      curPage.alertmessage = this

      return this
    }
    var p = new AlertMessage()
    //通过getCurrentPages()拿到的当前页面的作用域可以做this.setData()等操作
    p.__page.setData({fuck:'fuck'});
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