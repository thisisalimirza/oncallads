<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1UEfpr1eGs44SEhmi67elloz64DOh0kUE

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env.local` file and set the `VITE_API_KEY` to your Gemini API key:
   ```
   VITE_API_KEY=your_gemini_api_key_here
   ```
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is configured for seamless deployment on Vercel.

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/thisisalimirza/oncallads.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository: `thisisalimirza/oncallads`
   - Vercel will auto-detect the Vite framework
   - **Add Environment Variable:**
     - Name: `VITE_API_KEY`
     - Value: Your Gemini API key
   - Click "Deploy"

3. **That's it!** Your app will be live in minutes.

The `vercel.json` configuration handles SPA routing automatically, so all routes will work correctly.
