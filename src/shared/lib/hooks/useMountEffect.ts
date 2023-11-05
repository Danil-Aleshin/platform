import type { EffectCallback } from "react";
import { useEffect } from "react";

export const useMountEffect = (effect: EffectCallback) => {
	useEffect(effect, []);
};
