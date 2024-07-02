import React from 'react';
import Link from 'next/link';
 
const Home3 = () => {
  return (
    <div>
       <h1>Добро пожаловать на мой сайт на Next.js!</h1>
       <p>И снова привет! С помощью этой страницы я узнала как работает Link тоже!!</p>    
      
      <ul>
        <li>
          <Link href="/index2" legacyBehavior>
            <a>Перейти на страницу "Привет!"</a>
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a>Перейти на страницу "😊🥰"</a>
          </Link>
        </li>
      </ul>
  
    </div>
  );
};
 
export default Home3;