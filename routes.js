/*
* @Author: askmhs
* @Date:   2018-11-16 09:50:14
* @Last Modified by:   askmhs
* @Last Modified time: 2018-11-16 10:39:54
*/

import { ThumbnailGenerator } from "./controllers/ThumbnailGenerator";

module.exports = server => {
	server.post("/generate", async(req, res) => {
		try {
			// res.json(req.files.myfile);
			const result = await new ThumbnailGenerator().generate(req.files.myfile);
			res.json(result);
		} catch (exception) {
			console.log(exception);
			res.status(500);
			res.json(exception);
		}
	});
};