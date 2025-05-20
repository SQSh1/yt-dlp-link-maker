function generateCommand() {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.getElementById("formatSelect").value;
  if (!url) return;

  const output = `yt-dlp -f "${format}" -o "/storage/emulated/0/Termux/%(title)s.%(ext)s" "${url}"`;
  document.getElementById("outputBox").textContent = output;
  document.getElementById("outputSection").classList.remove("d-none");
}

function copyCommand() {
  const output = document.getElementById("outputBox").textContent;
  navigator.clipboard.writeText(output).then(() => {
    showToast("Command copied to clipboard");
  });
}

function shareCommand() {
  const output = document.getElementById("outputBox").textContent;
  if (navigator.share) {
    navigator.share({ text: output }).catch(() => {});
  } else {
    showToast("Sharing not supported on this browser");
  }
}

// نمایش toast
function showToast(message) {
  let toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.backgroundColor = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  toast.style.zIndex = "9999";
  toast.style.fontSize = "0.95rem";
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    setTimeout(() => toast.remove(), 500);
  }, 2000);
}

async function fetchFormats() {
  const url = document.getElementById('urlInput').value;
  if (!url.trim()) {
    alert('لطفاً لینک ویدیو را وارد کنید.');
    return;
  }

  const res = await fetch('/api/parse.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, command: '-F' })
  });

  const data = await res.json();
  const outputEl = document.getElementById('formatOutput');
  if (data.success) {
    outputEl.innerText = data.output;
  } else {
    outputEl.innerText = 'خطا در اجرای yt-dlp:\n' + data.output;
  }
}
