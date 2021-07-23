import * as Sentry from "@sentry/browser";
function init() {
	Sentry.init({
		dsn: "https://747802289cd24ea9853d3ce60cb5a74b@sentry.io/1827768",
	});
}

function log(error) {
	Sentry.captureException(error);
}

export default {
	init,
	log,
};
