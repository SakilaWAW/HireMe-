var res=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind: [
      "UI Designer",
      "UX Designer",
      "Web Developer",
      "Product Manager"
    ],
    select:[0,0,0,0,0]
  },
  select: function (option) {
    var that=this
    var select = this.data.select
    if(select[option.currentTarget.id]==0){
      select[option.currentTarget.id] =1
    }
    else{
      select[option.currentTarget.id] = 0
    }
    this.setData({
      select: select
    })
  },
  submit:function(option){
    var that=this
    var res = this.data.select
    var list = []
    for(var i=0;i< res.length;i++){
      if (that.data.select[i]){
        list.push(that.data.kind[i])
      }
    }
    console.log(list)
    wx.switchTab({
      url: '../JobList/JobList',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarColor({
    //   frontColor: '#fff',
    //   backgroundColor: '#4353fe',
    // })
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