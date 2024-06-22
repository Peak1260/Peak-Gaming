import React from 'react';
import './news.css';

export const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Introducing Apple Intelligence",
      content: "Apple today introduced Apple Intelligence, the personal intelligence system for iPhone, iPad, and Mac that combines the power of generative models with personal context to deliver intelligence that's incredibly useful and relevant. Apple Intelligence is deeply integrated into iOS 18, iPadOS 18, and macOS Sequoia. It harnesses the power of Apple silicon to understand and create language and images, take action across apps, and draw from personal context to simplify and accelerate everyday tasks. With Private Cloud Compute, Apple sets a new standard for privacy in AI, with the ability to flex and scale computational capacity between on-device processing and larger, server-based models that run on dedicated Apple silicon servers. “We're thrilled to introduce a new chapter in Apple innovation. Apple Intelligence will transform what users can do with our products — and what our products can do for our users,” said Tim Cook, Apple's CEO.",
      image: "https://9to5mac.com/wp-content/uploads/sites/6/2024/06/apple-intelligence-fi.jpeg?quality=82&strip=all&w=1600"
    },
    {
      id: 2,
      title: "NVIDIA Blackwell Platform Arrives",
      content: "Powering a new era of computing, NVIDIA today announced that the NVIDIA Blackwell platform has arrived — enabling organizations everywhere to build and run real-time generative AI on trillion-parameter large language models at up to 25x less cost and energy consumption than its predecessor. The Blackwell GPU architecture features six transformative technologies for accelerated computing, which will help unlock breakthroughs in data processing, engineering simulation, electronic design automation, computer-aided drug design, quantum computing and generative AI — all emerging industry opportunities for NVIDIA. “For three decades we've pursued accelerated computing, with the goal of enabling transformative breakthroughs like deep learning and AI,” said Jensen Huang, founder and CEO of NVIDIA. Generative AI is the defining technology of our time. Blackwell is the engine to power this new industrial revolution.",
      image: "https://nvidianews.nvidia.com/_gallery/get_file/?file_id=65f7d13f3d633238773719fe"
    },
    {
      id: 3,
      title: "The Atlantic partnership with OpenAI",
      content: "Today The Atlantic is announcing a strategic content and product partnership with OpenAI, which positions The Atlantic as a premium news source within OpenAI. The Atlantic's articles will be discoverable within OpenAI's products, including ChatGPT, and as a partner, The Atlantic will help to shape how news is surfaced and presented in future real-time discovery products. As part of this agreement, The Atlantic and OpenAI are also collaborating on product and tech: The Atlantic's product team will have privileged access to OpenAI tech, give feedback, and share use-cases to shape and improve future news experiences in ChatGPT and other OpenAI products. The Atlantic is currently developing an experimental microsite, called Atlantic Labs, to figure out how AI can help in the development of new products and features to better serve its journalism and readers--and will pilot OpenAI's and other emerging tech into this work.",
      image: "https://geekflare.com/wp-content/uploads/2024/05/ChatGPT-x-the-atlantic.png"
    }
  ];

  return (
    <div className="news">
      {newsArticles.map(article => (
        <div className="article" key={article.id}>
          <h3>{article.title}</h3>
          <img src={article.image} alt={`${article.title}`} />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
