(function () {
  "use strict";

  var MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  var CLIMATES = {
    A: "열대",
    B: "건조",
    C: "온대",
    D: "냉대",
    E: "한대"
  };

  var CASES = [
    {
      id: "A-01",
      temperatures: [26, 26, 27, 27, 28, 28, 28, 28, 27, 27, 26, 26],
      precipitation: [260, 230, 270, 290, 310, 260, 240, 250, 290, 320, 300, 280],
      answer: "A",
      representativeRegion: "싱가포르와 적도 부근 열대 우림 지역",
      modelReason: "가장 추운 달도 26℃로 18℃ 이상이고, 연 강수량도 약 3,300mm로 많아 건조하지 않다. 따라서 A 열대 기후이다."
    },
    {
      id: "A-02",
      temperatures: [24, 25, 27, 28, 29, 28, 27, 27, 27, 26, 25, 24],
      precipitation: [35, 30, 55, 110, 210, 320, 360, 330, 250, 160, 70, 40],
      answer: "A",
      representativeRegion: "인도 뭄바이와 남아시아 몬순 지역",
      modelReason: "가장 추운 달도 24℃로 18℃ 이상이며, 연 강수량은 약 1,970mm여서 건조 기후가 아니다. 따라서 A 열대 기후이다."
    },
    {
      id: "B-01",
      temperatures: [12, 15, 20, 26, 31, 35, 37, 36, 32, 25, 18, 13],
      precipitation: [12, 8, 10, 5, 2, 0, 1, 2, 3, 7, 10, 14],
      answer: "B",
      representativeRegion: "이집트 카이로와 사하라 사막 지역",
      modelReason: "연 강수량이 약 74mm로 일 년 내내 매우 적다. 건조 여부를 다른 기온 조건보다 먼저 판별하므로 B 건조 기후이다."
    },
    {
      id: "B-02",
      temperatures: [-4, 0, 7, 15, 22, 28, 31, 29, 23, 14, 5, -2],
      precipitation: [8, 10, 15, 18, 22, 12, 5, 6, 10, 14, 12, 9],
      answer: "B",
      representativeRegion: "중앙아시아 내륙의 사막·초원 지역",
      modelReason: "연 강수량이 약 141mm로 매우 적다. 겨울 기온이 영하이지만 건조 조건을 먼저 적용하므로 B 건조 기후이다."
    },
    {
      id: "C-01",
      temperatures: [6, 8, 12, 17, 21, 24, 27, 27, 23, 18, 12, 8],
      precipitation: [55, 60, 75, 85, 95, 140, 210, 190, 130, 75, 60, 55],
      answer: "C",
      representativeRegion: "중국 상하이와 동아시아 온대 몬순 지역",
      modelReason: "가장 추운 달은 6℃로 0℃ 이상 18℃ 미만이고, 가장 더운 달은 27℃로 10℃ 이상이다. 비도 충분하므로 C 온대 기후이다."
    },
    {
      id: "C-02",
      temperatures: [10, 11, 13, 16, 20, 24, 27, 27, 24, 19, 14, 11],
      precipitation: [105, 90, 75, 55, 35, 15, 5, 10, 35, 75, 100, 115],
      answer: "C",
      representativeRegion: "이탈리아 로마와 지중해 연안 지역",
      modelReason: "가장 추운 달은 10℃로 0℃ 이상 18℃ 미만이고, 가장 더운 달은 27℃이다. 연 강수량도 약 715mm이므로 C 온대 기후이다."
    },
    {
      id: "D-01",
      temperatures: [-14, -11, -4, 6, 14, 20, 24, 22, 15, 7, -3, -11],
      precipitation: [20, 18, 25, 40, 65, 90, 115, 100, 70, 45, 30, 22],
      answer: "D",
      representativeRegion: "캐나다 위니펙과 북아메리카 내륙 지역",
      modelReason: "가장 추운 달은 -14℃로 0℃ 미만이고, 가장 더운 달은 24℃로 10℃ 이상이다. 강수량도 매우 적지 않으므로 D 냉대 기후이다."
    },
    {
      id: "D-02",
      temperatures: [-26, -22, -13, -2, 7, 14, 18, 15, 8, -3, -15, -23],
      precipitation: [12, 10, 12, 18, 35, 60, 80, 70, 45, 25, 18, 14],
      answer: "D",
      representativeRegion: "러시아 시베리아 내륙 지역",
      modelReason: "가장 추운 달은 -26℃로 0℃보다 낮지만, 가장 더운 달은 18℃로 10℃ 이상이다. 따라서 E가 아니라 D 냉대 기후이다."
    },
    {
      id: "E-01",
      temperatures: [-22, -20, -16, -9, -2, 4, 7, 6, 2, -6, -14, -20],
      precipitation: [18, 15, 15, 20, 25, 30, 35, 32, 25, 20, 18, 16],
      answer: "E",
      representativeRegion: "알래스카 북부와 북극해 연안 툰드라 지역",
      modelReason: "가장 더운 달의 기온도 7℃로 10℃ 미만이다. 여름에도 충분히 따뜻해지지 않으므로 E 한대 기후이다."
    },
    {
      id: "E-02",
      temperatures: [-36, -38, -40, -35, -28, -21, -16, -18, -25, -31, -34, -35],
      precipitation: [8, 6, 5, 5, 6, 8, 10, 9, 8, 7, 6, 7],
      answer: "E",
      representativeRegion: "그린란드 내륙의 빙설 지역",
      modelReason: "가장 더운 달조차 -16℃로 10℃ 미만이다. 모든 달이 매우 추우므로 E 한대 기후이다."
    }
  ];

  var state = {
    cases: [],
    index: 0,
    history: [],
    streak: 0,
    locked: false,
    studentName: "",
    studentNumber: ""
  };

  var music = {
    context: null,
    master: null,
    timer: null,
    nextNoteTime: 0,
    step: 0,
    noiseBuffer: null,
    playing: false
  };

  var dom = {
    guideButton: document.getElementById("guide-button"),
    guidePanel: document.getElementById("guide-panel"),
    guideClose: document.getElementById("guide-close"),
    musicButton: document.getElementById("music-button"),
    musicLabel: document.getElementById("music-label"),
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultScreen: document.getElementById("result-screen"),
    startButton: document.getElementById("start-button"),
    studentName: document.getElementById("student-name"),
    studentNumber: document.getElementById("student-number"),
    currentNumber: document.getElementById("current-number"),
    totalNumber: document.getElementById("total-number"),
    progressFill: document.getElementById("progress-fill"),
    streakCount: document.getElementById("streak-count"),
    caseLabel: document.getElementById("case-label"),
    chart: document.getElementById("climograph"),
    dataHead: document.getElementById("data-head"),
    dataBody: document.getElementById("data-body"),
    answerForm: document.getElementById("answer-form"),
    climateOptions: document.getElementById("climate-options"),
    reasonInput: document.getElementById("reason-input"),
    reasonCount: document.getElementById("reason-count"),
    formMessage: document.getElementById("form-message"),
    submitButton: document.getElementById("submit-button"),
    feedbackCard: document.getElementById("feedback-card"),
    feedbackVerdict: document.getElementById("feedback-verdict"),
    feedbackAnswer: document.getElementById("feedback-answer"),
    modelReasonText: document.getElementById("model-reason-text"),
    representativeRegionText: document.getElementById("representative-region-text"),
    nextButton: document.getElementById("next-button"),
    resultName: document.getElementById("result-name"),
    scoreNumber: document.getElementById("score-number"),
    accuracyNumber: document.getElementById("accuracy-number"),
    reasonComplete: document.getElementById("reason-complete"),
    rankMessage: document.getElementById("rank-message"),
    reviewList: document.getElementById("review-list"),
    retryButton: document.getElementById("retry-button"),
    printButton: document.getElementById("print-button")
  };

  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function showScreen(target) {
    [dom.startScreen, dom.quizScreen, dom.resultScreen].forEach(function (screen) {
      screen.classList.toggle("is-active", screen === target);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function midiToFrequency(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  function makeNoiseBuffer(context) {
    var frameCount = Math.floor(context.sampleRate * 0.045);
    var buffer = context.createBuffer(1, frameCount, context.sampleRate);
    var channel = buffer.getChannelData(0);
    for (var i = 0; i < frameCount; i += 1) {
      channel[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  function scheduleTone(note, time, duration, type, volume) {
    if (!music.context || !music.master || note === null) {
      return;
    }
    var oscillator = music.context.createOscillator();
    var gain = music.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(midiToFrequency(note), time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain);
    gain.connect(music.master);
    oscillator.start(time);
    oscillator.stop(time + duration + 0.02);
  }

  function scheduleHiHat(time, accent) {
    if (!music.context || !music.master || !music.noiseBuffer) {
      return;
    }
    var source = music.context.createBufferSource();
    var filter = music.context.createBiquadFilter();
    var gain = music.context.createGain();
    source.buffer = music.noiseBuffer;
    filter.type = "highpass";
    filter.frequency.setValueAtTime(5200, time);
    gain.gain.setValueAtTime(accent ? 0.032 : 0.018, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(music.master);
    source.start(time);
    source.stop(time + 0.05);
  }

  function scheduleMusic() {
    if (!music.playing || !music.context) {
      return;
    }
    var melody = [
      72, 76, 79, null, 76, 74, 72, null,
      74, 77, 81, null, 79, 77, 74, null,
      72, 76, 79, 83, 81, 79, 76, null,
      74, 77, 79, 76, 72, null, 67, null
    ];
    var bass = [
      48, null, 48, null, 53, null, 55, null,
      48, null, 45, null, 53, null, 55, null,
      48, null, 48, null, 53, null, 55, null,
      50, null, 53, null, 55, null, 48, null
    ];
    var stepDuration = 60 / 146 / 2;

    while (music.nextNoteTime < music.context.currentTime + 0.28) {
      var patternStep = music.step % melody.length;
      scheduleTone(melody[patternStep], music.nextNoteTime, stepDuration * 0.72, "triangle", 0.075);
      scheduleTone(bass[patternStep], music.nextNoteTime, stepDuration * 0.82, "square", 0.04);
      scheduleHiHat(music.nextNoteTime, patternStep % 4 === 0);
      music.nextNoteTime += stepDuration;
      music.step += 1;
    }
  }

  function updateMusicButton() {
    dom.musicButton.classList.toggle("is-playing", music.playing);
    dom.musicButton.setAttribute("aria-pressed", String(music.playing));
    dom.musicLabel.textContent = music.playing ? "BGM 끄기" : "BGM 켜기";
  }

  function stopMusic() {
    music.playing = false;
    if (music.timer) {
      window.clearInterval(music.timer);
      music.timer = null;
    }
    var contextToClose = music.context;
    if (music.master && contextToClose) {
      music.master.gain.cancelScheduledValues(contextToClose.currentTime);
      music.master.gain.setValueAtTime(Math.max(music.master.gain.value, 0.0001), contextToClose.currentTime);
      music.master.gain.exponentialRampToValueAtTime(0.0001, contextToClose.currentTime + 0.08);
      window.setTimeout(function () {
        contextToClose.close().catch(function () {});
      }, 100);
    }
    music.context = null;
    music.master = null;
    music.noiseBuffer = null;
    music.step = 0;
    updateMusicButton();
  }

  function startMusic() {
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      dom.musicLabel.textContent = "BGM 미지원";
      dom.musicButton.disabled = true;
      return;
    }

    try {
      music.context = new AudioContextClass();
      music.master = music.context.createGain();
      music.master.gain.setValueAtTime(0.18, music.context.currentTime);
      music.master.connect(music.context.destination);
      music.noiseBuffer = makeNoiseBuffer(music.context);
      music.nextNoteTime = music.context.currentTime + 0.06;
      music.step = 0;
      music.playing = true;
      music.context.resume();
      scheduleMusic();
      music.timer = window.setInterval(scheduleMusic, 70);
      updateMusicButton();
    } catch (error) {
      stopMusic();
      dom.musicLabel.textContent = "다시 켜기";
    }
  }

  function toggleMusic() {
    if (music.playing) {
      stopMusic();
    } else {
      startMusic();
    }
  }

  function setGuide(open) {
    dom.guidePanel.hidden = !open;
    dom.guideButton.setAttribute("aria-expanded", String(open));
    if (open) {
      dom.guideClose.focus();
    }
  }

  function selectedClimate() {
    var selected = dom.answerForm.querySelector('input[name="climate"]:checked');
    return selected ? selected.value : "";
  }

  function meaningfulReasonLength() {
    return dom.reasonInput.value.replace(/\s/g, "").length;
  }

  function updateSubmitState() {
    if (state.locked) {
      return;
    }
    var selected = selectedClimate();
    var reasonLength = meaningfulReasonLength();
    var ready = Boolean(selected) && reasonLength >= 8;
    dom.submitButton.disabled = !ready;
    dom.reasonCount.textContent = String(dom.reasonInput.value.length);

    if (!selected && reasonLength === 0) {
      dom.formMessage.textContent = "기후대를 고르고, 그래프에서 찾은 이유를 8글자 이상 써 주세요.";
    } else if (!selected) {
      dom.formMessage.textContent = "기후대를 하나 골라 주세요.";
    } else if (reasonLength < 8) {
      dom.formMessage.textContent = "이유를 " + String(8 - reasonLength) + "글자 더 써 주세요.";
    } else {
      dom.formMessage.textContent = "";
    }
  }

  function annualTotal(values) {
    return values.reduce(function (sum, value) {
      return sum + value;
    }, 0);
  }

  function renderTable(caseData) {
    dom.dataHead.innerHTML =
      "<tr><th scope=\"col\">구분</th>" +
      MONTHS.map(function (month) {
        return "<th scope=\"col\">" + month + "</th>";
      }).join("") +
      "</tr>";

    dom.dataBody.innerHTML =
      "<tr><th scope=\"row\">기온(℃)</th>" +
      caseData.temperatures.map(function (value) {
        return "<td>" + String(value) + "</td>";
      }).join("") +
      "</tr>" +
      "<tr><th scope=\"row\">강수(mm)</th>" +
      caseData.precipitation.map(function (value) {
        return "<td>" + String(value) + "</td>";
      }).join("") +
      "</tr>";
  }

  function drawClimograph(caseData) {
    var width = 760;
    var height = 430;
    var margin = { top: 42, right: 68, bottom: 62, left: 68 };
    var plotWidth = width - margin.left - margin.right;
    var plotHeight = height - margin.top - margin.bottom;
    var maxRain = Math.max.apply(null, caseData.precipitation);
    var rainMax = Math.max(100, Math.ceil(maxRain / 50) * 50);
    var tempMin = -40;
    var tempMax = 40;
    var stepX = plotWidth / MONTHS.length;
    var barWidth = Math.min(30, stepX * 0.58);

    function x(index) {
      return margin.left + stepX * index + stepX / 2;
    }

    function yRain(value) {
      return margin.top + plotHeight - (value / rainMax) * plotHeight;
    }

    function yTemp(value) {
      return margin.top + plotHeight - ((value - tempMin) / (tempMax - tempMin)) * plotHeight;
    }

    var parts = [];
    parts.push("<title id=\"chart-title\">월별 기온과 강수량 그래프</title>");
    parts.push("<desc id=\"chart-desc\">파란 막대는 월 강수량, 빨간 선은 월평균 기온을 나타냅니다.</desc>");
    parts.push("<rect x=\"0\" y=\"0\" width=\"760\" height=\"430\" fill=\"#fff\" />");
    parts.push("<text x=\"" + margin.left + "\" y=\"24\" fill=\"#17213f\" font-size=\"14\" font-weight=\"800\">강수량(mm)</text>");
    parts.push("<text x=\"" + (width - margin.right) + "\" y=\"24\" fill=\"#17213f\" font-size=\"14\" font-weight=\"800\" text-anchor=\"end\">기온(℃)</text>");

    for (var gridIndex = 0; gridIndex <= 4; gridIndex += 1) {
      var rainValue = Math.round((rainMax / 4) * gridIndex);
      var gridY = yRain(rainValue);
      parts.push("<line x1=\"" + margin.left + "\" y1=\"" + gridY + "\" x2=\"" + (width - margin.right) + "\" y2=\"" + gridY + "\" stroke=\"#d7dce5\" stroke-width=\"1\" />");
      parts.push("<text x=\"" + (margin.left - 10) + "\" y=\"" + (gridY + 5) + "\" fill=\"#536078\" font-size=\"13\" text-anchor=\"end\">" + rainValue + "</text>");
    }

    [-40, -20, 0, 20, 40].forEach(function (tempValue) {
      var tickY = yTemp(tempValue);
      parts.push("<line x1=\"" + (width - margin.right) + "\" y1=\"" + tickY + "\" x2=\"" + (width - margin.right + 6) + "\" y2=\"" + tickY + "\" stroke=\"#17213f\" stroke-width=\"2\" />");
      parts.push("<text x=\"" + (width - margin.right + 11) + "\" y=\"" + (tickY + 5) + "\" fill=\"#536078\" font-size=\"13\">" + tempValue + "</text>");
    });

    var zeroY = yTemp(0);
    parts.push("<line x1=\"" + margin.left + "\" y1=\"" + zeroY + "\" x2=\"" + (width - margin.right) + "\" y2=\"" + zeroY + "\" stroke=\"#f14e45\" stroke-width=\"1.5\" stroke-dasharray=\"7 6\" opacity=\".45\" />");

    caseData.precipitation.forEach(function (value, index) {
      var barX = x(index) - barWidth / 2;
      var barY = yRain(value);
      var barHeight = margin.top + plotHeight - barY;
      parts.push("<rect x=\"" + barX.toFixed(2) + "\" y=\"" + barY.toFixed(2) + "\" width=\"" + barWidth.toFixed(2) + "\" height=\"" + Math.max(1, barHeight).toFixed(2) + "\" rx=\"3\" fill=\"#45c4e8\" stroke=\"#17213f\" stroke-width=\"1.5\"><title>" + MONTHS[index] + " 강수량 " + value + "mm</title></rect>");
    });

    var linePath = caseData.temperatures.map(function (value, index) {
      return (index === 0 ? "M" : "L") + x(index).toFixed(2) + " " + yTemp(value).toFixed(2);
    }).join(" ");
    parts.push("<path d=\"" + linePath + "\" fill=\"none\" stroke=\"#17213f\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".85\" />");
    parts.push("<path d=\"" + linePath + "\" fill=\"none\" stroke=\"#f14e45\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />");

    caseData.temperatures.forEach(function (value, index) {
      parts.push("<circle cx=\"" + x(index).toFixed(2) + "\" cy=\"" + yTemp(value).toFixed(2) + "\" r=\"5\" fill=\"#f14e45\" stroke=\"#17213f\" stroke-width=\"2\"><title>" + MONTHS[index] + " 평균 기온 " + value + "℃</title></circle>");
    });

    parts.push("<line x1=\"" + margin.left + "\" y1=\"" + (margin.top + plotHeight) + "\" x2=\"" + (width - margin.right) + "\" y2=\"" + (margin.top + plotHeight) + "\" stroke=\"#17213f\" stroke-width=\"2.5\" />");
    parts.push("<line x1=\"" + margin.left + "\" y1=\"" + margin.top + "\" x2=\"" + margin.left + "\" y2=\"" + (margin.top + plotHeight) + "\" stroke=\"#17213f\" stroke-width=\"2.5\" />");
    parts.push("<line x1=\"" + (width - margin.right) + "\" y1=\"" + margin.top + "\" x2=\"" + (width - margin.right) + "\" y2=\"" + (margin.top + plotHeight) + "\" stroke=\"#17213f\" stroke-width=\"2.5\" />");

    MONTHS.forEach(function (month, index) {
      parts.push("<text x=\"" + x(index).toFixed(2) + "\" y=\"" + (margin.top + plotHeight + 28) + "\" fill=\"#17213f\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">" + month.replace("월", "") + "</text>");
    });
    parts.push("<text x=\"" + (margin.left + plotWidth / 2) + "\" y=\"" + (height - 12) + "\" fill=\"#65708a\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">월</text>");

    dom.chart.innerHTML = parts.join("");
  }

  function resetAnswerCard() {
    state.locked = false;
    dom.answerForm.reset();
    dom.reasonInput.disabled = false;
    dom.climateOptions.disabled = false;
    dom.submitButton.hidden = false;
    dom.submitButton.disabled = true;
    dom.feedbackCard.hidden = true;
    dom.feedbackCard.className = "feedback-card";
    dom.answerForm.querySelectorAll(".answer-option").forEach(function (option) {
      option.classList.remove("is-correct", "is-wrong");
    });
    dom.reasonCount.textContent = "0";
    updateSubmitState();
  }

  function renderCase() {
    var caseData = state.cases[state.index];
    var shownNumber = state.index + 1;
    dom.currentNumber.textContent = String(shownNumber);
    dom.totalNumber.textContent = String(state.cases.length);
    dom.progressFill.style.width = String((shownNumber / state.cases.length) * 100) + "%";
    dom.caseLabel.textContent = "사건 파일 " + String(shownNumber).padStart(2, "0");
    dom.streakCount.textContent = String(state.streak);
    drawClimograph(caseData);
    renderTable(caseData);
    resetAnswerCard();
    var details = document.querySelector(".data-details");
    if (details) {
      details.open = false;
    }
  }

  function startQuiz() {
    state.cases = shuffle(CASES);
    state.index = 0;
    state.history = [];
    state.streak = 0;
    state.locked = false;
    state.studentName = dom.studentName.value.trim();
    state.studentNumber = dom.studentNumber.value.trim();
    showScreen(dom.quizScreen);
    renderCase();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (state.locked) {
      return;
    }

    var chosen = selectedClimate();
    var reason = dom.reasonInput.value.trim();
    if (!chosen || meaningfulReasonLength() < 8) {
      updateSubmitState();
      return;
    }

    var caseData = state.cases[state.index];
    var correct = chosen === caseData.answer;
    state.locked = true;
    state.streak = correct ? state.streak + 1 : 0;
    dom.streakCount.textContent = String(state.streak);

    state.history.push({
      order: state.index + 1,
      caseId: caseData.id,
      chosen: chosen,
      answer: caseData.answer,
      reason: reason,
      modelReason: caseData.modelReason,
      representativeRegion: caseData.representativeRegion,
      correct: correct,
      annualRain: annualTotal(caseData.precipitation)
    });

    dom.climateOptions.disabled = true;
    dom.reasonInput.disabled = true;
    dom.submitButton.hidden = true;
    dom.formMessage.textContent = "";

    var correctOption = dom.answerForm.querySelector('input[value="' + caseData.answer + '"]').closest(".answer-option");
    correctOption.classList.add("is-correct");
    if (!correct) {
      var wrongOption = dom.answerForm.querySelector('input[value="' + chosen + '"]').closest(".answer-option");
      wrongOption.classList.add("is-wrong");
    }

    dom.feedbackCard.hidden = false;
    dom.feedbackCard.className = "feedback-card " + (correct ? "correct" : "wrong");
    dom.feedbackVerdict.textContent = correct ? "딱 걸렸어! 정답!" : "앗, 함정이었어!";
    dom.feedbackAnswer.textContent = correct
      ? caseData.answer + " " + CLIMATES[caseData.answer] + " 기후로 정확히 판별했어요."
      : "내 답: " + chosen + " " + CLIMATES[chosen] + " · 정답: " + caseData.answer + " " + CLIMATES[caseData.answer];
    dom.modelReasonText.textContent = caseData.modelReason;
    dom.representativeRegionText.textContent = caseData.representativeRegion;
    dom.nextButton.innerHTML = state.index === state.cases.length - 1
      ? "수사 결과 보기 <span aria-hidden=\"true\">→</span>"
      : "다음 사건 <span aria-hidden=\"true\">→</span>";
    dom.nextButton.focus();
  }

  function rankMessage(score) {
    if (score === 10) {
      return "완벽해요! 그래프의 작은 단서도 놓치지 않는 기후 명탐정!";
    }
    if (score >= 8) {
      return "대단해요! 기준 몇 가지만 다시 보면 완벽한 명탐정이에요.";
    }
    if (score >= 6) {
      return "좋아요! A·E의 기온 기준과 B의 강수량을 다시 확인해 봐요.";
    }
    return "수사 기록을 다시 읽으면 실력이 쑥! 특히 B를 먼저 확인하는 순서를 기억해요.";
  }

  function createReviewItem(record) {
    var item = document.createElement("article");
    item.className = "review-item " + (record.correct ? "correct" : "wrong");

    var summary = document.createElement("div");
    summary.className = "review-summary";

    var title = document.createElement("strong");
    title.textContent = "사건 " + String(record.order).padStart(2, "0") + " · 내 답 " + record.chosen + " " + CLIMATES[record.chosen] + " / 정답 " + record.answer + " " + CLIMATES[record.answer];

    var mark = document.createElement("span");
    mark.className = "review-mark";
    mark.textContent = record.correct ? "정답" : "다시 보기";
    summary.appendChild(title);
    summary.appendChild(mark);

    var lines = document.createElement("div");
    lines.className = "review-lines";

    var myBox = document.createElement("div");
    var myLabel = document.createElement("span");
    var myText = document.createElement("p");
    myLabel.textContent = "내가 쓴 이유";
    myText.textContent = record.reason;
    myBox.appendChild(myLabel);
    myBox.appendChild(myText);

    var modelBox = document.createElement("div");
    var modelLabel = document.createElement("span");
    var modelText = document.createElement("p");
    modelLabel.textContent = "모범 근거";
    modelText.textContent = record.modelReason;
    modelBox.appendChild(modelLabel);
    modelBox.appendChild(modelText);

    var regionBox = document.createElement("div");
    var regionLabel = document.createElement("span");
    var regionText = document.createElement("p");
    regionLabel.textContent = "비슷한 대표 지역";
    regionText.textContent = record.representativeRegion;
    regionBox.appendChild(regionLabel);
    regionBox.appendChild(regionText);

    lines.appendChild(myBox);
    lines.appendChild(modelBox);
    lines.appendChild(regionBox);
    item.appendChild(summary);
    item.appendChild(lines);
    return item;
  }

  function renderResults() {
    var score = state.history.filter(function (record) {
      return record.correct;
    }).length;
    var displayName = state.studentName || "기후 탐정";
    if (state.studentNumber) {
      displayName = state.studentNumber + "번 " + displayName;
    }

    dom.resultName.textContent = displayName;
    dom.scoreNumber.textContent = String(score);
    dom.accuracyNumber.textContent = String(Math.round((score / state.cases.length) * 100)) + "%";
    dom.reasonComplete.textContent = String(state.history.length) + "/" + String(state.cases.length);
    dom.rankMessage.textContent = rankMessage(score);
    dom.reviewList.innerHTML = "";
    state.history.forEach(function (record) {
      dom.reviewList.appendChild(createReviewItem(record));
    });
    showScreen(dom.resultScreen);
  }

  dom.guideButton.addEventListener("click", function () {
    setGuide(dom.guidePanel.hidden);
  });

  dom.guideClose.addEventListener("click", function () {
    setGuide(false);
    dom.guideButton.focus();
  });

  dom.musicButton.addEventListener("click", toggleMusic);

  dom.startButton.addEventListener("click", startQuiz);
  dom.answerForm.addEventListener("change", updateSubmitState);
  dom.reasonInput.addEventListener("input", updateSubmitState);
  dom.answerForm.addEventListener("submit", handleSubmit);

  dom.nextButton.addEventListener("click", function () {
    if (state.index >= state.cases.length - 1) {
      renderResults();
      return;
    }
    state.index += 1;
    renderCase();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  dom.retryButton.addEventListener("click", function () {
    showScreen(dom.startScreen);
  });

  dom.printButton.addEventListener("click", function () {
    window.print();
  });
})();
