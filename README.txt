# Search Without AI - Chrome Extension

A lightweight Chrome extension that automatically adds `-ai` to your Google searches, helping you avoid AI-generated content and the Gemini prompt while reducing environmental impact.

## What It Does

- Automatically appends `-ai` to all Google searches
- Excludes AI-generated content from search results
- Prevents the Gemini AI prompt from appearing
- Reduces water/energy consumption by avoiding unnecessary AI processing

## Installation (For Users)

### Option 1: Install from Chrome Web Store (Coming Soon)
Once published, you'll be able to install with one click from the Chrome Web Store.

### Option 2: Install Manually (Developer Mode)

1. Download all the extension files
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the folder containing the extension files
6. The extension is now active! Try searching on Google.

## How to Use

Just search Google normally - the extension works automatically in the background. You'll notice `-ai` is added to your search queries.

## Files Included

- `manifest.json` - Extension configuration
- `background.js` - Core functionality
- `popup.html` - Extension popup interface
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons
- `README.md` - This file

## Publishing to Chrome Web Store

If you want to make this extension available to everyone:

### Step 1: Prepare Your Package

1. Create a ZIP file containing all extension files:
   ```bash
   zip -r search-without-ai.zip manifest.json background.js popup.html icon16.png icon48.png icon128.png
   ```

### Step 2: Register as a Chrome Web Store Developer

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Pay the one-time $5 registration fee
3. Complete your developer account setup

### Step 3: Upload Your Extension

1. Click "New Item" in the developer dashboard
2. Upload your ZIP file
3. Fill in the store listing:
   - **Name**: Search Without AI
   - **Description**: Automatically adds -ai to Google searches to exclude AI content and reduce environmental impact
   - **Category**: Productivity or Search Tools
   - **Screenshots**: Take screenshots of the extension in action
   - **Detailed description**: Explain the environmental benefits
   - **Privacy practices**: Note that the extension doesn't collect any data

4. Submit for review (usually takes 1-3 days)

### Step 4: After Approval

Once approved, share the Chrome Web Store link with users!

## Privacy

This extension:
- ✅ Does NOT collect any data
- ✅ Does NOT track your searches
- ✅ Does NOT send information anywhere
- ✅ Only modifies search URLs locally in your browser

## Technical Details

The extension uses Chrome's `webNavigation` API to intercept Google search URLs before they load, appending `-ai` to the query parameter if it's not already present.

Supported Google domains:
- google.com
- google.ca
- google.co.uk
- google.com.au

(More can be easily added in manifest.json)

## Contributing

This is open-source! Feel free to:
- Add more Google domains
- Improve the icon design
- Add features like toggleable on/off
- Translate to other languages

## Environmental Impact

By excluding AI processing from searches:
- Reduces data center energy consumption
- Saves water used for cooling AI servers
- Decreases carbon footprint of daily internet usage

Every search counts! 🌍

## License

MIT License - Free to use, modify, and distribute

## Support

If you encounter any issues, please report them on the GitHub repository (if you create one) or contact the developer.

---

Made with 💚 for a more sustainable internet
