const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const PI = fs.readFileSync(path.join(__dirname, `PI_1M.txt`), 'utf8');
let result = [];
let temp = 0;
let result_3_qotn = [];
let ox = [0, 0];

for (var i = 0; i < 1000; i++) {
  temp = temp + Number(PI[i]);
  result.push(temp);
  if (temp%3 == 0) {
    result_3_qotn.push("✅");
    ox[0] = ox[0] + 1;
  }else{
    result_3_qotn.push("❌");
    ox[1] = ox[1] + 1;
  }
}

execSync(`echo "${JSON.stringify(result)}" >> $GITHUB_STEP_SUMMARY`);
execSync(`echo "<hr> <ul><li>✅: ${ox[0]}</li><li>❌: ${ox[1]}</li></ul>}" >> $GITHUB_STEP_SUMMARY`);
execSync(`echo "<hr> ${JSON.stringify(result_3_qotn)}" >> $GITHUB_STEP_SUMMARY`);
