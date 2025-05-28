## Using the downloader tool
  .[Click to use the link generator](https://sqsh1.github.io/yt-dlp-link-maker)
# 🎬 yt-dlp Link Generator for Termux

**yt-dlp Link Generator** is a simple and user-friendly tool that helps you automatically generate `yt-dlp` commands to download videos or audio from YouTube within the Termux environment. Designed with an easy-to-use interface, this tool enhances the downloading experience for Android users.

🔗 [Persian🇮🇷](README.fa.md)

---

## ✨ Features

- Generate `yt-dlp` commands for downloading videos, playlists, or audio  
- Choose output format (video or audio only)  
- Automatically convert to MP3 format  
- Copy or share the generated command  
- Save files to an accessible path in internal storage  

---

## 📋 Prerequisites

Before using the tool, ensure the following are installed in Termux:

- `yt-dlp`: For downloading content from YouTube  
- `termux-storage`: For accessing internal storage  

---

## 📥 Installation

1. **Install Termux**  
   Download and install Termux on your Android device from [Google Play](https://play.google.com/store/apps/details?id=com.termux) or [F-Droid](https://f-droid.org/packages/com.termux/).

3. **Install Prerequisites**  
   Run the following commands in Termux:  
   ```
   pkg update && pkg upgrade
   pkg install yt-dlp
   termux-setup-storage
   ```

4. **Get the Project**  
   Clone this repository or download the project files:  
   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

   **Note**: Replace `your-username/your-repo` with the actual address of your repository.

---

## 🚀 Usage

1. Enter the YouTube link (video or playlist).  
2. Select the output format (video or audio).  
3. If needed, enable the "Convert to MP3" option.  
4. Click the "Generate Command" button.  
5. Copy or share the generated command and execute it in Termux.  

---

## 📂 File Storage Path

Downloaded files will be saved in the following path:  
- `~/storage/shared/Termux/`  
- Equivalent: `/storage/emulated/0/Termux/`  

This path is accessible via your Android file manager.  

**Warning**: Before downloading, ensure you have run `termux-setup-storage` to grant Termux access to internal storage.

---

## 🛠️ Troubleshooting

- **Storage Access Error**:  
  Run `termux-setup-storage` again.  
- **Content Not Downloading**:  
  Ensure `yt-dlp` is up to date:  
  ```
  pkg update yt-dlp
  ```

To report issues, open an [Issue](https://github.com/your-username/your-repo/issues) on the GitHub repository.

---

## 🤝 Contributing

We welcome your contributions! To improve this project:  
- Fork the repository.  
- Make your changes and submit a [Pull Request](https://github.com/your-username/your-repo/pulls).  
- Report ideas or bugs via [Issues](https://github.com/your-username/your-repo/issues).  

---

## 📌 About

This tool was designed by **[SQ]** to simplify downloading from YouTube on Android. If you like this project, please support us by giving a ⭐ to the repository!

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## ⭐ Support

If you found this tool helpful, please give the repository a star and share it with your friends! 🌟
