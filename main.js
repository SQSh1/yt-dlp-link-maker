function generateCommand() {
  const url = document.getElementById("youtubeUrl").value.trim();
  const format = document.getElementById("format").value;
  let command = "";

  if (!url) {
    document.getElementById("output").value = "Please enter a YouTube URL.";
    return;
  }

  switch (format) {
    case "video":
      command = `yt-dlp -f best "${url}" -P /storage/emulated/0/Termux`;
      break;
    case "audio":
      command = `yt-dlp -f bestaudio[ext=m4a] --extract-audio --audio-format m4a "${url}" -P /storage/emulated/0/Termux`;
      break;
    case "list":
      command = `yt-dlp -F "${url}"`;
      break;
  }

  document.getElementById("output").value = command;
  document.getElementById("outputContainer").style.display = "block";
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  output.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Command copied to clipboard!");
}

function shareOutput() {
  const command = document.getElementById("output").value;
  if (navigator.share) {
    navigator.share({
      title: "yt-dlp command",
      text: command
    }).catch(console.error);
  } else {
    alert("Sharing not supported on this device/browser.");
  }
}
