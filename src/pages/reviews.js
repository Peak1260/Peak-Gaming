import React from 'react';
import './reviews.css';

export const Reviews = () => {
  // Dummy review data (replace with your actual data or API call)
  const reviews = [
    {
      id: 1,
      title: "Baldur's Gate 3",
      author: "Leana Hafer",
      date: "August 18, 2023",
      content: "I don't want to say every CRPG going forward should aspire to be like Baldur's Gate 3. Not everything needs to be nearly this big and ambitious, or even this dense. But it is a landmark moment in the genre, and if I had to point to one paragon that I would like everyone else making these to take inspiration from, this is absolutely it. I waited 14 years for the stars to align again so that we could get the ideal mix of crunchy, tactical, old-school RPG combat, an epic and well-written story with complex characters and lots of meaningful choices, and a level of polish and cinematic presentation that let me see the sweat and the sorrow on characters' faces in their darkest hours. Plenty of other games have partially completed that list, but the last time they all came together was Dragon Age: Origins in 2009. And I can finally say that game, and its Infinity Engine predecessors, have a worthy successor that's not just matched their RPG greatness, but surpassed it. Baldur's Gate 3 is just about everything I could have asked for.",
      image: "https://techcrunch.com/wp-content/uploads/2023/08/UI-7.png"
    },
    {
      id: 2,
      title: "Elden Ring",
      author: "Mitchell Saltzman",
      date: "February 23, 2022",
      content: "It is no exaggeration to say that Elden Ring is FromSoftware's largest and most ambitious game yet, and that ambition has more than paid off. Even after 87 hours of blood, sweat, and tears that included some of the most challenging fights I've ever fought, and innumerable surprises, there are still bosses that I left on the table, secrets that I've yet to uncover, sidequests that I missed out on, tons of weapons, spells, and skills that I've never used. And this is all on top of PVP and cooperative play that I've barely been able to scratch the surface of. Throughout it all, while the fundamentals of combat haven't changed much from what we've seen before, the enormous variety of viciously designed enemies and the brutal but surmountable bosses have brought its battles to a new level. Even with all the threads I didn't manage to tug on my first playthrough (of what I'm sure will be several), what I was treated to can easily be held amongst the best open-world games I've ever played. Like The Legend of Zelda: Breath of the Wild before it, Elden Ring is one that we'll be looking back on as a game that moved a genre forward.",
      image: "https://media.npr.org/assets/img/2022/02/23/eldenring_21_4k-25120461292d0c3a0414.08944875_wide-e8f10694d264c26b3b42b65774ea218344b2286e.jpg"
    },
    {
      id: 3,
      title: "The Last of Us Part II",
      author: "Jonathan Dornmush",
      date: "October 22, 2020",
      content: "The Last of Us Part 2 is a masterpiece worthy of its predecessor. Taking strides forward in nearly every way, Ellie steps into the spotlight and carries the sequel in a manner that feels like the culmination of everything that's made Naughty Dog's blockbuster storytelling so memorable since the original Uncharted on the PlayStation 3. It delivers a layered, emotionally shattering story on top of stealth and action gameplay that improves the first game's mechanics while integrating a bit more of Uncharted's greater mobility and action. But while Part 2 is a thrilling adventure, it still makes time for a stunning, nuanced exploration of the strength and fragility of the human spirit. The PlayStation 4 has one of its best exclusives in one of the generation's best games.",
      image: "https://sm.ign.com/ign_nordic/news/r/read-igns-/read-igns-the-last-of-us-part-2-review-on-friday-june-12_8yzr.jpg"
    }

  ];

  return (
    <div className="reviews">
      <h2>Level Up Your Game Knowledge</h2>
      {reviews.map(review => (
        <div className="review" key={review.id}>
          <img src={review.image} alt={`${review.title}`} />
          <h3>{review.title}</h3>
          <p className="author">{review.author} - {review.date}</p>
          <p className="content">{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
