//기본 정보
const year = document.getElementById("enteryear");
const multiMajor = document.getElementById("multi-major");
//각 영역 form 태그
const libForm = document.getElementById("liberal-form");
const majorForm = document.getElementById("major-form");
const etcForm = document.getElementById("etc-form");
//교양 영역 변수
const korSt = document.getElementById("kor-st");
const korCrts = document.getElementById("kor-credits");
const engSt = document.getElementById("eng-st");
const engCrts = document.getElementById("eng-credits");
const etcSt = document.getElementById("etc-st");
const etcCrts = document.getElementById("etc-credits");
const coreSt = document.getElementById("core-st");
const coreCrts = document.getElementById("core");
const choiceSt = document.getElementById("choice-st");
const choice = document.getElementById("choice");
const sumSt = document.getElementById("sum-st");
const sumCrts = document.getElementById("sum");
//전공 영역 변수
const baseSt = document.getElementById("base-st");
const base = document.getElementById("base");
const neceSt = document.getElementById("nece-st");
const nece = document.getElementById("nece");
const majorSt = document.getElementById("major-st");
const major = document.getElementById("major");
const doubleSt = document.getElementById("double-st");
const double = document.getElementById("double");
const doubleNone = document.getElementById("double-none");
const planSt = document.getElementById("plan-st");
const plan = document.getElementById("plan");
const planNone = document.getElementById("plan-none");
const planCross = document.getElementById("plan-cross");
const minorSt = document.getElementById("minor-st");
const minor = document.getElementById("minor");
const minorNone = document.getElementById("minor-none");
const freeSt = document.getElementById("free-st");
const free = document.getElementById("free");
const teachSt = document.getElementById("teach-st");
const teach = document.getElementById("teach");
const teachNone = document.getElementById("teach-none");
const totalSt = document.getElementById("total-st");
const total = document.getElementById("total");
//각 영역 리셋, 체크버튼
const libCheck = document.getElementById("liberalcheck");
const libReset = document.getElementById("liberalreset");
const majorCheck = document.getElementById("major-check");
const majorReset = document.getElementById("major-reset");
const etcCheck = document.getElementById("etc-check");
const etcReset = document.getElementById("etc-reset");

function libResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학연도를 선택하세요!", "", "error");
  } else {
    libCal();
  }
}

function libCal() {
  let result = "입학연도 : " + Number(year.value) + " 년도\n공통교양\n"
  const core1 = document.getElementById("core1").checked;
  const core2 = document.getElementById("core2").checked;
  const core3 = document.getElementById("core3").checked;
  const core4 = document.getElementById("core4").checked;
  const core5 = document.getElementById("core5").checked;

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

  if (!core1) {
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

  if (!core5) {
    result += "소통"
  }

  result += "\n선택교양 : " + Number(choice.value) + " 학점 이수\n"

  if (Number(sumSt.value) > Number(sumCrts.value)) {
    result += "교양합계 : " + [Number(sumSt.value) - Number(sumCrts.value)] + " 학점 미달"
  } else if (Number(sumCrts.value) > 45) {
    result += "교양합계 : 최대학점 초과_교양은 45학점까지만 인정됩니다!"
  } else {
    result += "교양합계 : 기준 통과"
  }

  if (Number(korSt.value) <= Number(korCrts.value) &&
    Number(engSt.value) <= Number(engCrts.value) &&
    Number(etcSt.value) <= Number(etcCrts.value) &&
    Number(coreSt.value) <= Number(coreCrts.value) &&
    core1 && core2 && core3 && core4 && core5 &&
    Number(sumSt.value) <= Number(sumCrts.value) &&
    Number(sumCrts.value) <= 45) {
    return swal("교양영역 결과", result, "success");
  } else if (Number(korSt.value) <= Number(korCrts.value) &&
    Number(engSt.value) <= Number(engCrts.value) &&
    Number(etcSt.value) <= Number(etcCrts.value) &&
    Number(coreSt.value) <= Number(coreCrts.value) &&
    core1 && core2 && core3 && core4 && core5 &&
    Number(sumSt.value) <= Number(sumCrts.value) &&
    Number(sumCrts.value) > 45) {
    return swal("교양영역 결과", result, "warning");
  } else {
    return swal("교양영역 결과", result, "error");
  }
}

function sumCal() {
  sumCrts.value = Number(korCrts.value) + Number(engCrts.value) + Number(etcCrts.value) + Number(coreCrts.value) + Number(choice.value);
}

korCrts.addEventListener("change", sumCal);
engCrts.addEventListener("change", sumCal);
etcCrts.addEventListener("change", sumCal);
coreCrts.addEventListener("change", sumCal);
choice.addEventListener("change", sumCal);

libCheck.addEventListener("click", libResult);

function resetor(form) {
  form.reset();
};

libReset.addEventListener("click", function() {
  resetor(libForm);
});
majorReset.addEventListener("click", function() {
  resetor(majorForm);
});
majorReset.addEventListener("click", function() {
  const multiMajorForm = document.getElementById("multi-major-form");
  resetor(multiMajorForm);
})
etcReset.addEventListener("click", function() {
  resetor(etcForm);
})

function majorTableReset() {
  document.getElementById("double-table").style.display = "none";
  document.getElementById("plan-table").style.display = "none";
}

majorReset.addEventListener("click", majorTableReset);

function majorResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학연도를 선택하세요!", "", "error");
  } else if (Number(multiMajor.value) === 0) {
    year.scrollIntoView();
    return swal("다전공을 선택하세요!", "", "error");
  } else if (Number(planCross.value) > 6) {
    planCross.scrollIntoView();
    return swal("설계전공 교차인정 최대학점은 6학점입니다!", "", "error")
  } else {
    majorCal();
  }
}

