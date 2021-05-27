# react-component-automation
This is a node script to automate creation of a react component.

## functionality
Creates <component_name>.js and <component_name>.module.css files with boilerplate for the given component name.

## Setup
   - Copy The above createScript.js file with the same name into your project's root directory (The one which includes node_module and src). 
          
        ```
          |---projectName
                    |---node_modules
                    |---public
                    |---src
                    |---createScript.js       #Create this file.

        ```
   - In your package.json folder, under the scripts section add "create" command in the format given below
     ```
     {
        "scripts":{
          ...
          "create" : "node createScript.js"
        }
     }
     ```
   
## Usage
This script takes in 2 arguments - class/function , component path.

To run the script - Start terminal in project folder, then:
  - To create a *class based component* :
  ```
    > npm run create class path\to\folder\<ComponentName>
  ```
  
  - To create a *function based component* :
  ```
    > npm run create function path\to\folder\<ComponentName>
  ```
## Examples
### Initial Folder Structure
```
|---projectName
          |---node_modules
          |---public
          |---src
                |---Components
                |---Container
```
  - ### Class Based Example:
  
    Terminal Command:
    
    ```
    c:\projectName > npm run create class Container\Main
    ```
    
    Result:
    
      ```
      |---projectName
                |---node_modules
                |---public
                |---src
                      |---Components
                      |---Container
                            |---Main
                                  |---Main.js
                                  |---Main.module.css
       ```
       
       #### Main.js
       
       ```
       import React,{Component} from 'react'
       import Style from './Main.module.css'

       class Main extends Component{
            render(){
                return(
                <div className={Style.Main}>

                </div>
                )
            } 
       }

       export default Main
    
       ```
       
       #### Main.module.css
       
       ```
       .Main{
       
       }
       ```

  - ### Function Based Example:
  
    Terminal Command:
    
    ```
    c:\projectName > npm run create function Components\Landing
    ```
    
    Result:
    
      ```
      |---projectName
                |---node_modules
                |---public
                |---src
                      |---Components
                      |      |---Landing
                      |            |---Landing.js
                      |            |---Landing.module.css
                      |---Container

       ```
       
       #### Landing.js
       
       ```
        import React from 'react'
        import Style from './Landing.module.css'

        const Landing = (props) => {
            return(
                <div className = {Style.Landing}>
        
                </div>
            )
        }

        export default Landing

    
       ```
       
       #### Landing.module.css
       
       ```
       .Landing{
       
       }
       ```
## Customization
  
This boilerplate and files names were made according to the file structure I follow but if you want to make changes in:
  - Javascript File:
    change variable 'js' this way =>
    
      ```
        js = `
        // your js boiler plate format
        `
      ```
      
  - CSS Module File:
    change variable 'css' this way =>
    
    ```
      css = `
        #your css boiler plate format
      `
    ```
    
### Note:
  
  JS and CSS variables are declared twice , for for class based component and other for function based component.
  
  comments are added in their respective lines to make it easier to locate them.
    
