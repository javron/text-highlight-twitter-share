module.exports = (req, res) => {
    const { quote } = req.query;
  
    if (!quote) {
      return res.status(400).json({ error: 'Quote parameter is missing' });
    }
  
    const maxTweetLength = 280;
    const linkLength = 23;
    const ellipsis = '...';
  
    const truncatedQuote =
      quote.length + linkLength > maxTweetLength
        ? quote.substring(0, maxTweetLength - linkLength - ellipsis.length) + ellipsis
        : quote;
  
    const encodedQuote = encodeURIComponent(`"${truncatedQuote}"`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  
    res.status(200).json({ twitterUrl });
  };
  