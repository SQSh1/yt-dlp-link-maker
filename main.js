function isPlaylist(url) {
  return url.includes("list=");
}

function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const audioOnly = document.getElementById("audioOnly").checked;
  const isList = isPlaylist(url);
  const path = "/storage/emulated/0/Termux/";
  const playlistFlag = isList ? "--yes-playlist" : "";
  const mp3Flag = audioOnly ? '--extract-audio --audio-format mp3' : '';
  const warn = document.getElementById("warning");

  if (isList) {
    warn.innerText = "هشدار: این لینک یک پلی‌لیست است.";
  } else {
    warn.innerText = "";
  }

  const cmd = `yt-dlp -f "${format}" ${playlistFlag} ${mp3Flag} -o "${path}%(title)s.%(ext)s" "${url}"`;
  document.getElementById("result").innerText = cmd;

  // کپی به کلیپ‌بورد
  navigator.clipboard.writeText(cmd);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
