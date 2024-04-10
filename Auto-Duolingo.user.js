// ==UserScript==
// @name         Auto-Duolingo
// @version      2.0.6
// @author       mudachyo (https://github.com/mudachyo)
// @namespace    Violentmonkey Scripts
// @description  Script for automating training on Duolingo
// @match        https://*.duolingo.com/*
// @grant        none
// @license      MIT
// @connect      ktnff.tech
// @icon         https://ktnff.tech/assets/autoduo/favicon.png
// @downloadURL  https://raw.githubusercontent.com/mudachyo/Auto-Duolingo/main/Auto-Duolingo.user.js
// @updateURL    https://raw.githubusercontent.com/mudachyo/Auto-Duolingo/main/Auto-Duolingo.user.js
// ==/UserScript==

sessionStorage.setItem("autoDuolingoStorageKey", JSON.stringify({
  "generalData": "661586fff02dceyJ2ZXJzaW9uIjoiMi4wLjYiLCJidXlLZXlVcmwiOiJodHRwczpcL1wvYXBpLmF1dG9kdW9saW5nby5jbGlja1wvc2VydmljZXNcL2J1eS1rZXlcLyIsImdldEtleVVybCI6Imh0dHBzOlwvXC9hcGkuYXV0b2R1b2xpbmdvLmNsaWNrXC9zZXJ2aWNlc1wvZ2V0LWtleVwvIiwiZ3VpZGVHZXRLZXlVcmwiOiJodHRwczpcL1wveW91dHUuYmVcL0VZb2NPUnVERFU0Iiwic2QiOlsyMDAsNTAwLDcwMF0sIm5vdGlmeVZlcnNpb24iOjEyLCJub3RpZnlDb250ZW50IjoiQU5OT1VOQ0VNRU5UIEZST00gREVWWDogVXBkYXRlIEF1dG8tRHVvbGluZ28gdjIuMC42XFxuLSBOZXcgZmVhdHVyZXM6IFhQIEZhcm0gTG9jYXRpb24gU2V0dGluZywgRGFyayBNb2RlLlxcbi0gTmV3IGNoYWxsZW5nZXM6IFJhZGlvIENoYWxsZW5nZS5cXG4tIEludGVyZmFjZSB1cGRhdGVzIGFuZCBzeXN0ZW0gb3B0aW1pemF0aW9ucy5cXG4tIFBsZWFzZSBsZWF2ZSBhIHBvc2l0aXZlIHJldmlldyBmb3IgQXV0by1EdW9saW5nbyBvbiBHcmVhc3lGb3JrIGlmIGl0IGhhcyBiZWVuIGhlbHBmdWwgdG8geW91IVxcblxcbkhhcHB5IEhhY2tpbmchIn0=",
  "authenData":"661597782b677eyJrZXlEYXRhIjp7InR5cGUiOiJ2aXAiLCJleHBpcmVkQXQiOiIyMDc3LTA0LTMwIDIzOjU5OjU5In0sImxlc3NHZW5lYWxvZ3kiOiJjaGlsZHJlbiJ9"
}));

