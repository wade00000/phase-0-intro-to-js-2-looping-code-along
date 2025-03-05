function writeCards(namesArray, eventName) {
    let messages = []; // Initialize an empty array to store messages

    for (let i = 0; i < namesArray.length; i++) {
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }

    return messages; // Return the array of messages
}

// Example usage:
console.log(writeCards(["Alice", "Bob", "Charlie"], "birthday"));

function countDown(num){
 while (num>=0){
    console.log(num)
    num--
 }


}

countDown(10)