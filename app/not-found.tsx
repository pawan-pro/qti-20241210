"use client"; // Add this directive at the top of the file

import styles from './not-found.module.css'; // Updated import path
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    // Define the list of image paths
    const images = [
      '/404/Business-Cat-giving-presentation-Red G.jpg','/404/Business-Cat-giving-presentation-Green G.jpg','/404/Business-Cat-giving-presentation-Blue G.jpg',
      '/404/Business-Cat-giving-presentation-Red O.jpeg','/404/Business-Cat-giving-presentation-Green O.jpeg','/404/Business-Cat-giving-presentation-Blue O.jpeg',
    ];

    // Randomly select an image
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <div className={styles.image}>
        {randomImage && (
          <Image
            src={randomImage} // Use the randomly selected image
            alt="404 Error"
            fill // Makes the image responsive
            style={{ objectFit: 'contain' }} // Ensures the whole image is visible
          />
        )}
      </div>
      <p className={styles.message}>
        Oh no! It looks like the page you&apos;re looking for has gone on a coffee break with Business Cat.<br></br><br></br> 
        While Business Cat is busy presenting the figures, we&apos;re working to find where this page has scampered off to. <br></br><br></br>
        Please try another link or return to our homepage.
      </p>
      <Link href="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
}

//git add .                                                                               
//git commit -m "20250120 update - 20240120 blog added"
//git push origin main