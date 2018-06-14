// components/testDialog/testDialog.js

Component({
  /**
   * 组件的属性列表
   */


  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },


  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog:false,
    dialogInfo:{
      title:'',
      content:''
    }
  },


  attached:function(options){

    
  },

  /**
   * 组件的方法列表
   */
  methods: {

    open:function(options){
      var that=this;
      this.data.showDialog=true;
      var title='dialogInfo.title';
      var content='dialogInfo.content';
      this.setData({
        showDialog:that.data.showDialog,
        [title]:options.title,
        [content]:options.content
      });
    },

    cancel:function(){
      var that=this;
      this.data.showDialog=false;
      this.setData({
        showDialog:that.data.showDialog
      });
    },
    ok:function(){
      this.cancel();
    }
  }
})
