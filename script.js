const adjectives = [
  'Abundant', 'Acclaimed', 'Active', 'Adaptable', 'Adept', 'Adorable', 'Adventurous', 'Affectionate', 'Agile', 'Alert',
  'Alive', 'Alluring', 'Ambitious', 'Amiable', 'Ample', 'Amused', 'Amusing', 'Angelic', 'Appealing', 'Appreciative',
  'Artful', 'Assertive', 'Astute', 'Attentive', 'Auspicious', 'Authentic', 'Balanced', 'Beautiful', 'Benevolent',
  'Blissful', 'Bold', 'Brave', 'Bright', 'Brilliant', 'Bubbly', 'Buoyant', 'Calm', 'Capable', 'Captivating',
  'Carefree', 'Caring', 'Celestial', 'Charming', 'Cheerful', 'Cherished', 'Chosen', 'Civil', 'Classic', 'Clean',
  'Clear', 'Clever', 'Close', 'Colorful', 'Comfortable', 'Comical', 'Compassionate', 'Competent', 'Complete', 'Confident',
  'Conscious', 'Considerate', 'Content', 'Cooperative', 'Courageous', 'Courteous', 'Creative', 'Cultivated', 'Cultured',
  'Curious', 'Daring', 'Dazzling', 'Deliberate', 'Delicate', 'Delightful', 'Dependable', 'Desirable', 'Devoted',
  'Dignified', 'Discerning', 'Distinct', 'Distinguished', 'Diverse', 'Divine', 'Dreamy', 'Dynamic', 'Eager', 'Earnest',
  'Easygoing', 'Eclectic', 'Economic', 'Educated', 'Efficient', 'Effortless', 'Elegant', 'Eloquent', 'Empathetic',
  'Empowered', 'Energetic', 'Engaging', 'Enjoyable', 'Enthusiastic', 'Esteemed', 'Ethical', 'Euphoric', 'Eventful',
  'Evocative', 'Exalted', 'Excellent', 'Exceptional', 'Excited', 'Exciting', 'Exhilarating', 'Expansive', 'Expert',
  'Expressive', 'Exquisite', 'Extraordinary', 'Exuberant', 'Exultant', 'Fabulous', 'Fair', 'Faithful', 'Familiar',
  'Famous', 'Fantastic', 'Fascinating', 'Favorable', 'Fearless', 'Fertile', 'Festive', 'Fidelity', 'Fine', 'Fitting',
  'Flourishing', 'Flowing', 'Fluent', 'Focused', 'Fond', 'Forceful', 'Foresighted', 'Forgiving', 'Formidable', 'Forthright',
  'Fortunate', 'Fragrant', 'Frank', 'Friendly', 'Fruitful', 'Fulfilled', 'Gallant', 'Generous', 'Gentle', 'Genuine',
  'Glorious', 'Glowing', 'Graceful', 'Gracious', 'Grand', 'Grateful', 'Great', 'Grounded', 'Growing', 'Guided',
  'Handsome', 'Happy', 'Harmonious', 'Healing', 'Healthy', 'Heartfelt', 'Hearty', 'Helpful', 'Heroic', 'High-spirited',
  'Honest', 'Honorable', 'Hopeful', 'Humble', 'Humorous', 'Ideal', 'Imaginative', 'Impartial', 'Impassioned', 'Important',
  'Impressive', 'Improving', 'Inclusive', 'Incredible', 'Independent', 'Industrious', 'Influential', 'Informative', 'Ingenious',
  'Innovative', 'Inquisitive', 'Insightful', 'Inspiring', 'Integral', 'Intelligent', 'Intense', 'Intentional', 'Interactive',
  'Interesting', 'Intuitive', 'Inventive', 'Invigorating', 'Inviting', 'Joyful', 'Joyous', 'Judicious', 'Just', 'Keen',
  'Kind', 'Knowledgeable', 'Laudable', 'Leading', 'Learned', 'Legendary', 'Liberated', 'Liberal', 'Lively', 'Loving',
  'Loyal', 'Lucid', 'Luminous', 'Magical', 'Magnificent', 'Majestic', 'Marvelous', 'Masterful', 'Mature', 'Meaningful',
  'Meditative', 'Merciful', 'Merry', 'Mindful', 'Modest', 'Motivated', 'Moving', 'Noble', 'Noteworthy', 'Nurturing',
  'Objective', 'Observant', 'Open-minded', 'Optimistic', 'Original', 'Outgoing', 'Outstanding', 'Patriotic', 'Peaceful',
  'Perceptive', 'Persevering', 'Persistent', 'Personable', 'Persuasive', 'Philanthropic', 'Playful', 'Pleasant', 'Pleasing',
  'Poetic', 'Poised', 'Polished', 'Popular', 'Positive', 'Powerful', 'Practical', 'Precious', 'Precise', 'Preferred',
  'Prepared', 'Present', 'Prestigious', 'Pretty', 'Productive', 'Proficient', 'Progressive', 'Prominent', 'Proper',
  'Prosperous', 'Proud', 'Qualified', 'Quick-witted', 'Radiant', 'Rational', 'Ready', 'Realistic', 'Reasonable', 'Receptive',
  'Recharged', 'Recognized', 'Refreshing', 'Rejoicing', 'Relaxed', 'Relevant', 'Reliable', 'Remarkable', 'Renowned', 'Reputable',
  'Resilient', 'Resolute', 'Resourceful', 'Respected', 'Responsible', 'Responsive', 'Restful', 'Restorative', 'Reverent',
  'Rewarding', 'Rich', 'Righteous', 'Robust', 'Romantic', 'Safe', 'Satisfied', 'Secure', 'Self-assured', 'Self-confident',
  'Self-disciplined', 'Self-reliant', 'Selfless', 'Sensible', 'Sensitive', 'Sensual', 'Sentimental', 'Serene', 'Serious',
  'Sexy', 'Sharing', 'Shining', 'Simple', 'Skillful', 'Smart', 'Smiling', 'Smooth', 'Social', 'Solid', 'Soothing', 'Sophisticated',
  'Soulful', 'Sparkling', 'Special', 'Spectacular', 'Splendid', 'Spontaneous', 'Sporty', 'Stable', 'Steadfast', 'Steady',
  'Stellar', 'Stimulating', 'Strategic', 'Striving', 'Strong', 'Stunning', 'Successful', 'Sufficient', 'Sumptuous',
  'Supportive', 'Surprising', 'Sweet', 'Swift', 'Sympathetic', 'Systematic', 'Tactful', 'Talented', 'Tangible', 'Tasteful',
  'Teachable', 'Teeming', 'Temperate', 'Tender', 'Thankful', 'Thoughtful', 'Thriving', 'Tidy', 'Timely', 'Tolerant',
  'Tough', 'Tranquil', 'Transformative', 'Transparent', 'Treasured', 'Tremendous', 'Trustworthy', 'Truthful', 'Ultimate',
  'Unassuming', 'Understanding', 'Unique', 'United', 'Universal', 'Upbeat', 'Uplifting', 'Valiant', 'Valuable', 'Variety',
  'Vast', 'Vibrant', 'Victorious', 'Vigorous', 'Virtuous', 'Visionary', 'Vital', 'Vivacious', 'Vivid', 'Warm', 'Wealthy',
  'Welcoming', 'Well-balanced', 'Wholesome', 'Willing', 'Wise', 'Wonderful', 'Worthy', 'Youthful', 'Zealous', 'Zesty', 'Zippy'
];

