export const generateUniqueId = () => {
	const timestamp = new Date().getTime().toString(); // Get a timestamp
	const randomSuffix = Math.floor(Math.random() * 10000).toString(); // Add a random suffix
	return `${timestamp}-${randomSuffix}`;
};
