export default function federationCssFix() {
  return {
    name: 'federation-css-fix',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const cssFiles = Object.keys(bundle).filter((fileName) =>
        /^assets\/App-.*\.css$/.test(fileName),
      ).map((fileName) => fileName.split('/').pop());
      const remoteEntry = Object.values(bundle).find(
        (output) => output.type === 'chunk' && output.fileName.endsWith('remoteEntry.js'),
      );

      if (remoteEntry) {
        remoteEntry.code = remoteEntry.code.replace(
          /(["'`])__v__css__[^"'`]*\1/g,
          JSON.stringify(cssFiles),
        );
      }
    },
  };
}
