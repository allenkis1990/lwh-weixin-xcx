// pages/API/API.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        arr: [],
        currentId: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.setData({arr: [{name: 'allen', checked: true}, {name: 'tom', checked: false}]});
    },

    changeBol: function (e) {
        //console.log(e);
        var item = e.target.dataset.item;
        item.checked = !item.checked;

        var arr = this.data.arr;
        arr.forEach(function (eachItem) {

            if (eachItem.name === item.name) {
                eachItem.checked = item.checked;
            }
        });

        this.setData({
            arr: arr
        });

    },

    choseImg: function () {
        console.log(1);
        wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) {
            },
            'fail': function (res) {
            }
        })
    },


    previewImage: function () {
        wx.previewImage({
            urls: ["http://tmp/touristappid.o6zAJs5ti16LqwxzcZ0E-PTjLWoo.xwRIC8VRCw6M42545cbe50f17e71f88d9742679a0b0c.jpg", "http://img4.duitang.com/uploads/item/201502/10/20150210132231_EdQMS.jpeg"],
            success: function (data) {
                console.log(data);
            }
        });
    },

    getImageInfo: function () {
        wx.getImageInfo({
            src: "/images/course-img.jpg",
            success: function (res) {
                console.log(res)
            }
        });
    },


    //授权拒绝一次完就要清缓存才能再生效
    authorize:function(e){
        //console.log(e);
        //console.log(1);
        var authorizeType=e.currentTarget.dataset.authorize;
        wx.authorize({
            scope: 'scope.'+authorizeType,
            success() {

                console.log(666);
            }
        })
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