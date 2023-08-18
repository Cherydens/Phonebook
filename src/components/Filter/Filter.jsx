import { setFilter } from 'redux/filter/slice';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleSetFilter}
      />
    </FilterLabel>
  );
};
