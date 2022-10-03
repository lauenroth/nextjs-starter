import Link from 'next/link';
import styled from 'styled-components';

const MainNavigation = () => (
  <NavigationWrapper>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/imprint">Imprint</Link>
      </li>
    </ul>
  </NavigationWrapper>
);

const NavigationWrapper = styled.nav`
  display: flex;
  height: 6rem;

  ul {
    align-items: center;
    display: flex;
    gap: 2rem;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0 2rem;
  }
`;

export default MainNavigation;
