import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    if (value.trim() === '') {
      return Notify.warning(`Please enter a search query`, {
        backOverlay: true,
        timeout: 1000,
        position: 'center-center',
        fontSize: '34px',
        width: '500px',
        clickToClose: true,
      });
    }

    navigate({
      ...location,
      search: `query=${value}`,
    });

    e.target.elements.query.value = '';
  }

  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch type="text" name="query" />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
}
