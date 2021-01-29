async function getQuote() {
  const URL = "https://favqs.com/api/quotes/?filter=parenting&type=tag";
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: 'Token token="31f810b95d45ce0a98f579b5452e635d"',
    },
  });
  if(response.ok){
      const quoteJSON = await response.json();
      const index = Math.floor(quoteJSON.quotes.length * Math.random());
      const quote = quoteJSON.quotes[index];
      return `"${quote.body}" - ${quote.author}`;
  }
  return 'no quote';
}

async function populateQuote(quoteElID) {
    const element = document.getElementById(quoteElID);
    element.innerHTML = await getQuote();
}

populateQuote('quoteEl');