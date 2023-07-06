import React, { useState } from 'react';

const EmojiList = ({ emojis, handleClick }) => {
  return (
    <ul>
      {emojis.map((emoji, index) => (
        <li key={index}>
          {emoji.icon} - {emoji.count}
          <button onClick={() => handleClick(index)}>Vote</button>
        </li>
      ))}
    </ul>
  );
};

const ShowResults = ({ emojis }) => {
  const maxVotes = Math.max(...emojis.map((emoji) => emoji.count));
  const winningEmoji = emojis.find((emoji) => emoji.count === maxVotes);

  return (
    <div>
      <h2>Results</h2>
      {winningEmoji && <span>{winningEmoji.icon}</span>}
    </div>
  );
};

const App = () => {
  const [emojis, setEmojis] = useState([
    { icon: '😈', count: 0 },
    { icon: '😬', count: 0 },
    { icon: '😄', count: 0 },
    { icon: '😎', count: 0 },
  ]);

  const handleClick = (index) => {
    const updatedEmojis = [...emojis];
    updatedEmojis[index].count += 1;
    setEmojis(updatedEmojis);
  };

  const handleShowResults = () => {
    console.log(emojis);
  };

  return (
    <div>
      <h1>Emoji Voting App</h1>
      <EmojiList emojis={emojis} handleClick={handleClick} />
      <button onClick={handleShowResults}>Show Results</button>
      <ShowResults emojis={emojis} />
    </div>
  );
};

export default App;
