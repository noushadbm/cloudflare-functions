import welcome from "welcome.html";

/**
 * @typedef {Object} Env
 */

export default {
	/**
	 * @param {Request} request
	 * @param {Env} env
	 * @param {ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`);

		if (url.pathname === "/api") {
			// You could also call a third party API here
			const data = await import("./data.js");
			const command = url.searchParams.get('command');
			const secret = url.searchParams.get('secret');
			const message = url.searchParams.get('message');
			if(command == 'notify' && secret == env.COMMAND_SECRET) {
                const url = `https://api.telegram.org/bot${env.BOT_API_KEY}/sendMessage`;
                const body = {
                    chat_id: `${env.BOT_MSG_ID}`,
                    text: message,
                    disable_notification: false
                };

				const init = {
					body: JSON.stringify(body),
					method: "POST",
					headers: {
					  "content-type": "application/json;charset=UTF-8",
					},
				};

				await fetch(url, init);
				return Response.json({status: "Success"});

			} else {
				//data.message = `test-${command}`;
			    //console.log(`Msg id: ${env.BOT_MSG_ID}`);
			    return Response.json(data);
			}
			
		}
		return new Response(welcome, {
			headers: {
				"content-type": "text/html",
			},
		});
	},
};
