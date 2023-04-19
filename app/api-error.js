class ApiError extends Error { dsadf
		constructor(statusCode, message) {
			super();
			this.statusCode = statusCode;
			this.message = message;
		}
}
module.exports = ApiError;