import { FC } from "react";
import { ISearchProps } from "./SearchInput.types";
import { Input } from "../Input/Input";
import { SearchSVG } from "platform/src/shared/assets";

const SearchInputComponent: FC<ISearchProps> = (props) => {
	const { ...rest } = props;

	return <Input prefix={<SearchSVG />} {...rest} />;
};

export const Search = SearchInputComponent;
