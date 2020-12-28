import { useState } from 'react';
import { FormControl, Input, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ setTeams }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`
    )
      .then(response => response.json())
      .then(data => setTeams(data));
    console.log(keyword);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl
        id="keyword"
        w={{ base: 225, md: 400, lg: 500 }}
        display="flex"
        isRequired
      >
        <Input
          type="text"
          placeholder="Search teams..."
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
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
