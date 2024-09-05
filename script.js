document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('passwordField');
    const generateBtn = document.getElementById('generateBtn');
    const themeToggle = document.getElementById('themeToggle');
    
    // Apply the saved theme on page load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        themeToggle.checked = false;
    }

    // Password Generator Logic
    generateBtn.addEventListener('click', function () {
        const password = generatePassword();
        passwordField.value = password;
        passwordField.select();
        document.execCommand('copy');
    });

    // Toggle dark mode and save preference
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    // Name Processing Logic
    const nameInput = document.getElementById('nameInput');
    const initialsField = document.getElementById('initialsField');
    const loginField = document.getElementById('loginField');
    const firstNameField = document.getElementById('firstNameField');
    const lastNameField = document.getElementById('lastNameField');

    nameInput.addEventListener('input', function () {
        const nameParts = nameInput.value.trim().split(' ');
        if (nameParts.length >= 2) {
            const firstName = nameParts[0];
            const lastName = nameParts[nameParts.length - 1];

            // Generate initials in PeGa format
            const initials = firstName.charAt(0).toUpperCase() + firstName.charAt(1).toLowerCase() +
                             lastName.charAt(0).toUpperCase() + lastName.charAt(1).toLowerCase();
            initialsField.value = initials;

            // Generate login (first 3 chars of first name + first 3 chars of last name)
            const login = firstName.slice(0, 3).toLowerCase() + lastName.slice(0, 3).toLowerCase();
            loginField.value = login;

            // Set first name and last name
            firstNameField.value = firstName;
            lastNameField.value = lastName;
        }
    });

    // Copy to clipboard functionality for each result field
    document.querySelectorAll('.copyBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            const copyTarget = document.getElementById(this.dataset.copyTarget);
            copyTarget.select();
            document.execCommand('copy');
        });
    });

    // Password generator function
    function generatePassword() {
        const words = [
            'abide', 'abode', 'about', 'above', 'abuse', 'actor', 'adapt', 'admit', 'adopt', 'adore',
            'adult', 'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'alien',
			'align', 'alike', 'alive', 'allow', 'alone', 'along', 'alter', 'amaze', 'amber', 'amend',
			'angel', 'anger', 'angle', 'angry', 'ankle', 'apple', 'apply', 'arena', 'argue', 'arise',
			'armed', 'armor', 'arose', 'array', 'arrow', 'aside', 'asset', 'audio', 'audit', 'avoid',
			'await', 'awake', 'award', 'aware', 'awful', 'badge', 'baker', 'basic', 'basis', 'beach',
			'beard', 'beast', 'begin', 'being', 'belly', 'below', 'bench', 'bible', 'birth', 'black',
			'blade', 'blame', 'blank', 'blast', 'blend', 'bless', 'blind', 'blink', 'block', 'blood',
			'board', 'boast', 'bonus', 'boost', 'booth', 'bound', 'brain', 'brand', 'brave', 'bread',
			'break', 'breed', 'brick', 'bride', 'brief', 'bring', 'broad', 'broke', 'brown', 'brush',
			'buddy', 'build', 'bunch', 'burst', 'cabin', 'cable', 'calm', 'camel', 'canal', 'candy',
			'canoe', 'canon', 'cargo', 'carve', 'catch', 'cause', 'cease', 'chain', 'chair', 'chalk',
			'champ', 'chant', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'check', 'cheek', 'cheer',
			'chess', 'chest', 'chief', 'child', 'chill', 'china', 'choir', 'chose', 'civil',
			'claim', 'clash', 'class', 'clean', 'clear', 'clerk', 'click', 'cliff', 'climb', 'clock',
			'close', 'cloth', 'cloud', 'coach', 'coast', 'color', 'comic', 'coral', 'count', 'court',
			'cover', 'craft', 'crash', 'crawl', 'crazy', 'cream', 'creek', 'creep', 'crime', 'crisp',
			'cross', 'crowd', 'crown', 'crush', 'curve', 'cycle', 'daily', 'dance', 'death', 'debut',
			'delay', 'delta', 'demon', 'denim', 'depth', 'diary', 'digit', 'doubt',
			'draft', 'drain', 'drama', 'dream', 'dress', 'drift', 'drill', 'drink', 'drive', 'drown',
			'eager', 'early', 'earth', 'eight', 'elbow', 'elder', 'elect', 'elite', 'empty',
			'enjoy', 'enter', 'entry', 'equal', 'equip', 'error', 'essay', 'event', 'every',
			'exact', 'exist', 'extra', 'faith', 'false', 'fancy', 'fault', 'favor', 'feast', 'fence',
			'fever', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'flame', 'flash',
			'fleet', 'flesh', 'float', 'flock', 'flood', 'floor', 'flour', 'focus', 'force', 'forth',
			'forty', 'forum', 'found', 'frame', 'fraud', 'fresh', 'front', 'frost', 'fruit', 'funny',
			'giant', 'given', 'globe', 'glory', 'grace', 'grade', 'grain', 'grand', 'grant', 'grape',
			'graph', 'grasp', 'grass', 'grave', 'great', 'green', 'greet', 'grief', 'grind', 'gross',
			'group', 'guard', 'guess', 'guest', 'guide', 'habit', 'happy', 'harsh', 'heart', 'heavy',
			'honey', 'honor', 'horse', 'hotel', 'house', 'human', 'humor', 'hurry', 'ideal', 'image',
			'imply', 'index', 'inner', 'input', 'issue', 'jeans', 'joint', 'judge', 'juice', 'kneel',
			'knife', 'knock', 'label', 'labor', 'large', 'laser', 'later', 'laugh', 'layer', 'learn',
			'least', 'leave', 'legal', 'lemon', 'level', 'light', 'limit', 'liver', 'local', 'logic',
			'loose', 'lucky', 'lunar', 'lunch', 'magic', 'major', 'maker', 'march', 'marry', 'match',
			'maybe', 'mayor', 'medal', 'media', 'metal', 'meter', 'might', 'minor', 'model', 'money',
			'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'movie', 'music', 'naked', 'nasty',
			'naval', 'nerve', 'never', 'night', 'noble', 'noise', 'north', 'novel', 'nurse', 'occur',
			'ocean', 'offer', 'often', 'onion', 'opera', 'orbit', 'order', 'organ', 'other', 'ought',
			'outer', 'owner', 'paint', 'panel', 'panic', 'paper', 'party', 'peace', 'penny', 'phase',
			'phone', 'photo', 'piano', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant',
			'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior',
			'prize', 'proof', 'proud', 'prove', 'punch', 'pupil', 'queen', 'quick', 'quiet', 'quite',
			'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'react', 'ready', 'realm', 'rebel',
			'refer', 'relax', 'reply', 'reset', 'resist', 'rider', 'ridge', 'right', 'rival', 'river',
			'robot', 'rough', 'round', 'route', 'royal', 'ruler', 'rural', 'sadly', 'saint', 'salad',
			'scale', 'scare', 'scene', 'scope', 'score', 'scout', 'screw', 'seize', 'sense', 'serve',
			'seven', 'shade', 'shaft', 'shake', 'shall', 'shame', 'shape', 'share', 'sharp', 'sheep',
			'sheer', 'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock', 'shoot', 'shore', 'short',
			'shout', 'shove', 'sight', 'silly', 'since', 'sixth', 'sixty', 'skate', 'skill', 'slave',
			'sleep', 'slice', 'slide', 'slope', 'small', 'smart', 'smell', 'smile', 'smoke', 'snake',
			'sneak', 'sober', 'solar', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare',
			'speak', 'speed', 'spell', 'spend', 'spice', 'spike', 'spill', 'spine', 'spite', 'split',
			'spoil', 'sport', 'spray', 'spread', 'spring', 'squad', 'stack', 'staff', 'stage', 'stain',
			'stake', 'stamp', 'stand', 'stare', 'start', 'state', 'steam', 'steel', 'steep',
			'steer', 'stick', 'still', 'stock', 'stone', 'store', 'storm', 'story', 'stove', 'strap',
			'straw', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet',
			'swing', 'sword', 'table', 'taste', 'teach', 'tease', 'teeth', 'tempt', 'thank', 'theme',
			'there', 'thick', 'thing', 'think', 'third', 'those', 'three', 'throw', 'thumb', 'tiger',
        ]; // Larger dictionary

        const numbers = '0123456789';
        let password = '';

        // Select two random words and capitalize the first letter of each word
        let word1 = words[Math.floor(Math.random() * words.length)];
        let word2 = words[Math.floor(Math.random() * words.length)];
        word1 = word1.charAt(0).toUpperCase() + word1.slice(1);
        word2 = word2.charAt(0).toUpperCase() + word2.slice(1);
        password = word1 + word2;

        // Ensure the password (excluding numbers and !) is 12 characters
        if (password.length > 12) {
            password = password.substring(0, 12);
        } else if (password.length < 12) {
            while (password.length < 12) {
                let randomChar = words[Math.floor(Math.random() * words.length)].charAt(0);
                password += randomChar;
            }
        }

        // Add 4 random numbers at the end
        for (let i = 0; i < 4; i++) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        // Append "!" at the end
        password += '!';

        return password;
    }
});
