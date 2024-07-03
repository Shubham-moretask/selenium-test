import express from "express";
import { exec } from 'child_process';
const app =express();
const port =5000;



// Handle POST requests to trigger login script
app.post('/runtest', (req, res) => {
    // Execute WebDriverIO script using child_process
    exec('npx wdio run ./wdio.conf.js --spec test.e2e.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing WebDriverIO script: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (stderr) {
            console.error(`WebDriverIO script stderr: ${stderr}`);
        }
        console.log(`WebDriverIO script stdout: ${stdout}`);
        res.status(200).send('Login script executed successfully');
    });
});


app.listen(port ,()=>{
    console.log(`Server is running at port : ${port}`);
})