new Vue({
    el: '#app',
    data: {
        newMonthTask: '',
        newWeekTask: '',
        newDayTask: '',
        deadlineDateMonth: '',
        deadlineDateWeek: '',
        deadlineDateDay: '',
        monthTasks: [],
        weekTasks: [],
        dayTasks: []
    },
    methods: {
        addTask(type) {
            let task = {};
            if (type === 'month' && this.newMonthTask) {
                task = {
                    name: this.newMonthTask,
                    deadline: this.deadlineDateMonth,
                    completed: false
                };
                this.monthTasks.push(task);
                this.newMonthTask = '';
                this.deadlineDateMonth = '';
            } else if (type === 'week' && this.newWeekTask) {
                task = {
                    name: this.newWeekTask,
                    deadline: this.deadlineDateWeek,
                    completed: false
                };
                this.weekTasks.push(task);
                this.newWeekTask = '';
                this.deadlineDateWeek = '';
            } else if (type === 'day' && this.newDayTask) {
                task = {
                    name: this.newDayTask,
                    deadline: this.deadlineDateDay,
                    completed: false
                };
                this.dayTasks.push(task);
                this.newDayTask = '';
                this.deadlineDateDay = '';
            }
        },
        deleteTask(index, type) {
            if (type === 'month') {
                this.monthTasks.splice(index, 1);
            } else if (type === 'week') {
                this.weekTasks.splice(index, 1);
            } else if (type === 'day') {
                this.dayTasks.splice(index, 1);
            }
        },
        clearCompleted() {
            this.monthTasks = this.monthTasks.filter(task => !task.completed);
            this.weekTasks = this.weekTasks.filter(task => !task.completed);
            this.dayTasks = this.dayTasks.filter(task => !task.completed);
        }
    }
});
