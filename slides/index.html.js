module.exports = `<!DOCTYPE html>
<html>
  <head>
    <title>Webpack Workshop</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
      @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic);
      @import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic);

      body { font-family: \'Droid Serif\'; }
      h1, h2, h3 {
        font-family: \'Yanone Kaffeesatz\';
        font-weight: normal;
      }
      .remark-code, .remark-inline-code { font-family: \'Ubuntu Mono\'; }
    </style>
  </head>
  <body>
    <textarea id="source" style="visibility: hidden">${require('./slide-source')}</textarea>
  </body>
</html>
`;
