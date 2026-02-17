import { readdir } from "node:fs";
import * as fs from "node:fs/promises";

export async function listItems(listPath = "./") {
	await fs.readdir(listPath, {withFiletypes: true});
	//console.log(items);
}

export async function createFolder(foldername) {
	await fs.mkdir(foldername, { recursive: true });
}
async function readFile(pathname) {
	const data = await fs.readFile(pathname, "utf-8");
	console.log("data", data);
}

export async function deleteFile(filepath) {
	await fs.unlink(filepath);
}

export async function deleteFolder(foldername) {
	await fs.rm(foldername, { recursive: true });
}

export async function writeToFile(pathname, content = "") {
	await fs.appendFile(pathname, content);
}
export async function createFile(pathname, content = "") {
	await fs.writeFile(pathname, content);
}

async function getFileInfo(filePath) {
	const stats = await fs.stat(filePath);
	return {
		size: "${(stats.size / 1024).toFixed(2)} KB",
		created: stats.birthtime.toLocaleString(),
		modified: stats.mtime.toLocaleString(),
	};
}
// getFileInfo("./fileSystemCRUD.txt").then((data) => {
// 	console.log(data, "Data");
// });

const status = await getFileInfo("./fileSystemCRUD.txt");
console.log(status);


// deleteFolder("./Content/Images");
// deleteFile("./fileSystemCRUD.txt");
// readFile("./fileSystemCRUD.txt");
// createFolder("./Content/Images");
// createFile("fileSystemCRUD.txt", "File Created!!!");
// getFileInfo("./fileSystemCRUD.txt");
