import PropTypes from 'prop-types';

import { Wrapper, Input, Icon } from './SearchBar.styled';

const Searchbar = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        debounceTimeout={1000}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search movies"
      />
      <Icon />
    </Wrapper>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
