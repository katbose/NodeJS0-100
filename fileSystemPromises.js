import * as fs from "node:fs/promises";

async function createfile(pathname) {
	await fs.writeFile(
		pathname,
		"Hello, New File is created asynchronously!!!\n",
	);
	await fs.appendFile(pathname, "This line is being appended!!!\n");
	console.log("File written Successfully!!!");
}

createfile("./fs-promises.txt");
