function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const audioOnly = document.getElementById("audioOnly").checked;

  if (!url) {
    alert("لطفاً یک لینک وارد کنید");
    return;
  }

  const path = "~/storage/shared/Termux/";
  const output = audioOnly ? `${path}%(title)s.%(ext)s` : `${path}%(title)s.%(ext)s`;
  let cmd = `yt-dlp -f "${format}" -o "${output}" "${url}"`;

  if (audioOnly) {
    cmd += ' --extract-audio --audio-format mp3';
  }

  document.getElementById("result").textContent = cmd;
  document.getElementById("outputBox").style.display = "block";
}

function copyCommand() {
  const text = document.getElementById("result").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ کپی شد!");
  }).catch(() => {
    alert("❌ کپی نشد!");
  });
}

function shareCommand() {
  const text = document.getElementById("result").textContent;
  if (navigator.share) {
    navigator.share({
      title: 'yt-dlp command',
      text: text
    });
  } else {
    alert("اشتراک‌گذاری در این مرورگر پشتیبانی نمی‌شود.");
  }
}
