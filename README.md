# yt-dlp Link Maker

A simple browser-based tool to generate `yt-dlp` download commands for YouTube videos and playlists.  
Optimized for **Termux** on Android and works perfectly in Chromium-based browsers like **Cromite**.

---

## Features

- Automatically detects whether the link is a single video or a playlist  
- Generates a clean `yt-dlp` command ready to copy and paste into Termux  
- Fully client-side â€“ no server, no data collection  
- Designed for mobile-first use with a lightweight and responsive UI

---

## How to Use

1. Paste a YouTube video or playlist URL into the input field.  
2. Choose whether you want to download a single video or the entire playlist.  
3. Click the **Generate** button.  
4. Copy the generated command and paste it into **Termux** to start downloading.

---

## Output Example

```bash
yt-dlp "https://youtu.be/abc123"
```

---

## Planned Features

- Quality and format selection (e.g., 720p, audio-only)  
- Custom output directory support (e.g., `/storage/emulated/0/Download/Termux`)  
- Dark mode interface  
- Auto-copy to clipboard functionality

---

## Live Demo

Try the tool live on **GitHub Pages**:  
[yt-dlp-link-maker](https://sqsh1.github.io/yt-dlp-link-maker/)

---

## License

This project is for educational use only. Please respect [YouTube's Terms of Service](https://www.youtube.com/static?template=terms).

---

## Author

Created by [SQ](https://github.com/SQSh1).

---
