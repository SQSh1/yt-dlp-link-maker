function isPlaylist(url) {
  return url.includes("list=");
}

function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const audioOnly = document.getElementById("audioOnly").checked;
  const isList = isPlaylist(url);
  const path = "/storage/emulated/0/Termux/";

  if (!url) {
    document.getElementById("warning").innerText = "لطفاً یک لینک وارد کن!";
    return;
  }

  let playlistFlag = isList ? "--yes-playlist" : "--no-playlist";
  let cmd = `yt-dlp -f "${format}" ${playlistFlag} -o "${path}%(title)s.%(ext)s" "${url}"`;

  if (audioOnly) {
    cmd += ' --extract-audio --audio-format mp3';
  }

  document.getElementById("cmdOutput").innerText = cmd;
  document.getElementById("warning").innerText = isList ? "این لینک پلی‌لیسته ✅" : "این لینک ویدیوی تکیه 🎥";
}

function copyResult() {
  const text = document.getElementById("cmdOutput").innerText;
  if (!text) return alert("دستوری وجود نداره!");
  navigator.clipboard.writeText(text).then(() => {
    alert("دستور کپی شد ✅");
  });
}

function shareResult() {
  const text = document.getElementById("cmdOutput").innerText;
  if (!text) return alert("دستوری برای اشتراک نیست!");
  if (navigator.share) {
    navigator.share({
      title: "دستور yt-dlp برای Termux",
      text: text
    });
  } else {
    prompt("مرورگرت اشتراک‌گذاری رو پشتیبانی نمی‌کنه. خودت کپی کن:", text);
  }
}
