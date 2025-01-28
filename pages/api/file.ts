// pages/api/file.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = `/path/to/files/${req.query.fileName}`;

  // Check if the file exists
  const fs = require('fs');
  if (!fs.existsSync(filePath)) {
    // Return a 404 status
    res.status(404).json({ message: 'File not found' });
    return;
  }

  // Otherwise, serve the file or process it
  fs.readFile(filePath, (err: any, data: any) => {
    if (err) {
      res.status(500).json({ message: 'Error reading file' });
      return;
    }
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(data);
    console.log(data);
  });
}
