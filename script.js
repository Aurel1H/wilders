import chalk from 'chalk';
import figlet from 'figlet';

const log = console.log;

log(chalk.blue('Benjamin')," "+ chalk.red('Damien')," "+ chalk.green('Rémi')," "+ chalk.yellow('Marco'));

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});