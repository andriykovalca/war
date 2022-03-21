import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const date = '2022-02-24T04:00:00.000Z';

  useEffect(() => {
    setLoading(true)
    fetch('https://pravda-parser.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>Russian Ukrainian War</title>
        <meta name="description" content="Russian Ukrainian War" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Russian Ukrainian War
        </h1>
        <p>War started <Moment fromNow>{date}</Moment></p>

        <div className='losses'>
        <h2>Russian losses</h2>
          <div className='container'>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/troops.png"
                  alt="troops icon"
                  width={50}
                  height={50}
                />
              </div>

              <span className='name'>Troops</span>
              <span className='num'>{data[0]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/airplane.png"
                  alt="airplane icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Airplanes</span>
              <span className='num'>{data[2]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/helicopter.png"
                  alt="helicopter icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Helicopters</span>
              <span className='num'>{data[3]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/tank.png"
                  alt="tank icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Tanks</span>
              <span className='num'>{data[4]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/afv.png"
                  alt="AFV icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>AFV</span>
              <span className='num'>{data[5]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/artillery.png"
                  alt="artillery icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Artillery</span>
              <span className='num'>{data[6]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/antiair.png"
                  alt="anti aircraft icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Anti-aircraft</span>
              <span className='num'>{data[7]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/mrl.png"
                  alt="MRL icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>MRL</span>
              <span className='num'>{data[8]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/fuel.png"
                  alt="fuel truck icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Fuel trucks</span>
              <span className='num'>{data[9]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
              <Image
                src="/../public/images/uav.png"
                alt="UAV icon"
                width={50}
                height={50}
              />
            </div>
              <span className='name'>UAV</span>
              <span className='num'>{data[10]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/ship.png"
                  alt="ship icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Ships</span>
              <span className='num'>{data[11]}</span>
            </div>
            <div className='item'>
              <div className='icon'>
                <Image
                  src="/../public/images/vehicle.png"
                  alt="vehicle icon"
                  width={50}
                  height={50}
                />
              </div>
              <span className='name'>Vehicles</span>
              <span className='num'>{data[12]}</span>
            </div>
          </div>
         
        </div>

        


      </main>

      <footer className={styles.footer}>
        <a
          href="http://andriykoval.ca/"
          target="_blank"
        >
          Made by Andriy Koval
        </a>
      </footer>
    </div>
  )
}