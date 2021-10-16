

console.log("Welcome to the password validator tool.");

reader.question("Enter a password that is at least 10 characters long: ", function(input){
	tokens = input.split(' ');
	
	if (input < 10){
        console.log("Password is too short");
    } else if (input >= 10){
        console.log("Password accepted.");
    }
    

	// This line closes the connection to the command line interface.
	reader.close()


	});
