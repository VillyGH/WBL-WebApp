/* eslint-disable no-console */
import { execa } from "execa";
import fs from "fs";

(async () => {
    try {
        await execa("git", ["config", "--global", "user.email", "willclash@outlook.com"]);
        await execa("git", ["config", "--global", "user.name", "William Blanchet Lafrenière"]);
        await execa("git", ["config", "--global", "credential.helper", "store --file ~/.git-credentials"]);
        
        // eslint-disable-next-line no-console
        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        const folderName = fs.existsSync("build") ? "build" : "dist";
        
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "master"]);
        
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();