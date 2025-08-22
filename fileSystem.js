import * as fs from "node:fs";

function createfile(pathname) {
	//synchronous
	// fs.writeFileSync(pathname, "Hello, New File is created synchronously!!!\n");
	// fs.appendFileSync(pathname, "Hello, New File is updated synchronously!!!");
	// console.log("See your new file here: ./hello.txt");

	//Asynchronous
	//Err first callbacks =
	fs.writeFile(
		pathname,
		"Hello, New File is created asynchronously!!!\n",
		(err) => {
			if (err) {
				console.log("Error has appeared while creating file!!!");
				return;
			}

			fs.appendFile(
				pathname,
				"Hello, New File is updated asynchronously!!!",
				(err) => {
					if (err) {
						console.log("Error has appeared while creating file!!!");
						return;
					}
					console.log("File has been updated asynchronously!!!");
				}
			);
			console.log("File has been created asynchronously!!!");
		}
	);

	console.log("See your new file here: ./hello.txt");
}

createfile("./hello.txt");
