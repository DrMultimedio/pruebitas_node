var htmlToPdf = require('html-to-pdf');
htmlToPdf.setInputEncoding('UTF-8');
htmlToPdf.setOutputEncoding('UTF-8');
htmlToPdf.convertHTMLFile('/prueba/presupuestoOriginal.html', 'd.pdf',
    function (error, success) {
       if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    }
);
