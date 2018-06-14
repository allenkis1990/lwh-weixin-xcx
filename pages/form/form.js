// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxArr: [{ name: 'haha', checked: false }, { name: 'hehe', checked: true }], radioArr: [{ name: 'haha', checked: false }, { name: 'hehe', checked: false }],
    multiSelector:'',
    userInfo:{
      userName:'',
      mark:''
    }

  },

  fn:function(e){
    console.log(e);
  },

  formSubmit:function(e){
    console.log(e);
  },

  formReset:function(e){
    console.log(e);
  },

  changeInput:function(e){

    console.log(e);
  },

  fn:function(e){
    console.log(e);
    
    if(e.type==='focus'){
      console.log('聚焦');
    }

    if (e.type === 'blur') {
      console.log('失焦');
    }
    
  },

  changeSelector:function(e){
    console.log(e);

    this.data.hasChoseSelector = ['allen', 'tom', 'jack'][e.detail.value];
    this.setData({
      hasChoseSelector: this.data.hasChoseSelector
    });

  },

  changeMultiSelector: function (e) {
    console.log(e);

    var that=this;
    this.data.multiSelector = '';
    var indexArr=e.detail.value;

    [['jack', 'tom'], ['fuck', 'shit'], ['haha', 'hehe']].forEach(function(item,index){
      that.data.multiSelector += item[indexArr[index]] + ' ';
    });


    this.setData({
      multiSelector: this.data.multiSelector
    });

  },

  changeSwitch:function(e){
    console.log(e)
  },

  bindInputCommon:function(e){
    console.log(e);
    var that=this;
    var type=e.currentTarget.dataset.type,
        value=e.detail.value;
    this.data.userInfo[type]=value;
    var model='userInfo.'+type;
    this.setData({
      [model]:that.data.userInfo[type]
    });
  },


  getUserInfo:function(){
    console.log(this.data.userInfo);
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var lwhArr = wx.getStorageSync('lwhArr');
    console.log(lwhArr);
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