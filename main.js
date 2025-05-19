function generateCommand() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.getElementById("formatSelect").value;
  const output = "/storage/emulated/0/Termux/%(title)s.%(ext)s";

  if (!url) {
    alert("Please enter a YouTube URL.");
    return;
  }

  const cmd = `yt-dlp -f "${format}" -o "${output}" "${url}"`;

  document.getElementById("outputBox").textContent = cmd;
  document.getElementById("outputSection").classList.remove("d-none");
}

function copyCommand() {
  const text = document.getElementById("outputBox").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Command copied to clipboard.");
  });
}

function shareCommand() {
  const text = document.getElementById("outputBox").textContent;

  if (navigator.share) {
    navigator.share({
      text: text
    }).catch((error) => {
      console.error("Error sharing:", error);
    });
  } else {
    alert("Share not supported on this browser. Please copy manually.");
  }
}
