const { FuseBox, WebIndexPlugin } = require("fuse-box");
const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name.js",
  useTypescriptCompiler: true,
  plugins: [WebIndexPlugin({
    template : "src/index.html"
  })],
});
fuse.dev(); // launch http server
fuse
  .bundle("app")
  .instructions(" > index.js")
  .hmr()
  .watch();
fuse.run();
