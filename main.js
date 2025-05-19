function generate() {
  const url = document.getElementById("url").value.trim();
  const format = document.getElementById("format").value;
  const audioOnly = document.getElementById("audioOnly").checked;
  const warning = document.getElementById("warning");
  const result = document.getElementById("result");

  warning.textContent = "";
  result.textContent = "";

  if (!url || !url.includes("youtube.com") && !url.includes("youtu.be")) {
    warning.textContent = "لطفاً یک لینک معتبر یوتیوب وارد کنید.";
    return;
  }

  if (url.includes("playlist")) {
    warning.textContent = "این لینک مربوط به پلی‌لیست است.";
  }

  let command = `yt-dlp -f "${format}" "${url}"`;

  if (audioOnly) {
    command += ' -x --audio-format mp3';
  }

  command += ' -P /storage/emulated/0/Termux';

  result.textContent = command;
}

function copyCommand() {
  const command = document.getElementById("result").textContent;
  if (!command) return;
  navigator.clipboard.writeText(command).then(() => {
    alert("دستور کپی شد!");
  });
}

function shareCommand() {
  const command = document.getElementById("result").textContent;
  if (!navigator.share || !command) {
    alert("اشتراک‌گذاری توسط مرورگر پشتیبانی نمی‌شود.");
    return;
  }

  navigator.share({
    title: 'yt-dlp command',
    text: command
  }).catch(() => alert("اشتراک‌گذاری لغو شد."));
}
