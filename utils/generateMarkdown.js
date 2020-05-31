function generateMarkdown(data) {
  return `
  ![GitHub Activity](https://img.shields.io/github/commit-activity/m/seulkilee0428/README_Generator?style=plastic)

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
* ${data.installation}

## __Usage__ :                   
* ${data.usage}
## __License__ :                    
* ${data.license}
## __Contributor__ :              
* ${data.contributing}
## __Test__ :                      
* ${data.tests}


`;
}

module.exports = generateMarkdown;
