function generateMarkdown(data) {
  var profilePicture = "https://avatars0.githubusercontent.com/u/47539186?s=400&u=da99dfaefc819f5ec9be6126240f076e14c18aff&v=4";

  return `
  ![GitHub Activity](https://img.shields.io/github/commit-activity/m/seulkilee0428/README_Generator?style=plastic);

# ${data.title}
* ${data.description}

## __Table of Contents__  
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributor)                 
* [Test](#test)
* [Question](#question) 
## __Installation__ :               
* ${ data.installation}

## __Usage__ :                   
* ${data.usage}
## __License__ :                    
* ${data.license}
## __Contributor__ :              
* ${data.contributing}
## __Test__ :                      
* ${data.tests}

## __Questions__ :
* Profile Pic
 - ![Image](${profilePicture})

* Username
 - ${data.username}

* Email
 - ${data.email}

`;
}

module.exports = generateMarkdown;
