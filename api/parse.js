// api/parse.js
const { exec } = require("child_process");

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' parameter" });
  }

  const cmd = `yt-dlp -F "${url}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || "Execution failed" });
    }

    return res.status(200).json({ output: stdout });
  });
};
