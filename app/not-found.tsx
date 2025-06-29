"use client"; // Add this directive at the top of the file

import styles from './not-found.module.css'; // Updated import path
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
<<<<<<< HEAD
  const [randomImage, setRandomImage] = useState('');
=======
  const [randomImage, setRandomImage] = useState<string>('');
>>>>>>> temp-branch

  useEffect(() => {
    // Define the list of image paths
    const images = [
<<<<<<< HEAD
      '/404/Business-Cat-giving-presentation-Red.jpg','/404/Business-Cat-giving-presentation-Green.jpg','/404/Business-Cat-giving-presentation-Blue.jpg'
=======
      '/404/Business-Cat-giving-presentation-Red G.jpg',
      '/404/Business-Cat-giving-presentation-Green G.jpg',
      '/404/Business-Cat-giving-presentation-Blue G.jpg',
      '/404/Business-Cat-giving-presentation-Red O.jpeg',
      '/404/Business-Cat-giving-presentation-Green O.jpeg',
      '/404/Business-Cat-giving-presentation-Blue O.jpeg',
>>>>>>> temp-branch
    ];

    // Randomly select an image
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
<<<<<<< HEAD
      <div className={styles.image}>
=======
      <div className={styles.imageWrapper}>
>>>>>>> temp-branch
        {randomImage && (
          <Image
            src={randomImage} // Use the randomly selected image
            alt="404 Error"
<<<<<<< HEAD
            width={400}
            height={300}
=======
            fill // Makes the image responsive
            style={{ objectFit: 'contain' }} // Ensures the whole image is visible
>>>>>>> temp-branch
          />
        )}
      </div>
      <p className={styles.message}>
<<<<<<< HEAD
        Oh no! It looks like the page you&apos;re looking for has gone on a coffee break with Business Cat.<br></br><br></br> 
        While Business Cat is busy presenting the figures, we&apos;re working to find where this page has scampered off to. <br></br><br></br>
=======
        Oh no! It looks like the page you&apos;re looking for has gone on a coffee break with Business Cat.
        <br /><br />
        While Business Cat is busy presenting the figures, we&apos;re working to find where this page has scampered off to.
        <br /><br />
>>>>>>> temp-branch
        Please try another link or return to our homepage.
      </p>
      <Link href="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
<<<<<<< HEAD
}

//git add .                                                                               
//git commit -m "20250120 update - 20240120 blog added"
//git push origin main
=======
}
>>>>>>> temp-branch
