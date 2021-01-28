const key_left = "37";
 const key_right = "39";
 const key_down = "40";
 const key_up="38";
 const key_space = '32';
 const startBody = [
     {
         row:0,
         col:3
     },
     {
         row :0,
         col:2
     },
     {
         row:0,
         col:1
     },
     {
         row :0,
         col :0
     },
 ]
 const walls = [{ row:0,col:16},{row:1,col:16},{row:2,col:16},{row:3,col:16 },{row:4,col:16},{row:5,col:16},{row:6,col:16},{row:7,col:16},
                {row:20,col:0},{row:20,col:1},{row:20,col:2},{row:20,col:3},{row:20,col:4},{row:20,col:5},{row:20,col:6},{row:20,col:7},{row:20,col:8},{row:20,col:9},
                {row:30,col:0},{row:30,col:1},{row:30,col:2},{row:30,col:3},{row:30,col:4},{row:30,col:5},{row:30,col:6},{row:30,col:7},{row:30,col:8},{row:30,col:9}, 
                {row:30,col:10},{row:30,col:11},{row:30,col:12},{row:30,col:13},{row:30,col:14},{row:30,col:15},{row:30,col:16},{row:30,col:17},{row:30,col:18},
                {row:30,col:21},{row:30,col:22},{row:30,col:23},{row:30,col:24},{row:30,col:25},{row:30,col:26},{row:30,col:27},{row:30,col:28},{row:30,col:29},
                {row:30,col:30},{row:30,col:31},{row:30,col:32},{row:30,col:33},    
                {row:15,col:33},{row:15,col:32},{row:15,col:31},{row:15,col:30},{row:15,col:29},{row:15,col:28},{row:15,col:27},{row:15,col:26},{row:15,col:25},
                {row:15,col:15},{row:15,col:16},{row:15,col:17},{row:14,col:15},{row:14,col:16},{row:14,col:17},{row:16,col:15},{row:16,col:16},{row:16,col:17},      
            ]

class Snake{
    constructor(){
        this._boxSize=20;
        this._maxHeight = document.getElementById("screen-id").clientHeight;
        this._maxWidth = document.getElementById("screen-id").clientWidth;
        this._maxRows= this._maxHeight/this._boxSize;
        this._maxCols = this._maxWidth/this._boxSize;
        this._gameon=false;
        this._direction = "right";
        this._superFruitCount = 0
        this._snake=JSON.parse(JSON.stringify(startBody));
        this._walls = JSON.parse(JSON.stringify(walls));
        this._snakeBodyElems=[];
        this._highScore = parseInt(localStorage.getItem('userHighScore'),10);
        this._fruit=[
            {
                row: 0,
                col :0 ,
            }
        ]
        this._screen=document.getElementById("screen-id");
        this._scoreBoard= document.getElementById("score-id");
        this._maxScoreBoard = document.getElementById("max-score-id");
        this._score =0;
        document.getElementById("save-btn").addEventListener('click',this._saveData);  
    }
    _saveData() {
        // console.log(this._highScore)
        // localStorage.setItem('userHighScore',this._highScore)
        var data = JSON.parse(localStorage.getItem('userData'))
        console.log(data)
        for (let i = 0; i< data.length ; i++){
            if(data[i].name == localStorage.getItem('activeUser')){
                data[i].userHighScore   = localStorage.getItem('userHighScore')
            }
        }
        console.log(data)
        localStorage.setItem('userData',JSON.stringify(data));
    }
    /**
     * Getter Methods
     */
    getMaxHeight(){
        return this._maxHeight;
    }
    getMaxWidth(){
        return this._maxWidth;
    }
    getMaxCols(){
        return this._maxCols;
    }
    getMaxRows(){
        return this._maxRows;
    }  

    getSnake(){
        return this._snake;
    }

    getSnakeRow(){
        return this._snake[0].row;
    }

    getSnakeCol(){
        return this._snake[0].col;
    }

    getFruit(){
        return this._fruit;
    }
    getFruitRow(){
        return this._fruit[0].row;
    }
    getFruitCol(){
        return this._fruit[0].col;
    }
    getScreen(){
        return this._score;
    }
    
   
    /**
     * Setup the game. Add listeners . and HighScore and current score Boxs and setup the gameboard
     */
    setupGame(){
        document.body.addEventListener("keydown",this._changeDirection.bind(this));
        // this._scoreBoard.innerHTML="SCORE:"+this._score;
        // this._maxScoreBoard.innerHTML="HighScore:"+localStorage.getItem("maxScore");

        this._setupBoard();
    }
    /**
     * 
     * @param {Manage the Key Listener} e 
     */
    _changeDirection(e){  
        if(e.keyCode ==key_left &&  this._direction != "right" ){
            this._direction = "left";
        }
        if(e.keyCode==key_right && this._direction != "left"){
            this._direction = "right";
        }
        if(e.keyCode==key_up && this._direction != "down"){
            this._direction = "up";
        }
 
        if(e.keyCode==key_down && this._direction != "up"){
            this._direction = "down";
        }
        if(e.keyCode == key_space) {
            for(var i =1; i<3;i++){
                this._moveSnakeOneStep()
            }
        }
    }

