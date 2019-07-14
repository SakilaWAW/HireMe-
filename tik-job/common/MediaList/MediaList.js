Component({
  properties: {
    data: {
      type: Array,
      value: [
        {title: '测试标题1', author: '测试用户1', date: '测试日期1', cover: ''  }
      ]
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})
