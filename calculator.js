function appendResult(value) {
    document.getElementById("res").value += value;
  }
  
  function clrRes() {
    document.getElementById("res").value = "";
  }
  
  function delLast() {
    let res = document.getElementById("res").value;
    document.getElementById("res").value = res.slice(0, -1);
  }
  
  function calci() {
    let res = document.getElementById("res").value;
    try {
      let answer = eval(res);
      document.getElementById("res").value = answer;
    } catch (error) {
      document.getElementById("res").value = "Error";
    }
  }
  