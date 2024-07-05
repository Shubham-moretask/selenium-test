// import express from "express";
// import { exec } from 'child_process';
// const app =express();
// const port =5000;



// // Handle POST requests to trigger login script
// app.post('/runtest', (req, res) => {
//     // Execute WebDriverIO script using child_process
//     exec('npx wdio run ./wdio.conf.js --spec test.e2e.js', (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Error executing WebDriverIO script: ${error.message}`);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         if (stderr) {
//             console.error(`WebDriverIO script stderr: ${stderr}`);
//         }
//         console.log(`WebDriverIO script stdout: ${stdout}`);
//         res.status(200).send('Login script executed successfully');
//     });
// });


// app.listen(port ,()=>{
//     console.log(`Server is running at port : ${port}`);
// })



import express from "express";
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Define __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the recordings directory exists
const recordingsDir = path.join(__dirname, 'recordings');
if (!fs.existsSync(recordingsDir)) {
    fs.mkdirSync(recordingsDir);
}

// Serve recordings statically
app.use('/recordings', express.static(recordingsDir));

// Handle POST requests to trigger the test script
app.post('/runtest', (req, res) => {
    // Generate a unique filename for the video
    const videoFilename = `test-video-${Date.now()}.mp4`;
    const videoFilePath = path.join(recordingsDir, videoFilename);

    // Execute WebDriverIO script using child_process
    exec(`npx wdio run ./wdio.conf.js --spec test.e2e.js --reporters video --reporter-options outputDir=${recordingsDir},outputFile=${videoFilename}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing WebDriverIO script: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (stderr) {
            console.error(`WebDriverIO script stderr: ${stderr}`);
        }
        console.log(`WebDriverIO script stdout: ${stdout}`);

        // Check if the video file was created
        if (fs.existsSync(videoFilePath)) {
            res.status(200).json({
                message: 'Test script executed successfully',
                videoUrl: `/recordings/${videoFilename}`
            });
        } else {
            res.status(500).send('Test executed, but video recording was not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
