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
import { clear, log } from "node:console";

const rl = readline.createInterface({
	input: stdin,
	output: stdout,
});

async function fileMenu() {
	console.clear();
	console.log(chalk.blue.bold("\n 🗂️  File System Manager \n"));

	const options = [
		"Create Folder",
		"Create File",
		"Edit file",
		"Delete Folder",
		"Delete File",
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

		case "6":
			const listPath = await rl.question(
				chalk.blue("Folder path (Enter for current): "),
			);
			const items = await listItems(listPath || "./");
			console.log(chalk.blue("\nContents: "));
			items.forEach((item) => {
				const icon = item.type === "folder" ? "📁" : "📄";
				console.log(`${icon} ${chalk.yellow(item.name)}`);
			});
			break;

		case "7":
			rl.close();
			return;

		default:
			console.log(chalk.red("🔥🔥🔥🔥Invalid option🔥🔥🔥🔥"));
	}

	await rl.question(chalk.gray("\nPress ENTER to continue..."));
	fileMenu();
}

fileMenu();
