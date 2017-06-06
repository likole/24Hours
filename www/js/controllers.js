angular.module('starter.controllers', [])

  /**
      主页控制器
   */
  .controller('homepageCtrl', function ($scope, $rootScope) {

    //图标列表
    $scope.icons=[
      "icon ion-ionic",
      "icon ion-arrow-up-a",
      "icon ion-arrow-right-a",
      "icon ion-arrow-down-a",
      "icon ion-arrow-left-a",
      "icon ion-arrow-up-b",
      "icon ion-arrow-right-b",
      "icon ion-arrow-down-b",
      "icon ion-arrow-left-b",
      "icon ion-arrow-up-c",
      "icon ion-arrow-right-c",
      "icon ion-arrow-down-c",
      "icon ion-arrow-left-c",
      "icon ion-arrow-return-right",
      "icon ion-arrow-return-left",
      "icon ion-arrow-swap",
      "icon ion-arrow-shrink",
      "icon ion-arrow-expand",
      "icon ion-arrow-move",
      "icon ion-arrow-resize",
      "icon ion-chevron-up",
      "icon ion-chevron-right",
      "icon ion-chevron-down",
      "icon ion-chevron-left",
      "icon ion-navicon-round",
      "icon ion-navicon",
      "icon ion-drag",
      "icon ion-log-in",
      "icon ion-log-out",
      "icon ion-checkmark-round",
      "icon ion-checkmark",
      "icon ion-checkmark-circled",
      "icon ion-close-round",
      "icon ion-close",
      "icon ion-close-circled",
      "icon ion-plus-round",
      "icon ion-plus",
      "icon ion-plus-circled",
      "icon ion-minus-round",
      "icon ion-minus",
      "icon ion-minus-circled",
      "icon ion-information",
      "icon ion-informaticon ion-circled",
      "icon ion-help",
      "icon ion-help-circled",
      "icon ion-backspace-outline",
      "icon ion-backspace",
      "icon ion-help-buoy",
      "icon ion-asterisk",
      "icon ion-alert",
      "icon ion-alert-circled",
      "icon ion-refresh",
      "icon ion-loop",
      "icon ion-shuffle",
      "icon ion-home",
      "icon ion-search",
      "icon ion-flag",
      "icon ion-star",
      "icon ion-heart",
      "icon ion-heart-broken",
      "icon ion-gear-a",
      "icon ion-gear-b",
      "icon ion-toggle-filled",
      "icon ion-toggle",
      "icon ion-settings",
      "icon ion-wrench",
      "icon ion-hammer",
      "icon ion-edit",
      "icon ion-trash-a",
      "icon ion-trash-b",
      "icon ion-document",
      "icon ion-document-text",
      "icon ion-clipboard",
      "icon ion-scissors",
      "icon ion-funnel",
      "icon ion-bookmark",
      "icon ion-email",
      "icon ion-email-unread",
      "icon ion-folder",
      "icon ion-filing",
      "icon ion-archive",
      "icon ion-reply",
      "icon ion-reply-all",
      "icon ion-forward",
      "icon ion-share",
      "icon ion-paper-airplane",
      "icon ion-link",
      "icon ion-paperclip",
      "icon ion-compose",
      "icon ion-briefcase",
      "icon ion-medkit",
      "icon ion-at",
      "icon ion-pound",
      "icon ion-quote",
      "icon ion-cloud",
      "icon ion-upload",
      "icon ion-more",
      "icon ion-grid",
      "icon ion-calendar",
      "icon ion-clock",
      "icon ion-compass",
      "icon ion-pinpoint",
      "icon ion-pin",
      "icon ion-navigate",
      "icon ion-location",
      "icon ion-map",
      "icon ion-lock-combination",
      "icon ion-locked",
      "icon ion-unlocked",
      "icon ion-key",
      "icon ion-arrow-graph-up-right",
      "icon ion-arrow-graph-down-right",
      "icon ion-arrow-graph-up-left",
      "icon ion-arrow-graph-down-left",
      "icon ion-stats-bars",
      "icon ion-connecticon ion-bars",
      "icon ion-pie-graph",
      "icon ion-chatbubble",
      "icon ion-chatbubble-working",
      "icon ion-chatbubbles",
      "icon ion-chatbox",
      "icon ion-chatbox-working",
      "icon ion-chatboxes",
      "icon ion-person",
      "icon ion-person-add",
      "icon ion-person-stalker",
      "icon ion-woman",
      "icon ion-man",
      "icon ion-female",
      "icon ion-male",
      "icon ion-transgender",
      "icon ion-fork",
      "icon ion-knife",
      "icon ion-spoon",
      "icon ion-soup-can-outline",
      "icon ion-soup-can",
      "icon ion-beer",
      "icon ion-wineglass",
      "icon ion-coffee",
      "icon ion-icecream",
      "icon ion-pizza",
      "icon ion-power",
      "icon ion-mouse",
      "icon ion-battery-full",
      "icon ion-battery-half",
      "icon ion-battery-low",
      "icon ion-battery-empty",
      "icon ion-battery-charging",
      "icon ion-wifi",
      "icon ion-bluetooth",
      "icon ion-calculator",
      "icon ion-camera",
      "icon ion-eye",
      "icon ion-eye-disabled",
      "icon ion-flash",
      "icon ion-flash-off",
      "icon ion-qr-scanner",
      "icon ion-image",
      "icon ion-images",
      "icon ion-wand",
      "icon ion-contrast",
      "icon ion-aperture",
      "icon ion-crop",
      "icon ion-easel",
      "icon ion-paintbrush",
      "icon ion-paintbucket",
      "icon ion-monitor",
      "icon ion-laptop",
      "icon ion-ipad",
      "icon ion-iphone",
      "icon ion-ipod",
      "icon ion-printer",
      "icon ion-usb",
      "icon ion-outlet",
      "icon ion-bug",
      "icon ion-code",
      "icon ion-code-working",
      "icon ion-code-download",
      "icon ion-fork-repo",
      "icon ion-network",
      "icon ion-pull-request",
      "icon ion-merge",
      "icon ion-xbox",
      "icon ion-playstation",
      "icon ion-steam",
      "icon ion-closed-captioning",
      "icon ion-videocamera",
      "icon ion-film-marker",
      "icon ion-disc",
      "icon ion-headphone",
      "icon ion-music-note",
      "icon ion-radio-waves",
      "icon ion-speakerphone",
      "icon ion-mic-a",
      "icon ion-mic-b",
      "icon ion-mic-c",
      "icon ion-volume-high",
      "icon ion-volume-medium",
      "icon ion-volume-low",
      "icon ion-volume-mute",
      "icon ion-levels",
      "icon ion-play",
      "icon ion-pause",
      "icon ion-stop",
      "icon ion-record",
      "icon ion-skip-forward",
      "icon ion-skip-backward",
      "icon ion-eject",
      "icon ion-bag",
      "icon ion-card",
      "icon ion-cash",
      "icon ion-pricetag",
      "icon ion-pricetags",
      "icon ion-thumbsup",
      "icon ion-thumbsdown",
      "icon ion-happy-outline",
      "icon ion-happy",
      "icon ion-sad-outline",
      "icon ion-sad",
      "icon ion-bowtie",
      "icon ion-tshirt-outline",
      "icon ion-tshirt",
      "icon ion-trophy",
      "icon ion-podium",
      "icon ion-ribbon-a",
      "icon ion-ribbon-b",
      "icon ion-university",
      "icon ion-magnet",
      "icon ion-beaker",
      "icon ion-erlenmeyer-flask",
      "icon ion-egg",
      "icon ion-earth",
      "icon ion-planet",
      "icon ion-lightbulb",
      "icon ion-cube",
      "icon ion-leaf",
      "icon ion-waterdrop",
      "icon ion-flame",
      "icon ion-fireball",
      "icon ion-bonfire",
      "icon ion-umbrella",
      "icon ion-nuclear",
      "icon ion-no-smoking",
      "icon ion-thermometer",
      "icon ion-speedometer",
      "icon ion-model-s",
      "icon ion-plane",
      "icon ion-jet",
      "icon ion-load-a",
      "icon ion-load-b",
      "icon ion-load-c",
      "icon ion-load-d",
      "icon ion-ios-ionic-outline",
      "icon ion-ios-arrow-back",
      "icon ion-ios-arrow-forward",
      "icon ion-ios-arrow-up",
      "icon ion-ios-arrow-right",
      "icon ion-ios-arrow-down",
      "icon ion-ios-arrow-left",
      "icon ion-ios-arrow-thin-up",
      "icon ion-ios-arrow-thin-right",
      "icon ion-ios-arrow-thin-down",
      "icon ion-ios-arrow-thin-left",
      "icon ion-ios-circle-filled",
      "icon ion-ios-circle-outline",
      "icon ion-ios-checkmark-empty",
      "icon ion-ios-checkmark-outline",
      "icon ion-ios-checkmark",
      "icon ion-ios-plus-empty",
      "icon ion-ios-plus-outline",
      "icon ion-ios-plus",
      "icon ion-ios-close-empty",
      "icon ion-ios-close-outline",
      "icon ion-ios-close",
      "icon ion-ios-minus-empty",
      "icon ion-ios-minus-outline",
      "icon ion-ios-minus",
      "icon ion-ios-informaticon ion-empty",
      "icon ion-ios-informaticon ion-outline",
      "icon ion-ios-information",
      "icon ion-ios-help-empty",
      "icon ion-ios-help-outline",
      "icon ion-ios-help",
      "icon ion-ios-search",
      "icon ion-ios-search-strong",
      "icon ion-ios-star",
      "icon ion-ios-star-half",
      "icon ion-ios-star-outline",
      "icon ion-ios-heart",
      "icon ion-ios-heart-outline",
      "icon ion-ios-more",
      "icon ion-ios-more-outline",
      "icon ion-ios-home",
      "icon ion-ios-home-outline",
      "icon ion-ios-cloud",
      "icon ion-ios-cloud-outline",
      "icon ion-ios-cloud-upload",
      "icon ion-ios-cloud-upload-outline",
      "icon ion-ios-cloud-download",
      "icon ion-ios-cloud-download-outline",
      "icon ion-ios-upload",
      "icon ion-ios-upload-outline",
      "icon ion-ios-download",
      "icon ion-ios-download-outline",
      "icon ion-ios-refresh",
      "icon ion-ios-refresh-outline",
      "icon ion-ios-refresh-empty",
      "icon ion-ios-reload",
      "icon ion-ios-loop-strong",
      "icon ion-ios-loop",
      "icon ion-ios-bookmarks",
      "icon ion-ios-bookmarks-outline",
      "icon ion-ios-book",
      "icon ion-ios-book-outline",
      "icon ion-ios-flag",
      "icon ion-ios-flag-outline",
      "icon ion-ios-glasses",
      "icon ion-ios-glasses-outline",
      "icon ion-ios-browsers",
      "icon ion-ios-browsers-outline",
      "icon ion-ios-at",
      "icon ion-ios-at-outline",
      "icon ion-ios-pricetag",
      "icon ion-ios-pricetag-outline",
      "icon ion-ios-pricetags",
      "icon ion-ios-pricetags-outline",
      "icon ion-ios-cart",
      "icon ion-ios-cart-outline",
      "icon ion-ios-chatboxes",
      "icon ion-ios-chatboxes-outline",
      "icon ion-ios-chatbubble",
      "icon ion-ios-chatbubble-outline",
      "icon ion-ios-cog",
      "icon ion-ios-cog-outline",
      "icon ion-ios-gear",
      "icon ion-ios-gear-outline",
      "icon ion-ios-settings",
      "icon ion-ios-settings-strong",
      "icon ion-ios-toggle",
      "icon ion-ios-toggle-outline",
      "icon ion-ios-analytics",
      "icon ion-ios-analytics-outline",
      "icon ion-ios-pie",
      "icon ion-ios-pie-outline",
      "icon ion-ios-pulse",
      "icon ion-ios-pulse-strong",
      "icon ion-ios-filing",
      "icon ion-ios-filing-outline",
      "icon ion-ios-box",
      "icon ion-ios-box-outline",
      "icon ion-ios-compose",
      "icon ion-ios-compose-outline",
      "icon ion-ios-trash",
      "icon ion-ios-trash-outline",
      "icon ion-ios-copy",
      "icon ion-ios-copy-outline",
      "icon ion-ios-email",
      "icon ion-ios-email-outline",
      "icon ion-ios-undo",
      "icon ion-ios-undo-outline",
      "icon ion-ios-redo",
      "icon ion-ios-redo-outline",
      "icon ion-ios-paperplane",
      "icon ion-ios-paperplane-outline",
      "icon ion-ios-folder",
      "icon ion-ios-folder-outline",
      "icon ion-ios-paper",
      "icon ion-ios-paper-outline",
      "icon ion-ios-list",
      "icon ion-ios-list-outline",
      "icon ion-ios-world",
      "icon ion-ios-world-outline",
      "icon ion-ios-alarm",
      "icon ion-ios-alarm-outline",
      "icon ion-ios-speedometer",
      "icon ion-ios-speedometer-outline",
      "icon ion-ios-stopwatch",
      "icon ion-ios-stopwatch-outline",
      "icon ion-ios-timer",
      "icon ion-ios-timer-outline",
      "icon ion-ios-clock",
      "icon ion-ios-clock-outline",
      "icon ion-ios-time",
      "icon ion-ios-time-outline",
      "icon ion-ios-calendar",
      "icon ion-ios-calendar-outline",
      "icon ion-ios-photos",
      "icon ion-ios-photos-outline",
      "icon ion-ios-albums",
      "icon ion-ios-albums-outline",
      "icon ion-ios-camera",
      "icon ion-ios-camera-outline",
      "icon ion-ios-reverse-camera",
      "icon ion-ios-reverse-camera-outline",
      "icon ion-ios-eye",
      "icon ion-ios-eye-outline",
      "icon ion-ios-bolt",
      "icon ion-ios-bolt-outline",
      "icon ion-ios-color-wand",
      "icon ion-ios-color-wand-outline",
      "icon ion-ios-color-filter",
      "icon ion-ios-color-filter-outline",
      "icon ion-ios-grid-view",
      "icon ion-ios-grid-view-outline",
      "icon ion-ios-crop-strong",
      "icon ion-ios-crop",
      "icon ion-ios-barcode",
      "icon ion-ios-barcode-outline",
      "icon ion-ios-briefcase",
      "icon ion-ios-briefcase-outline",
      "icon ion-ios-medkit",
      "icon ion-ios-medkit-outline",
      "icon ion-ios-medical",
      "icon ion-ios-medical-outline",
      "icon ion-ios-infinite",
      "icon ion-ios-infinite-outline",
      "icon ion-ios-calculator",
      "icon ion-ios-calculator-outline",
      "icon ion-ios-keypad",
      "icon ion-ios-keypad-outline",
      "icon ion-ios-telephone",
      "icon ion-ios-telephone-outline",
      "icon ion-ios-drag",
      "icon ion-ios-location",
      "icon ion-ios-locaticon ion-outline",
      "icon ion-ios-navigate",
      "icon ion-ios-navigate-outline",
      "icon ion-ios-locked",
      "icon ion-ios-locked-outline",
      "icon ion-ios-unlocked",
      "icon ion-ios-unlocked-outline",
      "icon ion-ios-monitor",
      "icon ion-ios-monitor-outline",
      "icon ion-ios-printer",
      "icon ion-ios-printer-outline",
      "icon ion-ios-game-controller-a",
      "icon ion-ios-game-controller-a-outline",
      "icon ion-ios-game-controller-b",
      "icon ion-ios-game-controller-b-outline",
      "icon ion-ios-americanfootball",
      "icon ion-ios-americanfootball-outline",
      "icon ion-ios-baseball",
      "icon ion-ios-baseball-outline",
      "icon ion-ios-basketball",
      "icon ion-ios-basketball-outlinegt;",
      "icon ion-ios-tennisball",
      "icon ion-ios-tennisball-outline",
      "icon ion-ios-football",
      "icon ion-ios-football-outline",
      "icon ion-ios-body",
      "icon ion-ios-body-outline",
      "icon ion-ios-person",
      "icon ion-ios-person-outline",
      "icon ion-ios-personadd",
      "icon ion-ios-personadd-outline",
      "icon ion-ios-people",
      "icon ion-ios-people-outline",
      "icon ion-ios-musical-notes",
      "icon ion-ios-musical-note",
      "icon ion-ios-bell",
      "icon ion-ios-bell-outline",
      "icon ion-ios-mic",
      "icon ion-ios-mic-outline",
      "icon ion-ios-mic-off",
      "icon ion-ios-volume-high",
      "icon ion-ios-volume-low",
      "icon ion-ios-play",
      "icon ion-ios-play-outline",
      "icon ion-ios-pause",
      "icon ion-ios-pause-outline",
      "icon ion-ios-recording",
      "icon ion-ios-recording-outline",
      "icon ion-ios-fastforward",
      "icon ion-ios-fastforward-outline",
      "icon ion-ios-rewind",
      "icon ion-ios-rewind-outline",
      "icon ion-ios-skipbackward",
      "icon ion-ios-skipbackward-outline",
      "icon ion-ios-skipforward",
      "icon ion-ios-skipforward-outline",
      "icon ion-ios-shuffle-strong",
      "icon ion-ios-shuffle",
      "icon ion-ios-videocam",
      "icon ion-ios-videocam-outline",
      "icon ion-ios-film",
      "icon ion-ios-film-outline",
      "icon ion-ios-flask",
      "icon ion-ios-flask-outline",
      "icon ion-ios-lightbulb",
      "icon ion-ios-lightbulb-outline",
      "icon ion-ios-wineglass",
      "icon ion-ios-wineglass-outline",
      "icon ion-ios-pint",
      "icon ion-ios-pint-outline",
      "icon ion-ios-nutrition",
      "icon ion-ios-nutriticon ion-outline",
      "icon ion-ios-flower",
      "icon ion-ios-flower-outline",
      "icon ion-ios-rose",
      "icon ion-ios-rose-outline",
      "icon ion-ios-paw",
      "icon ion-ios-paw-outline",
      "icon ion-ios-flame",
      "icon ion-ios-flame-outline",
      "icon ion-ios-sunny",
      "icon ion-ios-sunny-outline",
      "icon ion-ios-partlysunny",
      "icon ion-ios-partlysunny-outline",
      "icon ion-ios-cloudy",
      "icon ion-ios-cloudy-outline",
      "icon ion-ios-rainy",
      "icon ion-ios-rainy-outline",
      "icon ion-ios-thunderstorm",
      "icon ion-ios-thunderstorm-outline",
      "icon ion-ios-snowy",
      "icon ion-ios-moon",
      "icon ion-ios-moon-outline",
      "icon ion-ios-cloudy-night",
      "icon ion-ios-cloudy-night-outline",
      "icon ion-android-arrow-up",
      "icon ion-android-arrow-forward",
      "icon ion-android-arrow-down",
      "icon ion-android-arrow-back",
      "icon ion-android-arrow-dropup",
      "icon ion-android-arrow-dropup-circle",
      "icon ion-android-arrow-dropright",
      "icon ion-android-arrow-dropright-circle",
      "icon ion-android-arrow-dropdown",
      "icon ion-android-arrow-dropdown-circle",
      "icon ion-android-arrow-dropleft",
      "icon ion-android-arrow-dropleft-circle",
      "icon ion-android-add",
      "icon ion-android-add-circle",
      "icon ion-android-remove",
      "icon ion-android-remove-circle",
      "icon ion-android-close",
      "icon ion-android-cancel",
      "icon ion-android-radio-button-off",
      "icon ion-android-radio-button-on",
      "icon ion-android-checkmark-circle",
      "icon ion-android-checkbox-outline-blank",
      "icon ion-android-checkbox-outline",
      "icon ion-android-checkbox-blank",
      "icon ion-android-checkbox",
      "icon ion-android-done",
      "icon ion-android-done-all",
      "icon ion-android-menu",
      "icon ion-android-more-horizontal",
      "icon ion-android-more-vertical",
      "icon ion-android-refresh",
      "icon ion-android-sync",
      "icon ion-android-wifi",
      "icon ion-android-call",
      "icon ion-android-apps",
      "icon ion-android-settings",
      "icon ion-android-options",
      "icon ion-android-funnel",
      "icon ion-android-search",
      "icon ion-android-home",
      "icon ion-android-cloud-outline",
      "icon ion-android-cloud",
      "icon ion-android-download",
      "icon ion-android-upload",
      "icon ion-android-cloud-done",
      "icon ion-android-cloud-circle",
      "icon ion-android-favorite-outline",
      "icon ion-android-favorite",
      "icon ion-android-star-outline",
      "icon ion-android-star-half",
      "icon ion-android-star",
      "icon ion-android-calendar",
      "icon ion-android-alarm-clock",
      "icon ion-android-time",
      "icon ion-android-stopwatch",
      "icon ion-android-watch",
      "icon ion-android-locate",
      "icon ion-android-navigate",
      "icon ion-android-pin",
      "icon ion-android-compass",
      "icon ion-android-map",
      "icon ion-android-walk",
      "icon ion-android-bicycle",
      "icon ion-android-car",
      "icon ion-android-bus",
      "icon ion-android-subway",
      "icon ion-android-train",
      "icon ion-android-boat",
      "icon ion-android-plane",
      "icon ion-android-restaurant",
      "icon ion-android-bar",
      "icon ion-android-cart",
      "icon ion-android-camera",
      "icon ion-android-image",
      "icon ion-android-film",
      "icon ion-android-color-palette",
      "icon ion-android-create",
      "icon ion-android-mail",
      "icon ion-android-drafts",
      "icon ion-android-send",
      "icon ion-android-archive",
      "icon ion-android-delete",
      "icon ion-android-attach",
      "icon ion-android-share",
      "icon ion-android-share-alt",
      "icon ion-android-bookmark",
      "icon ion-android-document",
      "icon ion-android-clipboard",
      "icon ion-android-list",
      "icon ion-android-folder-open",
      "icon ion-android-folder",
      "icon ion-android-print",
      "icon ion-android-open",
      "icon ion-android-exit",
      "icon ion-android-contract",
      "icon ion-android-expand",
      "icon ion-android-globe",
      "icon ion-android-chat",
      "icon ion-android-textsms",
      "icon ion-android-hangout",
      "icon ion-android-happy",
      "icon ion-android-sad",
      "icon ion-android-person",
      "icon ion-android-people",
      "icon ion-android-person-add",
      "icon ion-android-contact",
      "icon ion-android-contacts",
      "icon ion-android-playstore",
      "icon ion-android-lock",
      "icon ion-android-unlock",
      "icon ion-android-microphone",
      "icon ion-android-microphone-off",
      "icon ion-android-notifications-none",
      "icon ion-android-notifications",
      "icon ion-android-notifications-off",
      "icon ion-android-volume-mute",
      "icon ion-android-volume-down",
      "icon ion-android-volume-up",
      "icon ion-android-volume-off",
      "icon ion-android-hand",
      "icon ion-android-desktop",
      "icon ion-android-laptop",
      "icon ion-android-phone-portrait",
      "icon ion-android-phone-landscape",
      "icon ion-android-bulb",
      "icon ion-android-sunny",
      "icon ion-android-alert",
      "icon ion-android-warnin"
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
    $scope.newTag = function () {
      var b = prompt("请输入行为名称");
      $scope.tags.push({'name': b, icon: 'ion-close-round'});
    };

    //计时模块
    $scope.doHour = function (id) {
      if($rootScope.items[id].status!=0)return ;
        var nowDate = new Date();
        var date = parseInt((nowDate - $rootScope.items[id].startTime) / 1000);
        $rootScope.items[id].hours = parseInt(date / 3600);
        $rootScope.items[id].second = date % 60;
        $rootScope.items[id].minutes = parseInt(date / 60 - $rootScope.items[id].hours * 60);
        $scope.$apply();
    };

    //停止项目
    $scope.stopItem=function (id) {
      $rootScope.items[id].status=1;
    }

    //添加项目
    $scope.newItem = function (name, icon) {
      $rootScope.items.push({
        'id':$rootScope.items.length,
        'startTime': new Date(),
        'name': name,
        'icon': icon,
        'status': 0,
        'hours': 0,
        'minutes': 0,
        'second': 0
      });
      //计时器
      var itemId = $rootScope.items.length - 1;
      window.setInterval(function () {
        $scope.doHour(itemId)
      }, 1000);
      // doHour(itemId);
    };



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

  .controller('staTimeCtrl', function ($scope, $rootScope) {


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
        $scope.data[i]={'hours':$rootScope.items[i].hours,"minutes":$rootScope.items[i].minutes ,"second":$rootScope.items[i].second,'name':text_arr[i]};
      }
      $scope.drawCircle("canvas_circle", data_arr, color_arr, text_arr);
    };

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
