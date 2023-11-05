export const isFunction = (value: any): value is (...args: any[]) => any => {
	if (typeof value === "function") {
		return true;
	}

	return false;
};

export const isString = (value: any): value is string => {
	if (typeof value === "string") {
		return true;
	}

	return false;
};

export const isUndefined = (value: any): value is undefined => {
	if (typeof value === "undefined") {
		return true;
	}

	return false;
};

export const isBoolean = (value: any): value is boolean => {
	if (typeof value === "boolean") {
		return true;
	}

	return false;
};

export const isEmpty = (value: any): boolean => {
	if (value === null) {
		return true;
	}
	if (value instanceof Set) {
		if (value.size < 1) {
			return true;
		} else {
			return false;
		}
	}
	if (value instanceof Map) {
		if (value.size < 1) {
			return true;
		} else {
			return false;
		}
	}
	if (value instanceof Object) {
		if (!Object.keys(value).length) {
			return true;
		} else {
			return false;
		}
	}
	if (Array.isArray(value)) {
		if (!value.length) {
			return true;
		} else {
			return false;
		}
	}
	if (typeof value === "string") {
		if (!value.length) {
			return true;
		} else {
			return false;
		}
	}

	return true;
};

export const first = (value: any): any[] | undefined => {
	if (Array.isArray(value)) {
		return value[0];
	}
};

export const last = (value: any) => {
	if (Array.isArray(value)) {
		return value.at(-1);
	}
};