function majorCal() {
  let result = "입학연도 : " + Number(year.value) + " 년도\n"

  if (Number(baseSt.value) > Number(base.value)) {
    result += "전공기초 : " + [Number(baseSt.value) - Number(base.value)] + " 학점 미달\n"
  } else {
    result += "전공기초 : 기준 통과\n"
  }

  if (Number(neceSt.value) > Number(nece.value)) {
    result += "전공필수 : " + [Number(neceSt.value) - Number(nece.value)] + " 학점 미달\n"
  } else {
    result += "전공필수 : 기준 통과\n"
  }

  if (Number(majorSt.value) > Number(major.value)) {
    result += "전공 : " + [Number(majorSt.value) - Number(major.value)] + " 학점 미달\n"
  } else {
    result += "전공 : 기준 통과\n"
  }

  if (!doubleNone.checked) {
    if (Number(doubleSt.value) > Number(double.value)) {
      result += "복수전공 : " + [Number(doubleSt.value) - Number(double.value)] + " 학점 미달\n"
    } else {
      result += "복수전공 : 최소학점 기준 통과_복수전공 세부기준 확인요망\n"
    }
  }

  if (!planNone.checked) {
    if (Number(planSt.value) > [Number(plan.value) + Number(planCross.value)]) {
      result += "설계전공 : " + [Number(planSt.value) - [Number(plan.value) + Number(planCross.value)]] + " 학점 미달\n"
    } else {
      result += "설계전공 : 최소학점 기준 통과_설계전공 세부기준 확인요망\n"
    }
  }

  if (!minorNone.checked) {
    if (Number(minorSt.value) > Number(minor.value)) {
      result += "부전공 : " + [Number(minorSt.value) - Number(minor.value)] + " 학점 미달\n"
    } else {
      result += "부전공 : 최소학점 기준 통과\n"
    }
  }

  if (Number(freeSt.value) > Number(free.value)) {
    result += "자유선택 : " + [Number(freeSt.value) - Number(free.value)] + " 학점 미달\n"
  } else {
    result += "자유선택 : 최소학점 기준 통과_CAU세미나 이수 확인!\n"
  }

  if (!teachNone.checked) {
    if (Number(teachSt.value) > Number(teach.value)) {
      result += "교직 : " + [Number(teachSt.value) - Number(teach.value)] + " 학점 미달\n"
    } else {
      result += "교직 : 최소학점 기준 통과\n"
    }
  }

  if (Number(totalSt.value) > Number(total.value)) {
    result += "총 이수학점 : " + [Number(totalSt.value) - Number(total.value)] + " 학점 미달"
  } else {
    result += "총 이수학점 : 기준 통과"
  }

  if (Number(baseSt.value) <= Number(base.value) &&
    Number(neceSt.value) <= Number(nece.value) &&
    Number(majorSt.value) <= Number(major.value) &&
    Number(freeSt.value) <= Number(free.value) &&
    Number(totalSt.value) <= Number(total.value)) {
    if (minorNone.checked && teachNone.checked) {
      if (Number(majorSt.value) === 66) {
        return swal("전공영역 결과", result, "success");
      } else if (!doubleNone.checked) {
        if (Number(doubleSt.value) <= Number(double.value)) {
          return swal("전공영역 결과", result, "success");
        } else {
          return swal("전공영역 결과", result, "error");
        }
      } else if (!planNone.checked) {
        if (Number(planSt.value) <= [Number(plan.value) + Number(planCross.value)]) {
          return swal("전공영역 결과", result, "success");
        } else {
          return swal("전공영역 결과", result, "error");
        }
      }
    } else if (Number(minor.value) >= 21 && teachNone.checked) {
        if (Number(majorSt.value) === 66) {
          return swal("전공영역 결과", result, "success");
        } else if (!doubleNone.checked) {
          if (Number(doubleSt.value) <= Number(double.value)) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        } else if (!planNone.checked) {
          if (Number(planSt.value) <= [Number(plan.value) + Number(planCross.value)]) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        }
      } else if (minorNone.checked && Number(teach.value) >= 21) {
        if (Number(majorSt.value) === 66) {
          return swal("전공영역 결과", result, "success");
        } else if (!doubleNone.checked) {
          if (Number(doubleSt.value) <= Number(double.value)) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        } else if (!planNone.checked) {
          if (Number(planSt.value) <= [Number(plan.value) + Number(planCross.value)]) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        }
      } else if (Number(minor.value) >= 21 && Number(teach.value) >= 21) {
        if (Number(majorSt.value) === 66) {
          return swal("전공영역 결과", result, "success");
        } else if (!doubleNone.checked) {
          if (Number(doubleSt.value) <= Number(double.value)) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        } else if (!planNone.checked) {
          if (Number(planSt.value) <= [Number(plan.value) + Number(planCross.value)]) {
            return swal("전공영역 결과", result, "success");
          } else {
            return swal("전공영역 결과", result, "error");
          }
        } else {
          return swal("전공영역 결과", result, "error");
        }
      } else {
        return swal("전공영역 결과", result, "error");
      }
    } else {
      return swal("전공영역 결과", result, "error");
    }
}

