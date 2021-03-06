//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    scrollTop:100
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  fn:function(){
    var that=this;
    this.data.scrollTop=0;
    this.setData({
      scrollTop: that.data.scrollTop
    });
  }
})
