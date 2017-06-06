/**
 * 控制器
 */
angular.module('starter.controllers', [])

/**
 * 主页控制器
 */
  .controller('homepageCtrl', function ($scope, $rootScope,$ionicModal) {

    //图标列表
    $scope.icons = [
      "ion-ionic",
      "ion-arrow-up-a",
      "ion-arrow-right-a",
      "ion-arrow-down-a",
      "ion-arrow-left-a",
      "ion-arrow-up-b",
      "ion-arrow-right-b",
      "ion-arrow-down-b",
      "ion-arrow-left-b",
      "ion-arrow-up-c",
      "ion-arrow-right-c",
      "ion-arrow-down-c",
      "ion-arrow-left-c",
      "ion-arrow-return-right",
      "ion-arrow-return-left",
      "ion-arrow-swap",
      "ion-arrow-shrink",
      "ion-arrow-expand",
      "ion-arrow-move",
      "ion-arrow-resize",
      "ion-chevron-up",
      "ion-chevron-right",
      "ion-chevron-down",
      "ion-chevron-left",
      "ion-navicon-round",
      "ion-navicon",
      "ion-drag",
      "ion-log-in",
      "ion-log-out",
      "ion-checkmark-round",
      "ion-checkmark",
      "ion-checkmark-circled",
      "ion-close-round",
      "ion-close",
      "ion-close-circled",
      "ion-plus-round",
      "ion-plus",
      "ion-plus-circled",
      "ion-minus-round",
      "ion-minus",
      "ion-minus-circled",
      "ion-information",
      "ion-informaticon ion-circled",
      "ion-help",
      "ion-help-circled",
      "ion-backspace-outline",
      "ion-backspace",
      "ion-help-buoy",
      "ion-asterisk",
      "ion-alert",
      "ion-alert-circled",
      "ion-refresh",
      "ion-loop",
      "ion-shuffle",
      "ion-home",
      "ion-search",
      "ion-flag",
      "ion-star",
      "ion-heart",
      "ion-heart-broken",
      "ion-gear-a",
      "ion-gear-b",
      "ion-toggle-filled",
      "ion-toggle",
      "ion-settings",
      "ion-wrench",
      "ion-hammer",
      "ion-edit",
      "ion-trash-a",
      "ion-trash-b",
      "ion-document",
      "ion-document-text",
      "ion-clipboard",
      "ion-scissors",
      "ion-funnel",
      "ion-bookmark",
      "ion-email",
      "ion-email-unread",
      "ion-folder",
      "ion-filing",
      "ion-archive",
      "ion-reply",
      "ion-reply-all",
      "ion-forward",
      "ion-share",
      "ion-paper-airplane",
      "ion-link",
      "ion-paperclip",
      "ion-compose",
      "ion-briefcase",
      "ion-medkit",
      "ion-at",
      "ion-pound",
      "ion-quote",
      "ion-cloud",
      "ion-upload",
      "ion-more",
      "ion-grid",
      "ion-calendar",
      "ion-clock",
      "ion-compass",
      "ion-pinpoint",
      "ion-pin",
      "ion-navigate",
      "ion-location",
      "ion-map",
      "ion-lock-combination",
      "ion-locked",
      "ion-unlocked",
      "ion-key",
      "ion-arrow-graph-up-right",
      "ion-arrow-graph-down-right",
      "ion-arrow-graph-up-left",
      "ion-arrow-graph-down-left",
      "ion-stats-bars",
      "ion-connecticon ion-bars",
      "ion-pie-graph",
      "ion-chatbubble",
      "ion-chatbubble-working",
      "ion-chatbubbles",
      "ion-chatbox",
      "ion-chatbox-working",
      "ion-chatboxes",
      "ion-person",
      "ion-person-add",
      "ion-person-stalker",
      "ion-woman",
      "ion-man",
      "ion-female",
      "ion-male",
      "ion-transgender",
      "ion-fork",
      "ion-knife",
      "ion-spoon",
      "ion-soup-can-outline",
      "ion-soup-can",
      "ion-beer",
      "ion-wineglass",
      "ion-coffee",
      "ion-icecream",
      "ion-pizza",
      "ion-power",
      "ion-mouse",
      "ion-battery-full",
      "ion-battery-half",
      "ion-battery-low",
      "ion-battery-empty",
      "ion-battery-charging",
      "ion-wifi",
      "ion-bluetooth",
      "ion-calculator",
      "ion-camera",
      "ion-eye",
      "ion-eye-disabled",
      "ion-flash",
      "ion-flash-off",
      "ion-qr-scanner",
      "ion-image",
      "ion-images",
      "ion-wand",
      "ion-contrast",
      "ion-aperture",
      "ion-crop",
      "ion-easel",
      "ion-paintbrush",
      "ion-paintbucket",
      "ion-monitor",
      "ion-laptop",
      "ion-ipad",
      "ion-iphone",
      "ion-ipod",
      "ion-printer",
      "ion-usb",
      "ion-outlet",
      "ion-bug",
      "ion-code",
      "ion-code-working",
      "ion-code-download",
      "ion-fork-repo",
      "ion-network",
      "ion-pull-request",
      "ion-merge",
      "ion-xbox",
      "ion-playstation",
      "ion-steam",
      "ion-closed-captioning",
      "ion-videocamera",
      "ion-film-marker",
      "ion-disc",
      "ion-headphone",
      "ion-music-note",
      "ion-radio-waves",
      "ion-speakerphone",
      "ion-mic-a",
      "ion-mic-b",
      "ion-mic-c",
      "ion-volume-high",
      "ion-volume-medium",
      "ion-volume-low",
      "ion-volume-mute",
      "ion-levels",
      "ion-play",
      "ion-pause",
      "ion-stop",
      "ion-record",
      "ion-skip-forward",
      "ion-skip-backward",
      "ion-eject",
      "ion-bag",
      "ion-card",
      "ion-cash",
      "ion-pricetag",
      "ion-pricetags",
      "ion-thumbsup",
      "ion-thumbsdown",
      "ion-happy-outline",
      "ion-happy",
      "ion-sad-outline",
      "ion-sad",
      "ion-bowtie",
      "ion-tshirt-outline",
      "ion-tshirt",
      "ion-trophy",
      "ion-podium",
      "ion-ribbon-a",
      "ion-ribbon-b",
      "ion-university",
      "ion-magnet",
      "ion-beaker",
      "ion-erlenmeyer-flask",
      "ion-egg",
      "ion-earth",
      "ion-planet",
      "ion-lightbulb",
      "ion-cube",
      "ion-leaf",
      "ion-waterdrop",
      "ion-flame",
      "ion-fireball",
      "ion-bonfire",
      "ion-umbrella",
      "ion-nuclear",
      "ion-no-smoking",
      "ion-thermometer",
      "ion-speedometer",
      "ion-model-s",
      "ion-plane",
      "ion-jet",
      "ion-load-a",
      "ion-load-b",
      "ion-load-c",
      "ion-load-d",
      "ion-ios-ionic-outline",
      "ion-ios-arrow-back",
      "ion-ios-arrow-forward",
      "ion-ios-arrow-up",
      "ion-ios-arrow-right",
      "ion-ios-arrow-down",
      "ion-ios-arrow-left",
      "ion-ios-arrow-thin-up",
      "ion-ios-arrow-thin-right",
      "ion-ios-arrow-thin-down",
      "ion-ios-arrow-thin-left",
      "ion-ios-circle-filled",
      "ion-ios-circle-outline",
      "ion-ios-checkmark-empty",
      "ion-ios-checkmark-outline",
      "ion-ios-checkmark",
      "ion-ios-plus-empty",
      "ion-ios-plus-outline",
      "ion-ios-plus",
      "ion-ios-close-empty",
      "ion-ios-close-outline",
      "ion-ios-close",
      "ion-ios-minus-empty",
      "ion-ios-minus-outline",
      "ion-ios-minus",
      "ion-ios-informaticon ion-empty",
      "ion-ios-informaticon ion-outline",
      "ion-ios-information",
      "ion-ios-help-empty",
      "ion-ios-help-outline",
      "ion-ios-help",
      "ion-ios-search",
      "ion-ios-search-strong",
      "ion-ios-star",
      "ion-ios-star-half",
      "ion-ios-star-outline",
      "ion-ios-heart",
      "ion-ios-heart-outline",
      "ion-ios-more",
      "ion-ios-more-outline",
      "ion-ios-home",
      "ion-ios-home-outline",
      "ion-ios-cloud",
      "ion-ios-cloud-outline",
      "ion-ios-cloud-upload",
      "ion-ios-cloud-upload-outline",
      "ion-ios-cloud-download",
      "ion-ios-cloud-download-outline",
      "ion-ios-upload",
      "ion-ios-upload-outline",
      "ion-ios-download",
      "ion-ios-download-outline",
      "ion-ios-refresh",
      "ion-ios-refresh-outline",
      "ion-ios-refresh-empty",
      "ion-ios-reload",
      "ion-ios-loop-strong",
      "ion-ios-loop",
      "ion-ios-bookmarks",
      "ion-ios-bookmarks-outline",
      "ion-ios-book",
      "ion-ios-book-outline",
      "ion-ios-flag",
      "ion-ios-flag-outline",
      "ion-ios-glasses",
      "ion-ios-glasses-outline",
      "ion-ios-browsers",
      "ion-ios-browsers-outline",
      "ion-ios-at",
      "ion-ios-at-outline",
      "ion-ios-pricetag",
      "ion-ios-pricetag-outline",
      "ion-ios-pricetags",
      "ion-ios-pricetags-outline",
      "ion-ios-cart",
      "ion-ios-cart-outline",
      "ion-ios-chatboxes",
      "ion-ios-chatboxes-outline",
      "ion-ios-chatbubble",
      "ion-ios-chatbubble-outline",
      "ion-ios-cog",
      "ion-ios-cog-outline",
      "ion-ios-gear",
      "ion-ios-gear-outline",
      "ion-ios-settings",
      "ion-ios-settings-strong",
      "ion-ios-toggle",
      "ion-ios-toggle-outline",
      "ion-ios-analytics",
      "ion-ios-analytics-outline",
      "ion-ios-pie",
      "ion-ios-pie-outline",
      "ion-ios-pulse",
      "ion-ios-pulse-strong",
      "ion-ios-filing",
      "ion-ios-filing-outline",
      "ion-ios-box",
      "ion-ios-box-outline",
      "ion-ios-compose",
      "ion-ios-compose-outline",
      "ion-ios-trash",
      "ion-ios-trash-outline",
      "ion-ios-copy",
      "ion-ios-copy-outline",
      "ion-ios-email",
      "ion-ios-email-outline",
      "ion-ios-undo",
      "ion-ios-undo-outline",
      "ion-ios-redo",
      "ion-ios-redo-outline",
      "ion-ios-paperplane",
      "ion-ios-paperplane-outline",
      "ion-ios-folder",
      "ion-ios-folder-outline",
      "ion-ios-paper",
      "ion-ios-paper-outline",
      "ion-ios-list",
      "ion-ios-list-outline",
      "ion-ios-world",
      "ion-ios-world-outline",
      "ion-ios-alarm",
      "ion-ios-alarm-outline",
      "ion-ios-speedometer",
      "ion-ios-speedometer-outline",
      "ion-ios-stopwatch",
      "ion-ios-stopwatch-outline",
      "ion-ios-timer",
      "ion-ios-timer-outline",
      "ion-ios-clock",
      "ion-ios-clock-outline",
      "ion-ios-time",
      "ion-ios-time-outline",
      "ion-ios-calendar",
      "ion-ios-calendar-outline",
      "ion-ios-photos",
      "ion-ios-photos-outline",
      "ion-ios-albums",
      "ion-ios-albums-outline",
      "ion-ios-camera",
      "ion-ios-camera-outline",
      "ion-ios-reverse-camera",
      "ion-ios-reverse-camera-outline",
      "ion-ios-eye",
      "ion-ios-eye-outline",
      "ion-ios-bolt",
      "ion-ios-bolt-outline",
      "ion-ios-color-wand",
      "ion-ios-color-wand-outline",
      "ion-ios-color-filter",
      "ion-ios-color-filter-outline",
      "ion-ios-grid-view",
      "ion-ios-grid-view-outline",
      "ion-ios-crop-strong",
      "ion-ios-crop",
      "ion-ios-barcode",
      "ion-ios-barcode-outline",
      "ion-ios-briefcase",
      "ion-ios-briefcase-outline",
      "ion-ios-medkit",
      "ion-ios-medkit-outline",
      "ion-ios-medical",
      "ion-ios-medical-outline",
      "ion-ios-infinite",
      "ion-ios-infinite-outline",
      "ion-ios-calculator",
      "ion-ios-calculator-outline",
      "ion-ios-keypad",
      "ion-ios-keypad-outline",
      "ion-ios-telephone",
      "ion-ios-telephone-outline",
      "ion-ios-drag",
      "ion-ios-location",
      "ion-ios-locaticon ion-outline",
      "ion-ios-navigate",
      "ion-ios-navigate-outline",
      "ion-ios-locked",
      "ion-ios-locked-outline",
      "ion-ios-unlocked",
      "ion-ios-unlocked-outline",
      "ion-ios-monitor",
      "ion-ios-monitor-outline",
      "ion-ios-printer",
      "ion-ios-printer-outline",
      "ion-ios-game-controller-a",
      "ion-ios-game-controller-a-outline",
      "ion-ios-game-controller-b",
      "ion-ios-game-controller-b-outline",
      "ion-ios-americanfootball",
      "ion-ios-americanfootball-outline",
      "ion-ios-baseball",
      "ion-ios-baseball-outline",
      "ion-ios-basketball",
      "ion-ios-basketball-outlinegt;",
      "ion-ios-tennisball",
      "ion-ios-tennisball-outline",
      "ion-ios-football",
      "ion-ios-football-outline",
      "ion-ios-body",
      "ion-ios-body-outline",
      "ion-ios-person",
      "ion-ios-person-outline",
      "ion-ios-personadd",
      "ion-ios-personadd-outline",
      "ion-ios-people",
      "ion-ios-people-outline",
      "ion-ios-musical-notes",
      "ion-ios-musical-note",
      "ion-ios-bell",
      "ion-ios-bell-outline",
      "ion-ios-mic",
      "ion-ios-mic-outline",
      "ion-ios-mic-off",
      "ion-ios-volume-high",
      "ion-ios-volume-low",
      "ion-ios-play",
      "ion-ios-play-outline",
      "ion-ios-pause",
      "ion-ios-pause-outline",
      "ion-ios-recording",
      "ion-ios-recording-outline",
      "ion-ios-fastforward",
      "ion-ios-fastforward-outline",
      "ion-ios-rewind",
      "ion-ios-rewind-outline",
      "ion-ios-skipbackward",
      "ion-ios-skipbackward-outline",
      "ion-ios-skipforward",
      "ion-ios-skipforward-outline",
      "ion-ios-shuffle-strong",
      "ion-ios-shuffle",
      "ion-ios-videocam",
      "ion-ios-videocam-outline",
      "ion-ios-film",
      "ion-ios-film-outline",
      "ion-ios-flask",
      "ion-ios-flask-outline",
      "ion-ios-lightbulb",
      "ion-ios-lightbulb-outline",
      "ion-ios-wineglass",
      "ion-ios-wineglass-outline",
      "ion-ios-pint",
      "ion-ios-pint-outline",
      "ion-ios-nutrition",
      "ion-ios-nutriticon ion-outline",
      "ion-ios-flower",
      "ion-ios-flower-outline",
      "ion-ios-rose",
      "ion-ios-rose-outline",
      "ion-ios-paw",
      "ion-ios-paw-outline",
      "ion-ios-flame",
      "ion-ios-flame-outline",
      "ion-ios-sunny",
      "ion-ios-sunny-outline",
      "ion-ios-partlysunny",
      "ion-ios-partlysunny-outline",
      "ion-ios-cloudy",
      "ion-ios-cloudy-outline",
      "ion-ios-rainy",
      "ion-ios-rainy-outline",
      "ion-ios-thunderstorm",
      "ion-ios-thunderstorm-outline",
      "ion-ios-snowy",
      "ion-ios-moon",
      "ion-ios-moon-outline",
      "ion-ios-cloudy-night",
      "ion-ios-cloudy-night-outline",
      "ion-android-arrow-up",
      "ion-android-arrow-forward",
      "ion-android-arrow-down",
      "ion-android-arrow-back",
      "ion-android-arrow-dropup",
      "ion-android-arrow-dropup-circle",
      "ion-android-arrow-dropright",
      "ion-android-arrow-dropright-circle",
      "ion-android-arrow-dropdown",
      "ion-android-arrow-dropdown-circle",
      "ion-android-arrow-dropleft",
      "ion-android-arrow-dropleft-circle",
      "ion-android-add",
      "ion-android-add-circle",
      "ion-android-remove",
      "ion-android-remove-circle",
      "ion-android-close",
      "ion-android-cancel",
      "ion-android-radio-button-off",
      "ion-android-radio-button-on",
      "ion-android-checkmark-circle",
      "ion-android-checkbox-outline-blank",
      "ion-android-checkbox-outline",
      "ion-android-checkbox-blank",
      "ion-android-checkbox",
      "ion-android-done",
      "ion-android-done-all",
      "ion-android-menu",
      "ion-android-more-horizontal",
      "ion-android-more-vertical",
      "ion-android-refresh",
      "ion-android-sync",
      "ion-android-wifi",
      "ion-android-call",
      "ion-android-apps",
      "ion-android-settings",
      "ion-android-options",
      "ion-android-funnel",
      "ion-android-search",
      "ion-android-home",
      "ion-android-cloud-outline",
      "ion-android-cloud",
      "ion-android-download",
      "ion-android-upload",
      "ion-android-cloud-done",
      "ion-android-cloud-circle",
      "ion-android-favorite-outline",
      "ion-android-favorite",
      "ion-android-star-outline",
      "ion-android-star-half",
      "ion-android-star",
      "ion-android-calendar",
      "ion-android-alarm-clock",
      "ion-android-time",
      "ion-android-stopwatch",
      "ion-android-watch",
      "ion-android-locate",
      "ion-android-navigate",
      "ion-android-pin",
      "ion-android-compass",
      "ion-android-map",
      "ion-android-walk",
      "ion-android-bicycle",
      "ion-android-car",
      "ion-android-bus",
      "ion-android-subway",
      "ion-android-train",
      "ion-android-boat",
      "ion-android-plane",
      "ion-android-restaurant",
      "ion-android-bar",
      "ion-android-cart",
      "ion-android-camera",
      "ion-android-image",
      "ion-android-film",
      "ion-android-color-palette",
      "ion-android-create",
      "ion-android-mail",
      "ion-android-drafts",
      "ion-android-send",
      "ion-android-archive",
      "ion-android-delete",
      "ion-android-attach",
      "ion-android-share",
      "ion-android-share-alt",
      "ion-android-bookmark",
      "ion-android-document",
      "ion-android-clipboard",
      "ion-android-list",
      "ion-android-folder-open",
      "ion-android-folder",
      "ion-android-print",
      "ion-android-open",
      "ion-android-exit",
      "ion-android-contract",
      "ion-android-expand",
      "ion-android-globe",
      "ion-android-chat",
      "ion-android-textsms",
      "ion-android-hangout",
      "ion-android-happy",
      "ion-android-sad",
      "ion-android-person",
      "ion-android-people",
      "ion-android-person-add",
      "ion-android-contact",
      "ion-android-contacts",
      "ion-android-playstore",
      "ion-android-lock",
      "ion-android-unlock",
      "ion-android-microphone",
      "ion-android-microphone-off",
      "ion-android-notifications-none",
      "ion-android-notifications",
      "ion-android-notifications-off",
      "ion-android-volume-mute",
      "ion-android-volume-down",
      "ion-android-volume-up",
      "ion-android-volume-off",
      "ion-android-hand",
      "ion-android-desktop",
      "ion-android-laptop",
      "ion-android-phone-portrait",
      "ion-android-phone-landscape",
      "ion-android-bulb",
      "ion-android-sunny",
      "ion-android-alert",
      "ion-android-warnin"
    ];

    //计时的项目，status 0计时中 1暂停 2停止
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
    $scope.newTag = function (nitem) {
      $scope.tags.push({'name': nitem.name, icon:  nitem.icon});
      nitem={};
      nitem.icon="ion-ionic";
      $scope.modal.hide();
    };

    //计时模块
    $scope.doHour = function (id) {
      if ($rootScope.items[id].status != 0)return;
      var nowDate = new Date();
      var date = parseInt((nowDate - $rootScope.items[id].startTime) / 1000);
      $rootScope.items[id].hours = parseInt(date / 3600);
      $rootScope.items[id].second = date % 60;
      $rootScope.items[id].minutes = parseInt(date / 60 - $rootScope.items[id].hours * 60);
      $scope.$apply();
    };

    //停止项目
    $scope.stopItem = function (id) {
      $rootScope.items[id].status = 2;
    }

    //添加项目
    $scope.newItem = function (name, icon) {
      $rootScope.items.push({
        'id': $rootScope.items.length,
        'startTime': new Date(),
        'name': name,
        'icon': icon,
        'status': 0,
        'hours': 0,
        'minutes': 0,
        'second': 0
      });
      var itemId = $rootScope.items.length - 1;
      window.setInterval(function () {
        $scope.doHour(itemId)
      }, 1000);
    };

    //模态框
    $ionicModal.fromTemplateUrl('templates/homepage-new.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

  })

  /**
   * 个人目标控制器
   */
  .controller('goalCtrl', function ($scope, $ionicModal) {
    $scope.contacts = [];

    //模态框
    $ionicModal.fromTemplateUrl('templates/model.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    //创建新目标
    $scope.createContact = function (u) {
      $scope.contacts.push({'name': u.firstName, 'time': u.lastName});
      u.firstName = null;
      u.lastName = null;
      $scope.modal.hide();
    };


  })

  /**
   * 统计控制器
   */
  .controller('staTimeCtrl', function ($scope, $rootScope) {

    //绘制饼图
    $scope.drawCircle = function (canvasId, data_arr, color_arr, text_arr) {
      var c = document.getElementById(canvasId);
      var ctx = c.getContext("2d");
      c.height = c.height;

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
        var percent = text_arr[i] + "：" + 100 * data_arr[i];
        percent = percent.toString();
        percent = percent.substring(0, 8)
        ctx.fillText(percent + "%", textX - 40, textY + 20 * i);
      }
    };

    //开始绘制
    $scope.init = function () {
      //绘制饼图
      //比例数据和颜色
      var totalTime = 0;
      var sum = new Array();
      for (var i = 0; i <= $rootScope.items.length - 1; i++) {
        sum[i] = $rootScope.items[i].hours * 3600 + $rootScope.items[i].minutes * 60 + $rootScope.items[i].second;
        totalTime += sum[i];
      }
      var data_arr = new Array();
      var text_arr = new Array();
      var color_arr = new Array();
      $scope.data = new Array();
      for (var i = 0; i < $rootScope.items.length; i++) {
        var dateArr = new Number(sum[i] / totalTime)
        data_arr[i] = dateArr.toFixed(3);
        text_arr[i] = $rootScope.items[i].name;
        color_arr[i] = '#' + (Math.random() * 0xffffff << 0).toString(16);
        $scope.data[i] = {
          'hours': $rootScope.items[i].hours,
          "minutes": $rootScope.items[i].minutes,
          "second": $rootScope.items[i].second,
          'name': text_arr[i]
        };
      }
      $scope.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
    };

    $scope.nitem={icon:"ion-ionic"};
  })

  /**
   * 个人中心控制器
   */
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

  /**
   * 登陆控制器
   */
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