    /**
     * Handle Board setup
     */
    _setupBoard(){
       this._addButtons();
       this._addWalls();
       this._addSnake();
       this._addFruit();
    }

    /***
     * Does what it says
     */
    _addWalls() {
        // console.log()
        for(let i =0; i<this._walls.length; i++){
            const elem = document.createElement("div");
            elem.className="box-wall";
            elem.id = "box-id";
            elem.style.top=this._walls[i].row*this._boxSize+"px";
            elem.style.left=this._walls[i].col*this._boxSize+"px";
            this._screen.append(elem);
            // this._snakeBodyElems.push(elem);
        }
    }
    /**
     * setting board up 
     */

     /**
      * Add Start , Stop , and Reset button . 
      * Start-starts a ne game and resumes the paused game
      * Pause- Pauses the current game .
      * Reset- resets the game by returning it to the starting state 
      */
    _addButtons(){
        const startbtn = document.createElement("input");
        startbtn.type = "button";
        startbtn.className="button";
        startbtn.value = "START";
        startbtn.addEventListener("click",this._startNewGame.bind(this))
        document.getElementById("btns-id").append(startbtn);
        const pauseBtn = document.createElement("input");
        pauseBtn.type = "button";
        pauseBtn.className="button pause-btn";
        pauseBtn.value = "PAUSE";
        pauseBtn.addEventListener("click",this._pauseGame.bind(this))
        document.getElementById("btns-id").append(pauseBtn);
        const resetBtn = document.createElement("input");
        resetBtn.type = "button";
        resetBtn.className="button reset-btn";
        resetBtn.value = "RESET";
        resetBtn.addEventListener("click",this._resetGame.bind(this))
        document.getElementById("btns-id").append(resetBtn);
    }
    /**
     * Draws snake at the start position
     */
    _addSnake(){
        for(let i =0; i<this._snake.length; i++){
            const elem = document.createElement("div");
            elem.className="box";
            elem.id = "box-id";
            elem.style.top=this._snake[i].row*this._boxSize+"px";
            elem.style.left=this._snake[i].col*this._boxSize+"px";
            this._screen.append(elem);
            this._snakeBodyElems.push(elem);
        }
    }
    /**
     * Draws fruit at the random Postion 
     */
    _addFruit(){
        const fruit = document.createElement("div");
        fruit.classList.add("box");
        fruit.classList.add("box-fruit");  
        fruit.id="fruit-id"
        this._assignRandomCords();
        fruit.style.top=this._fruit[0].row*this._boxSize+"px";
        fruit.style.left=this._fruit[0].col*this._boxSize+"px";
        this._screen.append(fruit);
    }
    _addSuperFruit(){
        const fruit = document.createElement("div");
        fruit.classList.add("box");
        fruit.classList.add("box-super-fruit");  
        fruit.id="fruit-id"
        this._assignRandomCords();
        fruit.style.top=this._fruit[0].row*this._boxSize+"px";
        fruit.style.left=this._fruit[0].col*this._boxSize+"px";
        this._screen.append(fruit);
    }
    /**
     * Assigns random Coordinates to the fruit. If these random Cords. are part of the snake , the coordiantes are reassigned .
     */
    _assignRandomCords(){
        let newRow,newCol;
        while(true){
            newRow=Math.floor(Math.random()*(this._maxRows-1));
            newCol = Math.floor(Math.random()*(this._maxCols-1));
            if(this._snake.filter(cords=> cords.col==newCol && cords.row==newRow).length ==0 
                && this._walls.filter(cords=>cords.col == newCol && cords.row == newRow).length == 0
            ) break;
        }
        this._fruit[0].row=newRow;
        this._fruit[0].col=newCol;
        
    }

    /**
     * Handles Game reset , by returning it to starting State.
     */
    _resetGame(){
        this._pauseGame();
        this._snake = JSON.parse(JSON.stringify(startBody));
        this._snakeBodyElems=[];
        let child=this._screen.firstChild;
        while(child){
            this._screen.removeChild(child);
            child=this._screen.firstChild;
        }
        this._direction="right";
        this._score =0;
        this._superFruitCount = 0   
        document.getElementById("currScoreUser").innerHTML ="currentScore: "+ this._score
        // document.get
        this._addFruit();
        this._addSnake();
        this._addWalls();
    }

