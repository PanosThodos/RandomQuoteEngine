var quotes = ["You can't blame gravity for falling in love.",
"Look deep into nature, and then you will understand everything better.",
"Insanity: doing the same thing over and over again and expecting different results.",
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
"Life is like riding a bicycle. To keep your balance, you must keep moving.",
"The true sign of intelligence is not knowledge but imagination.",
"Try not to become a man of success, but rather try to become a man of value.",
"We cannot solve our problems with the same thinking we used when we created them.",
"Once we accept our limits, we go beyond them.",
"Weakness of attitude becomes weakness of character."
];

function getQuote() { 
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote = randomQuote.split("randomQuote");
    $('#quote').text(quote[0]);
}

$('#quoteGen').click(function() {
    $('#quote').text(quotes[getQuote()]);
});

$(".twitter-share-button").click(function(){
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
  });