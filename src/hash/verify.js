import fs from "fs/promises";
import fs2 from "fs";
import crypto from "crypto";
import path from "path";

function calculateHash(filePath) {
  return new Promise((resolve, reject) => {
    if (fs2.existsSync(filePath)) {
      resolve({ file: filePath, error: "File does not exist" });
    }
  });
}

const verify = async () => {
  // Write your code here
  // Read checksums.json
  // Calculate SHA256 hash using Streams API
  // Print result: filename — OK/FAIL
  try {
    const content = await fs.readFile("src/hash/checksums.json", "utf-8");
    const files = JSON.parse(content);
    for (const file in files) {
      const fullPath = path.join(process.cwd(), "src/hash", file);
      await calculateHash(fullPath);
    }
  } catch (e) {
    console.error("FS operation failed");
  }
};

await verify();
