import type { NextPage } from 'next';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Skat overflow' description='Questions' navbar>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <span className='material-icons'>search</span>
    </Layout>
  );
};

export default Home;
