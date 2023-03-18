function occurence() {
    let str = "I love the smell of coffee in the morning. There's nothing quite like a fresh cup of coffee to start the day. Sometimes I even have a second cup of coffee in the afternoon to keep me going";
    let words = str.split(" ");
    // let str = ["parth", "sarvaiya", "vandan", "raval","raval","raval","raval", "rushabh", "shah", "aditya" ,"shah"];
    // let words= [...str] 

    let wordcountMap = new Map();

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (wordcountMap.has(word)) {
            let count = wordcountMap.get(word);
            wordcountMap.set(word, count + 1);
        }
        else {
            wordcountMap.set(word, 1);
        }
    }

for (let [word, count] of wordcountMap)
    {
        console.log(`${word}: ${count}`);
    }
}
occurence()