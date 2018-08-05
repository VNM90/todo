import React from "react";
import { TextField } from "material-ui";

const Search = props => (
  <div>
    <TextField
      placeholder={"Search"}
      fullWidth={true}
      onChange={props.searchPhraseChangeHandler}
      value={props.searchPhrase}
    />
  </div>
);
export default Search;