    /**
     * Removes the interval  and sets GameOn to false;
     */
    _pauseGame(){
        this._gameon=false;
        clearInterval(this.interval);
    }
    /**
     * Sets  the Interval and starts the new game. If a game is currently running , does nothing.
     */
    _startNewGame(){
        if(this._gameon){
            return;
        }
        this._gameon=true;
        this.interval = setInterval(this.playGame.bind(this),100);
    }

    /**
     * Game process
     */
    playGame(){
        this._moveSnakeOneStep();
    }
    
    /**657
     * handels One snake Step. If there is a collision with the walls , player loses 
     * If the collision is with the fruit , the snake consumes it , increasing his size 
     * 
     */
    
    _moveSnakeOneStep(){
        
        let newCol,newRow;
        newRow=this._snake[0].row;
        newCol=this._snake[0].col;
        switch(this._direction){
            case "left" : newCol-=1; break;
            case "right": newCol+=1;break;
            case "up": newRow-=1;break;
            case "down" : newRow+=1;break;
            default :break;
        }
        
        if(this._checkBounds(newRow,newCol) ==-1)return;
        
        this._snake.unshift({
                row:newRow,
                col:newCol
        });

        let isFruit = false;
        if(newRow==this._fruit[0].row && newCol == this._fruit[0].col){
            if(this._superFruitCount == 5){
                const fruit = document.getElementById("fruit-id");
                this._screen.removeChild(fruit);
                this._addFruit();
                this._score+=100;
                this._superFruitCount = 0
                // this._scoreBoard.innerHTML="SCORE:"+this._score;
                document.getElementById("currScoreUser").innerHTML ="currentScore: "+ this._score
                if(this._highScore< this._score) {
                    this._highScore = this._score ;
                    document.getElementById('userHighScore').innerHTML = "HighScore: "+ this._highScore
                    localStorage.setItem('userHighScore',this._highScore)
                }
                isFruit=true;
            }else{
                const fruit = document.getElementById("fruit-id");
                this._screen.removeChild(fruit);
                this._superFruitCount++;
                this._score+=20;
                if (this._superFruitCount == 5){
                    this._addSuperFruit();
                }else {
                    this._addFruit();
                }
                document.getElementById("currScoreUser").innerHTML ="currentScore: "+ this._score
                if(this._highScore< this._score) {
                    this._highScore = this._score ;
                    document.getElementById('userHighScore').innerHTML = "HighScore: "+ this._highScore
                    localStorage.setItem('userHighScore',this._highScore)
                }
                isFruit=true;
            }
        }
        if(!isFruit){
            this._snake.pop();
            const toDelet=this._snakeBodyElems.pop();
            toDelet.parentNode.removeChild(toDelet);
        }
        const newHead = document.createElement("div");
        newHead.className="box";
        newHead.id = "box-id";
        newHead.style.top=this._snake[0].row*this._boxSize+"px";
        newHead.style.left=this._snake[0].col*this._boxSize+"px";
        this._screen.append(newHead);
        this._snakeBodyElems.unshift(newHead);
      
    }
    /**
     * 
     * @param {The next row the snake is going to be at the next moment of time} nextRow 
     * @param {*\The next col the snake is going to be at the next moment of time} nextCol 
     * 
     * Check if the snake has gone out of the bounds of  the gameBoard.
     * If such moment occurs , the player loses and the game is returned to its starting state.
     * This funcion returns -1 if the collision did occur.
     */
    _checkBounds(nextRow,nextCol){
       if(nextRow< 0 || nextRow>=this._maxRows || nextCol< 0 || nextCol>=this._maxCols
          || this._snake.filter(cords=> cords.row==nextRow && cords.col== nextCol).length != 0
          || this._walls.filter(cords => cords.row ==nextRow && cords.col == nextCol).length !=0
          )
       {
            // let currMaxScore = localStorage.getItem("maxScore");
            // if(this._score > currMaxScore){
            //     alert("Congratulations. New HighScore is set");
            // }
            // currMaxScore=Math.max(currMaxScore,this._score);
            // localStorage.setItem("maxScore",currMaxScore);
            // this._maxScoreBoard.innerHTML="HighScore:"+localStorage.getItem("maxScore");
            this._resetGame();
            return-1;
       }
    }
}
    
    

const snk = new Snake();

snk.setupGame();