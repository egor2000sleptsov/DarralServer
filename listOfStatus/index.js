const listOfStatus = {
	notExist: (data = null) => ({
		status: "notExist",
		data: data
	}),
	success: (data = null) => ({
		status: "success",
		data: data
	}),
	notSuccess: (data = null) => ({
		status: "notSuccess",
		data: data
	}),
	InvalidMethod: (data = null) => ({
		status: "InvalidMethod",
		data: data
	}),
	InvalidSubMethod: (data = null) => ({
		status: "InvalidSubMethod",
		data: data
	}),
}

module.exports = listOfStatus
