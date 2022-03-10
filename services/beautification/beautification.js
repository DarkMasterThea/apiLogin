const figlet = require('figlet');

notification = (text, font, width) => {
    figlet(text, {
            font: font || 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: width || 80,
            whiteSpace: true
        }
        ,(err, data)=>{
            if (!err){
                console.log(data)
            } else{
                console.log('Beautification failed')
                console.error(err)
            }
        })
}

font = ()=>{
    figlet.fonts(function(err, fonts) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        console.dir(fonts);
    });
}


module.exports = {notification, font}