let quote = document.querySelector("#quote");
let button = document.querySelector("#changebutton");
var quoteNumber = Math.floor(Math.random() * 52) + 1;

quote.style.fontSize = "15px";
quote.style.paddingLeft = "15px";
quote.style.color = "#D4AF37";
quote.style.weight = "bold"

button.addEventListener('click', changeQuote);

function changeQuote() {
    quoteNumber = Math.floor(Math.random() * 52) + 1;
    console.log(quoteNumber + 1);
    quote.innerHTML = quoteArray[quoteNumber];
}

var quoteArray = ['“The person who asks questions is a fool for five minutes. The person who does not ask questions remains a fool forever.” - Chinese Proverb', '“True knowledge is when a person knows the limitations of their knowledge.” - Chinese Proverb', '“Learning is a treasure that will follow its owner everywhere.” - Chinese Proverb', '“All things are difficult before they are easy.” - Chinese Proverb', '“Your teacher can open the door, but you must enter by yourself.” - Chinese Proverb', '“A closed mind is like a closed book, just a block of wood.” - Chinese Proverb', '“A wise person makes their own decisions. An ignorant person follows the public opinion.” - Chinese Proverb', '“If you always give, you will always have.” - Chinese Proverb', '“Failure is the mother of success.” - Chinese Proverb', '“Making a thousand decisions, even the wise will make a mistake.” - Chinese Proverb', '“It is not important to be better than someone else, but to be better than yesterday.” - Chinese Proverb', '“Do not fear going forward slowly. Fear only to stand still.” - Chinese Proverb', '“I hated every minute of training, but I said, "Don’t quit. Suffer now and live the rest of your life as a champion." ” - Muhammed Ali', '“The best part about inspiring others is that you may even inspire yourself.” - An anonymous mouse', '“The most valuable thing you can make is a mistake. You can not learn anything from being perfect.” – Adam Osborne', '“Everybody is a genius, but if you judge a fish by its ability to climb a tree, it will spend its life believing that it is stupid.” - Albert Einstein', '“Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” - Helen Keller', '“With the new day comes new strength and new thoughts.” - Eleanor Roosevelt', '“The past cannot be changed. The future is yet in your power.” - Unknown', '“Failure will never overtake me if my determination to succeed is strong enough.” - Og Mandino', '“It does not matter how slowly you go as long as you do not stop.” - Confucius', '“Always do your best. What you plant now, you will harvest later.” - Og Mandino', '“It always seems impossible until it is done.” - Nelson Mandela', '“You can not cross the sea merely by standing and staring at the water.” - Rabindranath Tagore', '“We should not give up and we should not allow the problem to defeat us.” - A. P. J. Abdul Kalam', '“If you can dream it, you can do it.” - Walt Disney', '“Without hard work, nothing grows but weeds.” - Gordon B. Hinckley', '“The best preperation for tomorrow is doing your best today.” - H. Jackson Brown, Jr.', '“If you are always trying to be normal, you will never know how amazing you can be.” - Maya Angelou', '“Everyday may not be a good day, but there is good in every day.” - Anonymous', '“If we have the attitude that today is going to be a great day, then it usually is.” - Catherine Pulsifer', '“The truly rich are those who enjoy what they have.” - Yiddish Proverb', '“Empty pockets never held anyone back. Only empty heads and empty hearts can do that.” - Norman Vincent Peale', '“A problem is a chance for you to do your best.” - Duke Ellington', '“I aspire to inspire before I expire.” - Pravinee Hurbungs', '“Feeling gratitude and not expressing it is like wrapping a present and not giving it.” - William Arthur Ward', '“Dreams and goals should be just out of your present reach but not out of sight. Dreams and goals are coming attractions in your life.” - Joseph Campbell', '“There are two mistakes one can make along the road to truth - not going all the way, and not starting.” - Buddha', '“Our time here on Earth is a learning experience, and no one is exempt!” - Angela Agranoff', '“Life is more meaningful when you are always looking to grow and work toward a goal.” - Les Brown', '“The most important thing about getting somewhere is starting right where we are.” - Bruce Barton', '“Only a mediocre person is always at their best.” - W. Somerset Maugham', '“When you come to the end of your rope, tie a knot and hang on.” - Franklin Roosevelt', '“The only way to do great work is to love what you do. If you have not found it yet, keep looking.” - Steve Jobs', '“It is an incredible feeling to know that you have helped change the world for the better, even in a small way. Do something that is greater than you.” - James Fullerton', '“ "I will be happy when..." is a false promise. The time to be happy is now.” - Tony Clark', '“You can do what you have to do, and sometimes you can do it even better than you think you can.” - Jimmy Carter', '“There is a positive side to any situation, even if you do not see it right away.” - Nealey Stapleton', '“May there be a miracle in YOUR life today and may you have the EYES to see it.” - Veronica Hay', '“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.” - Helen Keller', '“Your worth consists in what you are and not in what you have.” - Thomas Edison', '“You may plan to write a book some day, but you are living a book every day.” - Wilferd Peterson', '“Make your life a masterpiece; imagine no limitations on what you can be, have, or do.” - Brian Tracy', '“The way to get started is to quit talking and begin doing.” – Walt Disney', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', '“”', ];
changeQuote();

document.addEventListener("DOMContentLoaded", function() {
    $('.progress').fadeOut('slow')
    $('.intermediate').fadeOut()
})
