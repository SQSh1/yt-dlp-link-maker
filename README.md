## 🎬 yt-dlp Link Generator for Termux

**yt-dlp Link Generator** is a simple and user-friendly tool that helps you automatically generate `yt-dlp` commands to download videos or audio from YouTube within the Termux environment. Designed with an easy-to-use interface, this tool enhances the downloading experience for Android users.

## ⚠️ Important Security Notes

- 🔑 Your cookies are like the key to your account — **never share them** with anyone!
- ⏳ Cookies have an expiration date — if you get the error again, export a fresh cookies file.
- ✅ This method is safe and legal — it works just like watching the video in your own browser.

With this method, you can download any video **without CAPTCHA or “Sign in” errors**!



## 📌 🚩 Fixing `Sign in to confirm you’re not a bot` Error

Sometimes YouTube shows the message:  
**“Sign in to confirm you’re not a bot.”**  
This means you must be logged in or pass a CAPTCHA to download the video.

---

## ⚙️ Quick Solution

✅ The only reliable solution is to use your browser cookies:  
1️⃣ Log in to YouTube with your account.  
2️⃣ Export your browser cookies.  
3️⃣ Pass the cookies to yt-dlp.

---

## 🧩 Step-by-Step Guide

### ✅ 1️⃣ Install a Cookie Export Extension

🔹 **PC:**  
- Use **Chrome**, **Edge**, or **Firefox**.  
- Install [Get cookies.txt](https://chrome.google.com/webstore/detail/get-cookiestxt/hnimpnehoodheedghdeeijklkeaacjfo)  
  or [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg).

🔹 **Android (Mobile):**  
- Install [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser).  
- Open [Chrome Web Store](https://chrome.google.com/webstore) and install the same extensions.

---

### ✅ 2️⃣ Export Your Cookies

- Log in to [YouTube](https://youtube.com) (make sure you’re signed in).
- Click the extension icon.
- Select **Export cookies to cookies.txt**.
- Save the `cookies.txt` file.

---

### ✅ 3️⃣ Transfer Cookies to Your Phone (Optional)

If you exported cookies on a PC:
- Copy the file to your phone (for example, to `/storage/emulated/0/Termux`).

---

### ✅ 4️⃣ Run yt-dlp with Cookies

Run the command in Termux or your terminal:
```bash
yt-dlp --cookies /storage/emulated/0/Termux/cookies.txt "YOUR-VIDEO-LINK" --merge-output-format mp4


🔗 [Persian🇮🇷](README.fa.md)
## 📸 Screenshots
Here are some screenshots showcasing the tool in action:

![YouTube Grok Page](screenshots/IMG_2025-06-10-08-59-29-min.jpg)  
*The YouTube channel page for Grok, captured from the browser.*

![UI Link Generation](screenshots/IMG_2025-06-10-09-10-04-min.jpg)  
*Interface showing the tool generating a link with a YouTube URL, platform selection, and command options.*

![Termux Receiving Link](screenshots/IMG_2025-06-10-09-10-22-min.jpg)  
*Termux terminal initiating the download process after receiving the generated command.*

![Termux Download Complete](screenshots/IMG_2025-06-10-09-11-05-min.jpg)  
*Termux terminal showing the successful completion of the download process.*
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
   termux-setup-storage
   pkg update && pkg upgrade
   pkg install python
   pip install --upgrade yt-dlp
   
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
