import Image from 'next/image';
import React from 'react'
import styles from '../styles/main.module.css'

const soccerStars = [
    {
      id: 1,
      image: "image_url_1.jpg",
      name: "Lionel Messi",
      country: "Argentina",
      continent: "South America",
      position: "Forward"
    },
    {
      id: 2,
      image: "image_url_2.jpg",
      name: "Cristiano Ronaldo",
      country: "Portugal",
      continent: "Europe",
      position: "Forward"
    },
    {
      id: 3,
      image: "image_url_3.jpg",
      name: "Neymar Jr.",
      country: "Brazil",
      continent: "South America",
      position: "Forward"
    },
    {
      id: 4,
      image: "image_url_4.jpg",
      name: "Robert Lewandowski",
      country: "Poland",
      continent: "Europe",
      position: "Forward"
    },
    {
      id: 5,
      image: "image_url_5.jpg",
      name: "Kevin De Bruyne",
      country: "Belgium",
      continent: "Europe",
      position: "Midfielder"
    },
    {
      id: 6,
      image: "image_url_6.jpg",
      name: "Sergio Ramos",
      country: "Spain",
      continent: "Europe",
      position: "Defender"
    },
    {
      id: 7,
      image: "image_url_7.jpg",
      name: "Mohamed Salah",
      country: "Egypt",
      continent: "Africa",
      position: "Forward"
    },
    {
      id: 8,
      image: "image_url_8.jpg",
      name: "Manuel Neuer",
      country: "Germany",
      continent: "Europe",
      position: "Goalkeeper"
    },
    {
      id: 9,
      image: "image_url_9.jpg",
      name: "Harry Kane",
      country: "England",
      continent: "Europe",
      position: "Forward"
    },
    {
      id: 10,
      image: "image_url_10.jpg",
      name: "Virgil van Dijk",
      country: "Netherlands",
      continent: "Europe",
      position: "Defender"
    },
    {
      id: 11,
      image: "image_url_11.jpg",
      name: "Luka Modrić",
      country: "Croatia",
      continent: "Europe",
      position: "Midfielder"
    },
    {
      id: 12,
      image: "image_url_12.jpg",
      name: "Kylian Mbappé",
      country: "France",
      continent: "Europe",
      position: "Forward"
    }
  ];
  
  const ballers = soccerStars.map( baller => (
    <section key={baller.id} >
    <section className={styles.baller}>
        <h2>{baller.name}</h2>
        <Image src={`https://robohash.org/${baller.name}`} width={200} height={200} alt={baller.name} title={`${baller.name} is a ${baller.position} from ${baller.country}`}/>
        <p>Position: {baller.position}</p>
    </section>
    </section>
  ))
 
  

export default function Soccer() {
  return (
    <section className={styles.main}>
        <h1>soccer stars 2020</h1>
        <div className={styles.soccer}>  
        {ballers}
        </div>
    </section>
  )
}
