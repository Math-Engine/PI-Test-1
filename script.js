const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const PI = fs.readFileSync(path.join(__dirname, `PI_1M.txt`), 'utf8');
let result = [];
let temp = 0;
let result_3_qotn = [];

for (var i = 0; i < 1000; i++) {
  temp = temp + Number(PI[i]);
  result.push(temp);
  if (temp%3 == 0) {
    result_3_qotn.push("✅");
  }else{
    result_3_qotn.push("❌");
  }
}

execSync(`echo "${JSON.stringify(result)}" >> $GITHUB_STEP_SUMMARY`);
execSync(`echo "<hr> ${JSON.stringify(result_3_qotn)}" >> $GITHUB_STEP_SUMMARY`);
