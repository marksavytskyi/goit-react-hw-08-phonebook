import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Search
      <Input
        onChange={({ currentTarget: { value } }) =>
          dispatch(filterContacts(value))
        }
        type="search"
        name="filter"
      ></Input>
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};
