import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '../layout/MainLayout/MainLayout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <MainLayout title="My Awesome App">
      <main>
        <h1>Welcome home</h1>
      </main>
    </MainLayout>
  );
};

export default Home;
