import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';
import {HiSearch} from 'react-icons/hi'


const Searchbar = ({ value, onChange }) => {
  return (
    <>
      <div>
        <DebounceInput
          type="text"
          debounceTimeout={1000}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search movies"
        />
        <HiSearch/>
      </div>
    </>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
