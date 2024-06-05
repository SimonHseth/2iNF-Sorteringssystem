const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/deploy', (req, res) => {
  exec('sh /path/to/deploy.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(error);
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.sendStatus(200);
  });
});

app.listen(80, () => {
  console.log('Listening on port 80');
});
