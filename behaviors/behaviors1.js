
//会和组件里的属性合并 如果属性一样 优先级低于组件里定义的属性, 生命周期不会被覆盖会和组件里的生命周期依次执行

module.exports = Behavior({
  behaviors: [],
  properties: {
    fuck:{
      type:'String',
      value:''
    }
  },
  data: {
    shit:'shit',
    behaviorList:[]
  },
  attached: function () { 

    console.log('我是behaviors里的attached');
    this.setData({
      behaviorList: ['haha', 'hehe']
    });

  },
  methods: {
    //myBehaviorMethod: function () { }
  }
})