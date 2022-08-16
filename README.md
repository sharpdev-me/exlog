# Exlog
A simple programming language that compiles JavaScript-like syntax to a format Mindustry understands (mlog).

## Building
Clone the repostitory `git clone https://github.com/sharpdev-me/exlog` and cd into the directory. Then, run `npm install` and `npm run build`. Now, to use the compiler anywhere, run `npm install -g`.

## Usage
It's pretty simple to use the compiler. To compile the example file, run `exlog mindustry/main.exlog`. This will send the result to stdout. If you'd like to output to a file, you can use the `-o` flag (e.g `exlog -o mindustry/main.mlog mindustry/main.exlog`) If you would like to specify an alternate import path, use the `-d` flag.

## Syntax
The syntax for this language is very JavaScript-like. I think the best way to get an understanding of the language is to take a look at `mindustry/main.exlog`. Imports are handled relative to the dependency path (the directory of the input file by default). There are a few built-in imports (memory, graphics, io, control). I originally planned on making more, but I stopped working on this after a bit. The source for these "libraries" is in `src/std`. You'll see a lot of calls to an `mlog` function in these files, which just writes the string directly to the compiled file.

### Variables
Unfortunately, due to poor design decisions, all variables are scoped globally. Care should be taken when writing imports to prefix variable names with a unique identifier.

If you take a look at the result from a compilation, you'll notice a lot of intermediate values. The results from function calls and expressions are all declared during operations. Eventually, though, the resultant value *is* placed into a variable with the same name as the source. This is useful if you're using the `mlog` function and need to reference the value from a function.

## About
I made this compiler many months ago, and I just noticed it in my filesystem and decided to share it. I don't really have much experience with making compilers, so I decided to let ANTLR handle the lexing and parsing. The compiled code is really inefficient, since compiled functions aren't really treated as reusable code. Hopefully, though, this does show that a tool like this could be possible.

## Similar Tools
After posting this on reddit I saw a few similar tools and I wanted to share them!

https://github.com/pitust/qlx

https://github.com/Nawot/pyndustry

If you see any other similar tools, feel free to add them in a PR or send me a message.