// pages/lwhAlert/lwhAlert.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      name: 'allen',
      age: 18
    }
  },


  fn: function () {
    this.setData({
      ['obj.name']: 'fuck'
    });
  },

  openAlert: function (e) {

    this.lwhAlert.show({
      title: e.target.dataset.title,
      content: e.target.dataset.content,
      okCallBack: function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log('okCallBack!!!!');
            resolve();
          }, 3000)
        });
      },
      cancelCallBack: function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log('cancelCallBack!!!!');
            resolve();
          }, 3000)
        });
      }

    });

    console.log(this);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化lwhAlert弹窗
    var a=new app.lwhAlert();
    console.log(a);
    var a1 = { a1: 'a1' };
    var a2 = { a2: 'a2' };
    Object.assign(a1, a2);
    console.log(a1);
    console.log(a2);
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