function isPlaylist(url) {
  return url.includes("list=");
}

function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const isList = isPlaylist(url);
  const path = "/storage/emulated/0/Termux/";
  const playlistFlag = isList ? "--yes-playlist" : "";
  const cmd = `yt-dlp -f "${format}" ${playlistFlag} -o "${path}%(title)s.%(ext)s" "${url}"`;
  document.getElementById("result").innerText = cmd;
}