majorCheck.addEventListener("click", majorResult);

function totalCal() {
  if (Number(sumCrts.value) > 45) {
    total.value =
      45 + Number(base.value) + Number(major.value) +
      Number(double.value) + Number(plan.value) + Number(minor.value) +
      Number(free.value) + Number(teach.value)
  } else {
    total.value =
      Number(sumCrts.value) + Number(base.value) + Number(major.value) +
      Number(double.value) + Number(plan.value) + Number(minor.value) +
      Number(free.value) + Number(teach.value)
  }
}

base.addEventListener("change", totalCal);
major.addEventListener("change", totalCal);
double.addEventListener("change", totalCal);
plan.addEventListener("change", totalCal);
minor.addEventListener("change", totalCal);
free.addEventListener("change", totalCal);
teach.addEventListener("change", totalCal);

function etcResult() {
  const engExam = document.getElementById("eng").checked;
  const chiExam = document.getElementById("chi").checked;
  const korExam = document.querySelector("#kor").checked;
  const paper = document.getElementById("paper").checked;
  const douPaper = document.getElementById("double-paper").checked;
  const gpa = Number(document.getElementById("gpa").value);

  let etcResult = "졸업인정제\n"

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

  if (engExam && korExam && chiExam && paper && douPaper && gpa >= 2) {
    return swal("기타 졸업요건 결과", etcResult, "success");
  } else if (gpa >= 2) {
    return swal("기타 졸업요건 결과", etcResult, "warning");
  } else {
    return swal("기타 졸업요건 결과", etcResult, "error");
  }
}

