document.addEventListener('DOMContentLoaded', () => {
    let tooltip;
    let selectedText = '';
  
    function createTooltip() {
      tooltip = document.createElement('div');
      tooltip.style.visibility = 'hidden';
      tooltip.style.position = 'absolute';
      tooltip.style.backgroundColor = '#333';
      tooltip.style.borderRadius = '4px';
      tooltip.style.padding = '4px 8px';
      tooltip.style.color = '#fff';
      tooltip.style.fontFamily = 'Arial, sans-serif';
      tooltip.style.fontSize = '14px';
      tooltip.innerHTML = 'Share on Twitter';
      tooltip.style.cursor = 'pointer';
      tooltip.onclick = shareQuote;
      document.body.appendChild(tooltip);
    }
  
    function shareQuote() {
        const maxTweetLength = 280;
        const url = encodeURIComponent(window.location.href);
        const urlLength = 23; // Twitter counts any URL as 23 characters
        const maxSelectedTextLength = maxTweetLength - urlLength - 2; // Subtract 2 for the space between the text and the URL
      
        let truncatedText = selectedText;
      
        if (selectedText.length > maxSelectedTextLength) {
          truncatedText = selectedText.slice(0, maxSelectedTextLength - 4) + '...';
        }
      
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(truncatedText)}&url=${url}`;
        window.open(tweetUrl, '_blank');
      }      
      
  
    function onMouseUp(event) {
      const selection = window.getSelection();
      const selectedTextContent = selection.toString().trim();
      const isInsideHighlightable = event.target.closest('.highlightable');
  
      if (selectedTextContent.length > 0 && isInsideHighlightable) {
        selectedText = selectedTextContent;
        tooltip.style.visibility = 'visible';
        tooltip.style.top = `${event.pageY - 40}px`;
        tooltip.style.left = `${event.pageX}px`;
      } else {
        tooltip.style.visibility = 'hidden';
      }
    }
  
    createTooltip();
    document.addEventListener('mouseup', onMouseUp);
  });
  