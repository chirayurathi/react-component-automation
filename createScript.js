fs = require("fs")
path = require("path")
readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})

const makeFile = (js,css,dirname)=>{
    fs.mkdir(dirname + "\\" + process.argv[3],(err)=>{
        if(err){
            console.log(err)
            process.exit()
        }
        else{
            fs.writeFile(dirname + "\\" + process.argv[3] + "\\" + process.argv[3].substring(process.argv[3].lastIndexOf('\\')-1) + ".js",js,(err)=>{
                if(err){
                    console.log(err)
                    process.exit()
                }
                else{
                    fs.writeFile(dirname + "\\" + process.argv[3] + "\\" + process.argv[3].substring(process.argv[3].lastIndexOf('\\')-1) + ".module.css",css,(err)=>{
                        if(err){
                            console.log(err)
                            process.exit()
                        }
                        else{
                            console.log(`${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)} component successfully created!`)
                            process.exit()
                        }
                    })
                }
            })
            
        }
    })
}

const checks = (js,css)=>{
    let dirname = __dirname
    if(!__dirname.endsWith('src')){
        dirname = __dirname + '\\src'
    }
    fs.exists(dirname + "\\" + process.argv[3].substring(0,process.argv[3].lastIndexOf('\\')-1),(exists)=>{
        if(exists){
            fs.exists(dirname + "\\" + process.argv[3],(existsC)=>{
                if(existsC){
                    console.log("Component Of This Name Already Exists.")
                    process.exit()
                }
                else{
                    makeFile(js,css,dirname)
                }
            })
        }
        else{
            readline.question(`${dirname + "\\" + process.argv[3].substring(0,process.argv[3].lastIndexOf('\\')-1)} path does not exist, do you want to create it anyway? [y/n]`,ans=>{
                if(ans == "y" || ans == "Y"){
                    makeFile(js,css,dirname)
                }
                else{
                    process.exit()
                }
            })
        }
    })
}

if(process.argv[2] == 'class'){
    let js = `import React,{Component} from 'react'
import Style from './${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}.module.css'

class ${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)} extends Component{
    render(){
        return(
        <div className={Style.${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}}>
        
        </div>
        )
    } 
}

export default ${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}
    `
    let css = `.${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}{

}
`
    checks(js,css)
}
else if(process.argv[2] == 'function'){
    let js = `import React from 'react'
import Style from './${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}.module.css'

const ${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)} = (props) => {
    return(
        <div className = {Style.${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}}>
        
        </div>
    )
}

export default ${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}
`
    let css = `.${process.argv[3].substring(process.argv[3].lastIndexOf('\\')+1)}{
        
}
    `
    checks(js,css)
}
else{
    console.log("Invalid arguments")
    process.exit()
}