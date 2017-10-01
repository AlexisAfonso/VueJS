{
    'use strict';
    new Vue ({
        //L'element definissant le perimetre d'action de l'application Vue.js
        el: 'main#app',

        // Modele de données de l'application
        data: {
            tasks : [
                { title : "Nourrir le chat", isDone: true},
                { title : "Acheter un chiot", isDone : false},
                { title : "Revendre le chat", isDone : false},
                { title : "Preparer une fete", isDone : true},
                { title : "Inviter la voisine", isDone : false}
            ],
            task: ""
        },
        filters: {
            pluralised: function (word, remain){
                return remain > 1 ? word + "s" : word;
            }
        },
        methods:{
            taskUpdated: function(taskNumber){
                this.tasks[taskNumber] = false;
            },
            addTask: function (name) {
                this.tasks.push(
                    {
                        title: name,
                        isDone: false
                    }
                );
                this.task = "";
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                return this.tasks;
            },
            deleteTask: function (index) {
                this.tasks.splice(index,1);
            }
        },
        computed: {
            remainingComputed: function () {
                return this.tasks.filter(task => task.isDone).length;
            }
        }
    });
}