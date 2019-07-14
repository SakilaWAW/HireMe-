Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isActive: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleRecord: function (e) {
      this.triggerEvent('toggleRecord', {}, {});
    }
  }
})
