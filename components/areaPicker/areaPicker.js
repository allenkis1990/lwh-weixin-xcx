// components/areaPicker/areaPicker.js
var app=getApp();
var utils=require('../../utils/common.js');



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    

    areaPath:{
      type: Object,
      value: {},
    }
  },

  /**
   * 组件的初始数据 
   */
  data: {
    rangeArr: [],
    valueArr: []
  },

  

  attached: function (options) {
   

    

  },

  ready:function(){
    var that=this;
    this.arr = app.getAreaInfo();
    //console.log(this.arr);
    //this.rangeArr = [];
    console.log(this.data.areaPath);
    //如果有选过地区显示  
    if (this.data.areaPath.area){
      var shengId = this.data.areaPath.sheng.id,
          cityId = this.data.areaPath.city.id,
          areaId = this.data.areaPath.area.id;




      var shengIndex, cityIndex, areaIndex;
      this.arr.forEach(function (item, index) {
        if (item.id === shengId) {
          shengIndex = index;

          that.arr[index].cityArr.forEach(function (subItem, subIndex) {
            if (subItem.id === cityId) {
              cityIndex = subIndex;

              that.arr[index].cityArr[subIndex].areaArr.forEach(function (grandItem, grandIndex) {
                if (grandItem.id === areaId) {
                  areaIndex = grandIndex;
                }
              });


            }
          });


        }
      });


      this.data.valueArr = [shengIndex, cityIndex, areaIndex];

  

      this.data.rangeArr[0] = this.arr;
      this.data.rangeArr[1] = this.arr[shengIndex].cityArr;
      this.data.rangeArr[2] = this.arr[shengIndex].cityArr[cityIndex].areaArr;



    }else{
      //没选过的话提示请选择地区并且picker内显示的是默认的第一项
      this.data.valueArr = [0, 0, 0];
      this.data.rangeArr[0] = this.arr;
      this.data.rangeArr[1] = this.arr[0].cityArr;
      this.data.rangeArr[2] = this.arr[0].cityArr[0].areaArr;
    }


    this.setData({
      valueArr: this.data.valueArr
    });
    this.setData({
      rangeArr: this.data.rangeArr
    });
    this.copyValueArr = utils.deepCopy(this.data.valueArr);
    this.copyAreaArr = utils.deepCopy(this.data.rangeArr[2]);

    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    bindMultiPickerChange: function (e) {
      console.log(this.data.valueArr);
      this.setData({
        valueArr:e.detail.value
      });
      

      var rangeArr = utils.deepCopy(this.data.rangeArr);
      
      this.setData({
        rangeArr: rangeArr
      });
      
      
      this.copyValueArr = utils.deepCopy(e.detail.value);
      this.copyAreaArr = utils.deepCopy(this.data.rangeArr[2]);
      var pages = getCurrentPages(), page = pages[pages.length - 1];
      page.setData({
        areaPath:{
          sheng: { name: rangeArr[0][e.detail.value[0]].name, id: rangeArr[0][e.detail.value[0]].id},
          city: { name: rangeArr[1][e.detail.value[1]].name, id: rangeArr[1][e.detail.value[1]].id },
          area: { name: rangeArr[2][e.detail.value[2]].name, id: rangeArr[2][e.detail.value[2]].id }
        }
      });

      
      //page.areaPath = this.data.areaPath;
      console.log(this.data.areaPath);
      
      
    },
    bindMultiPickerColumnChange: function (e) {
      console.log(e);
      var column=e.detail.column;
      var value = e.detail.value;
      //变动市 区Arr跟着变
      if (column===1){
        this.data.rangeArr[2] = this.arr[0].cityArr[value].areaArr;

        console.log(this.data.rangeArr);
        this.setData({
          rangeArr: this.data.rangeArr
        });


        this.data.valueArr[2] = 0;
        this.data.valueArr[1] = e.detail.value;
        this.setData({
          valueArr: this.data.valueArr
        });
      }else{
        this.data.valueArr[2] = e.detail.value;
        this.setData({
          valueArr: this.data.valueArr
        });
      }

      

    },
    cancel:function(e){
      
      this.data.valueArr = utils.deepCopy(this.copyValueArr);
      this.setData({
        valueArr: this.data.valueArr
      });

      

      this.data.rangeArr[2] = utils.deepCopy(this.copyAreaArr);

      this.setData({
        rangeArr: this.data.rangeArr
      });
    }
  }
})
