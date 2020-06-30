import Portfolio from '../../components/Layouts/PortfolioPage';

const properties = {
  head: {
    title: 'Portfolio - Blockbreaker',
    description: 'Blockbreaker is an implementation of the popular game Brickbreaker written in Python by James Wallis, find out more here.'
  },
  header: {
    h1: 'Blockbreaker',
    h2: 'Competition',
    image: 'blockbreaker.png',
    imagePosition: 'top',
    height: 80
  },
  page: {
    title: 'About Blockbreaker',
    desc: 'Blockbreaker is an implementation of the popular game Brickbreaker, \
        which everyone had on their BlackBerry phones. I built Blockbreaker to enter a \
        programming competition during my first year at the University of Portsmouth. \
        I entered the competition as I had just discovered programming and wanted to \
        see what I could do with it when I wasn\'t focussing on completing coursework. \
        Blockbreaker became my first large Python program and was a success as I achieved \
        first place in the competition, winning an Android tablet in the process.',
    imgFolder: 'blockbreaker',
    sections: [
      {
        title: 'Brief',
        para: 'This is an individual competition – group entries are not allowed. \
            Use only Python and the graphics module. Don\'t write (object-oriented) \
            classes and do not use non- standard libraries such as PyGame – any modules \
            you use apart from John Zelle\'s \'graphics.py\' must be part of the standard Python 3 \
            distribution. However, if you want to add sound, I suggest using the \
            winsound module (this only works on Windows, but you can assume that \
            we will use a Windows computer to run your program). Do not re-write \
            the game completely – it should still involve bat(s)/ball or an android \
            eating apples (but of course, it could do other things as well!). Keep to \
            the spirit of the unit and the competition, and make sure that your game would not offend anyone.',
        image: {
          text: 'The main game screen of Blockbreaker',
          src: 'game.png',
          alt: 'an image of blockbreaker'
        }
      },
      {
        title: 'Technical Details',
        para: 'Blockbreaker is written in Python (2.7 but works with 3), \
            it uses a single file with multiple functions and predominately \
            uses Lists to keep track of game items such as the blocks and \
            score as every block has a different value. Every second the game \
            calculates whether the ball has hit a block, wall or the bat and \
            determines whether it needs to alter the projectory of the ball. \
            When a certain amount of blocks are hit the game levels up which \
            increases the ball speed and changes the colour of the blocks. \
            For creating the Graphics it uses John Zelle\'s \'graphics.py\' \
            which was used heavily in University coursework. It also uses built \
            in modules to read/write the highscores file, control the speed of the \
            ball and randomise the direction of the ball when it hits a surface. \
            The source code is available on Github.',
        image: {
          text: 'The game over screen',
          src: 'scorescreen.png',
          alt: 'An image of the scorescreen for Blockbreaker'
        }
      }
    ],
    finalSection: {
      title: 'Download Blockbreaker',
      link: 'https://github.com/james-wallis/blockbreaker',
      text: 'Blockbreaker on Github',
      image: {
        text: 'Block animation on startup',
        src: 'startup.gif',
        alt: 'Blockbreaker starting showing the animation'
      }
    }
  }
}

export default class extends React.Component {
  render() {
    return <Portfolio {...properties} />
  }
}
