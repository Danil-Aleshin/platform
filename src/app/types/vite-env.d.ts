/** Импортировать svg как компонент реакта */
declare module "*.svg" {
	const svg: React.FC<React.SVGAttributes<SVGElement>>;
	export default svg;
}

/// <reference types="vite/client" />
