import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  );
}