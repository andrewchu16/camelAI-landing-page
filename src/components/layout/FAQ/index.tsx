'use client';

import React, { useState } from 'react';
import AccordionItem from './components/AccordionItem';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      title: "How is my data stored?",
      content: (
        <p>
          camelAI&apos;s infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited 
          to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more 
          information, please see our{' '}
          <a href="/security" className="text-link-blue underline">Security Policy</a>
          {' '}and our{' '}
          <a href="https://camelai.com/blog/FAQ-security/" className="text-link-blue underline">security blog post</a>.
        </p>
      )
    },
    {
      title: "Do you train on my data?",
      content: (
        <p>
          No, we do not train on your data. CamelAI is powered by OpenAI&apos;s API. We have opted out of data sharing for training. 
          You can read more about OpenAI&apos;s API policies{' '}
          <a href="https://openai.com/enterprise-privacy/" className="text-link-blue underline">here</a>.
        </p>
      )
    },
    {
      title: "Are my app connections secure?",
      content: (
        <p>
          Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate 
          and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to 
          an app, the connection is immediately destroyed and we will no longer have access to that application.
        </p>
      )
    },
    {
      title: "How do you pull my data?",
      content: (
        <p>
          camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, 
          nor do we access or store any data without your request and supervision.
        </p>
      )
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-light-background to-black pt-16 pb-4 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1340px] mx-auto">
          <h2 className="text-h2 text-white text-center mb-8 md:mb-16">FAQs</h2>
          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


