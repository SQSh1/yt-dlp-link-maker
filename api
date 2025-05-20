// File: api/parse.js

import { exec } from "child_process";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !url.startsWith("http")) {
    return res.status(400).json({ error: "Invalid or missing URL" });
  }

  exec(`yt-dlp -F "${url}"`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || "yt-dlp failed" });
    }

    const formats = parseFormats(stdout);
    res.status(200).json({ url, formats });
  });
}

// Helper: Parse yt-dlp -F output into a clean JSON list
function parseFormats(output) {
  const lines = output.split("\n");
  const result = [];

  for (const line of lines) {
    const match = line.match(/^(\d+)\s+(\w+.*?)\s+(\d+x\d+.*?)\s+(.*)/);
    if (match) {
      result.push({
        format_id: match[1],
        ext: match[2],
        resolution: match[3],
        note: match[4]
      });
    }
  }

  return result;
}
