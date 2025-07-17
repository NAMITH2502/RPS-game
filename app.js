const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introDisplay = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introDisplay.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img'); 

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        //computer options
        computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //console.log(computerChoice);

                setTimeout(() => {
                    //call compare hands
                    compareHands(this.textContent, computerChoice);
                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = 'shakePlayerHand 2s ease';
                computerHand.style.animation = 'shakeComputerHand 2s ease';
            });
        });
    };

    //update the score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');
        //checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        //check for rock
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === 'paper'){
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //Is call all the inner function
    startGame();
    playMatch();
};

game();