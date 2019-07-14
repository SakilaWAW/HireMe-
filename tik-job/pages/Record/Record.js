Page({
  /**
   * 页面的初始数据
   */
  data: {
    isRecording: false,
    src: '',
    isExpand: false,
    second: 0,
    displaySave: false,
    displaySuccess: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext();
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

  },

  /**
   * 点击开始录像回调
   */
  startRecordVideo: function() {
    this.setData({
      isRecording: true
    });
    this.timer = setInterval(()=> {
      this.setData({
        second: this.data.second + 1
      })
    }, 1000);
    this.ctx.startRecord({
      success: () => {
        console.log('startRecord');
      }
    });
  },
  stopRecordVideo: function() {
    this.setData({
      isRecording: false
    });
    clearTimeout(this.timer);
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempVideoPath
        })
      }
    });

    this.setData({
      displaySave: true
    })
  },
  toggleRecord: function() {
    if(this.data.isRecording) {
      this.stopRecordVideo();
    }else {
      this.startRecordVideo();
    }
  },
  saveVideo: function() {
    this.setData({
      displaySave: false,
      displaySuccess: true
    });
  },
  jumpToNextPage: function() {
    wx.navigateTo({
      url: '../Analysis/Analysis'
    })
  }
})