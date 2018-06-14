// components/testDialog/testDialog.js


var behaviors1 = require('../../behaviors/behaviors1.js');

Component({
  /**
   * 组件的属性列表
   */

  behaviors: [behaviors1],

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },


  properties: {
    title: {
      type: String,
      value: ''
      },
    showDialog:{
      type: Boolean,
      value: false
    },
    content:{
      type: String,
      value: '默认内容',
      observer:function(nv,ov){

        console.log('弹窗内容变成了:'+nv);
      }
    },
    templateSrc:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog:false,
    loading:false,
    list:[]
  },


  attached:function(options){
    console.log('我是component里的attached');
    this.setData({
      list:["Allen","Jack","Tom"]
    });
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel:function(){

      var detail = {lwh:'cancel'} // detail对象，提供给事件监听函数
      var option = {} // 触发事件的选项
      this.triggerEvent('cancel', detail, option);
      this.setData({ showDialog:false});
    },
    ok:function(){
      //点确定默认都会触发loading 回调结束后要手动触发e.detail.closeLoading关闭loading
      this.setData({ loading: true });

      var that=this;
      var detail = { lwh: 'ok' ,close:function(){
        that.setData({ showDialog: false });
      },closeLoading:function(){
        that.setData({ loading: false });
      }} // detail对象，提供给事件监听函数
      var option = {} // 触发事件的选项
      

      this.triggerEvent('ok', detail, option);

      //this.setData({ showDialog: false });
    }
  }
})
