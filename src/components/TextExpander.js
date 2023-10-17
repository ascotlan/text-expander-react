import {useState} from 'react';

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
}) {
const [isExpanded, setIsExpanded] = useState(expanded);

const handleExpansion = () => {
  setIsExpanded((current) => !current);
}


  const buttonStyle = {
    background: "none",
    border: "none",
    font:"inherit",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
    color: `${buttonColor}`,
    marginLeft: '8px'
  };

  const shortenedText =
    children
      .split(" ")
      .slice(0, collapsedNumWords)
      .join(" ") + "...";
  return (
    <div className={className}>
      <span>{isExpanded ? children : shortenedText}</span>
      <button onClick={handleExpansion} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
