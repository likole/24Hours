angular.module('starter.controllers', [])

  .controller('homepageCtrl', function ($scope, $rootScope) {

    //计时的项目，status 0计时中 1暂停
    $rootScope.items = [];

    //标签列表
    $scope.tags = [
      {'name': '运动', icon: 'ion-ios-basketball'},
      {'name': '学习', icon: 'ion-edit'},
      {'name': '吃饭', icon: 'ion-android-restaurant'},
      {'name': '睡觉', icon: 'ion-ios-alarm'},
      {'name': '上网', icon: 'ion-mouse'},
      {'name': '音乐', icon: 'ion-headphone'},
      {'name': '交通', icon: 'ion-ios-speedometer'},
      {'name': '工作', icon: 'ion-ios-briefcase'},
      {'name': '散步', icon: 'ion-android-walk'},
      {'name': '电影', icon: 'ion-android-film'},
      {'name': '电视', icon: 'ion-laptop'},
      {'name': '阅读', icon: 'ion-ios-book'},
      {'name': '购物', icon: 'ion-ios-cart'},
      {'name': '实验', icon: 'ion-ios-flask'},
      {'name': '骑行', icon: 'ion-android-bicycle'},
      {'name': 'K歌', icon: 'ion-ios-mic'},
    ];

    //新建标签
    $scope.newTag = function () {
      var b = prompt("请输入行为名称");
      $scope.tags.push({'name': b, icon: 'ion-close-round'});
    };

    //计时模块
    $scope.doHour = function(id) {
      var nowDate = new Date();
      var date = parseInt((nowDate - $rootScope.items[id].startTime) / 1000);
      $rootScope.items[id].hours = parseInt(date / 3600);
      $rootScope.items[id].second = date % 60;
      $rootScope.items[id].minutes = parseInt(date / 60 -  $rootScope.items[id].hours * 60);
      $scope.$apply();
    };

    //添加项目
    $scope.newItem=function (name,icon) {
      $rootScope.items.push({
        'startTime': new Date(),
        'name':name,
        'icon': icon,
        'status': 0,
        'hours': 0,
        'minutes': 0,
        'second': 0
      });
      var itemId=$rootScope.items.length-1;
      window.setInterval(function(){
        $scope.doHour(itemId)
      }, 1000);
    }

  })

  .controller('goalCtrl', function ($scope, $ionicModal) {
    $scope.contacts = [];

    $ionicModal.fromTemplateUrl('templates/model.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.createContact = function (u) {
      $scope.contacts.push({'name': u.firstName, 'time': u.lastName});
      u.firstName = null;
      u.lastName = null;
      $scope.modal.hide();
    };

  })

  .controller('staTimeCtrl', function ($scope,$rootScope) {
  
  	
  	$scope.drawCircle=function(canvasId, data_arr, color_arr, text_arr) {
  		var c = document.getElementById(canvasId);
  		var ctx = c.getContext("2d");

  		var radius = c.height / 2 - 40; //半径
  		var ox = radius + 20, oy = radius + 20; //圆心

  		var width = 30, height = 10; //图例宽和高
  		var posX = ox * 2 + 20, posY = 30;   //
  		var textX = posX + width + 5, textY = posY + 10;

  		var startAngle = 0; //起始弧度
  		var endAngle = 0;   //结束弧度
  		for (var i = 0; i < data_arr.length; i++) {
    		//绘制饼图
    		endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度
    		ctx.fillStyle = color_arr[i];
    		ctx.beginPath();
    		ctx.moveTo(ox, oy); //移动到到圆心
    		ctx.arc(ox, oy, radius, startAngle, endAngle, false);
    		ctx.closePath();
    		ctx.fill();
    		startAngle = endAngle; //设置起始弧度

    		//绘制比例图及文字
    		ctx.fillStyle = color_arr[i];
    		ctx.fillRect(posX - 20, posY + 20 * i, width - 20, height);
    		ctx.moveTo(posX, posY + 20 * i);
    		ctx.font = '12px 微软雅黑';    //斜体 30像素 微软雅黑字体
    		ctx.fillStyle = color_arr[i]; //"#000000";
    		var percent = text_arr[i] + "：" + 100 * data_arr[i] + "%";
    		ctx.fillText(percent, textX - 40, textY + 20 * i);
  		}
	}

	$scope.init = function(){
 	//绘制饼图
  	//比例数据和颜色
//	var allDate = date2.getSeconds() + date4.getSeconds() + date6.getSeconds() - date1.getSeconds() - date3.getSeconds() - date5.getSeconds();
//	var a = (date2.getSeconds() - date1.getSeconds()) / allDate;
//	var b = (date4.getSeconds() - date3.getSeconds()) / allDate;
//	var c = (date6.getSeconds() - date5.getSeconds()) / allDate;
//	var sa = new Number(a);
//	sa = sa.toFixed(4);
//	var sb = new Number(b);
//	sb = sb.toFixed(4);
//	var sc = new Number(c);
//	sc = sc.toFixed(4);
  	var data_arr = [0.4, 0.3, 0.3];
  	var color_arr = ["#00FF21", "#FFAA00", "#00AABB"];
  	var text_arr = ["运动", "学习", "吃饭"];

  	$scope.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
	}
})

  .controller('selfInfoCtrl', function ($scope, $http) {

    $scope.user = {'name': '请先登录'};
    $scope.logind = 0;

    if (localStorage.getItem("user") != null) {
      $scope.logind = 1;
      $http.get("http://123.206.116.70:8080/hours/user_getInfo?token=fb58f7e1c206dc36849b6c045a98d8e7")
        .then(function (response) {
          if (response.data.status == 0) {
            $scope.user = response.data.data;
          } else {
            //status为非0时，操作失败,执行操作失败的逻辑
            //alert(response.data.message);
          }
        });
    }
  })
  .controller('loginCtrl', function ($scope) {

    scope:$scope;

    $scope.logining = function () {
      scope:$scope;
      var reg = new RegExp("\d{3}-\d{8}|\d{4}-\{7,8}");
      var temp;
      if (reg.test($scope.username) == 1) temp = "phone=" + $scope.username;
      else temp = "email" + $scope.username;
      $http.get("http://123.206.116.70:8080/hours/user_login?" + temp + $scope.password)
        .then(function (response) {
          if (response.data.status == 0) {
            alert(response);
            localStorage.setItem("user", response.data.token);
            //status为0时，操作成功，执行操作成功的逻辑
          } else {
            alert("用户名或密码错误");
            //status为非0时，操作失败,执行操作失败的逻辑
            //alert(response.data.message);
          }
        });
    }

  });


