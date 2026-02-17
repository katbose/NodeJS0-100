import chalk from "chalk";
import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import {
	createFolder,
	createFile,
	writeToFile,
	deleteFolder,
	deleteFile,
	listItems,
} from "./fileSystemCRUD.js";

const rl = readline.createInterface({
	input: stdin,
	output: stdout,
});

async function fileMenu() {
	console.log(chalk.blue.bold("\n 🗂️  File System Manager \n"));

	const options = [
		"Create Folder",
		"Create File",
		"Edit file",
		"Delete Folder",
		"Delete File",
		"Write file",
		"List Items",
		"Exit",
	];

	options.forEach((opt, i) =>
		console.log(chalk.yellow(`${i + 1}`) + chalk.white(` ${opt}`)),
	);

	const answer = await rl.question(chalk.cyan.bold("\n Select operation: "));
	console.log("Ans:", answer);

	switch (answer) {
		case "1":
			const folderPath = await rl.question(
				chalk.blue("Enter the folder path: "),
			);
			await createFolder(folderPath);
			console.log(`✅ Folder created successfully!!!`);
			break;

		case "2":
			const filePath = await rl.question(chalk.blue("Enter the file path: "));
			const initialContent = await rl.question(
				chalk.blue("Enter the initial content: "),
			);
			await createFile(filePath, initialContent);
			console.log(`✅ File created successfully!!!`);
			break;

		case "3":
			const editfile = await rl.question(chalk.blue("Enter the file path: "));
			const editContent = await rl.question(chalk.blue("Enter the content: "));
			await writeToFile(editfile, `\n ${editContent}`);
			console.log(`✅ File edited successfully!!!`);
			break;

		case "4":
			const deleteFolderPath = await rl.question(
				chalk.blue("Enter the Folder path to be deleted: "),
			);
			await deleteFolder(deleteFolderPath);
			console.log(`✅ Folder deleted successfully!!!`);
			break;

		case "5":
			const deleteFilePath = await rl.question(
				chalk.blue("Enter the file path to be deleted: "),
			);
			await deleteFile(deleteFilePath);
			console.log(`✅ File deleted successfully!!!`);
			break;

		case "7":
			const listPath = await rl.question(
				chalk.blue("Enter the folder path *press ENTER fo current*: "),
			);
			await listItems(listPath);
			console.log(chalk.blue(`List of Contents:`));
			break;
			
		default:
			break;
	}
}

fileMenu();