(() => {

  let {
    isSafeMode: isSafeMode,
    isTurboMode: isTurboMode,
    isShowUI: isShowUI,
    isAnimationOff: isAnimationDisabled,
    isTargetMode: isTargetXpMode,
    targetModeValue: targetXpValue,
    isPassMode: isAutoPassMode,
    isPassLegend: isPassLegendary,
    passModeValue: autoPassLessonCount,
    passValue: passedLessonCount,
    isFarmingLocation: isCustomFarmLocation,
    farmingLocationUrl: customFarmLocationUrl,
    farmingLocationErrorCount: farmLocationErrorCount,
    exp: totalXp,
    time: totalTimeElapsed,
    generalData: generalConfigData,
    authenData: authenticationData,
    isKeyTimeOut: isKeyExpired
  } = _0x3f2ca9();
  let {
    appLanguage: userLanguage
  } = _0x446ee6();
  const apiData = {
    version: "2.0.6",
    buyKeyUrl: "https://ktnff.tech/",
    getKeyUrl: "https://ktnff.tech/",
    guideGetKeyUrl: "https://youtu.be/EYoCORdTEDU",
    sd: [200, 500, 700],
    notifyVersion: 12,
    notifyContent: "ANNOUNCEMENT FROM mudachyo: Update Auto-Duolingo v2.0.6\n- New features: XP Farm Location Setting, Dark Mode.\n- New challenges: Radio Challenge.\n- Interface updates and system optimizations.\n- Please leave a positive review for Auto-Duolingo on GreasyFork if it has been helpful to you!\n\nHappy Hacking"
  };
  class _0x5d4471 {
    ["version"] = "2.0.6";
    ['isAuto'] = false;
    ["isAutoRunning"] = false;
    ['isFetching'] = false;
    ['appLanguage'] = userLanguage || 'en';
    ["isFreeKey"] = true;
    ["freeKey"] = "mudachyo";
    ["freeKeyTime"] = "2024-04-30 23:59:59";
    ["isSafeMode"] = !!isSafeMode;
    ["isTurboMode"] = !!isTurboMode;
    ['isLegendMode'] = false;
    ["isAnimationOff"] = !!isAnimationDisabled;
    ["isTargetMode"] = !!isTargetXpMode;
    ["targetModeValue"] = targetXpValue || 0;
    ['isPassMode'] = false;
    ["isPassLegend"] = undefined !== isPassLegendary && isPassLegendary;
    ["passModeValue"] = autoPassLessonCount || 0;
    ['passValue'] = passedLessonCount || 0;
    ["isFarmingLocation"] = !!isCustomFarmLocation;
    ["farmingLocationUrl"] = customFarmLocationUrl || '';
    ["farmingLocationErrorCount"] = farmLocationErrorCount || 0;
    ['isDarkMode'] = "dark" === document.documentElement.getAttribute("data-duo-theme");
    ["nextTime"] = 280;
    ["nextTimeTemp"] = 280;
    ["goChallengeTime"] = 800;
    ['reloadTime'] = 0x1b7740;
    ["totalReloadTime"] = 0;
    ["safeDelayTime"] = 0x1e;
    ['safeDelayTimeTemp'] = 0x12c;
    ["lessGenealogy"] = null;
    ["isEnterKey"] = false;
    ["isKeyTimeOut"] = !!isKeyExpired;
    ["keyTimeOut"] = 0;
    ["startTime"] = null;
    ["isShowUI"] = undefined === isShowUI || isShowUI;
    ['exp'] = totalXp || 0;
    ['totalTime'] = totalTimeElapsed || 0;
    ["generalData"] = generalConfigData;
    ["authenData"] = authenticationData;
    ['apiUrl'] = "https://ktnff.tech/data/";
    ["homePath"] = "/learn";
    ["practicePath"] = "/practice";
    ["practiceHubPath"] = '/practice-hub';
    ['listeningPacticePath'] = "/practice-hub/listening-practice";
    ["lessonPath"] = '/lesson';
    ["lessonWrapper"] = "._3js2_";
    ["storyWrapper"] = "[class=\"DGrOY\"]";
    ['reactProps'] = null;
    ["dataStateNode"] = null;
    ['nativeTextareaValueSetter'] = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
    ["nativeInputValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    ["isPreviewVersion"] = window.location.hostname.includes("preview");
    ["skipLegendarySuggestionBtn"] = "[class=\"xzSoQ\"] button ._1fHYG";
    ["setup"] = function () {
      _0x146f66.setLanguage(this.appLanguage);
      this.handlePreviewVersion();
      this.createStyle();
      this.createSignature();
      this.createBtn();
      this.createKeyComponent();
      this.createStatistics();
      this.createFunctions();
      this.createSetting();
      this.createContainer();
      if (!isShowUI) {
        this.handleShowHideUI();
      }
      if (isAnimationDisabled) {
        this.handleAnimationOff();
      }
      if (isTargetXpMode) {
        this.handleTargetModeOn();
      }
      if (isCustomFarmLocation) {
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
      if (isAutoPassMode) {
        this.handlePassModeOn();
      }
      if (_0x107631('isAutoFarmXP')) {
        this.startFarmXP();
      }
    };
    ['handlePreviewVersion'] = function () {};
    ["createSignature"] = function () {
      let languageOptions = [{
        'code': 'en',
        'text': 'English',
        'icon': "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg"
      }, {
        'code': 'ru',
        'text': "Русский",
        'icon': "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ru.svg"
      }];
      let selectedLanguage = languageOptions.find(languageOption => languageOption.code === this.appLanguage) || languageOptions[0];
      this.signatureElm = document.createElement('div');
      Object.assign(this.signatureElm, {
        'className': "signature-listening",
        'innerHTML': "\n\t\t\t\t\t<div>\n\t\t\t\t\t\Language\n\t\t\t\t\t\t<div class=\"autoduo-language-wrapper\">\n\t\t\t\t\t\t\t<p class=\"autoduo-language-selected\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + selectedLanguage.icon + "')\"></i>" + selectedLanguage.text + "</p>\n\t\t\t\t\t\t\t<ul class=\"autoduo-language-selection\">\n\t\t\t\t\t\t\t\t" + languageOptions.map(languageOption => "<li class=\"autoduo-language-option\" data-code=\"" + languageOption.code + "\"><i class=\"autoduo-language-icon\" style=\"--data-icon: url('" + languageOption.icon + "')\"></i>" + languageOption.text + "</li>").join('') + "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t"
      });
      document.body.appendChild(this.signatureElm);
      let languageSelectedElement = _0x693da5(".autoduo-language-selected");
      let languageSelectionList = _0x693da5(".autoduo-language-selection");
      let languageOptionElements = Array.from(languageSelectionList.querySelectorAll(".autoduo-language-option"));
      languageSelectedElement.addEventListener("click", _0x544db4 => {
        _0x544db4.stopPropagation();
        languageSelectionList.classList.add("show");
        let _0x1c5190 = () => {
          languageSelectionList.classList.remove('show');
          window.removeEventListener("click", _0x1c5190);
        };
        window.addEventListener("click", _0x1c5190);
      });
      languageOptionElements.forEach(languageOptionElement => {
        languageOptionElement.addEventListener("click", () => {
          let languageCode = languageOptionElement.dataset.code;
          if (languageCode === this.appLanguage) {
            return;
          }
          let userConfirmed = window.confirm(_0x117a4f('text62'));
          if (userConfirmed) {
            _0x4dd3de("appLanguage", languageCode);
            window.location.reload();
          }
        });
      });
    };
    ['createBtn'] = function () {
      this.autoFarmBtn = document.createElement("button");
      Object.assign(this.autoFarmBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S btn-green auto-farm-btn-listening",
        'style': "--farming-location: \"(" + _0x117a4f("text73") + ")\"",
        'innerText': _0x117a4f("text36"),
        'onclick': () => {
          if (this.isAuto) {
            this.stopFarmXP();
          } else {
            this.startFarmXP();
          }
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
      let _0x315716 = document.createElement('div');
      this.expElm.className = "total-exp-listening";
      this.expElm.innerText = this.exp;
      this.statistic.className = 'statistic-listening';
      this.dateElm.className = 'time-listening';
      _0x315716.className = "statistic-wrapper-listening";
      _0x315716.append(this.expElm, this.dateElm);
      this.statistic.append(this.keyTypeElm, this.keyExpiredElm, _0x315716);
    };
    ['createFunctions'] = function () {
      this.animationOffWrapper = document.createElement('div');
      this.animationOffWrapper.style = "--data-name: \"" + _0x117a4f('text16') + "\"";
      let animationDescription = _0x117a4f("text17");
      this.autoduoCreateSwitch(animationDescription, this.animationOffWrapper, this.isAnimationOff, _0x5a8076 => {
        this.isAnimationOff = !this.isAnimationOff;
        this.handleAnimationOff(true);
        _0x5a8076(this.isAnimationOff);
      });
      this.safeModeWrapper = document.createElement("div");
      this.safeModeWrapper.style = "--data-name: \"" + _0x117a4f("text18") + "\"";
      let safeModeDescription = _0x117a4f('text19');
      this.autoduoCreateSwitch(safeModeDescription, this.safeModeWrapper, this.isSafeMode, () => {
        if (this.isSafeMode) {
          this.handleSafeModeOff();
        } else {
          this.handleSafeModeOn();
        }
      });
      this.turboModeWrapper = document.createElement("div");
      this.turboModeWrapper.style = "--data-name: \"" + _0x117a4f("text20") + "\"";
      let turboModeDescription = _0x117a4f("text21");
      this.autoduoCreateSwitch(turboModeDescription, this.turboModeWrapper, this.isTurboMode, () => {
        if (this.isTurboMode) {
          this.handleTurboModeOff();
        } else {
          this.handleTurboModeOn(true);
        }
      });
      this.legendModeWrapper = document.createElement('div');
      this.legendModeWrapper.style = "--data-name: \"" + _0x117a4f("text23") + "\"";
      let lessonPassModeDescription = _0x117a4f('text24');
      this.autoduoCreateSwitch(lessonPassModeDescription, this.legendModeWrapper, this.isLegendMode, () => {
        if (!this.isAuto || this.isLegendMode) {
          if (this.isLegendMode) {
            this.stopLegend();
          } else {
            this.startLegend();
          }
        }
      });
      this.targetModeWrapper = document.createElement("div");
      this.targetModeWrapper.style = "--data-name: \"" + _0x117a4f("text25") + "\"";
      let targetXpModeDescription = _0x117a4f('text26');
      this.autoduoCreateSwitch(targetXpModeDescription, this.targetModeWrapper, this.isTargetMode, () => {
        if (this.isAuto) {
          return;
        }
        if (this.isTargetMode) {
          let userConfirmedCancelTarget = window.confirm(_0x117a4f("text27"));
          if (userConfirmedCancelTarget) {
            this.handleTargetModeOff(true);
          }
          return;
        }
        let targetXpInput;
        for (;;) {
          let _0x233dca = window.prompt(_0x117a4f('text28'));
          if (null === _0x233dca) {
            return;
          }
          if (Number.isNaN(targetXpInput = parseInt(_0x233dca))) {
            alert(_0x117a4f("text29"));
            continue;
          }
          if (targetXpInput <= this.exp) {
            alert(_0x117a4f("text30", this.exp));
            continue;
          }
          if (targetXpInput > 0xf4240) {
            alert(_0x117a4f("text31"));
            continue;
          }
          break;
        }
        this.targetModeValue = targetXpInput;
        this.handleTargetModeOn(true);
      });
      this.targetModeLabel = document.createElement('p');
      Object.assign(this.targetModeLabel, {
        'className': "targetmode-label-listening label-listening",
        'style': "--data-frefix: \"" + _0x117a4f("text63") + "\""
      });
      this.passModeWrapper = document.createElement("div");
      this.passModeWrapper.style = "--data-name: \"" + _0x117a4f("text32") + "\"";
      let autoPassModeDescription = _0x117a4f("text33");
      this.autoduoCreateSwitch(autoPassModeDescription, this.passModeWrapper, this.isPassMode, () => {
        if (this.isAuto && !this.isPassMode) {
          return;
        }
        if (this.isPassMode) {
          let userConfirmedStopAuto = window.confirm(_0x117a4f("text34"));
          if (userConfirmedStopAuto) {
            this.handlePassModeOff();
          }
          return;
        }
        let autoPassLessonInput;
        for (;;) {
          let _0xd2b7ef = window.prompt(_0x117a4f("text35"));
          if (null === _0xd2b7ef) {
            return;
          }
          if (Number.isNaN(autoPassLessonInput = parseInt(_0xd2b7ef)) || autoPassLessonInput < 0) {
            alert(_0x117a4f("text29"));
            continue;
          }
          if (autoPassLessonInput > 1000) {
            alert(_0x117a4f("text31"));
            continue;
          }
          if (0 === autoPassLessonInput) {
            autoPassLessonInput = 0xf423f;
          }
          break;
        }
        this.passModeValue = autoPassLessonInput;
        this.passValue = 0;
        this.isPassLegend = window.confirm(_0x117a4f("text66"));
        _0x535bb3("isPassLegend", this.isPassLegend);
        this.handlePassModeOn(true);
      });
      this.passModeLabel = document.createElement('p');
      this.passModeLabel.className = "label-listening";
      this.farmingLocationContainer = document.createElement("div");
      this.farmingLocationWrapper = document.createElement("div");
      this.farmingLocationWrapper.style = "--data-name: \"" + _0x117a4f("text68") + "\"";
      let farmLocationSettingDescription = _0x117a4f("text69");
      this.autoduoCreateSwitch(farmLocationSettingDescription, this.farmingLocationWrapper, this.isFarmingLocation, updateFarmLocationSetting => {
        if (this.isAuto) {
          return;
        }
        if (true === this.isFarmingLocation) {
          this.handleFarmingLocationOff();
          updateFarmLocationSetting(false);
          return;
        }
        let duolingoUrlRegex = RegExp("https://[a-z]+.duolingo.com/.*");
        let farmLocationUrlInput = '';
        for (;;) {
          if (null === (farmLocationUrlInput = window.prompt(_0x117a4f("text70")))) {
            return;
          }
          if (!duolingoUrlRegex.test(farmLocationUrlInput)) {
            window.alert(_0x117a4f("text71"));
            continue;
          }
          break;
        }
        this.farmingLocationUrl = farmLocationUrlInput;
        this.handleFarmingLocationOn(true);
        updateFarmLocationSetting(true);
      });
      this.localFarmingLocationLabel = document.createElement('p');
      this.localFarmingLocationLabel.className = "local-label-listening";
      this.farmingLocationContainer.appendChild(this.farmingLocationWrapper);
      this.darkModeWrapper = document.createElement('div');
      this.darkModeWrapper.style = "--data-name: \"" + _0x117a4f('text76') + "\"";
      let darkModeDescription = _0x117a4f("text77");
      this.autoduoCreateSwitch(darkModeDescription, this.darkModeWrapper, this.isDarkMode, updateDarkModeSetting => {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          document.documentElement.setAttribute("data-duo-theme", "dark");
          localStorage.setItem("duo.darkMode", "{\"1313105280\":\"on\"}");
          updateDarkModeSetting(true);
        } else {
          document.documentElement.setAttribute("data-duo-theme", "light");
          localStorage.setItem("duo.darkMode", "{\"1313105280\":\"off\"}");
          updateDarkModeSetting(false);
        }
      });
      this.functionWrapper = document.createElement("div");
      this.functionWrapper.className = "function-wrapper-listening";
      this.functionWrapper.append(this.safeModeWrapper, this.turboModeWrapper, this.legendModeWrapper, this.passModeWrapper);
    };
    ["createSetting"] = function () {
      this.settingBtn = document.createElement('button');
      Object.assign(this.settingBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S setting-btn-listening",
        'innerText': _0x117a4f("text74")
      });
      this.settingBtn.addEventListener("click", () => {
        if (!this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.appendChild(this.settingOverlay);
        }
      });
      this.closeSettingBtn = document.createElement('button');
      Object.assign(this.closeSettingBtn, {
        'className': "autoduo-btn close-setting-btn-listening",
        'innerText': _0x117a4f("text75")
      });
      this.closeSettingBtn.addEventListener("click", () => {
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      });
      this.settingOverlay = document.createElement('div');
      Object.assign(this.settingOverlay, {
        'className': 'setting-overlay-listening',
        'innerHTML': "\n\t\t\t\t\t<h3>" + _0x117a4f('text74') + "</h3>\n\t\t\t\t"
      });
      this.settingOverlay.append(this.darkModeWrapper, this.animationOffWrapper, this.targetModeWrapper, this.farmingLocationContainer, this.closeSettingBtn);
    };
    ["createContainer"] = function () {
      this.keyContainer = document.createElement("div");
      this.keyContainer.className = "key-container-listening";
      this.keyContainer.append(this.keyForm, this.guideBtn, this.getLinkBtn, this.guideGetLinkBtn, this.buyKeyBtn);
      this.autoContainer = document.createElement('div');
      this.autoContainer.className = "auto-container-listening";
      this.autoContainer.append(this.statistic, this.functionWrapper, this.settingBtn, this.autoFarmBtn);
      this.overlayContainer = document.createElement('div');
      this.overlayContainer.className = "overlay-listening";
      this.controlContainer = document.createElement("div");
      this.controlContainer.className = "control-container-listening";
      this.controlContainer.append(this.keyContainer);
      this.autoduoLabelWrapper = document.createElement("div");
      this.autoduoLabelWrapper.className = "autoduo-label";
      document.body.append(this.controlContainer, this.autoduoLabelWrapper);
    };
    ["createKeyComponent"] = function () {
      this.keyForm = document.createElement("form");
      this.keyBtn = document.createElement("button");
      Object.assign(this.keyBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S btn-green key-btn-listening",
        'innerText': _0x117a4f("text2")
      });
      this.keyInput = document.createElement("input");
      this.btnLoading = document.createElement("div");
      Object.assign(this.btnLoading, {
        'className': "loading-listening",
        'innerHTML': "<div class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\" style=\"transition-duration: 250ms;\"><div class=\"_2buOS _2Amjo\"></div><div class=\"_3AW2F _2Amjo\"></div><div class=\"Utckm _2Amjo\"></div></div>"
      });
      this.guideBtn = document.createElement("div");
      Object.assign(this.guideBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S guide-btn-listening",
        'innerText': _0x117a4f("text3")
      });
      this.getLinkBtn = document.createElement('a');
      Object.assign(this.getLinkBtn, {
        'className': "_1N-oo _36Vd3 _16r-S btn-white getlink-btn-listening",
        'innerText': _0x117a4f("text4"),
        'target': "_blank"
      });
      this.guideGetLinkBtn = document.createElement('a');
      Object.assign(this.guideGetLinkBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S btn-blue guide-getlink-btn-listening",
        'innerText': _0x117a4f("text5"),
        'target': "_blank"
      });
      this.buyKeyBtn = document.createElement('a');
      Object.assign(this.buyKeyBtn, {
        'className': "_2N_A5 _36Vd3 _16r-S key-vip-btn-listening",
        'innerText': _0x117a4f("text6"),
        'target': '_blank'
      });
      this.keyInput.onkeydown = _0x208f1f => _0x208f1f.stopPropagation();
      this.btnLoading.onclick = _0x8955ea => _0x8955ea.stopPropagation();
      this.keyForm.addEventListener("submit", _0x3a99fa => {
        _0x3a99fa.preventDefault();
        if (this.isFetching) {
          return;
        }
        let _0x43669d = this.keyInput.value;
        if (_0x43669d) {
          this.handleAuthen(_0x43669d, true, 1000);
        }
      });
      this.guideBtn.addEventListener("click", this.showGuide);
    };
    ["handleAuthen"] = function (_0x5ac726, _0x3d9820 = false, _0x35b032 = 0) {
      if (!_0x5ac726 && !(_0x5ac726 = _0x57c789("key"))) {
        this.handleFreeKey();
        return;
      }
      this.showKeyBtnLoading(true);
      let _0x2c1371 = new FormData();
      _0x2c1371.append("key", _0x5ac726);
      setTimeout(() => {
        fetch(this.apiUrl, {
          'method': "post",
          'body': _0x2c1371
        }).then(_0x3cc9e5 => _0x3cc9e5?.["json"]()).then(_0x36a115 => {
          switch (_0x36a115?.["code"]) {
            case 0xc8:
              let _0x49b54a = _0x36a115.data;
              this.setAuthen(_0x49b54a);
              _0x535bb3('authenData', _0x49b54a);
              if (_0x3d9820) {
                _0x4dd3de('key', _0x5ac726);
              }
              break;
            case 0x190:
              if (_0x3d9820) {
                alert(_0x117a4f("text7"));
              } else {
                _0x4dd3de("key", null);
                if (this.handleFreeKey()) {
                  return;
                }
                if (this.isKeyTimeOut) {
                  _0x535bb3('isKeyTimeOut', false);
                  setTimeout(() => {
                    alert(_0x117a4f("text8"));
                  }, 0x7d0);
                }
              }
              break;
            case 0x191:
              alert(_0x117a4f("text67"));
              break;
            default:
              alert(_0x117a4f("text9"));
          }
        })["finally"](() => {
          this.showKeyBtnLoading(false);
        });
      }, _0x35b032);
    };
    ['setAuthen'] = function (encodedAuthData) {
      let decodedAuthData = this.autoduoDecode(encodedAuthData);
      if (null === decodedAuthData) {
        _0x535bb3("authenData", null);
        return this.autoduoError(_0x117a4f("text10"));
      }
      let {
        keyData: keyData,
        lessGenealogy: lessGenealogy
      } = decodedAuthData;
      let keyExpirationDate = new Date(keyData.expiredAt);
      let keyExpirationTimestamp = keyExpirationDate.getTime();
      if (keyExpirationTimestamp <= Date.now()) {
        this.handleKeyTimeOut();
        return;
      }
      this.keyTimeOut = keyExpirationTimestamp;
      keyData.expiredAt = _0x2bc0c2(keyExpirationDate);
      this.handleReadyAuto(lessGenealogy, keyData);
    };
    ['handleGetGeneral'] = function () {
      fetch(this.apiUrl + "?auth=dxling").then(_0x6867e9 => _0x6867e9?.["json"]()).then(_0x26662f => {
        if (_0x26662f?.['code'] === 0xc8) {
          let _0x245c99 = _0x26662f.data;
          this.setGeneral(_0x245c99);
          _0x535bb3('generalData', _0x245c99);
        }
      });
    };
    ["setGeneral"] = function (encodedGeneralData) {
      let decodedGeneralData = this.autoduoDecode(encodedGeneralData);
      if (null === decodedGeneralData) {
        _0x535bb3("generalData", null);
        return this.autoduoError(_0x117a4f("text10"));
      }
      this.getLinkBtn.href = apiData.getKeyUrl;
      this.guideGetLinkBtn.href = apiData.guideGetKeyUrl;
      this.buyKeyBtn.href = apiData.buyKeyUrl;
      this.handleUpdateSpeed(apiData.sd);
      this.handleAppVersion(apiData.version, apiData.notifyVersion, apiData.notifyContent);
    };
    ["handleUpdateSpeed"] = function (newSpeedSettings) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = newSpeedSettings;
      if (this.isSafeMode) {
        this.safeDelayTime = this.safeDelayTimeTemp;
      }
      if (this.isTurboMode) {
        this.handleTurboModeOn();
      }
    };
    ['handleAppVersion'] = function (latestVersion, latestNotifyVersion, latestNotifyContent) {
      if (this.version !== latestVersion) {
        function _0x43177e() {
          alert(_0x117a4f("text11", latestVersion));
        }
        this.showHideBtn.classList.add('older');
        this.autoFarmBtn.onclick = _0x43177e;
        setTimeout(_0x43177e, 1000);
        return;
      }
      this.handleGlobalNotify(latestNotifyVersion, latestNotifyContent);
    };
    ['handleGlobalNotify'] = function (currentNotifyVersion, currentNotifyContent) {
      let storedNotifyVersion = _0x57c789("notifyVersion") || 0;
      if (storedNotifyVersion < currentNotifyVersion) {
        currentNotifyContent = currentNotifyContent.replaceAll("\\n", "\n");
        setTimeout(() => {
          alert(currentNotifyContent);
          _0x4dd3de('notifyVersion', currentNotifyVersion);
        }, 0x7d0);
      }
    };
    ["handleKeyMarkup"] = function () {};
    ['handleReadyAuto'] = function (lessGenealogyData, keyDetails) {
      let {
        type: keyType,
        expiredAt: keyExpiration
      } = keyDetails;
      this.handleKeyMarkup(keyType, keyExpiration);
      this.lessGenealogy = lessGenealogyData;
      this.isEnterKey = true;
      this.controlContainer.replaceChild(this.autoContainer, this.keyContainer);
    };
    ["handleKeyTimeOut"] = function () {
      _0x535bb3({
        'authenData': null,
        'isKeyTimeOut': true
      });
      this.handleReload();
    };
    ["handleFreeKey"] = function () {
      if (!this.isFreeKey || !this.freeKeyTime || !this.freeKey) {
        return false;
      }
      let freeKeyExpirationTimestamp = new Date(this.freeKeyTime).getTime();
      return !(freeKeyExpirationTimestamp <= Date.now()) && (this.isFreeKey = false, this.handleAuthen(this.freeKey), true);
    };
    ['handleShowHideUI'] = function (saveSetting = false) {
      if (this.isShowUI) {
        this.showHideBtn.classList.remove("hide");
        document.body.append(this.controlContainer, this.signatureElm);
      } else {
        this.showHideBtn.classList.add('hide');
        this.controlContainer.remove();
        this.signatureElm.remove();
        if (this.controlContainer.contains(this.settingOverlay)) {
          this.controlContainer.removeChild(this.settingOverlay);
        }
      }
      if (saveSetting) {
        _0x535bb3("isShowUI", this.isShowUI);
        if (!this.controlContainer.classList.contains("autoduo-animate")) {
          this.controlContainer.classList.add('autoduo-animate');
        }
      }
    };
    ["handleAnimationOff"] = function (_0x777fa5 = false) {
      if (this.isAnimationOff) {
        document.head.appendChild(this.animationStyle);
      } else {
        document.head.removeChild(this.animationStyle);
      }
      if (_0x777fa5) {
        _0x535bb3('isAnimationOff', this.isAnimationOff);
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
    ["handleTurboModeOn"] = function (showConfirmation = false) {
      if (showConfirmation) {
        let userConfirmedTurboMode = window.confirm(_0x117a4f("text40"));
        if (!userConfirmedTurboMode) {
          return;
        }
      }
      if (this.isSafeMode) {
        this.handleSafeModeOff();
      }
      this.nextTimeTemp = this.nextTime;
      this.nextTime = 0;
      _0x535bb3("isTurboMode", true);
      this.autoFarmBtn.classList.add('turbo');
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = true);
    };
    ["handleTurboModeOff"] = function () {
      this.nextTime = this.nextTimeTemp;
      _0x535bb3("isTurboMode", false);
      this.autoFarmBtn.classList.remove("turbo");
      this.turboModeWrapper.setAutoduoSwitch(this.isTurboMode = false);
    };
    ["handleTargetModeOn"] = function (saveSetting = false) {
      this.isTargetMode = true;
      this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
      this.autoduoLabelWrapper.appendChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(true);
      if (saveSetting) {
        _0x535bb3({
          'isTargetMode': true,
          'targetModeValue': this.targetModeValue
        });
      }
    };
    ["handleTargetModeOff"] = function (_0xa198d1 = false) {
      this.isTargetMode = false;
      this.autoduoLabelWrapper.removeChild(this.targetModeLabel);
      this.targetModeWrapper.setAutoduoSwitch(false);
      if (this.isLegendMode) {
        this.stopLegend();
      }
      if (this.isPassMode) {
        this.handlePassModeOff();
      }
      if (this.isAuto) {
        this.stopFarmXP();
      }
      if (_0xa198d1) {
        _0x535bb3("isTargetMode", false);
      }
    };
    ["handlePassModeOn"] = function (_0x16bae6 = false) {
      if (!this.isAuto && !this.isAutoRunning && !this.isPassMode && !this.isLegendMode) {
        this.autoduoLabelWrapper.appendChild(this.passModeLabel);
        this.passModeWrapper.setAutoduoSwitch(true);
        this.updatePassModeState();
        if (_0x16bae6) {
          _0x535bb3({
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
    ["handleFarmingLocationOn"] = function (saveSetting = false) {
      this.isFarmingLocation = true;
      this.localFarmingLocationLabel.innerText = this.farmingLocationUrl;
      this.farmingLocationContainer.appendChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.add("farming-location");
      if (saveSetting) {
        this.farmingLocationErrorCount = 0;
        _0x535bb3({
          'isFarmingLocation': true,
          'farmingLocationUrl': this.farmingLocationUrl,
          'farmingLocationErrorCount': 0
        });
      }
    };
    ["handleFarmingLocationOff"] = function () {
      this.isFarmingLocation = false;
      this.farmingLocationContainer.removeChild(this.localFarmingLocationLabel);
      this.autoFarmBtn.classList.remove('farming-location');
      _0x535bb3("isFarmingLocation", false);
    };
    ["handleReload"] = function () {
      if (this.isLegendMode) {
        this.stopLegend();
      }
      if (this.isAuto) {
        this.stopFarmXP();
      }
      let currentPath = window.location.pathname;
      switch (currentPath) {
        case this.listeningPacticePath:
          let quitButton = document.querySelector("[data-test=\"quit-button\"]");
          if (quitButton) {
            quitButton.click();
          }
          setTimeout(() => {
            let notificationButton = document.querySelector("[data-test=\"notification-button\"]");
            if (notificationButton) {
              notificationButton.click();
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
      if (!this.isAuto && !this.isAutoRunning && !this.isLegendMode) {
        this.legendModeWrapper.classList.add('disable');
        this.targetModeWrapper.classList.add("disable");
        this.passModeWrapper.classList.add("disable");
        this.farmingLocationContainer.classList.add("autoduo-disable");
        document.body.appendChild(this.overlayContainer);
        this.isAuto = true;
        this.autoFarmBtn.classList.add("btn-red", "running");
        this.autoFarmBtn.innerText = _0x117a4f("text37");
        _0x535bb3("isAutoFarmXP", this.isAuto);
        this.startTime = Date.now();
        this.handleLocation();
      }
    };
    ["stopFarmXP"] = function () {
      if (this.isAuto && !this.isLegendMode) {
        this.legendModeWrapper.classList.remove('disable');
        this.targetModeWrapper.classList.remove("disable");
        this.passModeWrapper.classList.remove("disable");
        this.farmingLocationContainer.classList.remove("autoduo-disable");
        document.body.removeChild(this.overlayContainer);
        this.isAuto = false;
        this.autoFarmBtn.classList.remove("btn-red", 'running');
        this.autoFarmBtn.innerText = _0x117a4f("text36");
        _0x535bb3("isAutoFarmXP", this.isAuto);
      }
    };
    ["startLegend"] = function () {
      if (!this.isLegendMode && !this.isAutoRunning && !this.isAuto && !this.isPassMode) {
        this.targetModeWrapper.classList.add("disable");
        this.passModeWrapper.classList.add('disable');
        this.autoFarmBtn.classList.add("disable");
        this.farmingLocationContainer.classList.add("autoduo-disable");
        this.isAuto = true;
        this.isLegendMode = true;
        this.legendModeWrapper.setAutoduoSwitch(true);
        this.handleLegend();
      }
    };
    ["stopLegend"] = function () {
      if (this.isLegendMode) {
        this.targetModeWrapper.classList.remove("disable");
        this.passModeWrapper.classList.remove("disable");
        this.autoFarmBtn.classList.remove("disable");
        this.farmingLocationContainer.classList.remove("autoduo-disable");
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isLegendMode = false;
        this.legendModeWrapper.setAutoduoSwitch(false);
      }
    };
    ['startPassMode'] = function () {
      if (!this.isAuto && !this.isAutoRunning && !this.isPassMode && !this.isLegendMode) {
        this.targetModeWrapper.classList.add("disable");
        this.legendModeWrapper.classList.add("disable");
        this.farmingLocationContainer.classList.add("autoduo-disable");
        this.autoFarmBtn.classList.add("disable");
        this.isAuto = true;
        this.isPassMode = true;
        this.handlePassMode();
      }
    };
    ['stopPassMode'] = function () {
      if (this.isPassMode) {
        this.targetModeWrapper.classList.remove("disable");
        this.legendModeWrapper.classList.remove("disable");
        this.autoFarmBtn.classList.remove('disable');
        this.farmingLocationContainer.classList.remove("autoduo-disable");
        if (document.body.contains(this.overlayContainer)) {
          document.body.removeChild(this.overlayContainer);
        }
        this.isAuto = false;
        this.isPassMode = false;
        _0x535bb3("isPassMode", false);
      }
    };
    ["handleCountDown"] = function (_0x3a5575, _0x58a663) {
      let _0x170edc = document.createElement("div");
      Object.assign(_0x170edc, {
        'className': 'countdown-overlay-listening',
        'style': "--data-prefix: \"" + _0x117a4f("text61") + "\""
      });
      document.body.appendChild(_0x170edc);
      let _0x371da2 = _0x32e76e => {
        _0x170edc.innerText = _0x32e76e + 's';
        if (_0x32e76e < 0) {
          document.body.removeChild(_0x170edc);
          _0x58a663();
          return;
        }
        setTimeout(() => _0x371da2(_0x32e76e - 0x1), 1000);
      };
      _0x371da2(_0x3a5575);
    };
    ["handlePassMode"] = function () {
      if (!this.isPassMode) {
        return;
      }
      if (this.passValue >= this.passModeValue) {
        setTimeout(() => {
          alert(_0x117a4f("text41", this.passModeValue));
        }, 1000);
        this.handlePassModeOff();
        return;
      }
      if (this.openBoxReward() || this.skipCharacterGate()) {
        return;
      }
      let _0x3d79bc = window.location.pathname;
      switch (_0x3d79bc) {
        case this.lessonPath:
          this.handleLegend();
          break;
        default:
          if (this.isPassLegend) {
            let legendarySkillElement = _0x693da5("[data-test*=\"skill-path-level\"]:not([aria-label=\"Radio\"]):not(.fcuKP):not(.r1YyP)");
            if (legendarySkillElement) {
              this.handleCountDown(0x3, this.goLegendChallenge.bind(this, legendarySkillElement));
              break;
            }
          }
          this.handleCountDown(0x3, this.goLessonChallenge.bind(this));
      }
    };
    ['handleLegend'] = function () {
      if (!this.isLegendMode && !this.isPassMode) {
        return;
      }
      let _0x4e094a = _0x693da5(this.lessonWrapper);
      let _0xf4404a = _0x693da5(this.storyWrapper);
      if (_0x4e094a || _0xf4404a) {
        document.body.appendChild(this.overlayContainer);
        this.startTime = Date.now();
        this.getDataStateNode(_0x4e094a || _0xf4404a);
        let _0x809733 = _0x693da5("[class=\"KoxCD\"]");
        if (_0x809733) {
          setTimeout(this.handleRadioChallenge.bind(this), 1000);
          return;
        }
        if (_0x4e094a) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let _0x37806e = _0x693da5("._2SxJv._30qMV._2N_A5._36Vd3._16r-S") || _0x693da5("[data-test=\"player-next\"]");
      if (_0x37806e) {
        _0x37806e.click();
        setTimeout(this.handleLegend.bind(this), 1000);
        return;
      }
      if (this.isPassMode) {
        if (this.isPassLegend) {
          let legendaryStartButton = _0x693da5("[data-test=\"legendary-start-button\"]");
          if (legendaryStartButton) {
            legendaryStartButton.click();
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
        }
        let skipButton = _0x693da5(this.skipLegendarySuggestionBtn) || _0x693da5("[data-test=\"practice-hub-ad-no-thanks-button\"]") || _0x693da5("[data-test=\"plus-no-thanks\"]") || _0x693da5("[data-test=\"story-start\"]");
        if (skipButton) {
          skipButton.click();
          setTimeout(this.handlePassMode.bind(this), 1000);
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
      let currentPath = window.location.pathname;
      switch (currentPath) {
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
          this.autoduoError(_0x117a4f("text42"));
      }
    };
    ["goPracticeHubChallenge"] = function () {
      if (false === this.isAuto) {
        return;
      }
      let listeningPracticeButton = _0x693da5("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2ebe830fd55a7f2754d371bcd79faf32.svg\"]");
      if (!listeningPracticeButton) {
        setTimeout(this.goPracticeHubChallenge.bind(this), 1000);
        return;
      }
      listeningPracticeButton.click();
      setTimeout(this.handlePracticeHubChallenge.bind(this), 1000);
    };
    ["goPracticeChallenge"] = function () {
      window.location.href = this.practicePath;
    };
    ['goFarmingLocationChallenge'] = function () {
      window.location.href = this.farmingLocationUrl;
    };
    ["goLessonChallenge"] = function () {
      if (!(this.openBoxReward() || this.skipCharacterGate())) {
        if (window.location.pathname === this.homePath) {
          let ariaHiddenElement = _0x693da5("[aria-hidden=\"true\"]");
          if (!ariaHiddenElement) {
            let pathIconElement = _0x693da5("img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg\"]");
            if (pathIconElement) {
              pathIconElement.click();
              setTimeout(this.goLessonChallenge.bind(this), 1000);
              return;
            }
            this.handlePassModeOff();
            setTimeout(() => {
              alert(_0x117a4f("text44"));
            }, 0x1f4);
            return;
          }
        }
        window.location.href = this.lessonPath;
      }
    };
    ["goLegendChallenge"] = function (_0x573bf8) {
      _0x573bf8.click();
      setTimeout(() => {
        let legendaryStartButton = _0x693da5("[data-test*=\"skill-path-state-passed\"] + button");
        if (legendaryStartButton) {
          legendaryStartButton.click();
          setTimeout(this.handleLegend.bind(this), 0x258);
        } else {
          _0x573bf8.click();
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
    ["handlePracticeChallenge"] = function () {
      this.handleAutoFarmChallengeGeneral(this.handlePracticeChallenge.bind(this));
    };
    ['handleFarmingLocationChallenge'] = function () {
      if (this.farmingLocationErrorCount >= 0x4) {
        this.stopFarmXP();
        setTimeout(() => {
          window.alert(_0x117a4f("text72"));
        }, 0x1f4);
        return;
      }
      if (window.location.href !== this.farmingLocationUrl) {
        _0x535bb3("farmingLocationErrorCount", ++this.farmingLocationErrorCount);
        this.goFarmingLocationChallenge();
        return;
      }
      if (_0x693da5(this.skipLegendarySuggestionBtn)) {
        this.goFarmingLocationChallenge();
        return;
      }
      let storyStartElement = _0x693da5("[data-test=\"story-start\"]") || _0x693da5(this.storyWrapper);
      if (storyStartElement) {
        storyStartElement.click();
        setTimeout(() => {
          this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this), "story");
        }, 800);
        return;
      }
      this.handleAutoFarmChallengeGeneral(this.handleFarmingLocationChallenge.bind(this));
    };
    ["handleAutoFarmChallengeGeneral"] = function (retryFunction = () => {}, challengeType = "lesson") {
      if (!this.isAuto) {
        return;
      }
      let challengeElement = "lesson" === challengeType ? _0x693da5(this.lessonWrapper) : _0x693da5(this.storyWrapper);
      if (challengeElement) {
        if (this.isFarmingLocation) {
          this.farmingLocationErrorCount = 0;
        }
        this.getDataStateNode(challengeElement);
        if ("lesson" === challengeType) {
          this.nextQuestion();
        } else {
          this.continueStory();
        }
        return;
      }
      let playerNextButton = challengeType = _0x693da5("[data-test=\"player-next\"][aria-disabled=\"false\"]");
      if (playerNextButton) {
        this.nextQuestion();
        return;
      }
      setTimeout(retryFunction, 1000);
    };
    ["doChallenge"] = async function () {
      if (this.isSafeMode) {
        await this.sleep(this.safeDelayTimeTemp + 0xc8);
      }
      if (!this.isAuto || this.isAutoRunning) {
        return;
      }
      let challengeElement = _0x693da5("[data-test*=\"challenge challenge\"]");
      if (!challengeElement) {
        return this.autoduoError(_0x117a4f("text45"));
      }
      let challengeType = challengeElement.dataset.test?.["slice"](0xa);
      this.setAutoRunning(true);
      switch (challengeType) {
        case "challenge-translate":
        case "challenge-listenTap":
        case "challenge-listen":
        case "challenge-writeComprehension":
        case "challenge-syllableTap":
        case "challenge-syllableListenTap":
          this.handleChallengeTranslate(challengeType);
          break;
        case "challenge-gapFill":
        case 'challenge-listenIsolation':
        case 'challenge-assist':
        case "challenge-selectTranscription":
        case "challenge-characterIntro":
        case 'challenge-characterSelect':
        case 'challenge-selectPronunciation':
        case "challenge-dialogue":
        case "challenge-readComprehension":
        case 'challenge-listenComprehension':
        case "challenge-select":
        case "challenge-form":
        case "challenge-definition":
        case "challenge-sameDifferent":
          this.handleChallengeChoice();
          break;
        case 'challenge-characterMatch':
        case 'challenge-match':
          this.handleChallengeMatch(challengeType);
          break;
        case "challenge-listenComplete":
        case 'challenge-partialListen':
        case "challenge-name":
        case "challenge-typeCompleteTable":
        case "challenge-typeCloze":
        case "challenge-typeClozeTable":
          this.handleChallengeTextInput(challengeType);
          break;
        case "challenge-listenMatch":
          this.handleChallengeListenMatch();
          break;
        case 'challenge-extendedListenMatch':
          this.handleChallengeExtendedListenMatch();
          break;
        case "challenge-extendedMatch":
          this.handleChallengeExtendedMatch();
          break;
        case "challenge-completeReverseTranslation":
          this.handleChallengeCompleteReverseTranslation(challengeType);
          break;
        case "challenge-partialReverseTranslate":
          this.handleChallengePartialReverseTranslate();
          break;
        case 'challenge-tapComplete':
        case 'challenge-tapCompleteTable':
        case "challenge-tapCloze":
        case "challenge-tapClozeTable":
          this.handleChallengeTapComplete(challengeType);
          break;
        case "challenge-speak":
        case "challenge-listenSpeak":
          this.handleSkipChallenge();
          break;
        default:
          this.autoduoError(_0x117a4f("text46", challengeType));
      }
    };
    ["handleChallengeTranslate"] = function (_0x404ba6) {
      if (false === this.isAuto) {
        this.setAutoRunning(false);
        return;
      }
      let correctAnswerTokens = null;
      switch (_0x404ba6) {
        case 'challenge-listenTap':
        case "challenge-translate":
          if (!(correctAnswerTokens = this.getData("correctTokens"))?.['length']) {
            correctAnswerTokens = this.getData(['challengeResponseTrackingProperties', "best_solution"])?.['split'](" ");
          }
          break;
        case "challenge-listen":
          correctAnswerTokens = this.getData("prompt")?.["split"](" ");
          break;
        case "challenge-completeReverseTranslation":
        case "challenge-writeComprehension":
          correctAnswerTokens = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.['split'](" ");
          break;
        case "challenge-syllableTap":
        case "challenge-syllableListenTap":
          let choicesData = this.getData("choices");
          correctAnswerTokens = this.getData("correctIndices").map(choiceIndex => {
            let {
              text: choiceText,
              damagePosition: damagePosition
            } = choicesData[choiceIndex];
            return {
              'text': choiceText,
              'damagePosition': damagePosition.toUpperCase()
            };
          });
      }
      if (!correctAnswerTokens) {
        return this.autoduoError(_0x117a4f("text47"));
      }
      let translateInput = _0x693da5("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (translateInput) {
        let toggleKeyboardButton = _0x693da5("[data-test=\"player-toggle-keyboard\"]");
        if (toggleKeyboardButton) {
          toggleKeyboardButton.click();
          return setTimeout(this.handleChallengeTranslate.bind(this, _0x404ba6), 0x1f4);
        }
        let inputEvent = new Event("input", {
          'bubbles': true
        });
        let currentInput = '';
        if (this.isTurboMode) {
          currentInput = correctAnswerTokens.join(" ");
          this.nativeTextareaValueSetter.call(translateInput, currentInput);
          translateInput.dispatchEvent(inputEvent);
          this.setAutoRunning(false);
          this.nextQuestion(true);
          return;
        }
        let typeAnswer = () => {
          setTimeout(() => {
            if (0 === correctAnswerTokens.length) {
              this.setAutoRunning(false);
              this.nextQuestion(true);
              return;
            }
            currentInput += " " + correctAnswerTokens.shift();
            this.nativeTextareaValueSetter.call(translateInput, currentInput);
            translateInput.dispatchEvent(inputEvent);
            typeAnswer();
          }, this.randomSafeDelayTime());
        };
        return void typeAnswer();
      }
      this.isPreviewVersion;
      let tapTokenElements = Array.from(_0x263868("[class=\"_1vkDo\"] button[data-test*=\"challenge-tap-token\"]"));
      if (0 === tapTokenElements.length) {
        return setTimeout(this.handleChallengeTranslate.bind(this, _0x404ba6), 0x1f4);
      }
      let findTapTokenIndex = _0x43a5a8 => {
        let _0x47cf51 = tapTokenElements.findIndex(_0x5a2d5b => _0x43a5a8?.["damagePosition"] ? (_0x5a2d5b.classList.contains("P3baP") ? "RIGHT" : _0x5a2d5b.classList.contains("bfI-N") ? "LEFT" : _0x5a2d5b.classList.contains("_1WVl5") ? "BOTH" : "NEITHER") === _0x43a5a8.damagePosition && _0x5a2d5b.textContent === _0x43a5a8.text : _0x5a2d5b.textContent === _0x43a5a8);
        return _0x47cf51;
      };
      if (this.isTurboMode) {
        for (let answerToken of correctAnswerTokens) {
          let tapTokenIndex = findTapTokenIndex(answerToken);
          if (-0x1 === tapTokenIndex) {
            return this.autoduoLessonError(_0x117a4f("text48"));
          }
          tapTokenElements[tapTokenIndex].click();
          tapTokenElements.splice(tapTokenIndex, 0x1);
        }
        this.setAutoRunning(false);
        this.nextQuestion(true);
        return;
      }
      let tapAnswer = () => {
        setTimeout(() => {
          if (0 === correctAnswerTokens.length) {
            this.setAutoRunning(false);
            this.nextQuestion(true);
            return;
          }
          let answerToken = correctAnswerTokens.shift();
          let tapTokenIndex = findTapTokenIndex(answerToken);
          if (-0x1 === tapTokenIndex) {
            return this.autoduoLessonError(_0x117a4f("text48"));
          }
          tapTokenElements[tapTokenIndex].click();
          tapTokenElements.splice(tapTokenIndex, 0x1);
          tapAnswer();
        }, this.randomSafeDelayTime());
      };
      tapAnswer();
    };
    ["handleChallengeListenMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let listenMatchChallengeElement = _0x693da5("[data-test*=\"challenge-listenMatch\"]");
      this.isPreviewVersion;
      let listenMatchButtons = Array.from(listenMatchChallengeElement.querySelectorAll("[class=\"vOrcA\"] > button"));
      let listenMatchAnswers = listenMatchButtons.splice(listenMatchButtons.length / 0x2);
      this.listenMatchHandlerGeneral(listenMatchButtons, listenMatchAnswers, () => {
        this.setAutoRunning(false);
        this.nextQuestion(true);
      });
    };
    ["listenMatchHandlerGeneral"] = function (_0x31dcc3, _0xe6ff7e, completionCallback = () => {}) {
      let currentMatchTarget = null;
      if (this.isTurboMode) {
        for (let matchButton of _0x31dcc3) {
          currentMatchTarget = matchButton.dataset.test;
          matchButton.click();
          let answerButtonIndex = _0xe6ff7e.findIndex(_0x464103 => _0x464103.dataset.test === currentMatchTarget);
          if (-0x1 === answerButtonIndex) {
            return this.autoduoLessonError(_0x117a4f("text49"));
          }
          _0xe6ff7e[answerButtonIndex].click();
          _0xe6ff7e.splice(answerButtonIndex, 0x1);
        }
        completionCallback();
        return;
      }
      let matchAnswers = () => {
        setTimeout(() => {
          if (0 === _0xe6ff7e.length) {
            completionCallback();
            return;
          }
          if (null === currentMatchTarget) {
            let matchButton = _0x31dcc3.shift();
            currentMatchTarget = matchButton.dataset.test;
            matchButton.click();
          } else {
            let answerButtonIndex = _0xe6ff7e.findIndex(_0x37f7c4 => _0x37f7c4.dataset.test === currentMatchTarget);
            if (-0x1 === answerButtonIndex) {
              return this.autoduoLessonError(_0x117a4f("text49"));
            }
            _0xe6ff7e[answerButtonIndex].click();
            _0xe6ff7e.splice(answerButtonIndex, 0x1);
            currentMatchTarget = null;
          }
          matchAnswers();
        }, this.randomSafeDelayTime());
      };
      matchAnswers();
    };
    ['handleChallengeExtendedListenMatch'] = function () {
      if (!this.isAuto) {
        return;
      }
      let extendedListenMatchChallengeElement = _0x693da5("[data-test*=\"challenge-extendedListenMatch\"]");
      let extendedListenMatchButtons = Array.from(extendedListenMatchChallengeElement.querySelectorAll("[class=\"vOrcA\"] > button"));
      let halfButtonCount = extendedListenMatchButtons.length / 0x2;
      let extendedListenMatchAnswers = extendedListenMatchButtons.splice(halfButtonCount);
      let playerNextButton = _0x693da5("[data-test=\"player-next\"]");
      let currentButtonIndex = 0;
      let currentMatchTarget = null;
      let resetMatchTarget = () => {
        currentMatchTarget = null;
        if (++currentButtonIndex >= halfButtonCount) {
          currentButtonIndex = 0;
        }
      };
      let matchAnswers = () => {
        setTimeout(() => {
          if ("false" === playerNextButton.getAttribute("aria-disabled")) {
            this.setAutoRunning(false);
            this.nextQuestion();
            return;
          }
          if (null === currentMatchTarget) {
            let matchButton = extendedListenMatchButtons[currentButtonIndex];
            currentMatchTarget = matchButton.dataset.test;
            matchButton.click();
          } else {
            let answerButtonIndex = extendedListenMatchAnswers.findIndex(_0x3ce09b => _0x3ce09b.dataset.test === currentMatchTarget);
            if (-0x1 === answerButtonIndex) {
              resetMatchTarget();
              matchAnswers();
              return;
            }
            extendedListenMatchAnswers[answerButtonIndex].click();
            resetMatchTarget();
          }
          matchAnswers();
        }, this.randomSafeDelayTime() + 0x96);
      };
      matchAnswers();
    };
    ["handleChallengeMatch"] = function (challengeType) {
      if (!this.isAuto) {
        return;
      }
      let matchChallengeElement = _0x693da5("[data-test*=\"challenge \"]");
      let matchTokens = Array.from(matchChallengeElement.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let _0x13a2f9 = matchTokens.splice(matchTokens.length / 0x2);
      let matchDictionary = null;
      switch (challengeType) {
        case "challenge-characterMatch":
          matchDictionary = this.getData("pairs")?.['reduce']((_0x2e9f7c, _0x471913) => {
            let {
              transliteration: _0x24db23,
              character: _0x14c9d4
            } = _0x471913;
            _0x2e9f7c[_0x24db23] = _0x14c9d4;
            return _0x2e9f7c;
          }, {});
          break;
        case "challenge-match":
          matchDictionary = this.getData("pairs")?.["reduce"]((_0x3480df, _0x1b195f) => {
            let {
              fromToken: _0x4df419,
              learningToken: _0x7d1a84
            } = _0x1b195f;
            _0x3480df[_0x4df419] = _0x7d1a84;
            return _0x3480df;
          }, {});
      }
      if (!matchDictionary) {
        return this.autoduoError(_0x117a4f("text47"));
      }
      let currentMatchTarget = null;
      if (this.isTurboMode) {
        for (let matchToken of matchTokens) {
          matchToken.click();
          currentMatchTarget = matchDictionary[matchToken.innerText];
          let answerTokenIndex = _0x13a2f9.findIndex(_0x52f87d => _0x52f87d.innerText === currentMatchTarget);
          if (-0x1 === answerTokenIndex) {
            return this.autoduoLessonError(_0x117a4f("text50"));
          }
          _0x13a2f9[answerTokenIndex].click();
          _0x13a2f9.splice(answerTokenIndex, 0x1);
        }
        this.setAutoRunning(false);
        this.nextQuestion(true);
        return;
      }
      let matchAnswers = () => {
        setTimeout(() => {
          if (0 === _0x13a2f9.length) {
            this.setAutoRunning(false);
            this.nextQuestion(true);
            return;
          }
          if (null === currentMatchTarget) {
            let matchToken = matchTokens.shift();
            matchToken.click();
            currentMatchTarget = matchDictionary[matchToken.innerText];
          } else {
            let answerTokenIndex = _0x13a2f9.findIndex(_0xabd14c => _0xabd14c.innerText === currentMatchTarget);
            if (-0x1 === answerTokenIndex) {
              return this.autoduoLessonError(_0x117a4f("text50"));
            }
            _0x13a2f9[answerTokenIndex].click();
            _0x13a2f9.splice(answerTokenIndex, 0x1);
            currentMatchTarget = null;
          }
          matchAnswers();
        }, this.randomSafeDelayTime());
      };
      matchAnswers();
    };
    ["handleChallengeExtendedMatch"] = function () {
      if (!this.isAuto) {
        return;
      }
      let extendedMatchChallengeElement = _0x693da5("[data-test*=\"challenge \"]");
      let extendedMatchButtons = Array.from(extendedMatchChallengeElement.querySelectorAll("[data-test=\"challenge-tap-token-text\"]"));
      let halfButtonCount = extendedMatchButtons.length / 0x2;
      let extendedMatchAnswers = extendedMatchButtons.splice(halfButtonCount);
      let matchDictionary = this.getData("pairs")?.["reduce"]((_0x28764b, _0x52114a) => {
        let {
          fromToken: _0x22c1d8,
          learningToken: _0x24f02e
        } = _0x52114a;
        _0x28764b[_0x22c1d8] = _0x24f02e;
        return _0x28764b;
      }, {});
      if (!matchDictionary) {
        return this.autoduoError(_0x117a4f("text47"));
      }
      let playerNextButton = _0x693da5("[data-test=\"player-next\"]");
      let currentButtonIndex = 0;
      let currentMatchTarget = null;
      let resetMatchTarget = () => {
        currentMatchTarget = null;
        if (++currentButtonIndex >= halfButtonCount) {
          currentButtonIndex = 0;
        }
      };
      let matchAnswers = () => {
        setTimeout(() => {
          if ("false" === playerNextButton.getAttribute("aria-disabled")) {
            this.setAutoRunning(false);
            this.nextQuestion();
            return;
          }
          if (null === currentMatchTarget) {
            let matchButton = extendedMatchButtons[currentButtonIndex];
            currentMatchTarget = matchDictionary[matchButton.textContent];
            matchButton.click();
          } else {
            let answerButtonIndex = extendedMatchAnswers.findIndex(_0x390f9f => _0x390f9f.textContent === currentMatchTarget);
            if (-0x1 === answerButtonIndex) {
              resetMatchTarget();
              matchAnswers();
              return;
            }
            extendedMatchAnswers[answerButtonIndex].click();
            resetMatchTarget();
          }
          matchAnswers();
        }, this.randomSafeDelayTime() + 0x96);
      };
      matchAnswers();
    };
    ["handleChallengeChoice"] = function () {
      this.handleChallengeChoiceGeneral(() => {
        this.setAutoRunning(false);
        this.nextQuestion(true);
      });
    };
    ['handleChallengeChoiceGeneral'] = function (completionCallback = () => {}) {
      if (!this.isAuto) {
        return;
      }
      let choiceElements = _0x263868("[data-test=\"challenge-choice\"]");
      let correctChoiceIndex = this.getData('correctIndex');
      if (null === correctChoiceIndex) {
        return this.autoduoError(_0x117a4f("text47"));
      }
      if (this.isTurboMode) {
        choiceElements[correctChoiceIndex].click();
        completionCallback();
        return;
      }
      setTimeout(() => {
        choiceElements[correctChoiceIndex].click();
        setTimeout(completionCallback, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengeTextInput"] = function (challengeType) {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let correctAnswers = null;
      switch (challengeType) {
        case 'challenge-listenComplete':
        case "challenge-partialListen":
        case "challenge-completeReverseTranslation":
        case "challenge-typeCloze":
          correctAnswers = Array.from(_0x263868("[class=\"zem1K\"]")).reduce((accumulator, element) => {
            let text = element?.['textContent']?.['replaceAll']('_', '');
            return text ? [...accumulator, text] : accumulator;
          }, []);
          break;
        case "challenge-typeCompleteTable":
        case "challenge-typeClozeTable":
          correctAnswers = Array.from(_0x263868("[class=\"zem1K\"]:first-child")).map(element => element?.["textContent"]?.['replaceAll']('_', ''));
          break;
        case "challenge-name":
          correctAnswers = this.getData('correctSolutions');
      }
      if (!correctAnswers?.['length']) {
        return this.autoduoError(_0x117a4f("text47"));
      }
      let textInputElements = _0x263868("[data-test=\"challenge-text-input\"][value=\"\"]");
      if (!textInputElements.length) {
        textInputElements = _0x263868("input[value=\"\"]");
      }
      let inputEvent = new Event("input", {
        'bubbles': true
      });
      let typeAnswers = () => {
        let choiceTextElements = Array.from(_0x263868("[data-test=\"challenge-choice\"] [data-test=\"challenge-judge-text\"]"));
        Array.from(textInputElements).forEach((textInput, index) => {
          if (choiceTextElements.length > 0) {
            let choiceElement = choiceTextElements.find(_0x4e8a4e => correctAnswers[index].startsWith(_0x4e8a4e.textContent));
            choiceElement?.['click']();
            correctAnswers[index] = correctAnswers[index].replace(choiceElement?.["textContent"], '');
          }
          this.nativeInputValueSetter.call(textInput, correctAnswers[index]);
          textInput.dispatchEvent(inputEvent);
        });
      };
      if (this.isTurboMode) {
        typeAnswers();
        this.setAutoRunning(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        typeAnswers();
        setTimeout(() => {
          this.setAutoRunning(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengePartialReverseTranslate"] = function () {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let correctAnswerText = _0x693da5("[class=\"_2rM17 _3qrJ_ _3dHA7\"]")?.["textContent"];
      let editableSpan = _0x693da5("span[contenteditable=\"true\"]");
      let inputEvent = new Event("input", {
        'bubbles': true
      });
      if (this.isTurboMode) {
        editableSpan.innerText = correctAnswerText;
        editableSpan.dispatchEvent(inputEvent);
        this.setAutoRunning(false);
        this.nextQuestion(true);
        return;
      }
      setTimeout(() => {
        editableSpan.innerText = correctAnswerText;
        editableSpan.dispatchEvent(inputEvent);
        setTimeout(() => {
          this.setAutoRunning(false);
          this.nextQuestion(true);
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["handleChallengeCompleteReverseTranslation"] = function (challengeType) {
      let translateInput = _0x693da5("textarea[data-test=\"challenge-translate-input\"]:not([disabled])");
      if (translateInput) {
        this.handleChallengeTranslate(challengeType);
        return;
      }
      this.handleChallengeTextInput(challengeType);
    };
    ['handleChallengeTapComplete'] = function (challengeType) {
      if (!this.isAuto) {
        return;
      }
      let wordBankTokens = Array.from(_0x263868("[data-test=\"word-bank\"] [data-test=\"challenge-tap-token-text\"]"));
      let correctIndices = null;
      switch (challengeType) {
        case "challenge-tapCompleteTable":
          correctIndices = (displayTableTokens => {
            let correctIndices = displayTableTokens.reduce((_0x277758, row) => (row.forEach(token => {
              let {
                text: tokenText,
                isBlank: isBlank
              } = token[0];
              if (isBlank) {
                let tokenIndex = wordBankTokens.findIndex(_0x3a6ff9 => _0x3a6ff9.textContent === tokenText);
                _0x277758.push(tokenIndex);
              }
            }), _0x277758), []);
            return correctIndices;
          })(this.getData("displayTableTokens"));
          break;
        case "challenge-tapClozeTable":
          correctIndices = (displayTableTokens => {
            let correctIndices = displayTableTokens.reduce((_0x1cedd3, row) => (row.forEach(token => {
              let {
                text: tokenText,
                damageStart: damageStart
              } = token[0];
              if (damageStart) {
                let answerText = tokenText.slice(damageStart);
                let tokenIndex = wordBankTokens.findIndex(_0x884b83 => _0x884b83.textContent === answerText);
                _0x1cedd3.push(tokenIndex);
              }
            }), _0x1cedd3), []);
            return correctIndices;
          })(this.getData("displayTableTokens"));
          break;
        default:
          correctIndices = this.getData("correctIndices");
      }
      if (!correctIndices) {
        return this.autoduoError(_0x117a4f('text47'));
      }
      if (this.isTurboMode) {
        for (let index of correctIndices) wordBankTokens[index].click();
        this.setAutoRunning(false);
        this.nextQuestion(true);
        return;
      }
      let tapAnswer = () => {
        setTimeout(() => {
          if (0 === correctIndices.length) {
            this.setAutoRunning(false);
            this.nextQuestion(true);
            return;
          }
          let index = correctIndices.shift();
          wordBankTokens[index].click();
          tapAnswer();
        }, this.randomSafeDelayTime());
      };
      tapAnswer();
    };
    ["handleSkipChallenge"] = function () {
      setTimeout(() => {
        let skipButton = _0x693da5("[data-test=\"player-skip\"]");
        if (!skipButton) {
          setTimeout(this.handleSkipChallenge.bind(this), 0x190);
          return;
        }
        skipButton.click();
        setTimeout(() => {
          this.setAutoRunning(false);
          this.nextQuestion();
        }, this.randomSafeDelayTime());
      }, this.randomSafeDelayTime());
    };
    ["nextQuestion"] = function (isTurboModeActive = false) {
      if (!this.isAuto) {
        return;
      }
      if (this.isTurboMode && isTurboModeActive) {
        let checkNextButton = () => {
          if (!this.isAuto) {
            mutationObserver.disconnect();
            clearTimeout(timeoutId);
            return;
          }
          let playerNextButton = _0x693da5("[data-test=\"player-next\"][aria-disabled=\"false\"]");
          if (playerNextButton) {
            mutationObserver.disconnect();
            clearTimeout(timeoutId);
            this.nextQuestion();
          }
        };
        let timeoutId = setTimeout(() => {
          mutationObserver.disconnect();
          this.nextQuestion();
        }, 0x1f4);
        let mutationObserver = new MutationObserver(checkNextButton);
        mutationObserver.observe(document.body, {
          'childList': true,
          'subtree': true
        });
        checkNextButton();
        return;
      }
      this.isPreviewVersion;
      let xpElement = _0x693da5("[class=\"i6eR4\"]");
      if (xpElement) {
        let earnedXp = this.getExp(xpElement);
        if (undefined !== earnedXp) {
          this.exp += earnedXp;
          this.expElm.innerText = this.exp;
          let currentTime = Date.now();
          let timeElapsed = currentTime - this.startTime;
          this.totalTime += timeElapsed;
          this.startTime = currentTime;
          this.renderTime();
          _0x535bb3({
            'exp': this.exp,
            'time': this.totalTime
          });
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= currentTime) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              let passModeMessage = this.isPassMode ? _0x117a4f("text51", this.passValue, this.passModeValue) : '';
              setTimeout(() => {
                alert(_0x117a4f('text52', this.exp, this.targetModeValue) + passModeMessage);
              }, 0x7d0);
              this.handleTargetModeOff(true);
              let playerNextButton = _0x693da5("[data-test=\"player-next\"]");
              if (playerNextButton) {
                playerNextButton.click();
              }
              return;
            }
            this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
          }
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          let currentPath = window.location.pathname;
          if ((currentPath === this.practicePath || currentPath === this.listeningPacticePath) && (this.totalReloadTime += timeElapsed) >= this.reloadTime) {
            window.location.reload();
            return;
          }
          let practiceAgainButton = _0x693da5("[data-test=\"player-practice-again\"]");
          if (practiceAgainButton) {
            practiceAgainButton.click();
            setTimeout(this.handlePracticeChallenge.bind(this), 0x7d0);
            return;
          }
        }
      }
      let playerNextButton = _0x693da5("[data-test=\"player-next\"]");
      if (!playerNextButton) {
        let legendaryContinueButton = _0x693da5("[data-test=\"legendary-session-end-continue\"]");
        if (legendaryContinueButton) {
          legendaryContinueButton.click();
          setTimeout(this.nextQuestion.bind(this), 0x1f4);
          return;
        }
        if (this.isPassMode) {
          setTimeout(this.handlePassMode.bind(this), 1000);
          return;
        }
        setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
        return;
      }
      let isNextButtonDisabled = playerNextButton.getAttribute('aria-disabled');
      let isNextButtonLoading = playerNextButton.classList.contains("_3CBig");
      if ("true" === isNextButtonDisabled && !isNextButtonLoading) {
        setTimeout(this.doChallenge.bind(this), this.nextTime);
        return;
      }
      if (!isNextButtonLoading) {
        playerNextButton.click();
      }
      setTimeout(this.nextQuestion.bind(this), this.nextTime);
    };
    ["continueStory"] = function () {
      if (!this.isAuto) {
        return;
      }
      this.isPreviewVersion;
      let _0x3ef221 = _0x693da5("[class=\"_2skTt _2CoFd\"]");
      if (_0x3ef221 && true !== _0x3ef221.wasGetExp) {
        let _0x4c2eeb = this.getExpStory(_0x3ef221);
        if (_0x4c2eeb) {
          this.exp += _0x4c2eeb;
          this.expElm.innerText = this.exp;
          let _0x11679a = Date.now();
          this.totalTime += _0x11679a - this.startTime;
          this.renderTime();
          _0x535bb3({
            'exp': this.exp,
            'time': this.totalTime
          });
          _0x3ef221.wasGetExp = true;
          if (this.isPassMode) {
            this.passValue++;
            this.updatePassModeState();
          }
          if (this.keyTimeOut <= _0x11679a) {
            this.handleKeyTimeOut();
            return;
          }
          if (this.isTargetMode) {
            if (this.exp >= this.targetModeValue) {
              setTimeout(() => {
                let _0x5243ba = this.isPassMode ? _0x117a4f("text51", this.passValue, this.passModeValue) : '';
                setTimeout(() => {
                  alert(_0x117a4f('text52', this.exp, this.targetModeValue) + _0x5243ba);
                }, 1000);
                this.handleTargetModeOff(true);
              }, 0x7d0);
            } else {
              this.targetModeLabel.innerText = this.exp + " / " + this.targetModeValue + " XP";
            }
          }
        }
      }
      let storyContinueButton = _0x693da5("[data-test=\"stories-player-continue\"]");
      if (!storyContinueButton) {
        let storyDoneButton = _0x693da5("[data-test=\"stories-player-done\"]");
        if (storyDoneButton) {
          storyDoneButton.click();
          if (this.isLegendMode) {
            document.body.removeChild(this.overlayContainer);
            setTimeout(this.handleLegend.bind(this), 0x7d0);
            return;
          }
          if (this.isPassMode) {
            setTimeout(this.handlePassMode.bind(this), 1000);
            return;
          }
          let clickStoryDoneButton = () => {
            setTimeout(() => {
              if (document.body.contains(storyDoneButton)) {
                storyDoneButton.click();
                clickStoryDoneButton();
                return;
              }
              setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
            }, 800);
          };
          clickStoryDoneButton();
          return;
        }
        return this.autoduoError(_0x117a4f("text53"));
      }
      let isContinueButtonDisabled = storyContinueButton.disabled;
      if (isContinueButtonDisabled) {
        let isContinueButtonLoading = storyContinueButton.classList.contains("_3CBig");
        if (isContinueButtonLoading) {
          setTimeout(this.continueStory.bind(this), 0x7d0);
          return;
        }
        let storyChallengeData = this.getDataStory();
        if (storyChallengeData) {
          this.doChallengeStory(storyChallengeData);
          return;
        }
        setTimeout(this.continueStory.bind(this), 1000);
        return;
      }
      storyContinueButton.click();
      setTimeout(this.continueStory.bind(this), this.safeDelayTimeTemp);
    };
    ["doChallengeStory"] = function (storyChallengeData) {
      if (this.isAuto) {
        this.setAutoRunning(true);
        switch (storyChallengeData.type) {
          case "multiple-choice":
          case 'select-phrases':
            this.handleStoryMultipleChoice(storyChallengeData.correctAnswerIndex);
            break;
          case "point-to-phrase":
            this.handleStoryPointToPhrase(storyChallengeData.parts[storyChallengeData.correctAnswerIndex].text);
            break;
          case "match":
            this.handleStoryMatch(storyChallengeData.dictionary);
            break;
          case "arrange":
            this.handleStoryArrange([...storyChallengeData.phraseOrder]);
            break;
          default:
            return this.autoduoError(_0x117a4f("text46", storyChallengeData.type));
        }
      }
    };
    ['handleStoryMultipleChoice'] = function (correctChoiceIndex) {
      if (!this.isAuto) {
        return;
      }
      let choiceElements = _0x263868("[data-test=\"stories-choice\"]");
      setTimeout(() => {
        choiceElements[correctChoiceIndex].click();
        this.setAutoRunning(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ["handleStoryPointToPhrase"] = function (correctAnswerText) {
      if (!this.isAuto) {
        return;
      }
      let tapTokenElements = Array.from(_0x263868("[data-test=\"challenge-tap-token-text\"]"));
      let correctAnswerElement = tapTokenElements.find(_0x3ac3c2 => _0x3ac3c2.innerText === correctAnswerText);
      if (!correctAnswerElement) {
        return this.autoduoError(_0x117a4f("text54"));
      }
      setTimeout(() => {
        correctAnswerElement.click();
        this.setAutoRunning(false);
        this.continueStory();
      }, this.randomSafeDelayTime());
    };
    ['handleStoryMatch'] = function (matchDictionary) {
      if (!this.isAuto) {
        return;
      }
      let matchTokens = Array.from(_0x263868("[data-test=\"challenge-tap-token-text\"]"));
      let matchAnswers = matchTokens.splice(matchTokens.length / 0x2);
      let currentMatchTarget = null;
      let _0x9a3860 = () => {
        setTimeout(() => {
          if (0 === matchAnswers.length) {
            this.setAutoRunning(false);
            this.continueStory();
            return;
          }
          if (null === currentMatchTarget) {
            let matchToken = matchTokens.shift();
            matchToken.click();
            currentMatchTarget = matchDictionary["from:" + matchToken.innerText] || matchDictionary["from:" + matchToken.innerText + " "];
          } else {
            let answerTokenIndex = matchAnswers.findIndex(_0x2b8a07 => _0x2b8a07.innerText === currentMatchTarget);
            if (-0x1 === answerTokenIndex) {
              return this.autoduoError(_0x117a4f("text55"));
            }
            matchAnswers[answerTokenIndex].click();
            matchAnswers.splice(answerTokenIndex, 0x1);
            currentMatchTarget = null;
          }
          _0x9a3860();
        }, this.randomSafeDelayTime());
      };
      _0x9a3860();
    };
    ["handleStoryArrange"] = function (correctOrder) {
      if (!this.isAuto) {
        return;
      }
      let tapTokenElements = _0x263868("[data-test=\"challenge-tap-token-text\"]");
      let arrangeTokens = () => {
        setTimeout(() => {
          if (0 === correctOrder.length) {
            this.setAutoRunning(false);
            this.continueStory();
            return;
          }
          let tokenIndex = correctOrder.shift();
          tapTokenElements[tokenIndex].click();
          arrangeTokens();
        }, this.randomSafeDelayTime());
      };
      arrangeTokens();
    };
    ["getDataStory"] = function () {
      let storyChallengeData = this.dataStateNode?.["props"]?.['currentChallengeSession'];
      return storyChallengeData;
    };
    ['getExpStory'] = function (storyElement) {
      let reactPropsKey = Object.keys(storyElement).find(_0x561434 => /^__reactProps/g.test(_0x561434));
      return storyElement?.[reactPropsKey]?.["children"]?.['props']?.["sessionXp"];
    };
    ['handleRadioChallenge'] = function () {
      if (!this.isAuto) {
        return;
      }
      let radioChallengeElement = _0x693da5("[class=\"gz439\"]");
      if (radioChallengeElement) {
        this.doRadioChallenge();
        return;
      }
      let playerNextButton = _0x693da5("[data-test=\"player-next\"]");
      if (playerNextButton) {
        this.nextQuestion();
        return;
      }
      setTimeout(this.handleRadioChallenge.bind(this), 0x5dc);
    };
    ["doRadioChallenge"] = function () {
      this.setAutoRunning(true);
      let radioChallengeType = this.getData("type");
      switch (radioChallengeType) {
        case "radioListenMatch":
          this.handleRadioListenMatchChallenge();
          break;
        case "radioBinary":
          this.handleRadioBinaryChallenge();
          break;
        case 'radioListenRecognize':
          this.handleRadioListenRecognizeChallenge();
          break;
        case 'radioSelect':
        case 'radioImageSelect':
          this.handleRadioChoiceChallenge();
          break;
        default:
          return this.autoduoError(_0x117a4f("text46", radioChallengeType));
      }
    };
    ['handleRadioListenMatchChallenge'] = function () {
      if (!this.isAuto) {
        return;
      }
      let radioListenMatchButtons = Array.from(_0x263868("[class=\"vOrcA\"] > button"));
      let radioListenMatchAnswers = radioListenMatchButtons.splice(radioListenMatchButtons.length / 0x2);
      this.listenMatchHandlerGeneral(radioListenMatchButtons, radioListenMatchAnswers, () => {
        this.setAutoRunning(false);
        setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
      });
    };
    ['handleRadioBinaryChallenge'] = function () {
      if (!this.isAuto) {
        return;
      }
      let choiceElements = _0x263868("[data-test=\"challenge-choice\"]");
      if (choiceElements.length < 0x1) {
        this.autoduoError(_0x117a4f("text54"));
      }
      choiceElements.forEach(choiceElement => choiceElement.click());
      this.setAutoRunning(false);
      setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
    };
    ['handleRadioListenRecognizeChallenge'] = function () {
      if (!this.isAuto) {
        return;
      }
      let choiceElements = _0x263868("[data-test=\"challenge-choice\"]");
      let correctIndices = this.getData("correctIndices");
      let clickChoices = () => {
        if (correctIndices.length <= 0) {
          this.setAutoRunning(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
          return;
        }
        let choiceIndex = correctIndices.shift();
        choiceElements[choiceIndex].click();
        setTimeout(clickChoices, this.randomSafeDelayTime());
      };
      clickChoices();
    };
    ["handleRadioChoiceChallenge"] = function () {
      if (this.isAuto) {
        this.handleChallengeChoiceGeneral(() => {
          this.setAutoRunning(false);
          setTimeout(this.handleRadioChallenge.bind(this), 0x1388);
        });
      }
    };
    ["findReactProps"] = function (element) {
      this.reactProps = Object.keys(element).find(key => key.startsWith("__reactProps"));
      if (!this.reactProps) {
        return this.autoduoError(_0x117a4f("text56"));
      }
    };
    ["getDataStateNode"] = function (_0x102c5b) {
      if (null === this.reactProps) {
        this.findReactProps(_0x102c5b);
      }
      let reactPropsValue = _0x102c5b?.[this.reactProps]?.[this.lessGenealogy];
      if (Array.isArray(reactPropsValue)) {
        this.dataStateNode = reactPropsValue?.[0]?.["_owner"]?.["stateNode"];
      } else {
        this.dataStateNode = reactPropsValue?.["_owner"]?.["stateNode"];
      }
    };
    ["getData"] = function (dataKey) {
      let currentChallengeData = this.dataStateNode?.["props"]?.["currentChallenge"];
      if (!currentChallengeData) {
        return this.autoduoError(_0x117a4f("text57"));
      }
      if (Array.isArray(dataKey)) {
        let dataValue = dataKey.reduce((_0xdd900d, key) => {
          if (null === _0xdd900d) {
            return null;
          }
          let value = _0xdd900d[key];
          return value || null;
        }, currentChallengeData);
        return Array.isArray(dataValue) ? [...dataValue] : dataValue;
      }
      {
        let dataValue = currentChallengeData[dataKey];
        return Array.isArray(dataValue) ? [...dataValue] : dataValue;
      }
    };
    ["getExp"] = function (element) {
      let keys = Object.keys(element);
      let reactPropsKey = keys.find(_0x9fb954 => _0x9fb954.startsWith("__reactProps"));
      let earnedXp = element?.[reactPropsKey]?.["children"]?.["props"]?.["slide"]?.["xpGoalSessionProgress"]?.["totalXpThisSession"];
      return earnedXp;
    };
    ["renderTime"] = function () {
      let formattedTime = _0x24afca(this.totalTime);
      this.dateElm.innerText = formattedTime;
    };
    ["showKeyBtnLoading"] = function (isLoading) {
      if (isLoading) {
        this.keyBtn.appendChild(this.btnLoading);
      } else {
        this.keyBtn.removeChild(this.btnLoading);
      }
      this.isFetching = isLoading;
    };
    ["setAutoRunning"] = function (isRunning) {
      this.isAutoRunning = isRunning;
    };
    ["setSafeMode"] = function (isSafeModeEnabled) {
      this.isSafeMode = isSafeModeEnabled;
      this.safeDelayTime = isSafeModeEnabled ? this.safeDelayTimeTemp : 0x1e;
      _0x535bb3("isSafeMode", isSafeModeEnabled);
      return isSafeModeEnabled;
    };
    ["randomSafeDelayTime"] = function () {
      if (!this.isSafeMode) {
        return 0;
      }
      let maxDelay = this.safeDelayTime + 0xc8;
      return Math.floor(Math.random() * (maxDelay - 0x64) + 0x64);
    };
    ['sleep'] = async function (delay) {
      await new Promise(_0x5e761a => setTimeout(_0x5e761a, delay));
    };
    ["updatePassModeState"] = function () {
      this.passModeLabel.innerText = _0x117a4f("text59", this.passValue, 0xf423f === this.passModeValue ? 'в€ћ' : this.passModeValue);
      _0x535bb3("passValue", this.passValue);
    };
    ["openBoxReward"] = function () {
      let boxRewardButton = _0x693da5("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/09f977a3e299d1418fde0fd053de0beb.svg\"]");
      return !!boxRewardButton && (boxRewardButton.click(), setTimeout(this.handlePassMode.bind(this), 1000), true);
    };
    ['skipCharacterGate'] = function () {
      let characterGateButton = _0x693da5("button img[src=\"https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f67d6256f5ccdb54af08633d69e27ef8.svg\"]");
      if (characterGateButton) {
        characterGateButton.click();
        setTimeout(() => {
          let activeSkillButton = _0x693da5("a[data-test*=\"skill-path-state-active\"] + button");
          activeSkillButton?.["click"]();
        }, 800);
        setTimeout(() => {
          let notificationNoThanksButton = _0x693da5("button[data-test=\"notification-drawer-no-thanks-button\"]");
          notificationNoThanksButton?.["click"]();
        }, 0x640);
        setTimeout(this.handlePassMode.bind(this), 0xe10);
        return true;
      }
    };
    ["autoduoDecode"] = function (encodedData) {
      let base64Data = encodedData.slice(0xd);
      try {
        return JSON.parse(atob(base64Data));
      } catch (error) {
        return null;
      }
    };
    ["autoduoError"] = function (errorMessage) {
      if (this.isAutoRunning) {
        this.setAutoRunning(false);
      }
      if (this.isLegendMode) {
        this.stopLegend();
      }
      if (this.isAuto) {
        this.stopFarmXP();
      }
      if (this.isPassMode) {
        this.handlePassModeOff();
      }
      alert("ERROR: " + errorMessage);
    };
    ["autoduoLessonError"] = function (errorMessage) {
      this.isPreviewVersion;
      let lessonErrorButton = _0x693da5('._7X9XV');
      return lessonErrorButton ? (lessonErrorButton.click(), setTimeout(() => {
        this.autoduoError(errorMessage + _0x117a4f("text65"));
      }, 800)) : this.autoduoError(errorMessage);
    };
    ["autoduoCreateSwitch"] = function (description = '', wrapperElement, initialValue, callback) {
      let infoIcon = document.createElement('i');
      Object.assign(infoIcon, {
        'className': "switch-info-listening",
        'title': _0x117a4f("text15"),
        'onclick'() {
          alert(description);
        }
      });
      let checkbox = document.createElement('input');
      Object.assign(checkbox, {
        'type': "checkbox",
        'hidden': true,
        'checked': initialValue
      });
      let _0xda5c04 = _0x5340cd => {
        checkbox.checked = _0x5340cd;
      };
      let label = document.createElement("label");
      label.addEventListener('click', () => {
        callback(_0xda5c04);
      });
      let container = document.createElement("div");
      container.className = "switch-container-listening";
      container.append(infoIcon, checkbox, label);
      wrapperElement.classList.add("switch-wrapper-listening");
      wrapperElement.append(container);
      wrapperElement.setAutoduoSwitch = _0xda5c04;
    };
    ['showGuide'] = function () {
      alert(_0x117a4f("text60"));
    };
    ["createStyle"] = function () {
      this.animationStyle = document.createElement("style");
      this.animationStyle.innerHTML = "\n\t\t\timg, svg, canvas {\n\t\t\t\tvisibility: hidden !important;\n\t\t\t} \n\t\t\tdiv:not(.autoduo-animate):not(.setting-overlay-listening) {\n\t\t\t\ttransition: none !important;\n\t\t\t\tanimation-duration: 0s !important;\n\t\t\t}\n\t\t\t.fSJFz {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\t";
      let styleElement = document.createElement("style");
      styleElement.innerHTML = "\n\t\t\t.control-container-listening{\n\t\t\t\tposition: fixed;\n                z-index: 9999999;\n                left: 20px;\n                bottom: 75px;\n\t\t\t\tpadding: 12px 10px;\n\t\t\t\tborder: 2px dotted #555555;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\tbox-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n\t\t\t\tbackground-color: rgba(var(--color-snow), 0.4);\n\t\t\t\tbackdrop-filter: blur(4px);\n\t\t\t}\n\t\t\t.autoduo-animate{\n\t\t\t\tanimation: autoduo-control-eff .15s;\n\t\t\t}\n\t\t\t.autoduo-animate::after{\n\t\t\t\tanimation: autoduo-control-border-eff .35s .12s backwards;\n\t\t\t}\n\t\t\t@keyframes autoduo-control-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(.8);\n\t\t\t\t\topacity: .5;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes autoduo-control-border-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(1.15);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.control-container-listening::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tz-index: -1;\n\t\t\t\tinset: 0;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 5px;\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t.control-container-listening.event{border-color: #ff0000}\n\t\t\t.control-container-listening.event::after{box-shadow: rgb(217 138 138 / 50%) 0px 0px 0px 5px;}\n            .auto-container-listening{\n\t\t\t\twidth: 250px !important;\n            }\n\t\t\t.setting-overlay-listening {\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tpadding: inherit;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tbackdrop-filter: inherit;\n\t\t\t\tbackground-color: rgba(var(--color-snow), 0.8);\n\t\t\t\tanimation: setting-overlay-eff 0.4s;\n\t\t\t}\n\t\t\t@keyframes setting-overlay-eff {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\ttransform: perspective(450px) rotateY(-90deg);\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransform: perspective(450px) rotateY(0deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t.setting-overlay-listening h3 {\n\t\t\t\tpadding: 8px 0 20px 0;\n\t\t\t\ttext-align: center;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t\t.setting-overlay-listening .switch-wrapper-listening {\n\t\t\t\tmargin-bottom: 11px;\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\t\t\t.close-setting-btn-listening {\n\t\t\t\twidth: 80%;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 20px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%) !important;\n\t\t\t}\n\t\t\t.autoduo-btn {\n\t\t\t\theight: 41px;\n\t\t\t\tpadding: 0;\n\t\t\t\tpadding-top: 5px;\n\t\t\t\tbox-sizing: content-box;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: rgb(var(--color-snow ));\n\t\t\t\tbackground-color: rgb( 28,176,246 );\n\t\t\t\tborder: none;\n\t\t\t\tborder-bottom: 4px solid rgb( 24,153,214 );\n\t\t\t\tborder-radius: 16px;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-btn:active {\n\t\t\t\tborder-bottom: none;\n\t\t\t}\n\t\t\t.autoduo-btn.btn-relative:active {\n\t\t\t\tpadding-bottom: 4px;\n\t\t\t\ttransform: translateY(4px);\n\t\t\t}\n\t\t\t.autoduo-btn:focus {\n\t\t\t\tbox-sizing: content-box;\n\t\t\t}\n\t\t\t.btn-green::before{\n\t\t\t\tbackground-color: #58CC02;\n\t\t\t\tcolor: rgb(88,167,0);\n\t\t\t}\n\t\t\t.btn-red::before {\n\t\t\t\tbackground-color: #FF4B4B;\n\t\t\t\tcolor: rgb(234,43,43);\n\t\t\t}\n\t\t\t.btn-blue::before {\n\t\t\t\tbackground-color: rgb( 60,77,255 );\n\t\t\t\tcolor: rgb( 63,34,236 );\n\t\t\t}\n\t\t\t.btn-white {\n\t\t\t\tcolor: #1cb0f6;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening {\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\t\t\tbutton.setting-btn-listening::before {\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/setting.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 22px;\n\t\t\t\tbackground-position: 18px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening{\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: 100% !important;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening::before {\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/xp.svg);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 32px;\n\t\t\t\tbackground-position: 12px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.farming-location::after{\n\t\t\t\tcontent: var(--farming-location);\n\t\t\t\tfont-size: 9px;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.disable {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t\tpointer-events: none !important;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.disable::before{\n\t\t\t\tbackground-color: #9c9c9c !important;\n    \t\t\tcolor: #686868 !important;\n\t\t\t}\n\t\t\tbutton.auto-farm-btn-listening.turbo.running::before{\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/thunder.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: right;\n\t\t\t}\n\t\t\t.feedback-btn-listening, .dropkey-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\twidth: calc(45% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening{\n\t\t\t\t--web-ui_button-background-color: #fb9f00;\n\t\t\t\t--web-ui_button-border-color: #bc9400;\n\t\t\t\tmargin-right: 4px;\t\n\t\t\t\twidth: calc(55% - 2px);\n\t\t\t}\n\t\t\t.feedback-btn-listening::before{\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/streak2.svg), url(https://ktnff.tech/assets/autoduo/streak2.svg),url(https://ktnff.tech/assets/autoduo/streak-ground.svg);\n\t\t\t\tbackground-size: 12%, 14%, cover;\n\t\t\t\tbackground-position: 6px 27px, 111px 2px, center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t}\n            .statistic-listening {\n                color: rgb(var(--color-black-text));\n                font-size: 18px;\n            }\n\t\t\t.statistic-listening p{\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.statistic-listening > p::before{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmin-width: 68px;\n\t\t\t}\n\t\t\t.statistic-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tmargin: 14px 0;\n\t\t\t}\n\t\t\t.time-listening, .total-exp-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 0 !important;\n\t\t\t}\n\t\t\t.time-listening::before,\n\t\t\t.total-exp-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 21px;\n\t\t\t\theight: 21px;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/clock.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.total-exp-listening::before{\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 21px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/exp.svg');\n\t\t\t}\n\t\t\t\n            .total-exp-listening::after{\n                content: 'XP';\n\t\t\t\tmargin-left: 4px;\n            }\n\n\t\t\t.key-container-listening{\n\t\t\t\twidth: 250px;\n\t\t\t\ttext-align:center;\n\t\t\t}\n\n\t\t\t.key-container-listening > * {\n\t\t\t\tfont-size: 15px !important;\n\t\t\t}\n\n\t\t\t.key-input-listening{\n                border: 2px solid #aaa;\n                width: 100%;\n                padding: 12px 8px;\n                border-radius: 8px;\n                background-color: #eee;\n            }\n\n            .key-btn-listening {\n\t\t\t\tposition: relative;\n                width: 100%;\n\t\t\t\tmargin: 6px 0;\n            }\n\t\t\t.loading-listening{\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: #58CC02;\n    \t\t\tborder-radius: inherit;\n\t\t\t}\n            \n\t\t\t.guide-btn-listening, .getlink-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: calc(50% - 3px);\n\t\t\t\tmin-width: 0;\n\t\t\t}\n\t\t\t.getlink-btn-listening{\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t\t.guide-getlink-btn-listening, .key-vip-btn-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 6px;\n\t\t\t}\n\t\t\t.key-vip-btn-listening{\n\t\t\t\t--web-ui_button-background-color: #e800ff;\n\t\t\t\t--web-ui_button-border-color: pink;\n\t\t\t\tcolor: yellow;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::before{\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/twinkle.ndx');\n    \t\t\tbackground-size: 85px auto;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.signature-listening{\n\t\t\t\tposition: fixed;\n                z-index: 99999999;\n\t\t\t\ttop: 4px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\twidth: max-content;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.signature-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tbackground-image: url(https://ktnff.tech/assets/autoduo/autoduosuperThumb.ndx);\n\t\t\t\tbackground-size: cover;\n\t\t\t\tmargin: -4px 0;\n\t\t\t\tmargin-right: 4px;\n\t\t\t}\n\t\t\t.autoduo-language-wrapper{\n\t\t\t\tposition: relative;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tcolor: rgb(var(--color-black-text));\n\t\t\t}\n\t\t\t.autoduo-language-wrapper::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 8px;\n\t\t\t\twidth: 8px;\n\t\t\t\theight: 8px;\n\t\t\t\tborder: 1.5px solid currentColor;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-left: none;\n\t\t\t\ttransform: rotate(45deg) skew(-8deg, -8deg);\n\t\t\t}\n\t\t\t.autoduo-language-selection{\n\t\t\t\tdisplay: none;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tpadding: 4px 0;\n\n\t\t\t\tbackground: #848484;\n\t\t\t\tcolor: white;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbox-shadow: rgb(104 149 199 / 50%) 0px 0px 0px 3px;\n\t\t\t\tanimation: language-selection-eff .25s;\n\t\t\t}\n\t\t\t.signature-listening.event .autoduo-language-selection{\n\t\t\t\tbox-shadow: rgb(255 111 111 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.autoduo-language-selection.show{\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t@keyframes language-selection-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(12px);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.autoduo-language-option,\n\t\t\t.autoduo-language-selected{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\ttransition: all .15s;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.autoduo-language-option:hover{\n\t\t\t\tbackground-color: #595959;\n\t\t\t}\n\t\t\t.autoduo-language-selected{\n\t\t\t\tmargin: 0;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tborder: 1px solid #d6d6d6;\n\t\t\t\tborder-radius: 6px;\n\t\t\t\tpadding: 3px 8px;\n\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\t\t\t\tbackground-color: rgba(var(--color-snow),0.5);\n\t\t\t}\n\t\t\t.autoduo-language-selected:hover{\n\t\t\t\tfilter: brightness(0.9);\n\t\t\t}\n\t\t\t.autoduo-language-icon{\n\t\t\t\twidth: 24px;\n\t\t\t\theight: 15px;\n\t\t\t\tmargin-right: 6px;\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tbackground-image: var(--data-icon);\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\n\t\t\t.key-type-listening::before,\n\t\t\t.key-expired-listening::before {\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.vip-type-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #555555;\n\t\t\t\tbackground-color: #ffe0fd;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid #555555;\n\t\t\t}\n\t\t\t.vip-type-listening.event {\n\t\t\t\tcolor: red;\n\t\t\t\tbackground-color: #ffedf0;\n\t\t\t\tborder-color: red;\n\t\t\t}\n\t\t\t.vip-type-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.vip-expired-listening{\n\t\t\t\tcolor: #555555;\n\t\t\t\tletter-spacing: -1px;\n\t\t\t}\n\t\t\t.vip-expired-listening.event{\n\t\t\t\tcolor: #ff0000;\n\t\t\t}\n\t\t\t.show-hide-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 999999999;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #00787a;\n\t\t\t\tborder-color: #999999;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.show-hide-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\t\t\t.show-hide-listening::after{\n\t\t\t\tcontent: var(--data-version);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransform: translate(-50%, 130%);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcolor: #999999;\n\t\t\t}\n\t\t\t.show-hide-listening.older::after{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t.show-hide-listening i {\n\t\t\t\tposition: relative;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/little-eye.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.show-hide-listening.hide i::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 110%;\n\t\t\t\theight: 5px;\n\t\t\t\ttransform: rotate(45deg) translateX(-3px);\n\t\t\t\tbackground-image: linear-gradient(90deg, #fea0ff 0%, #00DBDE 100%);\n\t\t\t\tborder-radius: 7px;\n\t\t\t}\n\t\t\t.overlay-listening, \n\t\t\t.countdown-overlay-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: 9999\n\t\t\t}\n\t\t\t.countdown-overlay-listening{\n\t\t\t\tz-index: 999999999;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 12px;\n\n\t\t\t\tbackground-color: rgba(0,0,0,0.5);\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 28px;\n\t\t\t}\n\t\t\t.countdown-overlay-listening::before{\n\t\t\t\tcontent: var(--data-prefix);\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t\tfont-size: 22px;\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening::before{\n\t\t\t\tcontent: var(--data-name);\n\t\t\t}\n\t\t\t.switch-wrapper-listening.disable,\n\t\t\t.autoduo-disable{\n\t\t\t\topacity: .4;\n\t\t\t\tpointer-events: none !important;\n\t\t\t\tuser-select: none !important;\n\t\t\t\t-ms-user-select: none !important;\n\t\t\t\t-moz-user-select: none !important;\n\t\t\t\t-webkit-user-select: none !important;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable{\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable label{\n\t\t\t\topacity: .6;\n\t\t\t}\n\t\t\t.switch-container-listening{\n\t\t\t\tflex-grow: 1;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.switch-info-listening{\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: url('https://ktnff.tech/assets/autoduo/info.png');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.switch-info-listening:hover{\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening label{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 46px;\n\t\t\t\theight: 24px;\n\t\t\t\tbackground-color: #bbb;\n\t\t\t\tbox-shadow: rgb(0 184 255 / 60%) 0px 0px 0px 3px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.control-container-listening.event .switch-wrapper-listening label{\n\t\t\t\tbox-shadow: rgb(255 85 85 / 62%) 0px 0px 0px 3px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening label::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: white;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label{\n\t\t\t\tbackground-color: #1FC2FF;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label::after {\n\t\t\t\tleft: 24px;\n\t\t\t}\n\t\t\t\n\t\t\t.function-wrapper-listening{\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\t\t\t.autoduo-label{\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index: 99999;\n\t\t\t\tbottom: 6px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t}\n\t\t\t.autoduo-label p + p{\n\t\t\t\tmargin-top: 2px;\n\t\t\t}\n\t\t\t.local-label-listening{\n\t\t\t\tmargin: -16px -4px 8px -4px;\n   \t\t\t\tpadding: 12px 16px 0 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tword-wrap: break-word;\n\t\t\t\toverflow-wrap: break-word;\n\t\t\t\tline-height: 16px;\n\t\t\t\tmax-height: 46px;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: #ff65e1;\n\t\t\t\tborder: 1px solid #ffffff;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\tborder-top: none;\n\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\tborder-top-right-radius: 0;\n\t\t\t\tanimation: local-label-eff 0.5s;\n\t\t\t}\n\t\t\t@keyframes local-label-eff {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: translateY(-70%);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.label-listening{\n\t\t\t\twidth: max-content;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #df0d0d;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tborder-radius: 40px;\n\t\t\t\tbox-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\t\t\t}\n\t\t\t.targetmode-label-listening::before{\n\t\t\t\tcontent: var(--data-frefix);\n\t\t\t}\n\n\t\t\t.contact-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tmargin: 8px 0 -4px 0;\n\t\t\t}\n\t\t\t.contact-item-listening{\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tmargin: 2px 4px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: var(--data-img);\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransition: .18s;\n\t\t\t}\n\t\t\t.contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(199 138 217 / 50%) 0px 0px 0px 3px;\n\t\t\t\ttransform: scale(1.11);\n\t\t\t}\n\t\t\t.control-container-listening.event .contact-item-listening:hover{\n\t\t\t\tbox-shadow: rgb(255 103 103 / 50%) 0px 0px 0px 3px;\n\t\t\t}\n\n\t\t\t@media (max-height: 550px) {\n\t\t\t\t.control-container-listening {\n\t\t\t\t\tbottom: 4px;\n\t\t\t\t}\n\t\t\t}\n        ";
      document.head.appendChild(styleElement);
    };
  }
  let rulang = {
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
    'text77': "ТЕМНЫЙ РЕЖИМ\n- Быстрее включайте/выключайте темный режим сайта!"
  };
  let enlang = {
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
    'text60': "+++++ GUIDE +++++\n\n- An activation key is required for auto functionality! This key is the sole method to maintain and develop AutoDuolingo, so I hope for your understanding and support. Thank you very much!\n___________________________\n- Currently, there are two methods to obtain the key as follows:\n+ Obtain the 24-hour key by surpassing a few links containing advertisements (Vietnamese support only).\n+ Buy a long-term and more stable VIP Key. (To buy a Key, please directly contact the Admin through the contact methods at the end of the tool).\n___________________________\n- The VIP Key will provide faster auto speed and access to the full features of the tool!\n- Join our Zalo chat group for support and updates on the latest information!\n\nAuto-Duolingo By mudachyo!",
    'text61': "Auto will continue in:",
    'text62': "Need to refresh the page to update the language, refresh now?",
    'text63': "XP Target: ",
    'text64': 'FEEDBACK',
    'text65': " If you are currently displaying the pronunciation guide, please turn it off first, then reload the page, and finally turn on auto again!",
    'text66': "Do you want to automatically pass combined legendary exercises?\n\nNOTE:\n+ The auto pass for legendary exercises only works with accounts that have unlimited hearts! DO NOT enable this option for accounts without unlimited hearts as it may lead to getting stuck during auto pass.\n+ The system will only pass previously combined legendary exercises within a close scope to the current lesson; it will automatically skip further ones!",
    'text67': "Authentication failed because the key has reached the maximum allowed number of IP!\nNote: For the 24-hour key, only one IP address is supported per key. Therefore, if your IP address changes during usage (due to network changes, VPN usage, or network resets, etc.), reactivation will not be possible even if the key is still valid.",
    'text68': "Set XP Farm Location",
    'text69': "SET XP FARM LOCATION\n- By default, the system can only Farm XP in practice exercises or listening practices. However, with this feature, you can Farm XP in any lesson you want, even in story lessons!\n- Usage: Activate the feature and enter the URL of the lesson you want, then enable the XP Farm mode to start farming.\n- NOTE: The URL to the lesson must be accurate and the lesson must be repeatable. Entering an inaccurate URL may lead to errors or even pose risks to your account!",
    'text70': "By entering the URL of the lesson you want, the system will help you Farm XP in that lesson! Please note that the URL to the lesson must be accurate to avoid errors or potential risks to your account!\n\nEnter the URL of the lesson you want:\n(Example: https://www.duolingo.com/lesson/unit/1/level/1)",
    'text71': "The entered URL is invalid, please try again!",
    'text72': "The automation has stopped because it couldn't Farm XP at the designated location!",
    'text73': "Farming at the location",
    'text74': "Other settings",
    'text75': "Close",
    'text76': "Dark mode",
    'text77': "DARK MODE\n- Enable/disable website dark mode faster!"
  };
  let _0x146f66 = {
    ...enlang,
    'setLanguage': function (languageCode) {
      let languageData;
      if ('ru' === languageCode) {
        languageData = rulang;
        Object.assign(_0x146f66, languageData);
      }
    }
  };
  function _0x117a4f(key, ...params) {
    if (0 === params.length) {
      return _0x146f66[key];
    }
    let formattedText = _0x146f66[key].replace(/%v/g, () => params.shift());
    return formattedText;
  }
  function _0x24afca(milliseconds) {
    let hours = String(parseInt(milliseconds / 1000 / 60 / 60));
    let minutes = String(parseInt(milliseconds / 1000 / 60 % 60));
    return hours.padStart(2, '0') + 'h:' + minutes.padStart(2, '0') + 'm';
  }
  function _0x2bc0c2(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 0x1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return day + '/' + month + '/' + year + " - " + hours + ':' + minutes;
  }
  let _0x693da5 = document.querySelector.bind(document);
  let _0x263868 = document.querySelectorAll.bind(document);
  let _0x5688fb = document.createElement("iframe");
  _0x5688fb.style.display = "none";
  document.body.appendChild(_0x5688fb);
  let _0x3c6cc0 = _0x5688fb.contentWindow.console.log;
  window.log = _0x3c6cc0;
  function _0x3f2ca9() {
    let storageData = sessionStorage.getItem("autoDuolingoStorageKey") || '{}';
    return JSON.parse(storageData);
  }
  function _0x535bb3(key, value) {
    let storageData = _0x3f2ca9();
    if (key instanceof Object) {
      Object.assign(storageData, key);
    } else {
      storageData[key] = value;
    }
    sessionStorage.setItem("autoDuolingoStorageKey", JSON.stringify(storageData));
  }
  function _0x107631(key) {
    let storageData = _0x3f2ca9();
    return storageData[key];
  }
  function _0x3d514a() {
    sessionStorage.removeItem("autoDuolingoStorageKey");
  }
  function _0x446ee6() {
    let storageData = localStorage.getItem("autoDuolingoStorageKey") || '{}';
    return JSON.parse(storageData);
  }
  function _0x4dd3de(key, value) {
    let storageData = _0x446ee6();
    storageData[key] = value;
    localStorage.setItem("autoDuolingoStorageKey", JSON.stringify(storageData));
  }
  function _0x57c789(key) {
    let storageData = _0x446ee6();
    return storageData[key];
  }
  let autoDuolingo = new _0x5d4471();
  autoDuolingo.setup();
})();