import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import Layout from '@/components/navbar_layout'
import Layout from '@/components/simple_layout'
import Icon from '@/components/icons'
import utilStyles from '@/styles/utils.module.css'
import Topics from '@/components/topics'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
          <div className='row text-center'>
            <h1 className=''>David SeWell</h1>
          </div>
            <Image
                priority
                src="/../public/profile.jpg"
                className="rounded mx-auto d-block"
                height={144}
                width={144}
                alt=""
              />
          <div className='row text-center'>
            <p>
              I am a Machine Learning Engineer interested in Reinforcement Learning, Representation Learning, and Control
            </p>
          </div>
          <div className='row text-center'>
            <Icon></Icon>
         </div>
        </div>
        <div className="col">
        </div>
      </div>
    </div>
    <br></br>
    <Topics></Topics>
  </Layout> 
  );
}
