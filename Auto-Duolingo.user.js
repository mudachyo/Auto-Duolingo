// ==UserScript==
// @name         Auto-Duolingo
// @version      2.0.7
// @author       mudachyo (https://github.com/mudachyo)
// @namespace    http://tampermonkey.net/
// @description  Script for automating training on Duolingo
// @match        https://*.duolingo.com/*
// @grant        none
// @license      MIT
// @connect      ktnff.tech
// @icon         https://ktnff.tech/assets/autoduo/favicon.png
// @downloadURL  https://raw.githubusercontent.com/mudachyo/Auto-Duolingo/main/Auto-Duolingo.user.js
// @updateURL    https://raw.githubusercontent.com/mudachyo/Auto-Duolingo/main/Auto-Duolingo.user.js
// ==/UserScript==

(() => {
  let {
    isSafeMode: _0x2b52df,
    isTurboMode: _0x5a7d9f,
    isShowUI: _0x1fddc8,
    isAnimationOff: _0x10ccd5,
    isTargetMode: _0x10a7dc,
    targetModeValue: _0x4cd22,
    isPassMode: _0xc6a554,
    isPassLegend: _0x276c90,
    passModeValue: _0x340efe,
    passValue: _0x4eb67b,
    isAutoFarmXP: _0x321f1c,
    isFarmingLocation: _0x7fc37e,
    farmingLocationUrl: _0x50ed29,
    farmingLocationErrorCount: _0x452bd3,
    isAutoGetX2: _0x428c40,
    isGettingX2: _0xbd7b7,
    isGetX2Failed: _0x3f6c19,
    prevFarmXPLocation: _0x61f62a,
    exp: _0x433d12,
    time: _0x46af94,
    generalData: _0x515045,
    authenData: _0x56ad5b,
    isKeyTimeOut: _0x5d5c24,
    tabId: _0xa63c8c
  } = _0x30ea0e();
  let {
    appLanguage: _0x4fd2ed
  } = _0x8f6881();
  class _0x1dd462 {
    ["version"] = "2.0.7";
    ['isAuto'] = false;
    ["isSolving"] = false;
    ["isFetching"] = false;
    ['appLanguage'] = _0x4fd2ed || 'en';
    ["isFreeKey"] = true;
    ["freeKey"] = "mudachyo";
    ["freeKeyTime"] = "2024-04-30 23:59:59";
    ['isSafeMode'] = !!_0x2b52df;
    ["isTurboMode"] = !!_0x5a7d9f;
    ["isLegendMode"] = false;
    ["isAnimationOff"] = !!_0x10ccd5;
    ["isTargetMode"] = !!_0x10a7dc;
    ["targetModeValue"] = _0x4cd22 || 0x0;
    ["isPassMode"] = false;
    ['isPassLegend'] = undefined !== _0x276c90 && _0x276c90;
    ['passModeValue'] = _0x340efe || 0x0;
    ["passValue"] = _0x4eb67b || 0x0;
    ["isAutoFarmXP"] = _0x321f1c;
    ["isFarmingLocation"] = !!_0x7fc37e;
    ["farmingLocationUrl"] = _0x50ed29 || '';
    ["farmingLocationErrorCount"] = _0x452bd3 || 0x0;
    ["isAutoGetX2"] = !!_0x428c40;
    ["isGettingX2"] = !!_0xbd7b7;
    ["isGetX2Failed"] = !!_0x3f6c19;
    ['prevFarmXPLocation'] = _0x61f62a;
    ["isDarkMode"] = "dark" === document.documentElement.getAttribute("data-duo-theme");
    ["nextTime"] = 0xc8;
    ["nextTimeTemp"] = 0x118;
    ["goChallengeTime"] = 0x1f4;
    ["reloadTime"] = 0x1b7740;
    ["totalReloadTime"] = 0x0;
    ["safeDelayTime"] = 0x0;
    ["safeDelayTimeTemp"] = 0x352;
    ['lessGenealogy'] = null;
    ["isEnterKey"] = false;
    ["isKeyTimeOut"] = !!_0x5d5c24;
    ["keyTimeOut"] = 0x0;
    ["startTime"] = null;
    ["isShowUI"] = undefined === _0x1fddc8 || _0x1fddc8;
    ["exp"] = _0x433d12 || 0x0;
    ['totalTime'] = _0x46af94 || 0x0;
    ["generalData"] = _0x515045;
    ["authenData"] = _0x56ad5b;
    ['apiUrl'] = "https://ktnff.tech/";
    ["homePath"] = "/learn";
    ["practicePath"] = "/lesson/unit/1/level/1";
    ['practiceHubPath'] = '/practice-hub';
    ["listeningPacticePath"] = '/practice-hub/listening-practice';
    ["lessonPath"] = '/lesson';
    ["lessonWrapper"] = ".wqSzE";
    ["storyWrapper"] = "._2neC7";
    ["reactProps"] = null;
    ['dataStateNode'] = null;
    ["nativeTextareaValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    ['nativeInputValueSetter'] = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    ['isPreviewVersion'] = window.location.hostname.includes('preview');
    ["skipLegendarySuggestionBtn"] = "[class=\"_2CLME\"] button ._4iKvM";
    ['tabId'] = _0xa63c8c;
    ['setup'] = function () {
      _0x5e428e.setLanguage(this.appLanguage);
      this.handlePreviewVersion();
      this.createStyle();
      this.createSignature();
      this.createBtn();
      this.createKeyComponent();
      this.createStatistics();
      this.createFunctions();
      this.createSetting();
      this.createContainer();
      if (!_0x1fddc8) {
        this.handleShowHideUI();
      }
      if (_0x10ccd5) {
        this.handleAnimationOff();
      }
      if (_0x10a7dc) {
        this.handleTargetModeOn();
      }
      if (_0x7fc37e) {
        this.handleFarmingLocationOn();
      }
      this.renderTime();
      if (this.authenData) {
        this.setAuthen(this.authenData);
      } else {
        this.handleAuthen();
      }
      if (this.generalData) {
        this.setGeneral(this.generalData);
      } else {
        this.handleGetGeneral();
      }
      if (_0xc6a554) {
        this.handlePassModeOn();
      }
      if (this.isAutoFarmXP) {
        this.startFarmXP();
      }
    };
    ["getTabId"] = function () {
      let _0x56f5fb = _0x1a02d0("tabIds") || [];
      let _0x2039ce = _0x56f5fb[_0x56f5fb.length - 0x1] || 0x0;
      this.setTabId(_0x2039ce + 0x1, _0x56f5fb, true);
    };
    ["setTabId"] = function (_0x462fd0, _0x533714, _0x4ccac5 = false) {
      let _0x114e38 = _0x533714 || _0x1a02d0("tabIds") || [];
      _0x114e38.push(_0x462fd0);
      _0x3888bf(_0x114e38);
      if (_0x4ccac5) {
        this.tabId = _0x462fd0;
        _0x67a80b("tabId", _0x462fd0);
      }
    };
    ["removeTabId"] = function () {
      let _0x5a9a8e = _0x1a02d0("tabIds") || [];
      let _0x4c47c8 = _0x5a9a8e.findIndex(_0x44e314 => _0x44e314 === this.tabId);
      if (-0x1 !== _0x4c47c8) {
        _0x5a9a8e.splice(_0x4c47c8, 0x1);
        _0x3888bf(_0x5a9a8e);
      }
    };
    ["handleBeforeUnload"] = function () {
      this.removeTabId();
    };
    ["handlePreviewVersion"] = function () {
      if (this.isPreviewVersion) {
        this.lessonWrapper = ".wqSzE";
        this.storyWrapper = '._2neC7';
      }
    };
    ["createSignature"] = function () {
      let _0x28ede4 = [{
        'code': 'en',
        'text': "English",
        'icon': 'https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg'
      }, {
        'code': 'vi',
        'text': "Русский",
        'icon': "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ru.svg"
      }];
      let _0x397a1e = _0x28ede4.find(_0x53ee5a => _0x53ee5a.code === this.appLanguage) || _0x28ede4[0x0];
      this.signatureElm = document.createElement('div');
      Object.assign(this.signatureElm, {
        'className': "signature-listening",
        'innerHTML': "\n\t\t\t\t\t<div>\n\t\t\t\t\t\tLanguage\n\t\t\t\t\t\t<div class=\"autoduo-language-wrapper\">\n\t\t\t\t\t\t\t<p class=\"autoduo-language-selected\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + _0x397a1e.icon + "')\"></i>" + _0x397a1e.text + "</p>\n\t\t\t\t\t\t\t<ul class=\"autoduo-language-selection\">\n\t\t\t\t\t\t\t\t" + _0x28ede4.map(_0x1855a1 => "<li class=\"autoduo-language-option\" data-code=\"" + _0x1855a1.code + "\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + _0x1855a1.icon + "')\"></i>" + _0x1855a1.text + "</li>").join('') + "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t"
      });
      document.body.appendChild(this.signatureElm);
      let _0x48de11 = _0x3a2c6e('.autoduo-language-selected');
      let _0x1f0b54 = _0x3a2c6e(".autoduo-language-selection");
      let _0x12b6f7 = Array.from(_0x1f0b54.querySelectorAll(".autoduo-language-option"));
      _0x48de11.addEventListener("click", _0xb67481 => {
        _0xb67481.stopPropagation();
        _0x1f0b54.classList.add("show");
        let _0x2f6392 = () => {
          _0x1f0b54.classList.remove("show");
          window.removeEventListener('click', _0x2f6392);
        };
        window.addEventListener('click', _0x2f6392);
      });
      _0x12b6f7.forEach(_0x33627e => {
        _0x33627e.addEventListener("click", () => {
          let _0x5a3622 = _0x33627e.dataset.code;
          if (_0x5a3622 === this.appLanguage) {
            return;
          }
          let _0x1bd28d = window.confirm(_0x348210('text62'));
          if (_0x1bd28d) {
            _0x48a376("appLanguage", _0x5a3622);
            window.location.reload();
          }
        });
      });
    };
    ["createBtn"] = function () {
      this.autoFarmBtn = document.createElement("button");
      Object.assign(this.autoFarmBtn, {
        'className': "autoduo-btn btn-green auto-farm-btn-listening",
        'innerHTML': _0x348210("text36") + " <label>(" + _0x348210("text73") + ")</label>"
      });
      this.autoFarmBtn.addEventListener("click", () => {
        if (this.autoFarmBtn.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAutoFarmXP) {
          if (this.isGettingX2) {
            let _0x3225f1 = window.confirm(_0x348210("text82"));
            if (!_0x3225f1) {
              return;
            }
          }
          this.handleFarmXPOff();
        } else {
          this.handleFarmXPOn();
        }
      });
      this.showHideBtn = document.createElement("button");
      Object.assign(this.showHideBtn, {
        'className': "show-hide-listening",
        'style': "--data-version: 'V" + this.version + "'",
        'innerHTML': "<i></i>"
      });
      this.showHideBtn.addEventListener("click", () => {
        this.isShowUI = !this.isShowUI;
        this.handleShowHideUI(true);
      });
      document.body.append(this.showHideBtn);
    };
    ["createStatistics"] = function () {
      this.statistic = document.createElement("div");
      this.keyTypeElm = document.createElement('p');
      this.keyExpiredElm = document.createElement('p');
      this.expElm = document.createElement('p');
      this.dateElm = document.createElement('p');
      let _0x84ce5d = document.createElement("div");
      Object.assign(this.keyTypeElm, {
        'className': 'key-type-listening',
        'style': "--data-name: \"" + _0x348210("text13") + "\""
      });
      Object.assign(this.keyExpiredElm, {
        'className': "key-expired-listening",
        'style': "--data-name: \"" + _0x348210('text14') + "\""
      });
      this.expElm.className = 'total-exp-listening';
      this.expElm.innerText = this.exp;
      this.statistic.className = "statistic-listening";
      this.dateElm.className = "time-listening";
      _0x84ce5d.className = "statistic-wrapper-listening";
      _0x84ce5d.append(this.expElm, this.dateElm);
      this.statistic.append(_0x84ce5d);
    };
    ['createFunctions'] = function () {
      this.animationOffWrapper = document.createElement("div");
      this.animationOffWrapper.style = "--data-name: \"" + _0x348210("text16") + "\"";
      let _0x501b7f = _0x348210("text17");
      this.autoduoCreateSwitch(_0x501b7f, this.animationOffWrapper, this.isAnimationOff, _0x564f89 => {
        this.isAnimationOff = !this.isAnimationOff;
        this.handleAnimationOff(true);
        _0x564f89(this.isAnimationOff);
      });
      this.safeModeWrapper = document.createElement('div');
      this.safeModeWrapper.style = "--data-name: \"" + _0x348210('text18') + "\"";
      let _0x56c4f1 = _0x348210("text19");
      this.autoduoCreateSwitch(_0x56c4f1, this.safeModeWrapper, this.isSafeMode, () => {
        if (this.isSafeMode) {
          this.handleSafeModeOff();
        } else {
          this.handleSafeModeOn();
        }
      });
      this.turboModeWrapper = document.createElement("div");
      this.turboModeWrapper.style = "--data-name: \"" + _0x348210("text20") + "\"";
      let _0x2b173f = _0x348210("text21");
      this.autoduoCreateSwitch(_0x2b173f, this.turboModeWrapper, this.isTurboMode, () => {
        if (this.isTurboMode) {
          this.handleTurboModeOff();
        } else {
          this.handleTurboModeOn(true);
        }
      });
      this.legendModeWrapper = document.createElement("div");
      this.legendModeWrapper.style = "--data-name: \"" + _0x348210("text23") + "\"";
      let _0x479fd6 = _0x348210('text24');
      this.autoduoCreateSwitch(_0x479fd6, this.legendModeWrapper, this.isLegendMode, () => {
        if (this.legendModeWrapper.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (!this.isAuto || this.isLegendMode) {
          if (this.isLegendMode) {
            this.stopLegend();
          } else {
            this.startLegend();
          }
        }
      });
      this.targetModeWrapper = document.createElement("div");
      this.targetModeWrapper.style = "--data-name: \"" + _0x348210("text25") + "\"";
      let _0x351423 = _0x348210('text26');
      this.autoduoCreateSwitch(_0x351423, this.targetModeWrapper, this.isTargetMode, () => {
        if (this.isTargetMode) {
          let _0x11f541 = window.confirm(_0x348210("text27"));
          if (_0x11f541) {
            this.handleTargetModeOff();
          }
          return;
        }
        let _0x258ed3;
        for (;;) {
          let _0x1693c4 = window.prompt(_0x348210("text28"));
          if (null === _0x1693c4) {
            return;
          }
          if (Number.isNaN(_0x258ed3 = parseInt(_0x1693c4))) {
            alert(_0x348210('text29'));
            continue;
          }
          if (_0x258ed3 <= this.exp) {
            alert(_0x348210("text30", this.exp));
            continue;
          }
          if (_0x258ed3 > 0xf4240) {
            alert(_0x348210("text31"));
            continue;
          }
          break;
        }
        this.targetModeValue = _0x258ed3;
        this.handleTargetModeOn(true);
      });
      this.targetModeLabel = document.createElement('p');
      Object.assign(this.targetModeLabel, {
        'className': "targetmode-label-listening label-listening",
        'style': "--data-frefix: \"" + _0x348210("text63") + "\""
      });
      this.passModeWrapper = document.createElement("div");
      this.passModeWrapper.style = "--data-name: \"" + _0x348210("text32") + "\"";
      let _0x1ba243 = _0x348210("text33");
      this.autoduoCreateSwitch(_0x1ba243, this.passModeWrapper, this.isPassMode, () => {
        if (this.passModeWrapper.classList.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAuto && !this.isPassMode) {
          return;
        }
        if (this.isPassMode) {
          let _0x587e52 = window.confirm(_0x348210("text34"));
          if (_0x587e52) {
            if (this.isPassLegend) {
              _0x67a80b('isPassLegend', this.isPassLegend = false);
            }
            this.handlePassModeOff();
          }
          return;
        }
        let _0x14d02b;
        for (;;) {
          let _0x1a4c22 = window.prompt(_0x348210("text35"));
          if (null === _0x1a4c22) {
            return;
          }
          if (Number.isNaN(_0x14d02b = parseInt(_0x1a4c22)) || _0x14d02b < 0x0) {
            alert(_0x348210('text29'));
            continue;
          }
          if (_0x14d02b > 0x3e8) {
            alert(_0x348210("text31"));
            continue;
          }
          if (0x0 === _0x14d02b) {
            _0x14d02b = 0xf423f;
          }
          break;
        }
        this.passModeValue = _0x14d02b;
        this.passValue = 0x0;
        this.isPassLegend = window.confirm(_0x348210("text66"));
        _0x67a80b("isPassLegend", this.isPassLegend);
        this.handlePassModeOn(true);
      });
      this.passModeLabel = document.createElement('p');
      this.passModeLabel.className = "label-listening";
      this.farmingLocationContainer = document.createElement('div');
      this.farmingLocationWrapper = document.createElement('div');
      this.farmingLocationWrapper.style = "--data-name: \"" + _0x348210("text68") + "\"";
      let _0x14a2d7 = _0x348210("text69");
      this.autoduoCreateSwitch(_0x14a2d7, this.farmingLocationWrapper, this.isFarmingLocation, _0x18a510 => {
        if (this.farmingLocationContainer.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (this.isAuto) {
          return;
        }
        if (true === this.isFarmingLocation) {
          this.handleFarmingLocationOff();
          _0x18a510(false);
          return;
        }
        let _0x31090f = RegExp("https://[a-z]+.duolingo.com/.*");
        let _0xb02e31 = '';
        for (;;) {
          if (null === (_0xb02e31 = window.prompt(_0x348210("text70")))) {
            return;
          }
          if (!_0x31090f.test(_0xb02e31)) {
            window.alert(_0x348210("text71"));
            continue;
          }
          break;
        }
        this.farmingLocationUrl = _0xb02e31;
        this.handleFarmingLocationOn(true);
        _0x18a510(true);
      });
      this.localFarmingLocationLabel = document.createElement('p');
      this.localFarmingLocationLabel.className = 'local-label-listening';
      this.farmingLocationContainer.appendChild(this.farmingLocationWrapper);
      this.darkModeWrapper = document.createElement("div");
      this.darkModeWrapper.style = "--data-name: \"" + _0x348210("text76") + "\"";
      let _0x3f8c1e = _0x348210("text77");
      this.autoduoCreateSwitch(_0x3f8c1e, this.darkModeWrapper, this.isDarkMode, _0x8c83b1 => {
        this.isDarkMode = !this.isDarkMode;
        let [_0x26fdc9, _0x4f2c51] = this.isDarkMode ? ["dark", 'on'] : ["light", "off"];
        document.documentElement.setAttribute("data-duo-theme", _0x26fdc9);
        localStorage.setItem('duo.darkMode', "{\"1313105280\":\"" + _0x4f2c51 + "\"}");
        _0x8c83b1(this.isDarkMode);
      });
      this.autoGetX2Wrapper = document.createElement('div');
      this.autoGetX2Wrapper.className = "auto-x2-wrapper";
      this.autoGetX2Wrapper.style = "--data-name: \"" + _0x348210("text78") + "\"";
      let _0x172ea8 = _0x348210('text79');
      this.autoduoCreateSwitch(_0x172ea8, this.autoGetX2Wrapper, this.isAutoGetX2, _0xdb7a47 => {
        if (this.autoGetX2Wrapper.isDisabled) {
          this.autoduoFeatureDisabled();
          return;
        }
        if (!this.isAutoFarmXP) {
          this.isAutoGetX2 = !this.isAutoGetX2;
          if (this.isAutoGetX2) {
            this.handleAutoGetX2On();
          } else {
            this.handleAutoGetX2Off();
          }
        }
      });
      this.autoGetX2Label = document.createElement('p');
      Object.assign(this.autoGetX2Label, {
        'className': "label-listening",
        'innerText': _0x348210('text80')
      });
      this.autoGetX2FailedLabel = this.autoGetX2Label.cloneNode();
      this.autoGetX2FailedLabel.innerText = _0x348210("text83");
      if (this.isAutoGetX2) {
        this.autoFarmBtn.classList.add("auto-x2");
      }
      this.functionWrapper = document.createElement("div");
      this.functionWrapper.className = 'function-wrapper-listening';
      this.functionWrapper.append(this.safeModeWrapper, this.turboModeWrapper, this.legendModeWrapper, this.passModeWrapper);
    };
    ["createSetting"] = function () {
      this.settingBtn = document.createElement('button');
      Object.assign(this.settingBtn, {
        'className': "autoduo-btn setting-btn-listening",
        'innerText': _0x348210("text74")
      });
      this.settingBtn.addEventListener("click", () => {
        if (!this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.appendChild(this.settingOverlay);
        }
      });
      this.closeSettingBtn = document.createElement("button");
      Object.assign(this.closeSettingBtn, {
        'className': "autoduo-btn close-setting-btn-listening",
        'innerText': _0x348210("text75")
      });
      this.closeSettingBtn.addEventListener('click', () => {
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      });
      this.settingOverlay = document.createElement("div");
      Object.assign(this.settingOverlay, {
        'className': "setting-overlay-listening",
        'innerHTML': "\n\t\t\t\t\t<h3>" + _0x348210("text74") + "</h3>\n\t\t\t\t"
      });
      this.settingFunction = document.createElement('div');
      this.settingFunction.className = "setting-function-listening";
      this.settingFunction.append(this.darkModeWrapper, this.animationOffWrapper, this.targetModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      this.settingOverlay.append(this.settingFunction, this.closeSettingBtn);
    };
    ["createContainer"] = function () {
      this.keyContainer = document.createElement("div");
      this.keyContainer.className = "key-container-listening";
      this.keyContainer.append(this.guideBtn);
      this.autoContainer = document.createElement("div");
      this.autoContainer.className = "auto-container-listening";
      this.autoContainer.append(this.statistic, this.functionWrapper, this.settingBtn, this.autoFarmBtn);
      this.overlayContainer = document.createElement("div");
      this.overlayContainer.className = "overlay-listening";
      this.controlContainer = document.createElement('div');
      this.controlContainer.className = "control-container-listening";
      this.controlContainer.append(this.keyContainer);
      this.autoduoLabelWrapper = document.createElement('div');
      this.autoduoLabelWrapper.className = "autoduo-label";
      document.body.append(this.controlContainer, this.autoduoLabelWrapper);
    };
    ["createKeyComponent"] = function () {
      this.keyForm = document.createElement("form");
      this.keyBtn = document.createElement("button");
      Object.assign(this.keyBtn, {
        'className': "autoduo-btn btn-green key-btn-listening",
        'innerText': _0x348210("text2")
      });
      this.keyInput = document.createElement("input");
      Object.assign(this.keyInput, {
        'className': 'key-input-listening',
        'placeholder': _0x348210("text1"),
        'autocomplete': 'off'
      });
      this.keyForm.append(this.keyInput, this.keyBtn);
      this.btnLoading = document.createElement("div");
      Object.assign(this.btnLoading, {
        'className': "loading-listening",
        'innerHTML': "<div class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\" style=\"transition-duration: 250ms;\"><div class=\"_2buOS _2Amjo\"></div><div class=\"_3AW2F _2Amjo\"></div><div class=\"Utckm _2Amjo\"></div></div>"
      });
      this.guideBtn = document.createElement("div");
      Object.assign(this.guideBtn, {
        'className': "autoduo-btn guide-btn-listening",
        'innerText': _0x348210("text3")
      });
      this.getLinkBtn = document.createElement('a');
      Object.assign(this.getLinkBtn, {
        'className': "autoduo-btn btn-white getlink-btn-listening",
        'innerText': _0x348210('text4'),
        'target': '_blank'
      });
      this.guideGetLinkBtn = document.createElement('a');
      Object.assign(this.guideGetLinkBtn, {
        'className': "autoduo-btn btn-blue guide-getlink-btn-listening",
        'innerText': _0x348210('text5'),
        'target': "_blank"
      });
      this.buyKeyBtn = document.createElement('a');
      Object.assign(this.buyKeyBtn, {
        'className': "autoduo-btn btn-purple key-vip-btn-listening",
        'innerText': _0x348210('text6'),
        'target': "_blank"
      });
      this.keyInput.onkeydown = _0x2a2e01 => _0x2a2e01.stopPropagation();
      this.btnLoading.onclick = _0x3ad710 => _0x3ad710.stopPropagation();
      this.keyForm.addEventListener("submit", _0x36c660 => {
        _0x36c660.preventDefault();
        if (this.isFetching) {
          return;
        }
        let _0x59d608 = this.keyInput.value;
        if (_0x59d608) {
          this.handleAuthen(_0x59d608, true, 0x3e8);
        }
      });
      this.guideBtn.addEventListener("click", this.showGuide);
    };
    ['handleAuthen'] = function (_0xec4e5a, _0xb64326 = false, _0x4525a5 = 0x0) {
      if (!_0xec4e5a && !(_0xec4e5a = _0x1a02d0('key'))) {
        this.handleFreeKey();
        return;
      }
      this.showKeyBtnLoading(true);
      let _0x11da70 = new FormData();
      _0x11da70.append('key', _0xec4e5a);
      try {
        let _0x385ee8 = JSON.parse(localStorage.getItem("duo.lastLogin"));
        if (_0x385ee8) {
          _0x11da70.append("user", btoa(_0x385ee8.email));
        }
      } catch (_0x1c3774) {}
      setTimeout(() => {
        fetch(this.apiUrl + "kinopoisk/", {
          'method': 'post',
          'body': _0x11da70
        }).then(_0xd843a5 => _0xd843a5?.['json']()).then(_0x369064 => {
          switch (_0x369064?.['code']) {
            case 0xc8:
              let _0x1a829b = _0x369064.data;
              this.setAuthen(_0x1a829b);
              _0x67a80b('authenData', _0x1a829b);
              if (_0xb64326) {
                _0x48a376('key', _0xec4e5a);
              }
              break;
            case 0x190:
              if (_0xb64326) {
                alert(_0x348210("text7"));
              } else {
                _0x48a376("key", null);
                if (this.handleFreeKey()) {
                  return;
                }
                if (this.isKeyTimeOut) {
                  _0x67a80b("isKeyTimeOut", false);
                  setTimeout(() => {
                    alert(_0x348210('text8'));
                  }, 0x7d0);
                }
              }
              break;
            case 0x191:
              alert(_0x348210("text67"));
              break;
            default:
              alert(_0x348210('text9'));
          }
        })["finally"](() => {
          this.showKeyBtnLoading(false);
        });
      }, _0x4525a5);
    };
    ["setAuthen"] = function (_0x14a36e) {
      let _0xa6c760 = this.autoduoDecode(_0x14a36e);
      if (null === _0xa6c760) {
        _0x67a80b('authenData', null);
        return this.autoduoError(_0x348210("text10"));
      }
      let {
        keyData: _0x3fb653,
        lessGenealogy: _0x1de4cb
      } = _0xa6c760;
      let _0x372bee = new Date(_0x3fb653.expiredAt);
      let _0x15f8be = _0x372bee.getTime();
      if (_0x15f8be <= Date.now()) {
        this.handleKeyTimeOut();
        return;
      }
      this.keyTimeOut = _0x15f8be;
      _0x3fb653.expiredAt = _0x56721b(_0x372bee);
      this.handleReadyAuto(_0x1de4cb, _0x3fb653);
      if (this.tabId) {
        this.setTabId(this.tabId);
      } else {
        this.getTabId();
      }
      window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
    };
    ['handleGetGeneral'] = function () {
      sessionStorage.setItem("autoDuolingoStorage", JSON.stringify({
        "generalData": "661586fff02dceyJ2ZXJzaW9uIjoiMi4wLjciLCJidXlLZXlVcmwiOiJodHRwczpcL1wvYXBpLmF1dG9kdW9saW5nby5jbGlja1wvc2VydmljZXNcL2J1eS1rZXlcLyIsImdldEtleVVybCI6Imh0dHBzOlwvXC9hcGkuYXV0b2R1b2xpbmdvLmNsaWNrXC9zZXJ2aWNlc1wvZ2V0LWtleVwvIiwiZ3VpZGVHZXRLZXlVcmwiOiJodHRwczpcL1wveW91dHUuYmVcL0VZb2NPUnVERFU0Iiwic2QiOlsyMDAsNTAwLDcwMF0sIm5vdGlmeVZlcnNpb24iOjEyLCJub3RpZnlDb250ZW50IjoiQU5OT1VOQ0VNRU5UIEZST00gREVWWDogVXBkYXRlIEF1dG8tRHVvbGluZ28gdjIuMC42XFxuLSBOZXcgZmVhdHVyZXM6IFhQIEZhcm0gTG9jYXRpb24gU2V0dGluZywgRGFyayBNb2RlLlxcbi0gTmV3IGNoYWxsZW5nZXM6IFJhZGlvIENoYWxsZW5nZS5cXG4tIEludGVyZmFjZSB1cGRhdGVzIGFuZCBzeXN0ZW0gb3B0aW1pemF0aW9ucy5cXG4tIFBsZWFzZSBsZWF2ZSBhIHBvc2l0aXZlIHJldmlldyBmb3IgQXV0by1EdW9saW5nbyBvbiBHcmVhc3lGb3JrIGlmIGl0IGhhcyBiZWVuIGhlbHBmdWwgdG8geW91IVxcblxcbkhhcHB5IEhhY2tpbmchIn0=",
        "authenData":"661597782b677eyJrZXlEYXRhIjp7InR5cGUiOiJ2aXAiLCJleHBpcmVkQXQiOiIyMDc3LTA0LTMwIDIzOjU5OjU5In0sImxlc3NHZW5lYWxvZ3kiOiJjaGlsZHJlbiJ9",
        "isAutoFarmXP":false,
        "tabId":1
      }));
      location.reload();
    };
    ['setGeneral'] = function (_0x5c731d) {
      let _0xe75401 = this.autoduoDecode(_0x5c731d);
      if (null === _0xe75401) {
        _0x67a80b("generalData", null);
        return this.autoduoError(_0x348210('text10'));
      }
      let {
        getKeyUrl: _0x464fab,
        buyKeyUrl: _0x11bbcb,
        guideGetKeyUrl: _0x4a30b2,
        feedbackUrl: _0x4499cd,
        sd: _0x429024,
        notifyVersion: _0x42744e,
        notifyContent: _0x580fe4
      } = _0xe75401;
      this.getLinkBtn.href = _0x464fab;
      this.guideGetLinkBtn.href = _0x4a30b2;
      this.buyKeyBtn.href = _0x11bbcb;
      this.handleUpdateSpeed(_0x429024);
      this.handleGlobalNotify(_0x42744e, _0x580fe4);
    };
    ['handleUpdateSpeed'] = function (_0x113c1) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = _0x113c1;
      if (this.isSafeMode) {
        this.safeDelayTime = this.safeDelayTimeTemp;
      }
      if (this.isTurboMode) {
        this.handleTurboModeOn();
      }
    };
    ["handleGlobalNotify"] = function (_0x3384c4, _0x36463f) {
      let _0x17f28c = _0x1a02d0("notifyVersion") || 0x0;
      if (_0x17f28c < _0x3384c4) {
        _0x36463f = _0x36463f.replaceAll("\\n", "\n");
        setTimeout(() => {
          alert(_0x36463f);
          _0x48a376("notifyVersion", _0x3384c4);
        }, 0x7d0);
      }
    };
    ["handleKeyMarkup"] = function (_0x3b6782, _0x112429) {
      let _0x409bb5;
      let _0x30f434;
      if ("event" === _0x3b6782) {
        _0x409bb5 = "<b class='vip-type-listening event'>VIP EVENT</b>";
        _0x30f434 = "<b class='vip-expired-listening event'>" + _0x112429 + "</b>";
        this.showHideBtn.classList.add("event");
        this.controlContainer.classList.add('event');
        this.signatureElm.classList.add("event");
      } else {
        _0x409bb5 = "<b class='vip-type-listening'>VIP KEY</b>";
        _0x30f434 = "<b class='vip-expired-listening'>" + _0x112429 + "</b>";
      }
      this.keyTypeElm.innerHTML = _0x409bb5;
      this.keyExpiredElm.innerHTML = _0x30f434;
    };
    ["handleReadyAuto"] = function (_0x1c2fb6, _0x3317cd) {
      let {
        type: _0x4a1167,
        expiredAt: _0x325b6d
      } = _0x3317cd;
      this.handleKeyMarkup(_0x4a1167, _0x325b6d);
      this.lessGenealogy = _0x1c2fb6;
      this.isEnterKey = true;
      this.controlContainer.replaceChild(this.autoContainer, this.keyContainer);
    };
    ["handleKeyTimeOut"] = function () {
      _0x67a80b({
        'authenData': null,
        'isKeyTimeOut': true
      });
      this.autoduoStopAllAuto();
      this.handleReload();
    };
    ["handleFreeKey"] = function () {
      if (!this.isFreeKey || !this.freeKeyTime || !this.freeKey) {
        return false;
      }
      let _0x4ba15d = new Date(this.freeKeyTime).getTime();
      return !(_0x4ba15d <= Date.now()) && (this.isFreeKey = false, this.handleAuthen(this.freeKey), true);
    };
    ["handleShowHideUI"] = function (_0x2d7e5d = false) {
      if (this.isShowUI) {
        this.showHideBtn.classList.remove('hide');
        document.body.append(this.controlContainer, this.signatureElm);
      } else {
        this.showHideBtn.classList.add("hide");
        this.controlContainer.remove();
        this.signatureElm.remove();
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      }
      if (_0x2d7e5d) {
        _0x67a80b('isShowUI', this.isShowUI);
        if (!this.controlContainer.classList.contains("autoduo-animate")) {
          this.controlContainer.classList.add("autoduo-animate");
        }
      }
    };
    ["handleAnimationOff"] = function (_0x19673e = false) {
      if (this.isAnimationOff) {
        document.head.appendChild(this.animationStyle);
      } else {
        document.head.removeChild(this.animationStyle);
      }
      if (_0x19673e) {
        _0x67a80b("isAnimationOff", this.isAnimationOff);
      }
    };
    ["handleSafeModeOn"] = function () {
      if (this.isTurboMode) {
        this.handleTurboModeOff();
      }
      this.safeModeWrapper.setAutoduoSwitch(this.setSafeMode(true));
    };
    ["handleSafeModeOff"] = function () {
      this.safeModeWrapper.setAutoduoSwitch(this.setSafeMode(false));
    };
    ["handleTurboModeOn"] = function (_0x173811 = false) {
      if (_0x173811) {
        let _0x1a2a3f = window.confirm(_0x348210("text40"));
        if (!_0x1a2a3f) {
          return;
        }
      }
      if (this.isSafeMode) {
        this.handleSafeModeOff();
      }
      this.nextTimeTemp = this.nextTime;
      this.nextTime = 0x0;
      _0x67a80b('isTurboMode', true);
      this.autoFarmBtn.classList.add("turbo");
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = true);
    };
    ["handleTurboModeOff"] = function () {
      this.nextTime = this.nextTimeTemp;
      _0x67a80b('isTurboMode', false);
      this.autoFarmBtn.classList.remove("turbo");
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = false);
    };
    ['handleTargetModeOn'] = function (_0x4715bc = false) {
      this.isTargetMode = true;
      this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
      this.autoduoLabelWrapper.appendChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(true);
      if (_0x4715bc) {
        _0x67a80b({
          'isTargetMode': true,
          'targetModeValue': this.targetModeValue
        });
      }
    };
    ["handleTargetModeOff"] = function (_0x1cc1e3 = false) {
      this.isTargetMode = false;
      this.autoduoLabelWrapper.removeChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(false);
      if (_0x1cc1e3) {
        this.autoduoStopAllAuto();
      }
      _0x67a80b("isTargetMode", false);
    };
    ["handlePassModeOn"] = function (_0x8544be = false) {
      if (!this.isAuto && !this.isSolving) {
        this.autoduoLabelWrapper.appendChild(this.passModeLabel);
        this.passModeWrapper.setAutoduoSwitch(true);
        this.updatePassModeState();
        if (_0x8544be) {
          _0x67a80b({
            'isPassMode': true,
            'passModeValue': this.passModeValue
          });
        }
        this.startPassMode();
      }
    };
    ["handlePassModeOff"] = function () {
      if (this.isPassMode) {
        this.autoduoLabelWrapper.removeChild(this.passModeLabel);
        this.passModeWrapper.setAutoduoSwitch(false);
        this.stopPassMode();
      }
    };
    ["handleFarmXPOn"] = function () {
      if (!this.isAuto && !this.isSolving) {
        sessionStorage.setItem("autoDuolingoStorage", JSON.stringify({
          "generalData": "661586fff02dceyJ2ZXJzaW9uIjoiMi4wLjciLCJidXlLZXlVcmwiOiJodHRwczpcL1wvYXBpLmF1dG9kdW9saW5nby5jbGlja1wvc2VydmljZXNcL2J1eS1rZXlcLyIsImdldEtleVVybCI6Imh0dHBzOlwvXC9hcGkuYXV0b2R1b2xpbmdvLmNsaWNrXC9zZXJ2aWNlc1wvZ2V0LWtleVwvIiwiZ3VpZGVHZXRLZXlVcmwiOiJodHRwczpcL1wveW91dHUuYmVcL0VZb2NPUnVERFU0Iiwic2QiOlsyMDAsNTAwLDcwMF0sIm5vdGlmeVZlcnNpb24iOjEyLCJub3RpZnlDb250ZW50IjoiQU5OT1VOQ0VNRU5UIEZST00gREVWWDogVXBkYXRlIEF1dG8tRHVvbGluZ28gdjIuMC42XFxuLSBOZXcgZmVhdHVyZXM6IFhQIEZhcm0gTG9jYXRpb24gU2V0dGluZywgRGFyayBNb2RlLlxcbi0gTmV3IGNoYWxsZW5nZXM6IFJhZGlvIENoYWxsZW5nZS5cXG4tIEludGVyZmFjZSB1cGRhdGVzIGFuZCBzeXN0ZW0gb3B0aW1pemF0aW9ucy5cXG4tIFBsZWFzZSBsZWF2ZSBhIHBvc2l0aXZlIHJldmlldyBmb3IgQXV0by1EdW9saW5nbyBvbiBHcmVhc3lGb3JrIGlmIGl0IGhhcyBiZWVuIGhlbHBmdWwgdG8geW91IVxcblxcbkhhcHB5IEhhY2tpbmchIn0=",
          "authenData":"661597782b677eyJrZXlEYXRhIjp7InR5cGUiOiJ2aXAiLCJleHBpcmVkQXQiOiIyMDc3LTA0LTMwIDIzOjU5OjU5In0sImxlc3NHZW5lYWxvZ3kiOiJjaGlsZHJlbiJ9",
          "isAutoFarmXP":true,
          "tabId":1
        }));
        this.startFarmXP();
      }
    };
    ['handleFarmXPOff'] = function () {
      if (this.isAutoFarmXP) {
        this.isAutoFarmXP = false;
        _0x67a80b('isAutoFarmXP', this.isAutoFarmXP);
        this.stopFarmXP();
      }
    };
    ['handleFarmingLocationOn'] = function (_0x38416b = false) {
      this.isFarmingLocation = true;
      this.localFarmingLocationLabel.innerText = this.farmingLocationUrl;
      this.farmingLocationContainer.appendChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.add("farming-location");
      if (_0x38416b) {
        this.farmingLocationErrorCount = 0x0;
        _0x67a80b({
          'isFarmingLocation': true,
          'farmingLocationUrl': this.farmingLocationUrl,
          'farmingLocationErrorCount': 0x0
        });
      }
    };
    ["handleFarmingLocationOff"] = function () {
      this.isFarmingLocation = false;
      this.farmingLocationContainer.removeChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.remove('farming-location');
      _0x67a80b("isFarmingLocation", false);
    };
    ["handleAutoGetX2On"] = function () {
      this.isAutoGetX2 = true;
      _0x67a80b("isAutoGetX2", true);
      this.autoFarmBtn.classList.add('auto-x2');
      this.autoGetX2Wrapper.setAutoduoSwitch(true);
    };
    ["handleAutoGetX2Off"] = function () {
      this.isAutoGetX2 = this.isGettingX2 = false;
      _0x67a80b({
        'isAutoGetX2': false,
        'isGettingX2': false
      });
      this.autoFarmBtn.classList.remove('auto-x2');
      this.autoGetX2Wrapper.setAutoduoSwitch(false);
    };
    ["handleGetX2"] = function (_0x1fa939 = false) {
      if (_0x1fa939) {
        this.prevFarmXPLocation = window.location.pathname;
        this.isGettingX2 = true;
        _0x67a80b({
          'prevFarmXPLocation': this.prevFarmXPLocation,
          'isGettingX2': this.isGettingX2
        });
      }
      this.autoduoLabelWrapper.appendChild(this.autoGetX2Label);
      this.handlePassMode();
    };
    ["handleGotX2"] = function () {
      this.isGettingX2 = false;
      _0x67a80b('isGettingX2', this.isGettingX2);
      window.location.pathname = this.prevFarmXPLocation;
    };
    ["handleGetX2Failed"] = function (_0x4992f4, _0x4e05b0 = false) {
      if (_0x4992f4) {
        this.autoduoLabelWrapper.appendChild(this.autoGetX2FailedLabel);
      } else {
        this.autoGetX2FailedLabel.remove();
      }
      if (_0x4e05b0) {
        _0x67a80b("isGetX2Failed", this.isGetX2Failed = _0x4992f4);
      }
    };
    ["handleReload"] = function () {
      this.autoduoStopAllAuto();
      let _0x2ffd7b = window.location.pathname;
      switch (_0x2ffd7b) {
        case this.listeningPacticePath:
          let _0x5e7bda = document.querySelector("[data-test=\"quit-button\"]");
          if (_0x5e7bda) {
            _0x5e7bda.click();
          }
          setTimeout(() => {
            let _0x5d5082 = document.querySelector("[data-test=\"notification-button\"]");
            if (_0x5d5082) {
              _0x5d5082.click();
            }
          }, this.nextTime + 0x1f4);
        case this.practiceHubPath:
          setTimeout(() => {
            window.location.reload();
          }, this.nextTime + 0x5dc);
          break;
        default:
          window.location.reload();
      }
    };
    ["startFarmXP"] = function () {
      this.autoduoDisableFeatures(this.legendModeWrapper, this.passModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      document.body.appendChild(this.overlayContainer);
      this.isAuto = true;
      this.autoFarmBtn.classList.add('btn-red', 'running');
      this.autoFarmBtn.innerText = _0x348210('text37');
      if (this.isGettingX2) {
        this.handleGetX2();
        return;
      }
      if (this.isGetX2Failed) {
        this.handleGetX2Failed(true);
      }
      this.startTime = Date.now();
      this.handleLocation();
    };
    ['stopFarmXP'] = function () {
      this.autoduoEnableFeatures(this.legendModeWrapper, this.passModeWrapper, this.farmingLocationContainer, this.autoGetX2Wrapper);
      if (document.body.contains(this.overlayContainer)) {
        document.body.removeChild(this.overlayContainer);
      }
      if (this.isGettingX2) {
        this.isGettingX2 = false;
        _0x67a80b("isGettingX2", this.isGettingX2);
        this.autoGetX2Label.remove();
      }
      if (this.isGetX2Failed) {
        this.handleGetX2Failed(false, true);
      }
      this.isAuto = false;
      this.autoFarmBtn.classList.remove("btn-red", "running");
      this.autoFarmBtn.innerText = _0x348210("text36");
    };
    ["startLegend"] = function () {
      if (!this.isLegendMode && !this.isSolving && !this.isAuto && !this.isPassMode) {
        this.autoduoDisableFeatures(this.passModeWrapper, this.autoFarmBtn, this.farmingLocationContainer);
        this.isAuto = true;
        this.isLegendMode = true;
        this.legendModeWrapper.setAutoduoSwitch(true);
        this.handleLegend();
      }
    };
    ['stopLegend'] = function () {
      if (this.isLegendMode) {
        this.autoduoEnableFeatures(this.passModeWrapper, this.autoFarmBtn, this.farmingLocationContainer);
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isLegendMode = false;
        this.legendModeWrapper.setAutoduoSwitch(false);
      }
    };
    ['startPassMode'] = function () {
      if (!this.isAuto && !this.isSolving && !this.isPassMode && !this.isLegendMode) {
        this.autoduoDisableFeatures(this.legendModeWrapper, this.autoFarmBtn, this.farmingLocationContainer);
        this.isAuto = true;
        this.isPassMode = true;
        this.handlePassMode();
      }
    };
    ['stopPassMode'] = function () {
      if (this.isPassMode) {
        this.autoduoEnableFeatures(this.legendModeWrapper, this.autoFarmBtn, this.farmingLocationContainer);
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isPassMode = false;
        _0x67a80b("isPassMode", false);
      }
    };
    ['handleCountDown'] = function (_0x9765a1, _0x4b2b56) {
      let _0x2da06c = document.createElement("div");
      Object.assign(_0x2da06c, {
        'className': 'countdown-overlay-listening',
        'style': "--data-prefix: \"" + _0x348210("text61") + "\""
      });
      document.body.appendChild(_0x2da06c);
      let _0x4faac1 = _0x1f09af => {
        _0x2da06c.innerText = _0x1f09af + 's';
        if (_0x1f09af < 0x0) {
          document.body.removeChild(_0x2da06c);
          _0x4b2b56();
          return;
        }
        setTimeout(() => _0x4faac1(_0x1f09af - 0x1), 0x3e8);
      };
      _0x4faac1(_0x9765a1);
    };
    ["handlePassMode"] = function () {
      if (!this.isPassMode && this.isAutoFarmXP && !this.isAutoGetX2 && !this.isGettingX2) {
        return;
      }
      if (this.isPassMode && this.passValue >= this.passModeValue) {
        setTimeout(() => {
          alert(_0x348210("text41", this.passModeValue));
        }, 0x3e8);
        this.handlePassModeOff();
        return;
      }
      if (this.isAutoGetX2 && this.isGettingX2 && _0x3a2c6e(this.skipLegendarySuggestionBtn)) {
        this.handleGotX2();
        return;
      }
      let _0x4943eb = window.location.pathname;
      switch (_0x4943eb) {
        case this.lessonPath:
          this.handleLegend();
          break;
        case this.homePath:
          if (this.openBoxReward() || this.skipCharacterGate()) {
            return;
          }
        default:
          if (this.isPassLegend) {
            let _0x1441e6 = _0x3a2c6e("[data-test*=\"skill-path-level\"]:not([aria-label=\"Radio\"]):not(.fcuKP):not(.r1YyP)");
            if (_0x1441e6) {
              this.handleCountDown(0x3, this.goLegendChallenge.bind(this, _0x1441e6));
              break;
            }
          }
          this.handleCountDown(0x3, this.goLessonChallenge.bind(this));
      }
    };
    ['handleLegend'] = function () {
      if (!this.isAuto || this.isAutoFarmXP && !this.isAutoGetX2 && !this.isGettingX2) {
        return;
      }
      let _0x4d4691 = _0x3a2c6e(this.lessonWrapper);
      let _0x43d967 = _0x3a2c6e(this.storyWrapper);
      if (_0x4d4691 || _0x43d967) {
        document.body.appendChild(this.overlayContainer);
        this.startTime = Date.now();
        this.getDataStateNode(_0x4d4691 || _0x43d967);
        this.isPreviewVersion;
        let _0x537388 = _0x3a2c6e("img[class=\"CenF1\"]");
        if (_0x537388) {
          setTimeout(this.handleRadioChallenge.bind(this), 0x3e8);
          return;
        }
        if (_0x4d4691) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let _0x104f07 = _0x3a2c6e("._2SxJv._30qMV._2N_A5._36Vd3._16r-S") || _0x3a2c6e("[data-test=\"player-next\"]");
      if (_0x104f07) {
        _0x104f07.click();
        if (this.isPassMode || this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        setTimeout(this.handleLegend.bind(this), 0x3e8);
        return;
      }
      if (this.isPassMode || this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
        if (this.isPassLegend) {
          let _0xf56ea5 = _0x3a2c6e("[data-test=\"legendary-start-button\"]");
          if (_0xf56ea5) {
            _0xf56ea5.click();
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
        }
        if (this.autoduoSkipBtn()) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        if (window.location.pathname === this.homePath) {
          setTimeout(this.handlePassMode.bind(this), 0x7d0);
          return;
        }
      }
      setTimeout(this.handleLegend.bind(this), 0x7d0);
    };
    ["handleLocation"] = function () {
      if (!this.isAuto) {
        return;
      }
      if (this.isFarmingLocation) {
        this.handleFarmingLocationChallenge();
        return;
      }
      let _0x25d609 = window.location.pathname;
      switch (_0x25d609) {
        case this.practiceHubPath:
          this.goPracticeHubChallenge();
          break;
        case this.listeningPacticePath:
          this.handlePracticeHubChallenge();
          break;
        case this.homePath:
          this.goPracticeChallenge();
          break;
        case this.practicePath:
          this.handlePracticeChallenge();
          break;
        default:
          this.autoduoError(_0x348210("text42"));
      }
    };
    ["goPracticeHubChallenge"] = function () {
      if (false === this.isAuto) {
        return;
      }
      let _0x314a86 = _0x3a2c6e("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2ebe830fd55a7f2754d371bcd79faf32.svg\"]");
      if (!_0x314a86) {
        setTimeout(this.goPracticeHubChallenge.bind(this), 0x3e8);
        return;
      }
      _0x314a86.click();
      setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
    };
    ["goPracticeChallenge"] = function () {
      window.location.pathname = this.practicePath;
    };
    ["goFarmingLocationChallenge"] = function () {
      window.location.href = this.farmingLocationUrl;
    };
    ["goLessonChallenge"] = function () {
      if (window.location.pathname === this.homePath) {
        if (this.openBoxReward() || this.skipCharacterGate()) {
          return;
        }
        let _0x5bed9c = _0x3a2c6e("[aria-hidden=\"true\"]");
        if (!_0x5bed9c) {
          let _0x115229 = _0x3a2c6e("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg\"]");
          if (_0x115229) {
            _0x115229.click();
            setTimeout(this.goLessonChallenge.bind(this), 0x3e8);
            return;
          }
          if (this.isPassMode) {
            this.handlePassModeOff();
            setTimeout(() => {
              alert(_0x348210('text44'));
            }, 0x1f4);
          }
          if (this.isAutoFarmXP && this.isAutoGetX2 && this.isGettingX2) {
            this.handleGetX2Failed(true, true);
            this.handleAutoGetX2Off();
            this.handleGotX2();
          }
          return;
        }
      }
      window.location.pathname = this.lessonPath;
    };
    ["goLegendChallenge"] = function (_0x4a1276) {
      _0x4a1276.click();
      setTimeout(() => {
        let _0x2198b1 = _0x3a2c6e("[data-test*=\"skill-path-state-passed\"] + button");
        if (_0x2198b1) {
          _0x2198b1.click();
          setTimeout(this.handleLegend.bind(this), 0x258);
        } else {
          _0x4a1276.click();
          setTimeout(this.goLessonChallenge.bind(this), 0xc8);
        }
      }, 0x258);
    };
    ["handlePracticeHubChallenge"] = function () {
      if (window.location.pathname === this.practiceHubPath) {
        this.goPracticeHubChallenge();
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handlePracticeHubChallenge.bind(this));
    };
    ['handlePracticeChallenge'] = function () {
      if (window.location.pathname === this.homePath) {
        setTimeout(this.goPracticeChallenge.bind(this), 0x3e8);
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handlePracticeChallenge.bind(this));
    };
    ["handleFarmingLocationChallenge"] = function () {
      if (this.farmingLocationErrorCount >= 0x4) {
        this.handleFarmXPOff();
        setTimeout(() => {
          window.alert(_0x348210('text72'));
        }, 0x1f4);
        return;
      }
      if (window.location.href !== this.farmingLocationUrl) {
        _0x67a80b("farmingLocationErrorCount", ++this.farmingLocationErrorCount);
        this.goFarmingLocationChallenge();
        return;
      }
      if (_0x3a2c6e(this.skipLegendarySuggestionBtn)) {
        this.goFarmingLocationChallenge();
        return;
      }
      let _0x1cdbaa = _0x3a2c6e("[data-test=\"story-start\"]") || _0x3a2c6e(this.storyWrapper);
      if (_0x1cdbaa) {
        _0x1cdbaa.click();
        setTimeout(() => {
          this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this), "story");
        }, 0x320);
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this));
    };
    ["handleAutoFarmChallengeGeneral"] = function (_0x2cf44d = () => {}, _0x57e110 = "lesson") {
      if (!this.isAuto) {
        return;
      }
      let _0x3700ea = 'lesson' === _0x57e110 ? _0x3a2c6e(this.lessonWrapper) : _0x3a2c6e(this.storyWrapper);
      if (_0x3700ea) {
        if (this.isFarmingLocation) {
          this.farmingLocationErrorCount = 0x0;
        }
        this.getDataStateNode(_0x3700ea);
        if ("lesson" === _0x57e110) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let _0x20da89 = _0x57e110 = _0x3a2c6e("[data-test=\"player-next\"][aria-disabled=\"false\"]");
      if (_0x20da89) {
        this.nextQuestion();
        return;
      }
      this.autoduoSkipBtn();
      setTimeout(_0x2cf44d, 0x3e8);
    };
    ["doChallenge"] = async function () {
      if (this.isSafeMode) {
        await this.sleep(this.safeDelayTimeTemp);
      }
      if (!this.isAuto || this.isSolving) {
        return;
      }
      let _0x2b1814 = _0x3a2c6e("[data-test*=\"challenge challenge\"]");
      if (!_0x2b1814) {
        return this.autoduoError(_0x348210('text45'));
      }
      let _0x534b5f = _0x2b1814.dataset.test?.["slice"](0xa);
      this.setSolving(true);
      switch (_0x534b5f) {
        case "challenge-translate":
        case "challenge-listenTap":
        case 'challenge-listen':
        case "challenge-writeComprehension":
        case 'challenge-syllableTap':
        case "challenge-syllableListenTap":
          this.handleChallengeTranslate(_0x534b5f);
          break;
        case "challenge-gapFill":
        case "challenge-listenIsolation":
        case 'challenge-assist':
        case "challenge-selectTranscription":
        case "challenge-characterIntro":
        case 'challenge-characterSelect':
        case "challenge-selectPronunciation":
        case 'challenge-dialogue':
        case "challenge-readComprehension":
        case 'challenge-listenComprehension':
        case 'challenge-select':
        case 'challenge-form':
        case "challenge-definition":
        case "challenge-sameDifferent":
          this.handleChallengeChoice();
          break;
        case "challenge-characterMatch":
        case "challenge-match":
          this.handleChallengeMatch(_0x534b5f);
          break;
        case "challenge-listenComplete":
        case "challenge-partialListen":
        case "challenge-name":
        case "challenge-typeCompleteTable":
        case "challenge-typeCloze":
        case "challenge-typeClozeTable":
          this.handleChallengeTextInput(_0x534b5f);
          break;
        case "challenge-listenMatch":
          this.handleChallengeListenMatch();
          break;
        case "challenge-extendedListenMatch":
          this.handleChallengeExtendedListenMatch();
          break;
        case "challenge-extendedMatch":
          this.handleChallengeExtendedMatch();
          break;
        case "challenge-completeReverseTranslation":
          this.handleChallengeCompleteReverseTranslation(_0x534b5f);
          break;
        case "challenge-partialReverseTranslate":
          this.handleChallengePartialReverseTranslate();
          break;
        case 'challenge-tapComplete':
        case "challenge-tapCompleteTable":
        case "challenge-tapCloze":
        case "challenge-tapClozeTable":
          this.handleChallengeTapComplete(_0x534b5f);
          break;
        case "challenge-speak":
        case 'challenge-listenSpeak':
          this.handleSkipChallenge();
          break;
        default:
          this.autoduoError(_0x348210('text46', _0x534b5f));
      }
    };
    ['handleChallengeTranslate'] = function (_0x61c7df) {
      if (false === this.isAuto) {
        this.setSolving(false);
        return;
      }
      let _0xb90a19 = null;
      switch (_0x61c7df) {
        case "challenge-listenTap":
        case 'challenge-translate':
          if (!(_0xb90a19 = this.getData("correctTokens"))?.['length']) {
            _0xb90a19 = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.['split'](" ");
          }
          break;
        case 'challenge-listen':
          _0xb90a19 = this.getData("prompt")?.["split"](" ");
          break;
        case "challenge-completeReverseTranslation":
        case "challenge-writeComprehension":
          _0xb90a19 = this.getData(['challengeResponseTrackingProperties', 'best_solution'])?.['split'](" ");
          break;
        case 'challenge-syllableTap':
        case 'challenge-syllableListenTap':
          let _0x553d44 = this.getData("choices");
          _0xb90a19 = this.getData("correctIndices").map(_0x30892f => {
            let {
              text: _0x1864d1,
              damagePosition: _0x3e5ee8
            } = _0x553d44[_0x30892f];
            return {
              'text': _0x1864d1,
              'damagePosition': _0x3e5ee8.toUpperCase()
            };
          });
      }
      if (!_0xb90a19) {
        return this.autoduoError(_0x348210("text47"));
      }
      let _0x403706 = _0x3a2c6e("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (_0x403706) {
        let _0x5df108 = _0x3a2c6e("[data-test=\"player-toggle-keyboard\"]");
        if (_0x5df108) {
          _0x5df108.click();
          return setTimeout(this.handleChallengeTranslate.bind(this, _0x61c7df), 0x1f4);
        }
        let _0x5453a8 = new Event('input', {
          'bubbles': true
        });
        let _0x25c926 = '';
        if (this.isTurboMode) {
          _0x25c926 = _0xb90a19.join(" ");
          this.nativeTextareaValueSetter.call(_0x403706, _0x25c926);
          _0x403706.dispatchEvent(_0x5453a8);
          this.setSolving(false);
          this.nextQuestion(true);
          return;
        }
        let _0x50fd3d = () => {
          setTimeout(() => {
            if (0x0 === _0xb90a19.length) {
              this.setSolving(false);
              this.nextQuestion(true);
              return;
            }
            _0x25c926 += " " + _0xb90a19.shift();
            this.nativeTextareaValueSetter.call(_0x403706, _0x25c926);
            _0x403706.dispatchEvent(_0x5453a8);
            _0x50fd3d();
          }, this.randomSafeDelayTime());
        };
        return void _0x50fd3d();
      }
      this.isPreviewVersion;
      let _0x12b25a = Array.from(_0xe35921("[class=\"_1v1Bd\"] button[data-test*=\"challenge-tap-token\"]"));
      if (0x0 === _0x12b25a.length) {
        return setTimeout(this.handleChallengeTranslate.bind(this, _0x61c7df), 0x1f4);
      }
      let _0x4aaed2 = _0x53f0de => {
        let _0xdfac7a = _0x12b25a.findIndex(_0x344830 => _0x53f0de?.["damagePosition"] ? (_0x344830.classList.contains("P3baP") ? 'RIGHT' : _0x344830.classList.contains('bfI-N') ? "LEFT" : _0x344830.classList.contains('_1WVl5') ? "BOTH" : 'NEITHER') === _0x53f0de.damagePosition && _0x344830.textContent === _0x53f0de.text : _0x344830.textContent === _0x53f0de);
        return _0xdfac7a;
      };
      if (this.isTurboMode) {
        for (let _0xdc0693 of _0xb90a19) {
          let _0x4aeb41 = _0x4aaed2(_0xdc0693);
          if (-0x1 === _0x4aeb41) {
            return this.autoduoLessonError(_0x348210("text48"));
          }
          _0x12b25a[_0x4aeb41].click();
          _0x12b25a.splice(_0x4aeb41, 0x1);
        }
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0xad207a = () => {
        setTimeout(() => {
          if (0x0 === _0xb90a19.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          let _0x51269a = _0xb90a19.shift();
          let _0x355c77 = _0x4aaed2(_0x51269a);
          if (-0x1 === _0x355c77) {
            return this.autoduoLessonError(_0x348210('text48'));
          }
          _0x12b25a[_0x355c77].click();
          _0x12b25a.splice(_0x355c77, 0x1);
          _0xad207a();
        }, this.randomSafeDelayTime());
      };
      _0xad207a();
    };
    ["handleChallengeListenMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x424041 = _0x3a2c6e("[data-test*=\"challenge-listenMatch\"]");
      this.isPreviewVersion;
      let _0x2a1080 = Array.from(_0x424041.querySelectorAll("[class=\"_3VyQa\"] > button"));
      let _0x29e56a = _0x2a1080.splice(_0x2a1080.length / 0x2);
      this.listenMatchHandlerGeneral(_0x2a1080, _0x29e56a, () => {
        this.setSolving(false);
        this.nextQuestion(true);
      });
    };
    ['listenMatchHandlerGeneral'] = function (_0x120871, _0x157864, _0x105fcd = () => {}) {
      let _0x14698f = null;
      if (this.isTurboMode) {
        for (let _0x4316f0 of _0x120871) {
          _0x14698f = _0x4316f0.dataset.test;
          _0x4316f0.click();
          let _0x4a33b5 = _0x157864.findIndex(_0x21c66b => _0x21c66b.dataset.test === _0x14698f);
          if (-0x1 === _0x4a33b5) {
            return this.autoduoLessonError(_0x348210("text49"));
          }
          _0x157864[_0x4a33b5].click();
          _0x157864.splice(_0x4a33b5, 0x1);
        }
        _0x105fcd();
        return;
      }
      let _0x292560 = () => {
        setTimeout(() => {
          if (0x0 === _0x157864.length) {
            _0x105fcd();
            return;
          }
          if (null === _0x14698f) {
            let _0xbf145f = _0x120871.shift();
            _0x14698f = _0xbf145f.dataset.test;
            _0xbf145f.click();
          } else {
            let _0x1d8886 = _0x157864.findIndex(_0x4b6116 => _0x4b6116.dataset.test === _0x14698f);
            if (-0x1 === _0x1d8886) {
              return this.autoduoLessonError(_0x348210("text49"));
            }
            _0x157864[_0x1d8886].click();
            _0x157864.splice(_0x1d8886, 0x1);
            _0x14698f = null;
          }
          _0x292560();
        }, this.randomSafeDelayTime());
      };
      _0x292560();
    };
    ["handleChallengeExtendedListenMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x246d57 = _0x3a2c6e("[data-test*=\"challenge-extendedListenMatch\"]");
      let _0x59e65a = Array.from(_0x246d57.querySelectorAll("[class=\"vOrcA\"] > button"));
      let _0x152d0c = _0x59e65a.length / 0x2;
      let _0x5691cb = _0x59e65a.splice(_0x152d0c);
      let _0x25d6e1 = _0x3a2c6e("[data-test=\"player-next\"]");
      let _0x56cd9b = 0x0;
      let _0x21b9b9 = null;
      let _0x1acb68 = () => {
        _0x21b9b9 = null;
        if (++_0x56cd9b >= _0x152d0c) {
          _0x56cd9b = 0x0;
        }
      };
      let _0x31334f = () => {
        setTimeout(() => {
          if ("false" === _0x25d6e1.getAttribute("aria-disabled")) {
            this.setSolving(false);
            this.nextQuestion();
            return;
          }
          if (null === _0x21b9b9) {
            let _0x2a5999 = _0x59e65a[_0x56cd9b];
            _0x21b9b9 = _0x2a5999.dataset.test;
            _0x2a5999.click();
          } else {
            let _0x489d11 = _0x5691cb.findIndex(_0x2c7004 => _0x2c7004.dataset.test === _0x21b9b9);
            if (-0x1 === _0x489d11) {
              _0x1acb68();
              _0x31334f();
              return;
            }
            _0x5691cb[_0x489d11].click();
            _0x1acb68();
          }
          _0x31334f();
        }, this.randomSafeDelayTime() + 0x96);
      };
      _0x31334f();
    };
    ["handleChallengeMatch"] = function (_0x5b7157) {
      if (!this.isAuto) {
        return;
      }
      let _0x6bb04 = _0x3a2c6e("[data-test*=\"challenge \"]");
      let _0x1607ea = Array.from(_0x6bb04.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let _0x4587e1 = _0x1607ea.splice(_0x1607ea.length / 0x2);
      let _0x34136a = null;
      switch (_0x5b7157) {
        case "challenge-characterMatch":
          _0x34136a = this.getData("pairs")?.["reduce"]((_0x3abee2, _0x2ad059) => {
            let {
              transliteration: _0x40e23d,
              character: _0x47b92b
            } = _0x2ad059;
            _0x3abee2[_0x40e23d] = _0x47b92b;
            return _0x3abee2;
          }, {});
          break;
        case 'challenge-match':
          _0x34136a = this.getData('pairs')?.['reduce']((_0x204232, _0x1ce5e8) => {
            let {
              fromToken: _0x4fe697,
              learningToken: _0x585dfa
            } = _0x1ce5e8;
            _0x204232[_0x4fe697] = _0x585dfa;
            return _0x204232;
          }, {});
      }
      if (!_0x34136a) {
        return this.autoduoError(_0x348210("text47"));
      }
      let _0x1277d6 = null;
      if (this.isTurboMode) {
        for (let _0x9efe78 of _0x1607ea) {
          _0x9efe78.click();
          _0x1277d6 = _0x34136a[_0x9efe78.innerText];
          let _0x2567be = _0x4587e1.findIndex(_0x3e5044 => _0x3e5044.innerText === _0x1277d6);
          if (-0x1 === _0x2567be) {
            return this.autoduoLessonError(_0x348210('text50'));
          }
          _0x4587e1[_0x2567be].click();
          _0x4587e1.splice(_0x2567be, 0x1);
        }
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0x2868cb = () => {
        setTimeout(() => {
          if (0x0 === _0x4587e1.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          if (null === _0x1277d6) {
            let _0x4c61a4 = _0x1607ea.shift();
            _0x4c61a4.click();
            _0x1277d6 = _0x34136a[_0x4c61a4.innerText];
          } else {
            let _0x1c4fcc = _0x4587e1.findIndex(_0x2154bb => _0x2154bb.innerText === _0x1277d6);
            if (-0x1 === _0x1c4fcc) {
              return this.autoduoLessonError(_0x348210("text50"));
            }
            _0x4587e1[_0x1c4fcc].click();
            _0x4587e1.splice(_0x1c4fcc, 0x1);
            _0x1277d6 = null;
          }
          _0x2868cb();
        }, this.randomSafeDelayTime());
      };
      _0x2868cb();
    };
    ["handleChallengeExtendedMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x26d152 = _0x3a2c6e("[data-test*=\"challenge \"]");
      let _0x5255a4 = Array.from(_0x26d152.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let _0x2dfdc4 = _0x5255a4.length / 0x2;
      let _0x187934 = _0x5255a4.splice(_0x2dfdc4);
      let _0x188061 = this.getData("pairs")?.["reduce"]((_0x571f56, _0x2cf396) => {
        let {
          fromToken: _0x4a82be,
          learningToken: _0x56f62c
        } = _0x2cf396;
        _0x571f56[_0x4a82be] = _0x56f62c;
        return _0x571f56;
      }, {});
      if (!_0x188061) {
        return this.autoduoError(_0x348210("text47"));
      }
      let _0xc6a578 = _0x3a2c6e("[data-test=\"player-next\"]");
      let _0x37f457 = 0x0;
      let _0x4bd0ed = null;
      let _0x3eddf6 = () => {
        _0x4bd0ed = null;
        if (++_0x37f457 >= _0x2dfdc4) {
          _0x37f457 = 0x0;
        }
      };
      let _0x22880f = () => {
        setTimeout(() => {
          if ('false' === _0xc6a578.getAttribute('aria-disabled')) {
            this.setSolving(false);
            this.nextQuestion();
            return;
          }
          if (null === _0x4bd0ed) {
            let _0x56c60a = _0x5255a4[_0x37f457];
            _0x4bd0ed = _0x188061[_0x56c60a.textContent];
            _0x56c60a.click();
          } else {
            let _0x1892ec = _0x187934.findIndex(_0x14d27c => _0x14d27c.textContent === _0x4bd0ed);
            if (-0x1 === _0x1892ec) {
              _0x3eddf6();
              _0x22880f();
              return;
            }
            _0x187934[_0x1892ec].click();
            _0x3eddf6();
          }
          _0x22880f();
        }, this.randomSafeDelayTime() + 0x96);
      };
      _0x22880f();
    };
    ["handleChallengeChoice"] = function () {
      this.handleChallengeChoiceGeneral(() => {
        this.setSolving(false);
        this.nextQuestion(true);
      });
    };
    ["handleChallengeChoiceGeneral"] = function (_0x4e5309 = () => {}) {
      if (!this.isAuto) {
        return;
      }
      let _0x4cc7f9 = _0xe35921("[data-test=\"challenge-choice\"]");
      let _0xaa7a01 = this.getData("correctIndex");
      if (null === _0xaa7a01) {
        return this.autoduoError(_0x348210("text47"));
      }
      if (this.isTurboMode) {
        _0x4cc7f9[_0xaa7a01].click();
        _0x4e5309();
        return;
      }
      setTimeout(() => {
        _0x4cc7f9[_0xaa7a01].click();
        setTimeout(_0x4e5309, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengeTextInput"] = function (_0x3cfa7d) {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let _0x4207dc = null;
      switch (_0x3cfa7d) {
        case "challenge-listenComplete":
        case "challenge-partialListen":
        case "challenge-completeReverseTranslation":
        case "challenge-typeCloze":
          _0x4207dc = Array.from(_0xe35921("[class=\"zlazS\"]")).reduce((_0x2a3270, _0x3fa2db) => {
            let _0x349caf = _0x3fa2db?.["textContent"]?.["replaceAll"]('_', '');
            return _0x349caf ? [..._0x2a3270, _0x349caf] : _0x2a3270;
          }, []);
          break;
        case "challenge-typeCompleteTable":
        case 'challenge-typeClozeTable':
          _0x4207dc = Array.from(_0xe35921("[class=\"zlazS\"]:first-child")).map(_0x562649 => _0x562649?.["textContent"]?.["replaceAll"]('_', ''));
          break;
        case 'challenge-name':
          _0x4207dc = this.getData("correctSolutions");
      }
      if (!_0x4207dc?.["length"]) {
        return this.autoduoError(_0x348210("text47"));
      }
      let _0x29480d = _0xe35921("[data-test=\"challenge-text-input\"][value=\"\"]");
      if (!_0x29480d.length) {
        _0x29480d = _0xe35921("input[value=\"\"]");
      }
      let _0x337101 = new Event("input", {
        'bubbles': true
      });
      let _0x1a0b5e = () => {
        let _0x1f4eda = Array.from(_0xe35921("[data-test=\"challenge-choice\"] [data-test=\"challenge-judge-text\"]"));
        Array.from(_0x29480d).forEach((_0x4b941f, _0x46c526) => {
          if (_0x1f4eda.length > 0x0) {
            let _0x34e761 = _0x1f4eda.find(_0x11667d => _0x4207dc[_0x46c526].startsWith(_0x11667d.textContent));
            _0x34e761?.['click']();
            _0x4207dc[_0x46c526] = _0x4207dc[_0x46c526].replace(_0x34e761?.["textContent"], '');
          }
          this.nativeInputValueSetter.call(_0x4b941f, _0x4207dc[_0x46c526]);
          _0x4b941f.dispatchEvent(_0x337101);
        });
      };
      if (this.isTurboMode) {
        _0x1a0b5e();
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        _0x1a0b5e();
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengePartialReverseTranslate"] = function () {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let _0x549c9b = _0x3a2c6e("[class=\"_2pNyl _32bZV Id-Wa\"]")?.["textContent"];
      let _0x10653d = _0x3a2c6e("span[contenteditable=\"true\"]");
      let _0x5204a9 = new Event("input", {
        'bubbles': true
      });
      if (this.isTurboMode) {
        _0x10653d.innerText = _0x549c9b;
        _0x10653d.dispatchEvent(_0x5204a9);
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        _0x10653d.innerText = _0x549c9b;
        _0x10653d.dispatchEvent(_0x5204a9);
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengeCompleteReverseTranslation"] = function (_0x206c77) {
      let _0x2ff80 = _0x3a2c6e("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (_0x2ff80) {
        this.handleChallengeTranslate(_0x206c77);
        return;
      }
      this.handleChallengeTextInput(_0x206c77);
    };
    ["handleChallengeTapComplete"] = function (_0xb5af30) {
      if (!this.isAuto) {
        return;
      }
      let _0x5f10bc = Array.from(_0xe35921("[data-test=\"word-bank\"] [data-test=\"challenge-tap-token-text\"]"));
      let _0x381d4a = null;
      switch (_0xb5af30) {
        case "challenge-tapCompleteTable":
          _0x381d4a = (_0x4ee3ef => {
            let _0x2d8d40 = _0x4ee3ef.reduce((_0x2b7ae8, _0x36a1f3) => (_0x36a1f3.forEach(_0x2d8116 => {
              let {
                text: _0x1322cc,
                isBlank: _0x3e4a32
              } = _0x2d8116[0x0];
              if (_0x3e4a32) {
                let _0x5dafca = _0x5f10bc.findIndex(_0x2831ed => _0x2831ed.textContent === _0x1322cc);
                _0x2b7ae8.push(_0x5dafca);
              }
            }), _0x2b7ae8), []);
            return _0x2d8d40;
          })(this.getData("displayTableTokens"));
          break;
        case "challenge-tapClozeTable":
          _0x381d4a = (_0x40f71a => {
            let _0x4bcb48 = _0x40f71a.reduce((_0x361fe9, _0x16425f) => (_0x16425f.forEach(_0x3ab6bf => {
              let {
                text: _0x58fcca,
                damageStart: _0x5155a3
              } = _0x3ab6bf[0x0];
              if (_0x5155a3) {
                let _0x1df763 = _0x58fcca.slice(_0x5155a3);
                let _0x35aa27 = _0x5f10bc.findIndex(_0x4e5987 => _0x4e5987.textContent === _0x1df763);
                _0x361fe9.push(_0x35aa27);
              }
            }), _0x361fe9), []);
            return _0x4bcb48;
          })(this.getData("displayTableTokens"));
          break;
        default:
          _0x381d4a = this.getData("correctIndices");
      }
      if (!_0x381d4a) {
        return this.autoduoError(_0x348210("text47"));
      }
      if (this.isTurboMode) {
        for (let _0x28e43e of _0x381d4a) _0x5f10bc[_0x28e43e].click();
        this.setSolving(false);
        this.nextQuestion(true);
        return;
      }
      let _0x204494 = () => {
        setTimeout(() => {
          if (0x0 === _0x381d4a.length) {
            this.setSolving(false);
            this.nextQuestion(true);
            return;
          }
          let _0xc07b8d = _0x381d4a.shift();
          _0x5f10bc[_0xc07b8d].click();
          _0x204494();
        }, this.randomSafeDelayTime());
      };
      _0x204494();
    };
    ["handleSkipChallenge"] = function () {
      setTimeout(() => {
        let _0x297266 = _0x3a2c6e("[data-test=\"player-skip\"]");
        if (!_0x297266) {
          setTimeout(this.handleSkipChallenge.bind(this), 0x190);
          return;
        }
        _0x297266.click();
        setTimeout(() => {
          this.setSolving(false);
          this.nextQuestion();
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ['nextQuestion'] = function (_0x316f2e = false) {
      if (!this.isAuto) {
        return;
      }
      if (this.isTurboMode && _0x316f2e) {
        let _0x387efa = () => {
          if (!this.isAuto) {
            _0x7d13e6.disconnect();
            clearTimeout(_0x4b1329);
            return;
          }
          let _0x96ad5c = _0x3a2c6e("[data-test=\"player-next\"][aria-disabled=\"false\"]");
          if (_0x96ad5c) {
            _0x7d13e6.disconnect();
            clearTimeout(_0x4b1329);
            this.nextQuestion();
          }
        };
        let _0x4b1329 = setTimeout(() => {
          _0x7d13e6.disconnect();
          this.nextQuestion();
        }, 0x1f4);
        let _0x7d13e6 = new MutationObserver(_0x387efa);
        _0x7d13e6.observe(document.body, {
          'childList': true,
          'subtree': true
        });
        _0x387efa();
        return;
      }
      this.isPreviewVersion;
      let _0x1eebe7 = _0x3a2c6e("[class=\"_1XNQX\"]");
      if (_0x1eebe7) {
        let _0x336f5b = this.getExpState(_0x1eebe7);
        if (undefined !== _0x336f5b) {
          let {
            totalXpThisSession: _0x560030,
            hasXpBoost: _0x486b69
          } = _0x336f5b;
          this.exp += _0x560030;
          this.expElm.innerText = this.exp;
          let _0x3a2b02 = Date.now();
          let _0x5da1cf = _0x3a2b02 - this.startTime;
          this.totalTime += _0x5da1cf;
          this.startTime = _0x3a2b02;
          this.renderTime();
          _0x67a80b({
            'exp': this.exp,
            'time': this.totalTime
          });
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= _0x3a2b02) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              let _0xce674 = this.isPassMode ? _0x348210('text51', this.passValue, this.passModeValue) : '';
              setTimeout(() => {
                alert(_0x348210("text52", this.exp, this.targetModeValue) + _0xce674);
              }, 0x7d0);
              this.handleTargetModeOff(true);
              let _0x214c73 = _0x3a2c6e("[data-test=\"player-next\"]");
              if (_0x214c73) {
                _0x214c73.click();
              }
              return;
            }
            this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
          }
          if (this.isAutoGetX2 && this.isAutoFarmXP) {
            if (!_0x486b69) {
              this.handleGetX2(!this.isGettingX2);
              return;
            }
            if (this.isGettingX2 && _0x486b69) {
              this.handleGotX2();
              return;
            }
          }
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          let _0x1a9bed = window.location.pathname;
          if ((_0x1a9bed === this.practicePath || _0x1a9bed === this.listeningPacticePath) && (this.totalReloadTime += _0x5da1cf) >= this.reloadTime) {
            window.location.reload();
            return;
          }
          let _0x5ab4c0 = _0x3a2c6e("[data-test=\"player-practice-again\"]");
          if (_0x5ab4c0) {
            _0x5ab4c0.click();
            setTimeout(this.handlePracticeChallenge.bind(this), 0x7d0);
            return;
          }
        }
      }
      let _0x3ec997 = _0x3a2c6e("[data-test=\"player-next\"]");
      if (!_0x3ec997) {
        let _0x5e3d81 = _0x3a2c6e("[data-test=\"legendary-session-end-continue\"]");
        if (_0x5e3d81) {
          _0x5e3d81.click();
          setTimeout(this.nextQuestion.bind(this), 0x1f4);
          return;
        }
        if (this.isPassMode) {
          setTimeout(this.handlePassMode.bind(this), 0x3e8);
          return;
        }
        setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
        return;
      }
      let _0x2cca60 = _0x3ec997.getAttribute('aria-disabled');
      this.isPreviewVersion;
      let _0x3dfa0c = _0x3ec997.classList.contains("_3whsM");
      if ("true" === _0x2cca60 && !_0x3dfa0c) {
        setTimeout(this.doChallenge.bind(this), this.nextTime);
        return;
      }
      if (!_0x3dfa0c) {
        _0x3ec997.click();
      }
      setTimeout(this.nextQuestion.bind(this), this.nextTime);
    };
    ["continueStory"] = function () {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let _0x51c208 = _0x3a2c6e("[class=\"_2ZCEq _2CoFd\"]");
      if (_0x51c208 && true !== _0x51c208.wasGetExp) {
        let _0x3f80ab = this.getExpStory(_0x51c208);
        if (_0x3f80ab) {
          let {
            sessionXp: _0x492718,
            hasXpBoost: _0x25b3e7
          } = _0x3f80ab;
          this.exp += _0x492718;
          this.expElm.innerText = this.exp;
          let _0x582dfd = Date.now();
          this.totalTime += _0x582dfd - this.startTime;
          this.renderTime();
          _0x67a80b({
            'exp': this.exp,
            'time': this.totalTime
          });
          _0x51c208.wasGetExp = true;
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= _0x582dfd) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              setTimeout(() => {
                let _0x575c67 = this.isPassMode ? _0x348210('text51', this.passValue, this.passModeValue) : '';
                setTimeout(() => {
                  alert(_0x348210('text52', this.exp, this.targetModeValue) + _0x575c67);
                }, 0x3e8);
                this.handleTargetModeOff(true);
              }, 0x7d0);
            } else {
              this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
            }
          }
          if (this.isAutoGetX2 && this.isAutoFarmXP) {
            if (!_0x25b3e7) {
              this.handleGetX2(!this.isGettingX2);
              return;
            }
            if (this.isGettingX2 && _0x25b3e7) {
              this.handleGotX2();
              return;
            }
          }
        }
      }
      let _0x441acc = _0x3a2c6e("[data-test=\"stories-player-continue\"]");
      if (!_0x441acc) {
        let _0x487fb7 = _0x3a2c6e("[data-test=\"stories-player-done\"]");
        if (_0x487fb7) {
          _0x487fb7.click();
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          if (this.isPassMode) {
            setTimeout(this.handlePassMode.bind(this), 0x3e8);
            return;
          }
          let _0x9e7347 = () => {
            setTimeout(() => {
              if (document.body.contains(_0x487fb7)) {
                _0x487fb7.click();
                _0x9e7347();
                return;
              }
              setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
            }, 0x320);
          };
          _0x9e7347();
          return;
        }
        return this.autoduoError(_0x348210("text53"));
      }
      let _0x196108 = _0x441acc.disabled;
      if (_0x196108) {
        let _0x14af72 = _0x441acc.classList.contains("_3CBig");
        if (_0x14af72) {
          setTimeout(this.continueStory.bind(this), 0x7d0);
          return;
        }
        let _0xcd38a0 = this.getDataStory();
        if (_0xcd38a0) {
          this.doChallengeStory(_0xcd38a0);
          return;
        }
        setTimeout(this.continueStory.bind(this), 0x3e8);
        return;
      }
      _0x441acc.click();
      setTimeout(this.continueStory.bind(this), 0x2bc);
    };
    ["doChallengeStory"] = function (_0x3fed5b) {
      if (this.isAuto) {
        this.setSolving(true);
        switch (_0x3fed5b.type) {
          case 'multiple-choice':
          case "select-phrases":
            this.handleStoryMultipleChoice(_0x3fed5b.correctAnswerIndex);
            break;
          case "point-to-phrase":
            this.handleStoryPointToPhrase(_0x3fed5b.parts[_0x3fed5b.correctAnswerIndex].text);
            break;
          case "match":
            this.handleStoryMatch(_0x3fed5b.dictionary);
            break;
          case 'arrange':
            this.handleStoryArrange([..._0x3fed5b.phraseOrder]);
            break;
          default:
            return this.autoduoError(_0x348210("text46", _0x3fed5b.type));
        }
      }
    };
    ["handleStoryMultipleChoice"] = function (_0x39be79) {
      if (!this.isAuto) {
        return;
      }
      let _0x44d29e = _0xe35921("[data-test=\"stories-choice\"]");
      setTimeout(() => {
        _0x44d29e[_0x39be79].click();
        this.setSolving(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ["handleStoryPointToPhrase"] = function (_0x5be17a) {
      if (!this.isAuto) {
        return;
      }
      let _0xd215fe = Array.from(_0xe35921("[data-test=\"challenge-tap-token-text\"]"));
      let _0x173cda = _0xd215fe.find(_0x7e8e89 => _0x7e8e89.innerText === _0x5be17a);
      if (!_0x173cda) {
        return this.autoduoError(_0x348210("text54"));
      }
      setTimeout(() => {
        _0x173cda.click();
        this.setSolving(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ["handleStoryMatch"] = function (_0x15acb9) {
      if (!this.isAuto) {
        return;
      }
      let _0x4e59ba = Array.from(_0xe35921("[data-test=\"challenge-tap-token-text\"]"));
      let _0x49002a = _0x4e59ba.splice(_0x4e59ba.length / 0x2);
      let _0x33ad48 = null;
      let _0x5a64e7 = () => {
        setTimeout(() => {
          if (0x0 === _0x49002a.length) {
            this.setSolving(false);
            this.continueStory();
            return;
          }
          if (null === _0x33ad48) {
            let _0x12626f = _0x4e59ba.shift();
            _0x12626f.click();
            _0x33ad48 = _0x15acb9["from:" + _0x12626f.innerText] || _0x15acb9['from:' + _0x12626f.innerText + " "];
          } else {
            let _0x280f79 = _0x49002a.findIndex(_0x10a893 => _0x10a893.innerText === _0x33ad48);
            if (-0x1 === _0x280f79) {
              return this.autoduoError(_0x348210('text55'));
            }
            _0x49002a[_0x280f79].click();
            _0x49002a.splice(_0x280f79, 0x1);
            _0x33ad48 = null;
          }
          _0x5a64e7();
        }, this.randomSafeDelayTime());
      };
      _0x5a64e7();
    };
    ["handleStoryArrange"] = function (_0x46ea0e) {
      if (!this.isAuto) {
        return;
      }
      let _0x2ffb5c = _0xe35921("[data-test=\"challenge-tap-token-text\"]");
      let _0x60a0cd = () => {
        setTimeout(() => {
          if (0x0 === _0x46ea0e.length) {
            this.setSolving(false);
            this.continueStory();
            return;
          }
          let _0x1412d3 = _0x46ea0e.shift();
          _0x2ffb5c[_0x1412d3].click();
          _0x60a0cd();
        }, this.randomSafeDelayTime());
      };
      _0x60a0cd();
    };
    ["getDataStory"] = function () {
      let _0x296eaf = this.dataStateNode?.["props"]?.["currentChallengeSession"];
      return _0x296eaf;
    };
    ["getExpStory"] = function (_0x631047) {
      let _0x246e2f = Object.keys(_0x631047).find(_0x341eab => /^__reactProps/g.test(_0x341eab));
      return _0x631047?.[_0x246e2f]?.["children"]?.['props'];
    };
    ["handleRadioChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let _0x12df57 = _0x3a2c6e("[class=\"_1KW2f\"]");
      if (_0x12df57) {
        this.doRadioChallenge();
        return;
      }
      let _0x125c01 = _0x3a2c6e("[data-test=\"player-next\"]");
      if (_0x125c01) {
        this.nextQuestion();
        return;
      }
      setTimeout(this.handleRadioChallenge.bind(this), 0x5dc);
    };
    ["doRadioChallenge"] = function () {
      this.setSolving(true);
      let _0x43484e = this.getData('type');
      switch (_0x43484e) {
        case "radioListenMatch":
          this.handleRadioListenMatchChallenge();
          break;
        case "radioBinary":
          this.handleRadioBinaryChallenge();
          break;
        case "radioListenRecognize":
          this.handleRadioListenRecognizeChallenge();
          break;
        case 'radioSelect':
        case "radioImageSelect":
          this.handleRadioChoiceChallenge();
          break;
        default:
          return this.autoduoError(_0x348210('text46', _0x43484e));
      }
    };
    ['handleRadioListenMatchChallenge'] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x1562e3 = Array.from(_0xe35921("button[data-test*=\"challenge-tap-token\"]"));
      let _0x27b825 = _0x1562e3.splice(_0x1562e3.length / 0x2);
      this.listenMatchHandlerGeneral(_0x1562e3, _0x27b825, () => {
        this.setSolving(false);
        setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
      });
    };
    ["handleRadioBinaryChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x423def = _0xe35921("[data-test=\"challenge-choice\"]");
      if (_0x423def.length < 0x1) {
        this.autoduoError(_0x348210('text54'));
      }
      _0x423def.forEach(_0x215030 => _0x215030.click());
      this.setSolving(false);
      setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
    };
    ["handleRadioListenRecognizeChallenge"] = function () {
      if (!this.isAuto) {
        return;
      }
      let _0x1ac6ee = _0xe35921("[data-test=\"challenge-choice\"]");
      let _0x3cce46 = this.getData("correctIndices");
      let _0x45169d = () => {
        if (_0x3cce46.length <= 0x0) {
          this.setSolving(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
          return;
        }
        let _0x39cf16 = _0x3cce46.shift();
        _0x1ac6ee[_0x39cf16].click();
        setTimeout(_0x45169d, this.randomSafeDelayTime());
      };
      _0x45169d();
    };
    ["handleRadioChoiceChallenge"] = function () {
      if (this.isAuto) {
        this.handleChallengeChoiceGeneral(() => {
          this.setSolving(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
        });
      }
    };
    ["findReactProps"] = function (_0x4a7dc4) {
      this.reactProps = Object.keys(_0x4a7dc4).find(_0x460ab1 => _0x460ab1.startsWith("__reactProps"));
      if (!this.reactProps) {
        return this.autoduoError(_0x348210('text56'));
      }
    };
    ["getDataStateNode"] = function (_0x505761) {
      if (null === this.reactProps) {
        this.findReactProps(_0x505761);
      }
      let _0x51f8a9 = _0x505761?.[this.reactProps]?.[this.lessGenealogy];
      if (Array.isArray(_0x51f8a9)) {
        this.dataStateNode = _0x51f8a9?.[0x0]?.["_owner"]?.['stateNode'];
      } else {
        this.dataStateNode = _0x51f8a9?.['_owner']?.["stateNode"];
      }
    };
    ["getData"] = function (_0x2825b1) {
      let _0x2c0f2d = this.dataStateNode?.['props']?.["currentChallenge"];
      if (!_0x2c0f2d) {
        return this.autoduoError(_0x348210("text57"));
      }
      if (Array.isArray(_0x2825b1)) {
        let _0x1c6523 = _0x2825b1.reduce((_0x334106, _0x2bc8dc) => {
          if (null === _0x334106) {
            return null;
          }
          let _0x230a88 = _0x334106[_0x2bc8dc];
          return _0x230a88 || null;
        }, _0x2c0f2d);
        return Array.isArray(_0x1c6523) ? [..._0x1c6523] : _0x1c6523;
      }
      {
        let _0x145237 = _0x2c0f2d[_0x2825b1];
        return Array.isArray(_0x145237) ? [..._0x145237] : _0x145237;
      }
    };
    ["getExpState"] = function (_0x229f05) {
      let _0x2830cb = Object.keys(_0x229f05);
      let _0x174942 = _0x2830cb.find(_0x41fbcb => _0x41fbcb.startsWith('__reactProps'));
      let _0x29ef2b = _0x229f05?.[_0x174942]?.['children']?.["props"]?.["slide"]?.["xpGoalSessionProgress"];
      return _0x29ef2b;
    };
    ["renderTime"] = function () {
      let _0x1c730f = _0x4c3d28(this.totalTime);
      this.dateElm.innerText = _0x1c730f;
    };
    ["showKeyBtnLoading"] = function (_0x2f3ab7) {
      if (_0x2f3ab7) {
        this.keyBtn.appendChild(this.btnLoading);
      } else {
        this.keyBtn.removeChild(this.btnLoading);
      }
      this.isFetching = _0x2f3ab7;
    };
    ["setSolving"] = function (_0x111a2c) {
      this.isSolving = _0x111a2c;
    };
    ["setSafeMode"] = function (_0x5d977f) {
      this.isSafeMode = _0x5d977f;
      this.safeDelayTime = _0x5d977f ? this.safeDelayTimeTemp : 0x0;
      _0x67a80b('isSafeMode', _0x5d977f);
      return _0x5d977f;
    };
    ["randomSafeDelayTime"] = function () {
      return this.isSafeMode ? Math.floor(Math.random() * (this.safeDelayTime - 0x64) + 0x64) : 0x0;
    };
    ['sleep'] = async function (_0x22c46b) {
      await new Promise(_0x27ef10 => setTimeout(_0x27ef10, _0x22c46b));
    };
    ["updatePassModeState"] = function () {
      this.passModeLabel.innerText = _0x348210("text59", this.passValue, 0xf423f === this.passModeValue ? 'в€ћ' : this.passModeValue);
      _0x67a80b("passValue", this.passValue);
    };
    ["openBoxReward"] = function () {
      let _0x15ac8a = _0x3a2c6e("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/09f977a3e299d1418fde0fd053de0beb.svg\"]");
      return !!_0x15ac8a && (_0x15ac8a.click(), setTimeout(this.handlePassMode.bind(this), 0x3e8), true);
    };
    ['skipCharacterGate'] = function () {
      let _0x4a17ff = _0x3a2c6e("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f67d6256f5ccdb54af08633d69e27ef8.svg\"]");
      if (_0x4a17ff) {
        _0x4a17ff.click();
        setTimeout(() => {
          let _0x1b8149 = _0x3a2c6e("a[data-test*=\"skill-path-state-active\"] + button");
          _0x1b8149?.['click']();
        }, 0x320);
        setTimeout(() => {
          let _0xdd7b9e = _0x3a2c6e("button[data-test=\"notification-drawer-no-thanks-button\"]");
          _0xdd7b9e?.["click"]();
        }, 0x640);
        setTimeout(this.handlePassMode.bind(this), 0xe10);
        return true;
      }
    };
    ['autoduoDecode'] = function (_0x484140) {
      let _0x47f095 = _0x484140.slice(0xd);
      try {
        return JSON.parse(atob(_0x47f095));
      } catch (_0x1b5b4e) {
        return null;
      }
    };
    ['autoduoFeatureDisabled'] = function () {
      let _0x4bf58a = this.isAutoFarmXP ? "Auto Farm XP" : this.isLegendMode ? _0x348210("text23") : this.isPassMode ? _0x348210("text32") : '';
      if (_0x4bf58a) {
        window.alert(_0x348210("text81", _0x4bf58a, _0x4bf58a));
      }
    };
    ["autoduoStopAllAuto"] = function () {
      if (this.isSolving) {
        this.setSolving(false);
      }
      if (this.isLegendMode) {
        this.stopLegend();
      }
      if (this.isAutoFarmXP) {
        this.handleFarmXPOff();
      }
      if (this.isPassMode) {
        this.handlePassModeOff();
      }
    };
    ["autoduoDisableFeatures"] = function (..._0x52e80f) {
      _0x52e80f.forEach(_0x21d686 => {
        _0x21d686.classList.add('autoduo-disabled');
        _0x21d686.isDisabled = true;
      });
    };
    ["autoduoEnableFeatures"] = function (..._0x31de96) {
      _0x31de96.forEach(_0x5618a8 => {
        _0x5618a8.classList.remove("autoduo-disabled");
        _0x5618a8.isDisabled = false;
      });
    };
    ["autoduoSkipBtn"] = function () {
      let _0x117fe2 = _0x3a2c6e(this.skipLegendarySuggestionBtn) || _0x3a2c6e("[data-test=\"practice-hub-ad-no-thanks-button\"]") || _0x3a2c6e("[data-test=\"plus-no-thanks\"]") || _0x3a2c6e("[data-test=\"story-start\"]");
      if (_0x117fe2) {
        _0x117fe2.click();
        return true;
      }
    };
    ["autoduoError"] = function (_0x417a62) {
      this.autoduoStopAllAuto();
      alert("ERROR: " + _0x417a62);
    };
    ["autoduoLessonError"] = function (_0x5e3c86) {
      this.isPreviewVersion;
      let _0x533af2 = _0x3a2c6e("._2VEsk");
      return _0x533af2 ? (_0x533af2.click(), setTimeout(() => {
        this.autoduoError(_0x5e3c86 + _0x348210('text65'));
      }, 0x320)) : this.autoduoError(_0x5e3c86);
    };
    ['autoduoCreateSwitch'] = function (_0x5dc7c5 = '', _0x4ea8af, _0x197473, _0x2ec1d6) {
      let _0x11c9e8 = document.createElement('i');
      Object.assign(_0x11c9e8, {
        'className': 'switch-info-listening',
        'title': _0x348210("text15"),
        'onclick'() {
          alert(_0x5dc7c5);
        }
      });
      let _0x491c83 = document.createElement('input');
      Object.assign(_0x491c83, {
        'type': "checkbox",
        'hidden': true,
        'checked': _0x197473
      });
      let _0x1a2062 = _0x3295bc => {
        _0x491c83.checked = _0x3295bc;
      };
      let _0x53c281 = document.createElement("label");
      _0x53c281.addEventListener("click", () => {
        _0x2ec1d6(_0x1a2062);
      });
      let _0x5024a4 = document.createElement("div");
      _0x5024a4.className = "switch-container-listening";
      _0x5024a4.append(_0x11c9e8, _0x491c83, _0x53c281);
      _0x4ea8af.classList.add("switch-wrapper-listening");
      _0x4ea8af.append(_0x5024a4);
      _0x4ea8af.setAutoduoSwitch = _0x1a2062;
    };
    ["showGuide"] = function () {
      alert(_0x348210("text60"));
    };
    ["createStyle"] = function () {
      this.animationStyle = document.createElement('style');
      this.animationStyle.innerHTML = "\n\t\t\timg, svg, canvas {\n\t\t\t\tvisibility: hidden !important;\n\t\t\t} \n\t\t\tdiv:not(.autoduo-animate):not(.setting-overlay-listening) {\n\t\t\t\ttransition: none !important;\n\t\t\t\tanimation-duration: 0s !important;\n\t\t\t}\n\t\t\t.fSJFz {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\t";
      let _0x28238d = document.createElement("style");
      _0x28238d.innerHTML = "\n\t\t\t/* New feature temp */\n\t\t\tbutton.setting-btn-listening::after,\n\t\t\t.auto-x2-wrapper label::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 6px;\n\t\t\t\tright: 10px;\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 10px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: red;\n\t\t\t\tanimation: x2-eff 1s infinite;\n\t\t\t}\n\t\t\t.auto-x2-wrapper label::before {\n\t\t\t\tright: calc(100% + 6px);\n    \t\t\ttop: 2px;\n\t\t\t}\n\n\t\t\t:root{\n\t\t\t\t--autoduo-bg: 255,255,255;\n\t\t\t\t--autoduo-color: 75,75,75;\n\t\t\t\t--autoduo-h-color: 170,0,176;\n\t\t\t}\n\t\t\t:root[data-duo-theme=\"dark\"]{\n\t\t\t\t--autoduo-bg: 19,31,36;\n\t\t\t\t--autoduo-color: 241,247,251;\n\t\t\t\t--autoduo-h-color: 241,247,251;\n\t\t\t}\n\t\t\t.control-container-listening{\n\t\t\t\tposition: fixed;\n                z-index: 9999999;\n                left: 20px;\n                bottom: 75px;\n\t\t\t\tpadding: 12px 10px;\n\t\t\t\tborder: 2px dotted #555555;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbox-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg), 0.4);\n\t\t\t\tbackdrop-filter: blur(4px);\n\t\t\t}\n\t\t\t.autoduo-animate{\n\t\t\t\tanimation: autoduo-control-eff .15s;\n\t\t\t}\n\t\t\t.autoduo-animate::after{\n\t\t\t\tanimation: autoduo-control-border-eff .35s .12s backwards;\n\t\t\t}\n\t\t\t@keyframes autoduo-control-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(.8);\n\t\t\t\t\topacity: .5;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes autoduo-control-border-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1.15);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.control-container-listening::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\tinset: 0;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 5px;\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t.control-container-listening.event{border-color: #ff0000}\n\t\t\t.control-container-listening.event::after{box-shadow: rgb(217 138 138 / 50%) 0px 0px 0px 5px;}\n            .auto-container-listening{\n\t\t\t\twidth: 250px !important;\n            }\n\t\t\t.setting-overlay-listening {\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tpadding: inherit;\n\t\t\t\tpadding-bottom: 20px;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackdrop-filter: inherit;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg), 0.8);\n\t\t\t\tanimation: setting-overlay-eff 0.4s;\n\t\t\t}\n\t\t\t@keyframes setting-overlay-eff {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\ttransform: perspective(450px) rotateY(-90deg);\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransform: perspective(450px) rotateY(0deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t.setting-overlay-listening h3 {\n\t\t\t\tpadding: 8px 0 12px 0;\n\t\t\t\ttext-align: center;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t\t.setting-function-listening{\n\t\t\t\tflex-grow: 1;\n\t\t\t}\n\t\t\t.setting-function-listening .switch-wrapper-listening {\n\t\t\t\tmargin-bottom: 11px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\t\t\t.close-setting-btn-listening {\n\t\t\t\twidth: 80%;\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\t\t\t.autoduo-btn {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\theight: 46px;\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tcolor: rgb(var(--autoduo-bg));\n\t\t\t\tborder: none;\n\t\t\t\tborder-radius: 16px;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tletter-spacing: 1px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-btn::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: -1;\n\t\t\t\tbackground-color: #1cb0f6;\n\t\t\t\tcolor: rgb(15, 131, 186);\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbox-shadow: 0 4px 0;\n\t\t\t}\n\t\t\t.autoduo-btn:hover {\n\t\t\t\tfilter: brightness(1.1);\n\t\t\t}\n\t\t\t.autoduo-btn:active {\n\t\t\t\ttransform: translateY(4px);\n\t\t\t}\n\t\t\t.autoduo-btn:active::before {\n\t\t\t\tbox-shadow: none;\n\t\t\t}\n\n\t\t\t.btn-green::before{\n\t\t\t\tbackground-color: #58CC02;\n\t\t\t\tcolor: rgb(80, 151, 0);\n\t\t\t}\n\t\t\t.btn-red::before {\n\t\t\t\tbackground-color: #FF4B4B;\n\t\t\t\tcolor: rgb(234,43,43);\n\t\t\t}\n\t\t\t.btn-blue::before {\n\t\t\t\tbackground-color: rgb( 60,77,255 );\n\t\t\t\tcolor: rgb( 63,34,236 );\n\t\t\t}\n\t\t\t.btn-white {\n\t\t\t\tcolor: #1cb0f6;\n\t\t\t}\n\t\t\t.btn-white:hover {\n\t\t\t\tfilter: brightness(0.85);\n\t\t\t}\n\t\t\t.btn-white::before {\n\t\t\t\tbackground-color: white;\n\t\t\t\tcolor: rgb(85 200 255);\n\t\t\t\tborder: 2px solid #8fdbff;\n\t\t\t\tbox-shadow: 0 2px 0;\n\t\t\t}\n\t\t\t.btn-orange::before {\n\t\t\t\tcolor: #ac8700;\n\t\t\t\tbackground-color: #fb9f00;\n\t\t\t}\n\t\t\t.btn-purple::before {\n\t\t\t\tbackground-color: #e800ff;\n\t\t\t\tcolor: pink;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening {\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening::before {\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/setting.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 22px;\n\t\t\t\tbackground-position: 18px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening{\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100% !important;\n\t\t\t\tmargin-top: 8px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening::before {\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/xp.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 32px;\n\t\t\t\tbackground-position: 12px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.auto-x2::before {\n\t\t\t\tbackground-image: none;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.auto-x2::after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\tleft: 16px;\n\t\t\t\twidth: 25px;\n\t\t\t\theight: 30px;\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/exp.svg);\n\t\t\t\tbackground-size: contain;\n    \t\t\tfilter: drop-shadow(0px 0px 6px white);\n\t\t\t\tanimation: x2-eff 1.1s infinite;\n\t\t\t}\n\t\t\t@keyframes x2-eff {\n\t\t\t\t0%, 100% {\n\t\t\t\t\ttransform: scale(0.8);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(1.05);\n\t\t\t\t}\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening label {\n\t\t\t\tdisplay: none;\n\t\t\t\tfont-size: 9px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.farming-location label{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.autoduo-disabled {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.autoduo-disabled::before{\n\t\t\t\tbackground-color: #9c9c9c !important;\n    \t\t\tcolor: #686868 !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.turbo.running::before{\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/thunder.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: right;\n\t\t\t}\n\t\t\t.feedback-btn-listening, .dropkey-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\twidth: calc(45% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening{\n\t\t\t\tmargin-right: 4px;\t\n\t\t\t\twidth: calc(55% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening::before{\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/streak2.svg), url(https://ktnff.tech/assets/autoduo/streak2.svg),url(https://ktnff.tech/assets/autoduo/streak-ground.svg);\n\t\t\t\tbackground-size: 12%, 14%, cover;\n\t\t\t\tbackground-position: 6px 27px, 111px 2px, center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t}\n            .statistic-listening {\n                color: rgb(var(--autoduo-color));\n                font-size: 18px;\n                font-weight: bold;\n            }\n\t\t\t.statistic-listening p{\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.statistic-listening > p::before{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmin-width: 68px;\n\t\t\t}\n\t\t\t.statistic-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tmargin: 14px 0;\n\t\t\t}\n\t\t\t.time-listening, .total-exp-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 0 !important;\n\t\t\t}\n\t\t\t.time-listening::before,\n\t\t\t.total-exp-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 21px;\n\t\t\t\theight: 21px;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/clock.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.total-exp-listening::before{\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 21px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/exp.svg');\n\t\t\t}\n            .total-exp-listening::after{\n                content: 'XP';\n\t\t\t\tmargin-left: 4px;\n            }\n\t\t\t.key-container-listening{\n\t\t\t\twidth: 250px;\n\t\t\t\ttext-align:center;\n\t\t\t}\n\t\t\t.key-container-listening > * {\n\t\t\t\tfont-size: 15px !important;\n\t\t\t}\n\t\t\t.key-input-listening{\n                border: 2px solid #aaa;\n                width: 100%;\n                padding: 12px 8px;\n                border-radius: 8px;\n                background-color: #eee;\n            }\n            .key-btn-listening {\n\t\t\t\tposition: relative;\n                width: 100%;\n\t\t\t\tmargin: 6px 0;\n            }\n\t\t\t.loading-listening{\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: #58CC02;\n    \t\t\tborder-radius: inherit;\n\t\t\t}\n\t\t\t.guide-btn-listening, .getlink-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\twidth: calc(50% - 3px);\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\t.getlink-btn-listening{\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t\t.getlink-btn-listening::before {\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/key.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: center 21px;\n    \t\t\tbackground-size: 25px;\n\t\t\t}\n\t\t\t.guide-getlink-btn-listening, .key-vip-btn-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 8px;\n\t\t\t}\n\t\t\t.key-vip-btn-listening{\n\t\t\t\tcolor: yellow;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::before{\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/twinkle.ndx');\n    \t\t\tbackground-size: 85px auto;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.signature-listening{\n\t\t\t\tposition: fixed;\n                z-index: 99999999;\n\t\t\t\ttop: 4px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tcolor: rgb(var(--autoduo-h-color));\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tfont-style: italic;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\twidth: max-content;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.signature-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/autoduosuperThumb.ndx);\n\t\t\t\tbackground-size: cover;\n\t\t\t\tmargin: -4px 0;\n\t\t\t\tmargin-right: 4px;\n\t\t\t}\n\t\t\t.autoduo-language-wrapper{\n\t\t\t\tposition: relative;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tcolor: rgb(var(--autoduo-color));\n\t\t\t}\n\t\t\t.autoduo-language-wrapper::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 8px;\n\t\t\t\twidth: 8px;\n\t\t\t\theight: 8px;\n\t\t\t\tborder: 1.5px solid currentColor;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-left: none;\n\t\t\t\ttransform: rotate(45deg) skew(-8deg, -8deg);\n\t\t\t}\n\t\t\t.autoduo-language-selection{\n\t\t\t\tdisplay: none;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tpadding: 4px 0;\n\n\t\t\t\tbackground: #848484;\n\t\t\t\tcolor: white;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbox-shadow: rgb(104 149 199 / 50%) 0px 0px 0px 3px;\n\t\t\t\tanimation: language-selection-eff .25s;\n\t\t\t}\n\t\t\t.signature-listening.event .autoduo-language-selection{\n\t\t\t\tbox-shadow: rgb(255 111 111 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.autoduo-language-selection.show{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t@keyframes language-selection-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(12px);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.autoduo-language-option,\n\t\t\t.autoduo-language-selected{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\ttransition: all .15s;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-language-option:hover{\n\t\t\t\tbackground-color: #595959;\n\t\t\t}\n\t\t\t.autoduo-language-selected{\n\t\t\t\tmargin: 0;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tborder: 1px solid #d6d6d6;\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tpadding: 3px 8px;\n\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\t\t\t\tbackground-color: rgba(var(--autoduo-bg),0.5);\n\t\t\t}\n\t\t\t.autoduo-language-selected:hover{\n\t\t\t\tfilter: brightness(0.9);\n\t\t\t}\n\t\t\t.autoduo-language-icon{\n\t\t\t\twidth: 24px;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin-right: 6px;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-image: var(--data-icon);\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\n\t\t\t.key-type-listening::before,\n\t\t\t.key-expired-listening::before {\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.vip-type-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #555555;\n\t\t\t\tbackground-color: #ffe0fd;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid #555555;\n\t\t\t}\n\t\t\t.vip-type-listening.event {\n\t\t\t\tcolor: red;\n\t\t\t\tbackground-color: #ffedf0;\n\t\t\t\tborder-color: red;\n\t\t\t}\n\t\t\t.vip-type-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.vip-expired-listening{\n\t\t\t\tcolor: #555555;\n\t\t\t\tletter-spacing: -1px;\n\t\t\t}\n\t\t\t.vip-expired-listening.event{\n\t\t\t\tcolor: #ff0000;\n\t\t\t}\n\t\t\t.show-hide-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 999999999;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tcolor: rgb(var(--autoduo-h-color));\n\t\t\t\tbackground-color: #00DBDE;\n\t\t\t\tbackground-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);\n\t\t\t\tborder-color: #b800c8;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.show-hide-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/vipCircle.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\t\t\t.show-hide-listening::after{\n\t\t\t\tcontent: var(--data-version);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransform: translate(-50%, 130%);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.show-hide-listening.older::after{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t.show-hide-listening i {\n\t\t\t\tposition: relative;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/little-eye.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.show-hide-listening.hide i::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 110%;\n\t\t\t\theight: 5px;\n\t\t\t\ttransform: rotate(45deg) translateX(-3px);\n\t\t\t\tbackground-image: linear-gradient(90deg, #fea0ff 0%, #00DBDE 100%);\n\t\t\t\tborder-radius: 7px;\n\t\t\t}\n\t\t\t.overlay-listening, \n\t\t\t.countdown-overlay-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: 9999;\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\t\t\t.countdown-overlay-listening{\n\t\t\t\tz-index: 999999999;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 12px;\n\n\t\t\t\tbackground-color: rgba(0,0,0,0.5);\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 28px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.countdown-overlay-listening::before{\n\t\t\t\tcontent: var(--data-prefix);\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening::before{\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.autoduo-disabled{\n\t\t\t\topacity: .4;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable{\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable label{\n\t\t\t\topacity: .6;\n\t\t\t}\n\t\t\t.switch-container-listening{\n\t\t\t\tflex-grow: 1;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.switch-info-listening{\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/info.png');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.switch-info-listening:hover{\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening label{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 46px;\n\t\t\t\theight: 24px;\n\t\t\t\tbackground-color: #bbb;\n\t\t\t\tbox-shadow: rgb(0 184 255 / 60%) 0px 0px 0px 3px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.control-container-listening.event .switch-wrapper-listening label{\n\t\t\t\tbox-shadow: rgb(255 85 85 / 62%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening label::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: white;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label{\n\t\t\t\tbackground-color: #1FC2FF;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label::after {\n\t\t\t\tleft: 24px;\n\t\t\t}\n\t\t\t\n\t\t\t.function-wrapper-listening{\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\t\t\t.autoduo-label{\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 99999;\n\t\t\t\tbottom: 6px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.autoduo-label p + p{\n\t\t\t\tmargin-top: 2px;\n\t\t\t}\n\t\t\t.local-label-listening{\n\t\t\t\tmargin: -16px -4px 8px -4px;\n   \t\t\t\tpadding: 12px 16px 0 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tword-wrap: break-word;\n\t\t\t\toverflow-wrap: break-word;\n\t\t\t\tline-height: 16px;\n\t\t\t\tmax-height: 46px;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: #ff65e1;\n\t\t\t\tborder: 1px solid #ffffff;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\tborder-top-right-radius: 0;\n\t\t\t\tanimation: local-label-eff 0.5s;\n\t\t\t}\n\t\t\t@keyframes local-label-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(-70%);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.label-listening{\n\t\t\t\twidth: max-content;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #df0d0d;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tborder-radius: 40px;\n\t\t\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\t\t}\n\t\t\t.targetmode-label-listening::before{\n\t\t\t\tcontent: var(--data-frefix);\n\t\t\t}\n\n\t\t\t.contact-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tmargin: 8px 0 -4px 0;\n\t\t\t}\n\t\t\t.contact-item-listening{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tmargin: 2px 4px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: var(--data-img);\n\t\t\t\tcolor: rgb(var(--autoduo-color));\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransition: .12s;\n\t\t\t}\n\t\t\t.contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 3px;\n\t\t\t\ttransform: scale(1.11);\n\t\t\t}\n\t\t\t.contact-item-listening:hover .popup {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.contact-item-listening .popup {\n\t\t\t\tdisplay: none;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tpadding: 2px 6px;\n\t\t\t\twidth: max-content;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tbackground-color: rgb(var(--autoduo-bg));\n\t\t\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\t\t\tanimation: contact-popup-eff 0.2s;\n\t\t\t}\n\t\t\t@keyframes contact-popup-eff {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tbottom: 50%;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tbottom: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.contact-item-listening .popup::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: calc(100% - 2px);\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tborder: 10px solid transparent;\n\t\t\t\tborder-top-color: rgb(var(--autoduo-bg));\n\n\t\t\t}\n\t\t\t.control-container-listening.event .contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(255 103 103 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\n\t\t\t@media (max-height: 550px) {\n\t\t\t\t.control-container-listening {\n\t\t\t\t\tbottom: 4px;\n\t\t\t\t}\n\t\t\t}\n        ";
      document.head.appendChild(_0x28238d);
    };
  }
  let _0x5365cc = {
    'text1': "Введите ключ...",
    'text2': "ВВЕСТИ КЛЮЧ",
    'text3': "РУКОВОДСТВО",
    'text4': "ПОЛУЧИТЬ ССЫЛКУ НА КЛЮЧ",
    'text5': "РУКОВОДСТВО ПО ПОЛУЧЕНИЮ КЛЮЧА",
    'text6': "КУПИТЬ ДОЛГОСРОЧНЫЙ VIP-КЛЮЧ",
    'text7': "mudachyo сообщает: Недействительный или просроченный ключ, повторите попытку!",
    'text8': "Текущий ключ истек, пожалуйста, получите новый ключ, чтобы продолжить использование автофункции!",
    'text9': "Произошла ошибка во время аутентификации, повторите попытку позже!",
    'text10': "Ошибка неверных данных!",
    'text11': "Текущая версия Auto-Duolingo устарела, установите версию V%v, чтобы обновить новые функции и иметь возможность использовать авторежим!\nПожалуйста, перезапустите браузер, и система автоматически обновит новую версию для вас!",
    'text12': "Базовый ключ",
    'text13': "Тип: ",
    'text14': "Дата: ",
    'text15': "Посмотреть информацию",
    'text16': "Скрыть анимацию",
    'text17': "- РЕЖИМ СКРЫТИЯ АНИМАЦИИ:\nКогда этот режим включен, изображения и анимация на сайте будут скрыты для оптимизации производительности.",
    'text18': "Безопасный режим",
    'text19': "- БЕЗОПАСНЫЙ РЕЖИМ:\nКогда этот режим включен, система будет имитировать действия пользователя при использовании авторежима. Скорость будет более расслабленной, в обмен на время прохождения уроков и количество опыта будет наиболее естественным, минимизируя риски получения жалоб и блокировки аккаунта!",
    'text20': "Турбо режим",
    'text21': "- ТУРБО РЕЖИМ:\nПри включении система значительно увеличит скорость авторежима. Он будет использовать более высокую производительность и не рекомендуется для использования на устройствах с низкой производительностью.\nОтключите его и обновите страницу, если у вас возникнут проблемы при активации этого режима!\n\nПримечание: Это экспериментальная функция, для использования которой требуется VIP-ключ. Включайте его только тогда, когда вам действительно нужна скорость, и вы понимаете его последствия!!",
    'text22': "Извините, эта функция доступна только для пользователей VIP-ключа. Пожалуйста, свяжитесь с администратором для получения подробной информации!",
    'text23': "Пропуск уроков",
    'text24': "- РЕЖИМ ПРОПУСКА УРОКОВ:\nПри активации система не будет повторять упражнения, как в обычном режиме, а будет заниматься упражнениями, активно выбранными пользователем. Этот режим используется для легендарных упражнений, сюжетных упражнений и большинства других подобных упражнений. Вам нужно ввести урок, который вы хотите пройти, а затем система автоматически завершит этот урок за вас!\nКогда этот режим активирован, кнопка базового авторежима будет временно отключена.",
    'text25': "Цель по опыту",
    'text26': "- РЕЖИМ ЦЕЛЕВОГО ОПЫТА:\nУстановив целевой опыт, система автоматически остановит авторежим, когда общее количество полученного опыта станет равным или превысит заданное значение.\nЭто поможет вам лучше контролировать функцию авторежима, предотвращая непреднамеренное накопление избыточного опыта из-за того, что вы забыли выключить авторежим!\n\n- Примечание: Целевой опыт должен быть больше, чем текущее количество опыта, полученного в авторежиме!",
    'text27': "Вы уверены, что хотите отменить текущую цель?",
    'text28': "Установив целевой опыт, система автоматически остановит авторежим, когда общее количество полученного опыта станет равным или превысит заданное значение.\n# Примечание: Целевой опыт должен быть больше, чем текущий полученный опыт!\n\nВведите желаемый целевой опыт:",
    'text29': "Неверное значение, повторите попытку!",
    'text30': "Целевой опыт должен быть больше, чем текущий опыт в авторежиме (%v), повторите попытку!",
    'text31': "Значение слишком велико, повторите попытку!",
    'text32': "Авто-прохождение",
    'text33': "- РЕЖИМ АВТОМАТИЧЕСКОГО ПРОХОЖДЕНИЯ:\nУстановив количество уроков, которое вы хотите пройти, система автоматически пройдет соответствующее количество новых уроков в соответствии с заданным вами значением!\n\n- Примечание: значение урока должно быть в диапазоне от 1 до 1000 (введите 0 для неограниченного авторежима)!",
    'text34': "Вы уверены, что хотите остановить авторежим?",
    'text35': "Установив количество уроков, которое вы хотите пройти, система автоматически пройдет соответствующее количество новых уроков в соответствии с заданным вами значением! (Введите 0 для неограниченного авторежима)\n\nВведите количество уроков, которое вы хотите пройти (1 - 1000):",
    'text36': "СТАРТ",
    'text37': "СТОП",
    'text38': "УДАЛИТЬ КЛЮЧ",
    'text39': "Вы уверены, что хотите удалить текущий ключ? (После удаления страница автоматически обновится)",
    'text40': "После включения скорость авторежима будет очень высокой, однако это будет потреблять больше производительности устройства (не рекомендуется для устройств с низкой производительностью). Вы уверены, что хотите активировать этот режим?",
    'text41': "[Режим автоматического прохождения] Завершено %v новых уроков.\nАвторежим автоматически остановлен!",
    'text42': "Неподходящее место: Включайте авторежим только на главной странице или странице практики (со значком гантели) Duolingo Super!\n- Включение авторежима на главной странице автоматически запустит фарм практических упражнений (10 XP), а включение авторежима на странице практики Duolingo Super автоматически запустит фарм упражнений на аудирование (20 XP).\n- Если вы хотите автоматически пройти легендарные упражнения или разблокировать другие упражнения, пожалуйста, включите режим пропуска уроков.",
    'text43': '',
    'text44': "[Режим автоматического прохождения] Вы прошли все упражнения в этом курсе!!",
    'text45': "Неопределенное задание!!",
    'text46': "Это упражнение в настоящее время не поддерживается. Пожалуйста, сообщите об этой проблеме администратору или временно выполните это упражнение вручную, прежде чем снова включить авторежим! [%v]",
    'text47': "Данные урока не найдены.",
    'text48': "Не найдено подходящего варианта.",
    'text49': "Не найдено соответствующего результата!",
    'text50': "Не найдено подходящего ответа!",
    'text51': "\n(Режим автоматического прохождения - %v/%v новых уроков!)",
    'text52': "[Целевой режим] Достигнут целевой уровень опыта (%v / %v XP).\nАвторежим автоматически выключен!",
    'text53': "Произошла ошибка при чтении истории!",
    'text54': "Ответ не найден!",
    'text55': "Совпадающее слово не найдено!",
    'text56': "Ошибка поиска react props",
    'text57': "Произошла ошибка при загрузке данных задания!",
    'text58': "Произошла ошибка при получении данных!",
    'text59': "Автоматическое прохождение новых упражнений: %v / %v уроков!",
    'text60': "+++++ РУКОВОДСТВО +++++\n\n- Для работы автофункции требуется ключ активации! Этот ключ является единственным способом поддержания и развития AutoDuolingo, поэтому я надеюсь на ваше понимание и поддержку. Большое спасибо!\n___________________________\n- В настоящее время существует два способа получения ключа:\n+ Получить 24-часовой ключ, пройдя по нескольким ссылкам, содержащим рекламу (поддержка только вьетнамского языка).\n+ Купить долгосрочный и более стабильный VIP-ключ. (Чтобы купить ключ, пожалуйста, свяжитесь с администратором напрямую через контактные методы в конце инструмента).\n___________________________\n- VIP-ключ обеспечит более высокую скорость авторежима и доступ ко всем функциям инструмента!\n- Присоединяйтесь к нашей группе чата Zalo для поддержки и получения информации о последних обновлениях!\n\nAuto-Duolingo от mudachyo!",
    'text61': "Авторежим продолжится через:",
    'text62': "Необходимо обновить страницу, чтобы обновить язык, обновить сейчас?",
    'text63': "Целевой опыт: ",
    'text64': "ОБРАТНАЯ СВЯЗЬ",
    'text65': " Если у вас в данный момент отображается руководство по произношению, пожалуйста, сначала отключите его, затем перезагрузите страницу и, наконец, снова включите авторежим!",
    'text66': "Хотите ли вы автоматически пройти объединенные легендарные упражнения?\n\nПРИМЕЧАНИЕ:\n+ Автоматическое прохождение легендарных упражнений работает только с учетными записями, у которых есть неограниченное количество сердечек! НЕ включайте эту опцию для учетных записей без неограниченного количества сердечек, так как это может привести к зависанию во время автоматического прохождения.\n+ Система будет проходить только ранее объединенные легендарные упражнения в рамках близкой области к текущему уроку; она автоматически пропустит более дальние!",
    'text67': "Аутентификация не удалась, потому что ключ достиг максимально допустимого количества IP!\nПримечание: Для 24-часового ключа поддерживается только один IP-адрес на ключ. Поэтому, если ваш IP-адрес изменится во время использования (из-за изменений сети, использования VPN, сброса сети и т.д.), повторная активация будет невозможна, даже если ключ все еще действителен.",
    'text68': "Установить место фарма XP",
    'text69': "УСТАНОВКА МЕСТА ФАРМА XP\n- По умолчанию система может фармить XP только в упражнениях на практику или аудирование. Однако с помощью этой функции вы можете фармить XP в любом уроке, даже в уроках с историями!\n- Использование: Активируйте функцию и введите URL нужного урока, затем включите режим фарма XP, чтобы начать фармить.\n- ПРИМЕЧАНИЕ: URL-адрес урока должен быть точным, а урок должен быть повторяемым. Ввод неточного URL-адреса может привести к ошибкам или даже создать риски для вашей учетной записи!",
    'text70': "Введя URL нужного урока, система поможет вам фармить XP в этом уроке! Обратите внимание, что URL-адрес урока должен быть точным, чтобы избежать ошибок или потенциальных рисков для вашей учетной записи!\n\nВведите URL нужного урока:\n(Пример: https://www.duolingo.com/lesson/unit/1/level/1)",
    'text71': "Введенный URL-адрес недействителен, повторите попытку!",
    'text72': "Автоматизация остановлена, потому что не удалось фармить XP в указанном месте!",
    'text73': "Фарм в указанном месте",
    'text74': "Настройки",
    'text75': "Закрыть",
    'text76': "Темный режим",
    'text77': "ТЕМНЫЙ РЕЖИМ\n- Быстрее включайте/выключайте темный режим сайта!",
    'text78': "Авто сбор x2 XP",
    'text79': "Авто сбор X2 XP:\n- Это дополнительная функция для \"Автофермы KN\", помогающая поддерживать статус x2 KN во время ведения хозяйства. Если функция включена, она будет проверять и автоматически выполнять новые уроки, чтобы получить x2 KN награды, если обнаружит, что текущее состояние не имеет x2. Это поможет вам фармить больше очков KN, чем обычно. \n\n- ПРИМЕЧАНИЕ: Эта функция будет делать новые уроки для поддержания статуса x2, так что подумайте, прежде чем включать ее, если у вас есть проблемы с этими уроками",
    'text80': "Auto-Duolingo автоматически собирает x2 XP...",
    'text81': "Вы не сможете воспользоваться этой функцией, пока \"%v\" включена. Чтобы использовать ее, выключите \"%v\" первая особенность!",
    'text82': "[ПРЕДУПРЕЖДЕНИЕ] Работает функция auto x2 KN. Выключение авто сейчас отменит этот процесс. Вы уверены?",
    'text83': "Автоматический x2 XP был отключен, потому что не было найдено ни одного нового урока!"
  };
  let _0x3afa5c = {
    'text1': "Enter Key Here...",
    'text2': "ENTER KEY",
    'text3': "GUIDE",
    'text4': "GET KEY LINK",
    'text5': "GUIDE TO GET KEY",
    'text6': "BUY LONG-TERM VIP KEY",
    'text7': "mudachyo Said: Invalid or expired key, please try again!",
    'text8': "The current key has expired, please obtain a new key to continue using the auto feature!",
    'text9': "An error occurred during authentication, please try again later!",
    'text10': "Invalid data error!",
    'text11': "The current version of Auto-Duolingo is outdated, install version V%v to update new features and be able to use auto!\nPlease restart your browser and the system will automatically update the new version for you!",
    'text12': "Basic key",
    'text13': "Type: ",
    'text14': "EXP: ",
    'text15': "View information",
    'text16': "Hide Animation",
    'text17': "- HIDE ANIMATION MODE:\nWhen this mode is enabled, images and animations on the website will be hidden to optimize performance.",
    'text18': "Safe Mode",
    'text19': "- SAFE MODE:\nWhen this mode is enabled, the system will simulate user actions when using auto. The speed will be more relaxed, in exchange for the completion time of lessons and the amount of experience will be the most natural, minimizing the risks of REPORT and account BAN!",
    'text20': "Turbo Mode",
    'text21': "- TURBO MODE:\nWhen enabled, the system will significantly boost the auto speed. It will utilize higher performance and is not recommended for use on low-performance devices.\nTurn it off and refresh the page if you encounter issues while activating this mode!\n\nNote: This is an experimental feature and requires a VIP Key to use. Only enable it when you truly require speed and understand its implications!!",
    'text22': "I'm sorry, this feature is only available for VIP Key users. Please contact the ADMIN for more details!",
    'text23': "Lesson Pass Mode",
    'text24': "- LESSON PASS MODE:\nWhen activated, the system won't repeat exercises as in the regular mode but will engage in exercises actively selected by the user. This mode is used for legendary exercises, story exercises, and most other similar exercises. You need to enter the lesson you want to pass in, and then the system will automatically complete that lesson for you!\nWhen this mode is activated, the basic auto button will be temporarily disabled.",
    'text25': "XP Target Mode",
    'text26': "- EXPERIENCE POINT TARGET MODE:\nBy setting an experience point target, the system will automatically stop auto mode when the total experience points obtained equal or exceed the specified target.\nThis helps you better control the auto function, preventing unintentional accumulation of excess experience points due to forgetting to turn off auto mode!\n\n- Note: The experience point target must be greater than the current amount of experience points obtained through auto mode!",
    'text27': "Are you sure you want to cancel the current target?",
    'text28': "By setting an experience point target, the system will automatically stop auto mode when the total experience points obtained equal or exceed the specified target.\n# Note: The target XP must be greater than the current obtained XP!\n\nEnter the target experience points you wish for:",
    'text29': "Invalid value, please try again!",
    'text30': "The target XP must be greater than the current auto XP (%v), please try again!",
    'text31': "The value is too large, please try again!",
    'text32': "Auto Pass Mode",
    'text33': "- AUTO PASS MODE:\nBy setting the number of lessons you wish to pass, the system will automatically pass the corresponding number of new lessons as per the value you've set!\n\n- Note: the lesson value should be within the range of 1 - 1000 (Enter 0 for unlimited auto)!",
    'text34': "Are you sure you want to stop the auto?",
    'text35': "By setting the number of lessons you wish to pass, the system will automatically pass the corresponding number of new lessons as per the value you've set! (Enter 0 for unlimited auto)\n\nEnter the number of lessons you wish to pass (1 - 1000):",
    'text36': "START FARM XP",
    'text37': "STOP FARM XP",
    'text38': "DROP KEY",
    'text39': "Are you sure you want to remove the current Key? (After removal, the page will automatically refresh to update)",
    'text40': "After enabling, the auto speed will be very fast; however, it will consume more device performance (not recommended for low-performance devices). Are you sure you want to activate this mode?",
    'text41': "[Auto Pass Mode] %v new lessons have been completed.\nAuto has automatically stopped!",
    'text42': "Inappropriate location: Only enable auto when on the home page or practice page (with the dumbbell icon) of Duolingo Super!\n- If you want to Farm XP at a specific lesson, please enable the 'Set XP Farm Location' feature in the tool's settings!\n- Enabling auto on the homepage will automatically farm practice exercises (10 XP), while enabling auto on Duolingo Super's practice page will automatically farm listening exercises (20 XP).\n- If you wish to auto complete legendary exercises or unlock other exercises, please enable the Lesson Pass Mode.",
    'text43': '',
    'text44': "[Auto Pass Mode] You have completed all exercises in this course!!",
    'text45': "Undefined challenge!!",
    'text46': "This exercise is currently not supported. Please report this issue to the Admin or temporarily work on this exercise manually before re-enabling auto! [%v]",
    'text47': "Lesson data not found.",
    'text48': "No suitable option found.",
    'text49': "No corresponding result found!",
    'text50': "No suitable answer found!",
    'text51': "\n(Auto Pass Mode - %v/%v new lessons!)",
    'text52': "[Target Mode] Achieved target experience level (%v / %v XP).\nAuto has been automatically turned off!",
    'text53': "An error occurred while reading the story!",
    'text54': "No answer found!",
    'text55': "No matching word found!",
    'text56': "There is an error when finding the react props",
    'text57': "There was an error while loading challenge data!",
    'text58': "There was an error while getting the data!",
    'text59': "Auto pass new exercises: %v / %v lessons!",
    'text60': "+++++ GUIDE +++++\n\n- An activation key is required for auto functionality! This key is the sole method to maintain and develop AutoDuolingo, so I hope for your understanding and support. Thank you very much!\n___________________________\n- Currently, there are two methods to obtain the key as follows:\n+ Obtain the 24-hour key by surpassing a few links containing advertisements (Vietnamese support only).\n+ Buy a long-term and more stable VIP Key. (To buy a Key, please directly contact the Admin through the contact methods at the end of the tool).\n___________________________\n- Join our Zalo chat group for support and updates on the latest information!\n\nAuto-Duolingo By mudachyo!",
    'text61': "Auto will continue in:",
    'text62': "Need to refresh the page to update the language, refresh now?",
    'text63': "XP Target: ",
    'text64': "FEEDBACK",
    'text65': " If you are currently displaying the pronunciation guide, please turn it off first, then reload the page, and finally turn on auto again!",
    'text66': "Do you want to automatically pass combined legendary exercises?\n\nNOTE:\n+ The auto pass for legendary exercises only works with accounts that have unlimited hearts! DO NOT enable this option for accounts without unlimited hearts as it may lead to getting stuck during auto pass.\n+ The system will only pass previously combined legendary exercises within a close scope to the current lesson; it will automatically skip further ones!",
    'text67': "Authentication failed because the key has reached the maximum allowed number of IP!\nNote: For the 24-hour key, only one IP address is supported per key. Therefore, if your IP address changes during usage (due to network changes, VPN usage, or network resets, etc.), reactivation will not be possible even if the key is still valid.",
    'text68': "Set XP Farm Location",
    'text69': "SET XP FARM LOCATION\n- By default, the system can only Farm XP in practice exercises or listening practices. However, with this feature, you can Farm XP in any lesson you want, even in story lessons!\n- Usage: Activate the feature and enter the URL of the lesson you want, then enable the XP Farm mode to start farming.\n- NOTE: The URL to the lesson must be accurate and the lesson must be repeatable. Entering an inaccurate URL may lead to errors or even pose risks to your account!",
    'text70': "By entering the URL of the lesson you want, the system will help you Farm XP in that lesson! Please note that the URL to the lesson must be accurate to avoid errors or potential risks to your account!\n\nEnter the URL of the lesson you want:\n(Example: https://www.duolingo.com/practice)",
    'text71': "The entered URL is invalid, please try again!",
    'text72': "The automation has stopped because it couldn't Farm XP at the designated location!",
    'text73': "Farming at the location",
    'text74': "Other settings",
    'text75': "Close",
    'text76': "Dark Mode",
    'text77': "DARK MODE\n- Enable/disable website dark mode faster!",
    'text78': "Auto Collect x2 XP",
    'text79': "AUTO COLLECT X2 XP:\n- This is a supplementary feature for \"Auto Farm KN\", helping to maintain the x2 KN status during farming. When enabled, it will check and automatically do new lessons to get x2 KN rewards if it detects the current state doesn't have x2. This will help you farm more KN points than usual. \n\n- NOTE: This feature will do new lessons to maintain the x2 status, so consider before enabling it if you have constraints with these lessons.",
    'text80': "Auto-Duolingo is automatically collecting x2 XP...",
    'text81': "You can't access this feature while \"%v\" is enabled.To use this, please turn off the \"%v\" feature first!",
    'text82': "[WARNING] The auto x2 KN feature is working. Turning off auto now will cancel this process. Are you sure?",
    'text83': "The automatic x2 XP has been turned off because no new lessons were found!"
  };
  let _0x5e428e = {
    ..._0x3afa5c,
    'setLanguage': function (_0x21bc18) {
      let _0x206bf9;
      if ('vi' === _0x21bc18) {
        _0x206bf9 = _0x5365cc;
        Object.assign(_0x5e428e, _0x206bf9);
      }
    }
  };
  function _0x348210(_0x3e91f0, ..._0x4f270e) {
    if (0x0 === _0x4f270e.length) {
      return _0x5e428e[_0x3e91f0];
    }
    let _0x5da503 = _0x5e428e[_0x3e91f0].replace(/%v/g, () => _0x4f270e.shift());
    return _0x5da503;
  }
  function _0x4c3d28(_0x376ec9) {
    let _0x52e5e3 = String(parseInt(_0x376ec9 / 0x3e8 / 0x3c / 0x3c));
    let _0x3f7e0f = String(parseInt(_0x376ec9 / 0x3e8 / 0x3c % 0x3c));
    return _0x52e5e3.padStart(0x2, '0') + 'h:' + _0x3f7e0f.padStart(0x2, '0') + 'm';
  }
  function _0x56721b(_0x8b1747) {
    let _0xe35743 = String(_0x8b1747.getDate()).padStart(0x2, '0');
    let _0xf3ec52 = String(_0x8b1747.getMonth() + 0x1).padStart(0x2, '0');
    let _0x5e4d3e = _0x8b1747.getFullYear();
    let _0x279e0c = String(_0x8b1747.getHours()).padStart(0x2, '0');
    let _0xc737ce = String(_0x8b1747.getMinutes()).padStart(0x2, '0');
    return _0xe35743 + '/' + _0xf3ec52 + '/' + _0x5e4d3e + " - " + _0x279e0c + ':' + _0xc737ce;
  }
  let _0x3a2c6e = document.querySelector.bind(document);
  let _0xe35921 = document.querySelectorAll.bind(document);
  let _0x4521f8 = document.createElement("iframe");
  _0x4521f8.style.display = 'none';
  document.body.appendChild(_0x4521f8);
  let _0xbb5445 = _0x4521f8.contentWindow.console.log;
  window.log = _0xbb5445;
  function _0x30ea0e() {
    let _0x3f945c = sessionStorage.getItem("autoDuolingoStorage") || '{}';
    return JSON.parse(_0x3f945c);
  }
  function _0x67a80b(_0x499c79, _0xb43b00) {
    let _0x20b3d7 = _0x30ea0e();
    if (_0x499c79 instanceof Object) {
      Object.assign(_0x20b3d7, _0x499c79);
    } else {
      _0x20b3d7[_0x499c79] = _0xb43b00;
    }
    sessionStorage.setItem("autoDuolingoStorage", JSON.stringify(_0x20b3d7));
  }
  function _0x35a269() {
    sessionStorage.removeItem("autoDuolingoStorage");
  }
  function _0x8f6881() {
    let _0x3d5cff = localStorage.getItem("autoDuolingoStorage") || '{}';
    return JSON.parse(_0x3d5cff);
  }
  function _0x48a376(_0x26bf0f, _0xc58a08) {
    let _0x19693f = _0x8f6881();
    _0x19693f[_0x26bf0f] = _0xc58a08;
    localStorage.setItem("autoDuolingoStorage", JSON.stringify(_0x19693f));
  }
  function _0x1a02d0(_0x21f690) {
    let _0x49daee = _0x8f6881();
    return _0x49daee[_0x21f690];
  }
  function _0x3888bf(_0x3b5ce6) {
    _0x48a376('tabIds', _0x3b5ce6);
  }
  let _0x18b8df = new _0x1dd462();
  _0x18b8df.setup();
})();