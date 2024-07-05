// import express from "express";
// import { exec } from 'child_process';
// const app =express();
// const port =5000;



// // Handle POST requests to trigger login script
// app.post('/runtest', (_req, res) => {
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


// import express from 'express';
// import puppeteer from 'puppeteer';
// import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

// const app = express();
// const port = 3000;

// async function runLoginTest() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   const recorder = new PuppeteerScreenRecorder(page);

//   try {
//     // Navigate to the login page
//     await page.goto('https://www.feedants.com/#/');

//     // Start recording
//     const videoPath = `./testcase-${Date.now()}.mp4`;
//     await recorder.start(videoPath);

//     // Enter username
//     await page.type('#field-1', 'sk9664150090@gmail.com');

//     // Enter password
//     await page.type('#field-2', 'Intern@123');

//     // Click the login button
//     await page.click('button[type="button"]');

//     // Wait for navigation to the dashboard or some element that confirms login
//     await page.waitForNavigation();

//     // Stop recording
//     await recorder.stop();

//     console.log(`Test completed. Video saved at: ${videoPath}`);
//     return videoPath;
//   } catch (err) {
//     console.error('Error during login test:', err);
//   } finally {
//     await browser.close();
//   }
// }

// // Define an API endpoint
// app.get('/run-test', async (req, res) => {
//   try {
//     const videoPath = await runLoginTest();
//     res.status(200).send(`Test completed. Video saved at: ${videoPath}`);
//   } catch (err) {
//     res.status(500).send('Error running login test',err);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



//-----.error get
// import express from 'express';
// import puppeteer from 'puppeteer';
// import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

// const app = express();
// const port = process.env.PORT || 3000;

// async function runLoginTest() {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });
//   const page = await browser.newPage();
//   const recorder = new PuppeteerScreenRecorder(page);

//   try {
//     // Navigate to the login page
//     await page.goto('https://www.feedants.com/#/');

//     // Start recording
//     const videoPath = `./testcase-${Date.now()}.mp4`;
//     await recorder.start(videoPath);

//     // Enter username
//     await page.type('#field-1', 'sk9664150090@gmail.com');

//     // Enter password
//     await page.type('#field-2', 'Intern@123');

//     // Click the login button
//     await page.click('button[type="button"]');

//     // Wait for navigation to the dashboard or some element that confirms login
//     await page.waitForNavigation();

//     // Stop recording
//     await recorder.stop();

//     console.log(`Test completed. Video saved at: ${videoPath}`);
//     return videoPath;
//   } catch (err) {
//     console.error('Error during login test:', err);
//     throw err; // Re-throw the error to ensure the catch block in the route handles it
//   } finally {
//     await browser.close();
//   }
// }

// // Define an API endpoint
// app.get('/run-test', async (req, res) => {
//   try {
//     const videoPath = await runLoginTest();
//     res.status(200).send(`Test completed. Video saved at: ${videoPath}`);
//   } catch (err) {
//     console.error('Error in /run-test endpoint:', err);
//     res.status(500).send(`Error running login test: ${err.message}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from 'express';
import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

const app = express();
const port = process.env.PORT || 3000;

async function runLoginTest() {
  const browser = await puppeteer.launch({
    headless: true, // Adjust as needed
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page);

  try {
    // Navigate to the login page
    await page.goto('https://www.feedants.com/#/');

    // Start recording
    const videoPath = `./testcase-${Date.now()}.mp4`;
    await recorder.start(videoPath);

    // Enter username
    await page.type('#field-1', 'sk9664150090@gmail.com');

    // Enter password
    await page.type('#field-2', 'Intern@123');

    // Click the login button
    await page.click('button[type="button"]');

    // Wait for navigation to the dashboard or some element that confirms login
    await page.waitForNavigation();

    // Stop recording
    await recorder.stop();

    console.log(`Test completed. Video saved at: ${videoPath}`);
    return videoPath;
  } catch (err) {
    console.error('Error during login test:', err);
    throw err;
  } finally {
    await browser.close();
  }
}

// Define an API endpoint
app.get('/run-test', async (req, res) => {
  try {
    const videoPath = await runLoginTest();
    res.status(200).send(`Test completed. Video saved at: ${videoPath}`);
  } catch (err) {
    console.error('Error in /run-test endpoint:', err);
    res.status(500).send(`Error running login test: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
