new Vue({
    el:"#app",
    data:{
        player_health:100,
        monster_health:100,
        gameIsOn:false,
    },
    methods :{
        startGame : function(){
            this.gameIsOn=true;
            console.log(this.gameIsOn);
        },
        playerAttact:function(){
            var point=Math.ceil(Math.random()*10);
            this.monsterAttact();
            this.monster_health-=point
        },
        playerSpecialAttact:function(){
            var point=Math.ceil(Math.random()*25);
            this.monsterAttact();
            this.monster_health-=point
        },
        monsterAttact:function(){
            var point=Math.ceil(Math.random()*20);
            this.player_health-=point
        },
        healUp:function(){
            var point=Math.ceil(Math.random()*20);
            this.monsterAttact()
            this.player_health+=point;
        },
        giveUp:function(){
            this.player_health=0;
            
        }
    }
})
ß