var n = 0;
var m = 0;
var h = 0;
var date1;
var date2;
var date3;
var date4;
var date5;
var date6;
function hours1() {
  if (n == 0) {
    n = 1;
    date1 = new Date();
    setTimeout(dhours1, 1000);
  } else {
    n = 0;
    date2 = new Date();
    item1 = document.getElementById('item1');
    var date = parseInt((date2 - date1) / 1000);
    var hour = parseInt(date / 3600);
    var second = date % 60;
    var minute = parseInt(date / 60 - hour * 60);
    item1.innerHTML = "运动用时：" + hour + ":" + minute + ":" + second;
  }
}
function dhour1() {
  var date = parseInt((date2 - date1) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  var hour1 = document.getElementById("hour1");
  hour1.innerHTML = "运动用时：" + hour + ":" + minute + ":" + second;
}


function dhours1() {
  var nowDate = new Date();
  var date = parseInt((nowDate - date1) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  item1.innerHTML = "运动用时：" + hour + ":" + minute + ":" + second;
  if (n == 1) {
    setTimeout(dhours1, 1000);
  }

}


function hours2() {
  if (m == 0) {
    m = 1;
    date3 = new Date();
    setTimeout(dhours2, 1000);
  } else {
    m = 0;
    date4 = new Date();
    item2 = document.getElementById('item2');
    var date = parseInt((date4 - date3) / 1000);
    var hour = parseInt(date / 3600);
    var second = date % 60;
    var minute = parseInt(date / 60 - hour * 60);
    item2.innerHTML = "学习用时：" + hour + ":" + minute + ":" + second;
  }
}

function dhour2() {
  var date = parseInt((date4 - date3) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  var hour2 = document.getElementById("hour2");
  hour2.innerHTML = "学习用时：" + hour + ":" + minute + ":" + second;
}

function dhours2() {
  var nowDate = new Date();
  var date = parseInt((nowDate - date3) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  item2.innerHTML = "学习用时：" + hour + ":" + minute + ":" + second;
  if (m == 1) {
    setTimeout(dhours2, 1000);
  }

}


function hours3() {
  if (h == 0) {
    h = 1;
    date5 = new Date();
    setTimeout(dhours3, 1000);
  } else {
    h = 0;
    date6 = new Date();
    item3 = document.getElementById('item3');
    var date = parseInt((date6 - date5) / 1000);
    var hour = parseInt(date / 3600);
    var second = date % 60;
    var minute = parseInt(date / 60 - hour * 60);
    item3.innerHTML = "吃饭用时：" + hour + ":" + minute + ":" + second;
  }
}


function dhour3() {
  var date = parseInt((date6 - date5) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  var hour3 = document.getElementById("hour3");
  hour3.innerHTML = "吃饭用时：" + hour + ":" + minute + ":" + second;
}

function dhours3() {
  var nowDate = new Date();
  var date = parseInt((nowDate - date5) / 1000);
  var hour = parseInt(date / 3600);
  var second = date % 60;
  var minute = parseInt(date / 60 - hour * 60);
  item3.innerHTML = "吃饭用时：" + hour + ":" + minute + ":" + second;
  if (h == 1) {
    setTimeout(dhours3, 1000);
  }
}


