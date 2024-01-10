"use client";

import Form from '../components/Form';
import Feed from '../components/Feed';
import { useEffect } from 'react';

const Home = () => {
  // DEBUG BLOCK - Used to test 1:23:00 of the Tutorial where the Google
  // credentials are always printing.
  //
  // useEffect(() => {
  //   fetch('/api/auth/[...nextauth]')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Promptopia is an open-source AI prompting tool
        for the modern world to discover,
        create and share creative prompts.
      </p>
     <Feed />
    </section>
  );
}

export default Home