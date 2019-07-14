
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    OPTION:[
      "A",
      "B",
      "C",
      "D"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var aim = options.kind
    console.log(aim)
    wx.setNavigationBarTitle({
      title: aim,
    })
    this.setData({
      questions: require("../../mock/"+aim+".js")
    })
  },
  lastQuestion: function () {
    var that = this
    this.setData({
      index: that.data.index - 1
    })
    this.setData({
      currentQuestion: that.data.questions[that.data.index]
    })
  },
  nextQuestion:function(){
    var that=this
    this.setData({
      index: that.data.index+1
    })
    this.setData({
      currentQuestion: that.data.questions[that.data.index]
    })
  },
  select: function (option) {
    var that = this
    if(option.currentTarget.dataset.index==that.data.currentQuestion.answer){
      wx.showToast({
        title: '回答正确',
        icon: 'success',
      })
    }
    else{
      wx.showToast({
        title: '回答错误',
        icon: 'none',
      })
    }
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
    var that = this
    this.setData({
      currentQuestion: that.data.questions[that.data.index]
    })
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