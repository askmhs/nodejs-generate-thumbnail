/*
* @Author: askmhs
* @Date:   2018-11-16 09:52:16
* @Last Modified by:   askmhs
* @Last Modified time: 2018-11-16 10:49:25
*/

import fs from "fs";
const PDFImage = require("pdf-image").PDFImage;

export class ThumbnailGenerator {

	async generate(file) {
		const data = new PDFImage(file.path);
		console.log("====> NOW PROCESSING FILE");
		return data.convertFile().then(results => {
			return results;
		}).catch(error => {
			throw error;
		});
	}
}