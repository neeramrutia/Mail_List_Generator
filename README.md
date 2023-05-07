# GmailListGenerator
A script that generates a specified number of random Gmail email addresses and checks their existence, saving the valid ones to a text file.

## Requirements

- ```email-validator```
- ```crypto```
- ```readline-sync```
- ```email-existence```
- ```node-emoji```
- ```fs```

## Getting Started

- Clone the repository.
- Run npm install to install the required dependencies.
- Run the script by using node scriptName.js in your command line.
- Follow the prompts in the command line to specify the length of the email addresses and the number of emails to generate.
- Valid email addresses will be saved to a file named "true_emails.txt" in the root directory.

## Configuration

The script is currently set to generate email addresses with the "gmail" provider and the "com" top level domain (TLD). If you want to change this, you can edit the following lines in the script:

```
let emailProviders = "gmail"
let tlds = "com"
```

## Notes

The script uses a simple random string generator to create the email addresses, so it is possible that some generated addresses may not be valid even though they pass the email validation check.

