//app.js


let { lwhAlert }=require('/components/lwhAlert/lwhAlert.js');

App({
  lwhAlert,
  onLaunch: function (options) {


    //打开可选的授权设置
    /*
      wx.openSetting({
        success:function(res){
          console.log(res);
        }
    });
    */
    


    //检查session是否过期
    wx.checkSession({
      success: function(res){
        console.log(arguments);
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function(res){
        /* // session_key 已经失效，需要重新执行登录流程
        wx.login() //重新登录
        ....*/
      }
    })

    //获取登录状态和信息
    /*wx.login({
      success:function(res){
        console.log(res);
      }
    });*/

    //获取设备型号 设备宽度高度等
    /*wx.getSystemInfo({
      success: function (res) {
        console.log(res);
      }
    })*/


    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //console.log(1);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

          
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  getAreaInfo:function(){
    var arr = [
      {
        name: '福建省', id: 'fj',
        cityArr: [
          {
            name: '福州市', id: 'fz',
            areaArr: [
              {
                name: '台江区', id: 'tj'
              },
              {
                name: '仓山区', id: 'cs'
              },
              {
                name: '晋安区', id: 'ja'
              },
              {
                name: '马尾区', id: 'mw'
              }
            ]
          },
          {
            name: '厦门市', id: 'xm',
            areaArr: [
              {
                name: '海昌区', id: 'hc'
              },
              {
                name: '集美区', id: 'jm'
              },
              {
                name: '湖里', id: 'hl'
              }
            ]
          },
          {
            name: '泉州市', id: 'qz',
            areaArr: [
              {
                name: '鲤城区', id: 'lc'
              },
              {
                name: '北岛区', id: 'bd'
              },
              {
                name: '嘿嘿区', id: 'hh'
              }
            ]
          }
        ]
      }
    ];

    return arr;

  },

  sayHello:function(){
    console.log('hello everyone');
  },

  onShow:function(options){
    console.log('show');
    console.log(options);
  },
  onHide: function () {
    console.log('hide');
  }
})