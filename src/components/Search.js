import { FormControl, Input, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ keyword, setKeyword }) => {
  const changeHandler = event => setKeyword(event.target.value);

  const submitHandler = event => {
    event.preventDefault();
    console.log(keyword);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl id="keyword" w={500} display="flex" isRequired>
        <Input
          type="text"
          placeholder="Search teams..."
          value={keyword}
          onChange={changeHandler}
        />
        <IconButton
          ml={2}
          icon={<FaSearch />}
          type="submit"
          aria-label="Search button"
        />
      </FormControl>
    </form>
  );
};

export default Search;
