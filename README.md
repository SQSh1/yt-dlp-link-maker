# yt-dlp Link Maker

A simple browser-based tool to generate `yt-dlp` download commands for YouTube videos and playlists.  
Optimized for **Termux** on Android and works perfectly in Chromium-based browsers like **Cromite**.

## Features
- Automatically detects whether the link is a single video or a playlist
- Generates a clean `yt-dlp` command ready to copy/paste into Termux
- Fully client-side – No server, no data collection
- Designed for mobile-first use with lightweight UI

## How to Use
1. Paste a YouTube link (video or playlist) into the input field.
2. Choose whether you want to download a single video or the entire playlist.
3. Click the **Generate** button.
4. Copy the generated command and paste it into **Termux** to start the download.

## Output Example
```bash
yt-dlp "https://youtu.be/abc123"


## Coming Soon
- Quality and format selection (e.g. 720p, audio-only)
- Support for custom output folders (e.g. `/storage/emulated/0/Download/Termux`)
- Dark mode interface
- Auto-copy to clipboard

## Live Demo
Try it here:  
**[yt-dlp-link-maker on GitHub Pages](https://sqsh1.github.io/yt-dlp-link-maker/)**

---

**Created by [SQ](https://github.com/SQSh1)**  
For educational use only. Please respect YouTube's Terms of Service.

