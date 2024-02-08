const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const PI = fs.readFileSync(path.join(__dirname, `PI_1M.txt`), 'utf8');
let result = [];
let temp = 0;

for (var i = 0; i < 1000; i++) {
  temp = temp + Number(PI[i]);
  result.push(temp);
}

execSync(`echo "${JSON.stringify(result)}" >> $GITHUB_STEP_SUMMARY`);
