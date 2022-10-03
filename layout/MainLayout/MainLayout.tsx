import { FC, ReactNode } from 'react';
import Head from 'next/head';
import MainLayoutStyles from './MainLayout.styles';
import MainNavigation from '../MainNavigation/MainNavigation';

interface MainLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, description, children }) => (
  <>
    <MainLayoutStyles />
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
    <MainNavigation />
    <main>{children}</main>
  </>
);

export default MainLayout;
