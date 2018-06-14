module.exports = {
  lwhAlert: lwhAlertClass
};

//页面上的data 里__lwhAlertData__里的属性
let alertDefaultConfig={
  '__lwhAlertData__.showAlert':false,
  '__lwhAlertData__.title':'',
  '__lwhAlertData__.content': ''
};
//页面上的方法
let alertDefaultEvents={
  ok:function(){
    var that = this;

    that.setData({
      '__lwhAlertData__.loading': true
    });

    if (this.lwhAlert.okCallBack && typeof this.lwhAlert.okCallBack==='function'){
      this.lwhAlert.okCallBack().then(function(){
        that.lwhAlert.hide();
        that.setData({
          '__lwhAlertData__.loading':false
        });
      });
    }
  },
  cancel:function(){
    var that=this;
    if (this.lwhAlert.cancelCallBack && typeof this.lwhAlert.cancelCallBack === 'function') {
      this.lwhAlert.cancelCallBack().then(function(){
        that.lwhAlert.hide();
      });
    }
  }
};


function lwhAlertClass() {


  function lwhAlert() {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    
    //把组件里的事件注册到当前页面对象上去
    Object.assign(currentPage, alertDefaultEvents);    

    this.currentPage = currentPage;
    //设置弹窗初始化属性
    currentPage.setData(alertDefaultConfig);


    //把构造函数放在当前page的lwhAlert上方便访问
    currentPage.lwhAlert=this;
    return this;
  }


  //构造函数里的方法
  lwhAlert.prototype.show = function (options) {
    
    
    var that = this;
   
    
    var currentPage = this.currentPage;


   
    currentPage.setData({
      '__lwhAlertData__.showAlert':true,
      '__lwhAlertData__.title':options.title,
      '__lwhAlertData__.content': options.content,
    });

    //如果自定义选项存在 把自定义选项合并到构造函数里（自定义的方法 属性）
    if(options){
      Object.assign(this,options);
    }
    

  

  };

  //构造函数里的方法
  lwhAlert.prototype.hide = function () {
    var currentPage = this.currentPage;
    currentPage.setData({
      '__lwhAlertData__.showAlert': false
    });
  };



  return new lwhAlert();
}