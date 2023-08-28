import React from 'react'
import pic from './images/missNaija.jpg'
import {ImLinkedin }from 'react-icons/im'
import {AiOutlineInstagram, AiFillGithub, AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import styles from './styles/main.module.css'

export default function page() {
  return (
    <main className={styles.main}>
    <section className='flex space-x-2'>
      <Image src='https://images.unsplash.com/photo-1515268064940-5150b7c29f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='mountain background' width={800} height={900}/>

      <Image src={pic} alt='miss naija 2021' width={300}  height={300}/>
       <ImLinkedin className='text-4xl cursor-pointer'/>
       <AiOutlineInstagram className={`text-4xl cursor-pointer ${styles.icon}`}/>
       <AiFillGithub className={`text-4xl cursor-pointer ${styles.icon}`}/>
       <AiFillStar className={`text-4xl cursor-pointer ${styles.icon}`}/>
    </section>
    </main>
  )
}