const nouns = [
  'apple', 'airplane', 'arrow', 'animal', 'art', 'arm', 'alphabet', 'anger', 'answer', 'ant', 'aunt', 'author', 'atom', 'attack', 'apology', 'acorn', 'age', 'albatross', 'alley',
  'banana', 'ball', 'book', 'bag', 'bottle', 'box', 'boat', 'bridge', 'bird', 'butterfly', 'bus', 'bell', 'badge', 'beach', 'bed', 'banana', 'bicycle', 'boy', 'barn', 'bath', 'badge',
  'cat', 'car', 'cake', 'candle', 'carrot', 'cloud', 'coin', 'cow', 'chicken', 'chair', 'cherry', 'couch', 'clown', 'carpet', 'crayon', 'crown', 'coffee', 'cookie', 'canoe', 'clock', 'coat',
  'dog', 'duck', 'dragon', 'dolphin', 'door', 'daisy', 'diamond', 'desk', 'drum', 'doll', 'dictionary', 'donut', 'deer', 'dress', 'dolphin', 'dollar', 'duckling', 'desk', 'dandelion', 'drone',
  'elephant', 'egg', 'ear', 'eye', 'elbow', 'earth', 'eraser', 'eagle', 'engine', 'envelope', 'elk', 'eggplant', 'elmo', 'elbow', 'eskimo', 'escalator', 'essay', 'easel', 'energy', 'explosion',
  'fish', 'frog', 'flower', 'fire', 'flag', 'fruit', 'fog', 'fork', 'fox', 'feather', 'flute', 'fountain', 'fence', 'fisherman', 'firefighter', 'football', 'fossil', 'ferry', 'firetruck', 'flamingo',
  'goat', 'goose', 'grass', 'ghost', 'guitar', 'globe', 'glasses', 'gift', 'gorilla', 'giraffe', 'garage', 'garden', 'glue', 'grape', 'grapefruit', 'glove', 'gumball', 'gas', 'gingerbread', 'gargoyle',
  'hat', 'house', 'heart', 'hand', 'hammer', 'helicopter', 'hamburger', 'honey', 'horse', 'hose', 'helmet', 'hedgehog', 'harp', 'hare', 'hurricane', 'hockey', 'hamster', 'harp', 'hood', 'hen',
  'ice', 'island', 'igloo', 'ink', 'iceberg', 'insect', 'iron', 'igloo', 'idea', 'ivy', 'instrument', 'invention', 'icicle', 'index', 'icecream', 'incense', 'inch', 'ironman', 'invoice', 'iguanodon',
  'jellyfish', 'jacket', 'juice', 'jam', 'jar', 'jester', 'jigsaw', 'jelly', 'jackal', 'jungle', 'joker', 'jupiter', 'javelin', 'jockey', 'jet', 'jaguar', 'joke', 'jello', 'joint', 'joystick',
  'kite', 'key', 'kangaroo', 'koala', 'kitten', 'kite', 'kettle', 'king', 'knight', 'kayak', 'keyboard', 'kiwi', 'kilt', 'karate', 'ketchup', 'koala', 'knee', 'kernel', 'knight', 'kelp', 
  'lion', 'lemon', 'leaf', 'lamp', 'ladder', 'leg', 'lamb', 'ladybug', 'lionfish', 'lobster', 'lizard', 'lake', 'leopard', 'lollipop', 'lightning', 'lock', 'lily', 'lettuce', 'lynx', 'luggage',
  'mouse', 'monkey', 'mushroom', 'moon', 'mountain', 'map', 'mask', 'mirror', 'magnet', 'mop', 'mitten', 'motorcycle', 'mosquito', 'melon', 'milk', 'muffin', 'mule', 'museum', 'money', 'mango', 
  'nest', 'nut', 'nose', 'nail', 'needle', 'net', 'napkin', 'neck', 'necklace', 'night', 'notebook', 'noodle', 'nutshell', 'nickel', 'nestling', 'nymph', 'nudge', 'ninja', 'nap', 'nosehair',
  'owl', 'orange', 'ocean', 'octopus', 'onion', 'otter', 'organ', 'oak', 'oven', 'oar', 'orchid', 'oval', 'ointment', 'oyster', 'ounce', 'office', 'opera', 'orchestra', 'oxygen', 'orangutan', 
  'pear', 'pineapple', 'penguin', 'peanut', 'piano', 'pencil', 'potato', 'pepper', 'pancake', 'pumpkin', 'palm', 'peach', 'pearl', 'painting', 'popcorn', 'puzzle', 'pizza', 'plate', 'pigeon', 'pony',
  'quail', 'quartz', 'queen', 'quilt', 'quiver', 'question', 'quack', 'quality', 'quantity', 'quartz', 'quasar', 'queue', 'quilt', 'quiver', 'quiet', 'quicksand', 'quail', 'quartzite', 'quotation', 'qubit',
  'rabbit', 'rooster', 'river', 'road', 'rain', 'rock', 'rose', 'rabbit', 'raccoon', 'rat', 'rattle', 'rifle', 'robot', 'reindeer', 'rainbow', 'radio', 'rhinoceros', 'rocket', 'rope', 'ranch',
  'sun', 'star', 'sea', 'sky', 'sand', 'snow', 'shoe', 'sock', 'shirt', 'snake', 'spoon', 'strawberry', 'sailboat', 'suitcase', 'squirrel', 'sunflower', 'surfboard', 'soap', 'swan', 'sweater',
  'tree', 'tiger', 'turtle', 'train', 'truck', 'table', 'tooth', 'tongue', 'tail', 'teeth', 'telephone', 'television', 'tiger', 'toad', 'towel', 'trumpet', 'tire', 'tornado', 'tuba', 'tuna',
  'umbrella', 'unicorn', 'underwear', 'ufo', 'utensil', 'universe', 'umbrella', 'underpass', 'university', 'uranium', 'uniform', 'usher', 'unicorn', 'uranus', 'up', 'umpire', 'upper', 'upright', 'urge',
  'vase', 'volcano', 'vulture', 'vampire', 'violin', 'vase', 'vegetable', 'van', 'vase', 'vase', 'violin', 'vegetarian', 'veterinarian', 'vacuum', 'voice', 'vest', 'villain', 'vixen', 'vase', 'viaduct',
  'water', 'whale', 'wolf', 'web', 'wing', 'wrench', 'wallet', 'walrus', 'wasp', 'waffle', 'wheel', 'window', 'wood', 'watermelon', 'whistle', 'wheat', 'wand', 'walnut', 'wolverine', 'washer',
  'xylophone', 'x-ray', 'xenon', 'xerus', 'xylophone', 'xylophonist', 'xylograph', 'xyst', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray', 'x-ray',
  'yacht', 'yak', 'yam', 'yard', 'yarn', 'yawn', 'year', 'yellow', 'yesterday', 'yogurt', 'yoke', 'yolk', 'yogurt', 'yogurt', 'yogurt', 'yogurt', 'yogurt', 'yogurt', 'yogurt', 'yogurt', 'yogurt',
  'zebra', 'zipper', 'zoo', 'zebra', 'zeppelin', 'zephyr', 'zero', 'zoo', 'zone', 'zookeeper', 'zombie', 'zucchini', 'zebra', 'zoo', 'zephyr', 'zeppelin', 'zither', 'zinc', 'zipper', 'zombie'
];

function generateProjectName() {
  const useAdjective = Math.random() < 0.5; // 50% chance of selecting an adjective
  let randomWord;
  if (useAdjective) {
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    randomWord = adjectives[randomAdjectiveIndex];
  } else {
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    randomWord = nouns[randomNounIndex];
  }
  document.getElementById('projectName').textContent = `${randomWord}`;
}