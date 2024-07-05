// const puppeteer = require('puppeteer');
// const Recorder = require('puppeteer-recorder');



//fine code for local -----------> 

// import puppeteer from 'puppeteer';
// import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

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
//   } catch (err) {
//     console.error('Error during login test:', err);
//   } finally {
//     await browser.close();
//   }
// }

// runLoginTest();



//-->
