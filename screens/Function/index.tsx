import React, { useState } from 'react';

const ToggleDiv = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      {!showDiv ? (
        <button onClick={handleClick}>Clique para mostrar a DIV</button>
      ) : (
        <div>
          <p>Conteúdo da DIV</p>
        </div>
      )}
    </div>
  );
};

export default ToggleDiv;
