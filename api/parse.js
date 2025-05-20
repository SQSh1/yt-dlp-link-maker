export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, output: "Method Not Allowed" });
  }

  const { url, command } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ success: false, output: "Missing or invalid URL" });
  }

  // پیش‌فرض: دانلود معمولی
  const cmd = command && typeof command === "string"
    ? `./yt-dlp ${command} "${url}"`
    : `./yt-dlp -f bestaudio[ext=m4a]/bestaudio/best -o "%(title)s.%(ext)s" "${url}"`;

  try {
    const { exec } = await import("node:child_process");
    exec(cmd, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        return res.status(200).json({
          success: false,
          output: stderr || error.message,
        });
      }

      res.status(200).json({
        success: true,
        output: stdout,
      });
    });
  } catch (err) {
    res.status(500).json({ success: false, output: "Server error: " + err.message });
  }
}
