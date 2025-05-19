function isPlaylist(url) {
  return url.includes("list=");
}

function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const audioOnly = document.getElementById("audioOnly").checked;
  const isList = isPlaylist(url);
  const path = "/storage/emulated/0/Termux/";

  let warningText = "";
  if (isList) {
    warningText = "هشدار: این لینک مربوط به پلی‌لیست هست.";
  }

  let playlistFlag = isList ? "--yes-playlist" : "--no-playlist";
  let cmd = `yt-dlp -f "${format}" ${playlistFlag} -o "${path}%(title)s.%(ext)s" "${url}"`;

  if (audioOnly) {
    cmd += ' --extract-audio --audio-format mp3';
  }

  document.getElementById("cmdOutput").innerText = cmd;
  document.getElementById("warning").innerText = warningText;
}

function copyResult() {
  const text = document.getElementById("cmdOutput").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("کپی شد!");
  });
}
