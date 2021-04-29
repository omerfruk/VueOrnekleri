new Vue({
    el: "#app",
    data: {
        player_health: 100,
        monster_health: 100,
        gameIsOn: false,
        logs:[],
    },
    methods: {
        startGame: function () {
            this.gameIsOn = true;
            console.log(this.gameIsOn);
        },
        playerAttact: function () {
            var point = Math.ceil(Math.random() * 10);
            this.monsterAttact();
            this.add_to_log({turn:"p",text:"oynucu Atagi ("+ point +")"})
            this.monster_health -= point
        },
        playerSpecialAttact: function () {
            var point = Math.ceil(Math.random() * 25);
            this.monsterAttact();
            this.add_to_log({turn:"p",text:"oynucu Atagi ("+ point +")"})
            this.monster_health -= point
        },
        monsterAttact: function () {
            var point = Math.ceil(Math.random() * 20);
            this.player_health -= point
            this.add_to_log({turn:"m",text:"canavar Atagi ("+ point +")"})
        },
        healUp: function () {
            var point = Math.ceil(Math.random() * 20);
            this.monsterAttact()
            this.add_to_log({turn:"p",text:"oynucu can basma ("+ point +")"})
            this.player_health += point;
        },
        giveUp: function () {
            this.player_health = 0;
            this.add_to_log({turn:"p",text:"oyuncu pes etti"})

        },
        add_to_log:function(log){
            this.logs.push(log);
        }
    },
    watch: {
        player_health: function (value) {
            if (value <= 0) {
                this.player_health = 0;
                if (confirm("Oyunu kaybettin tekrar oynamak istermisin ?")) {
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs=[];
                }
            } else if (value >= 100) {
                this.player_health = 100;
            }
        },
        monster_health: function (value) {
            if (value <= 0) {
                this.monster_health = 0;
                if (confirm("Oyunu kazandın tekrar oynamak istermisin ?")) {
                    this.player_health = 100;
                    this.monster_health = 100;
                    this.logs=[];
                }
            }
        },
    }
})
