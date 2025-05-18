# yt-dlp Link Maker

A simple browser-based tool to generate `yt-dlp` download commands for YouTube videos and playlists.  
Optimized for Termux on Android and works perfectly in Chromium-based browsers like Cromite.

## Features
- Detects whether the link is a video or playlist
- Generates proper `yt-dlp` command
- Easy copy/share to Termux
- Fully client-side – no server, no data collected

## How to Use
1. Paste a YouTube link (video or playlist) in the input box.
2. Choose whether you want to download a single video or a full playlist.
3. Click "Generate".
4. Copy the generated command and paste it into Termux.

## Output Example
```bash
yt-dlp "https://youtu.be/abc123"
