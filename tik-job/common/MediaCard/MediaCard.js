Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: '测试标题在这里',
    },
    cover: {
      type: String,
      value: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    },
    author: {
      type: String,
      value: '测试用户A'
    },
    date: {
      type: String,
      value: '2016-01-21'
    },
    width: {
      type: Number,
      value: 150
    },
    height: {
      type: Number,
      value: 100
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