etcCheck.addEventListener("click", etcResult);

//이수학점 색 변화관련
function colorChange(st, crts) {
  if (Number(st.value) > Number(crts.value)) {
    crts.style.color = "red";
  } else {
    crts.style.color = "blue";
  }
}

korCrts.addEventListener("change", function() {
  colorChange(korSt, korCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(engSt, engCrts)
});
etcCrts.addEventListener("change", function() {
  colorChange(etcSt, etcCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(coreSt, coreCrts)
});
choice.addEventListener("change", function() {
  colorChange(choiceSt, choice)
});
//교양영역 합계 색 변화
korCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
etcCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
choice.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
//전공영역 색 변화
base.addEventListener("change", function() {
  colorChange(baseSt, base)
});
nece.addEventListener("change", function() {
  colorChange(neceSt, nece)
});
major.addEventListener("change", function() {
  colorChange(majorSt, major)
});
double.addEventListener("change", function() {
  colorChange(doubleSt, double)
});
plan.addEventListener("change", function() {
  colorChange(planSt, plan)
});
minor.addEventListener("change", function() {
  colorChange(minorSt, minor)
});
free.addEventListener("change", function() {
  colorChange(freeSt, free)
});
teach.addEventListener("change", function() {
  colorChange(teachSt, teach)
});
//총 이수학점 색 변화
base.addEventListener("change", function() {
  colorChange(totalSt, total)
});
nece.addEventListener("change", function() {
  colorChange(totalSt, total)
});
major.addEventListener("change", function() {
  colorChange(totalSt, total)
});
double.addEventListener("change", function() {
  colorChange(totalSt, total)
});
plan.addEventListener("change", function() {
  colorChange(totalSt, total)
});
minor.addEventListener("change", function() {
  colorChange(totalSt, total)
});
free.addEventListener("change", function() {
  colorChange(totalSt, total)
});
teach.addEventListener("change", function() {
  colorChange(totalSt, total)
});

function gpaColorChange() {
  if (2 > Number(gpa.value)) {
    gpa.style.color = "red";
  } else {
    gpa.style.color = "blue";
  }
}

gpa.addEventListener("change", gpaColorChange);

function noneHandler(none, crts) {
  if (none.checked) {
    crts.readOnly = true;
    crts.value = "";
  } else {
    crts.readOnly = false;
  }
}

minorNone.addEventListener("change", function() {
  noneHandler(minorNone, minor)
});
minorNone.addEventListener("change", totalCal)
teachNone.addEventListener("change", function() {
  noneHandler(teachNone, teach)
});
teachNone.addEventListener("change", totalCal);

function multiMajorChange() {
  const multiMajorText = multiMajor.options[multiMajor.selectedIndex].text;
  const doubleTable = document.getElementById("double-table");
  const planTable = document.getElementById("plan-table");

  majorSt.value = multiMajor.value;

  if (multiMajorText === "--") {
    doubleTable.style.display = "none";
    planTable.style.display = "none";
  } else if (multiMajorText === "전공심화") {
    doubleTable.style.display = "none";
    double.value = "";
    doubleNone.checked = true;

    planTable.style.display = "none";
    plan.value = "";
    planNone.checked = true;
  } else if (multiMajorText === "복수전공") {
    doubleTable.style.display = "";
    double.value = "";
    doubleNone.checked = false;

    planTable.style.display = "none";
    plan.value = "";
    planNone.checked = true;
  } else if (multiMajorText === "설계전공") {
    doubleTable.style.display = "none";
    double.value = "";
    doubleNone.checked = true;

    planTable.style.display = "";
    plan.value = "";
    planNone.checked = false;
  }
}

multiMajor.addEventListener("change", multiMajorChange);

const aboutBtn = document.getElementById("about")

function aboutInfo() {
  swal("개발자 정보", "Code by Thingcol\nE-mail : torryjini@naver.com", "info");
}

aboutBtn.addEventListener("click", aboutInfo);
