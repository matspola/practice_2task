import React from 'react';
import Link from 'next/link';
 
const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать на мой сайт на Next.js!</h1>
      <p>😊🥰😊🥰😊🥰😊🥰</p>

      <ul>
        <li>
          <Link href="/index2" legacyBehavior>
            <a>Перейти на страницу "Привет!"</a>
          </Link>
        </li>
        <li>
          <Link href="/index3" legacyBehavior>
            <a>Перейти на страницу "И снова привет!"</a>
          </Link>          
        </li>
      </ul>
    </div>
  );
};
 
export default Home;