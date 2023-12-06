const program= require('commander');
const api  =require('./index.js');

program
  .option('-x, --xxx', 'what ths x');
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0,-1).join(' ');
    api.add(words);
  });

program.parse(process.argv);