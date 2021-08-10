const year = document.getElementById("enteryear");

const libForm = document.getElementById("liberal-form");
const majorForm = document.getElementById("major-form");
const etcForm = document.getElementById("etc-form");

const korSt = document.getElementById("kor-st");
const korCrts = document.getElementById("kor-credits");

const engSt = document.getElementById("eng-st");
const engCrts = document.getElementById("eng-credits");

const etcSt = document.getElementById("etc-st");
const etcCrts = document.getElementById("etc-credits");

const coreSt = document.getElementById("core-st");
const coreCrts = document.getElementById("core");

const choice = document.getElementById("choice");

const sumSt = document.getElementById("sum-st");
const sumCrts = document.getElementById("sum");

const libCheck = document.getElementById("liberalcheck");
const libReset = document.getElementById("liberalreset");
const etcCheck = document.getElementById("etc-check");

function libResult() {
  if(Number(year.value) === 0){
    alert("입학연도를 선택하세요!");
  } else {
    libCal();
  }
}

function libCal() {
  let result = "교양영역 결과\n";
  const core1 = document.getElementById("core1").checked;
  const core2 = document.getElementById("core2").checked;
  const core3 = document.getElementById("core3").checked;
  const core4 = document.getElementById("core4").checked;
  const core5 = document.getElementById("core5").checked;

  result += "입학연도 : " + Number(year.value) + " 년도\n공통교양\n"

  if (Number(korSt.value) > Number(korCrts.value)) {
    result += "- 국어 : " + [Number(korSt.value) - Number(korCrts.value)] + " 학점 미달\n"
  } else {
    result += "- 국어 : 기준 통과\n"
  }

  if (Number(engSt.value) > Number(engCrts.value)) {
    result += "- 영어 : " + [Number(engSt.value) - Number(engCrts.value)] + " 학점 미달\n"
  } else {
    result += "- 영어 : 기준 통과\n"
  }

  if (Number(etcSt.value) > Number(etcCrts.value)) {
    result += "- 기타 : " + [Number(etcSt.value) - Number(etcCrts.value)] + " 학점 미달\n"
  } else {
    result += "- 기타 : 기준 통과\n"
  }

  if (Number(coreSt.value) > Number(coreCrts.value)) {
    result += "핵심교양 : " + [Number(coreSt.value) - Number(coreCrts.value)] + " 학점 미달\n- 미이수 영역 : "
  } else {
    result += "핵심교양 : 최소 학점 기준 통과_이수 영역 확인!\n- 미이수 영역 : "
  }

  if(!core1){
    result += "도전 "
  }

  if (!core2) {
    result += "창의 "
  }

  if (!core3) {
    result += "융합 "
  }

  if (!core4) {
    result += "신뢰 "
  }

  if(!core5) {
    result += "소통"
  }

  result += "\n선택교양 : " + Number(choice.value) + " 학점 이수\n"

  if (Number(sumSt.value) > Number(sumCrts.value)) {
    result += "교양합계 : " + [Number(sumSt.value) - Number(sumCrts.value)] + " 학점 미달"
  } else {
    result += "교양합계 : 기준 통과"
  }
  alert(result);
}

function sumCal() {
  document.getElementById("sum").value
   = Number(korCrts.value) + Number(engCrts.value) + Number(etcCrts.value) + Number(coreCrts.value) + Number(choice.value);
}

korCrts.addEventListener("change", sumCal);
engCrts.addEventListener("change", sumCal);
etcCrts.addEventListener("change", sumCal);
coreCrts.addEventListener("change", sumCal);
choice.addEventListener("change", sumCal);

libCheck.addEventListener("click", libResult);

function libResetor() {
  libForm.reset();
}

function majorResetor() {
  majorForm.reset();
}

libReset.addEventListener("click", libResetor);

function etcResult() {
  const engExam = document.getElementById("eng").checked;
  const chiExam = document.getElementById("chi").checked;
  const korExam = document.querySelector("#kor").checked;
  const paper = document.getElementById("paper").checked;
  const douPaper = document.getElementById("double-paper").checked;
  const gpa = Number(document.getElementById("gpa").value);

  let etcResult = "기타 졸업요건 결과\n졸업인정제\n"

  if (!engExam) {
    etcResult += "- 영어 : 미통과\n"
  } else {
    etcResult += "- 영어 : 통과\n"
  }

  if (!chiExam) {
    etcResult += "- 한자 : 미통과\n"
  } else {
    etcResult += "- 한자 : 통과\n"
  }

  if (!korExam) {
    etcResult += "- 한국어 : 미통과\n"
  } else {
    etcResult += "- 한국어 : 통과\n"
  }

  etcResult += "논문결과\n"

  if (!paper) {
    etcResult += "- 주전공 : 불합격\n"
  } else {
    etcResult += "- 주전공 : 합격\n"
  }

  if (!douPaper) {
    etcResult += "- 복수전공 : 불합격\n"
  } else {
    etcResult += "- 복수전공 : 합격/해당없음\n"
  }

  if (gpa < 2) {
    etcResult += "전 학년 평점 : 졸업불가"
  } else {
    etcResult += "전 학년 평점 : 기준 통과"
  }

  alert(etcResult);
}

etcCheck.addEventListener("click", etcResult);
