import { useEffect, useRef } from "react";

export const useUnmountEffect = (callback: () => any): void => {
	const callbackRef = useRef(callback);

	callbackRef.current = callback;

	useEffect(() => () => callbackRef.current(), []);
};
