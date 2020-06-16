
new Vue({
    el: '#app',
    data: {
        todoItem: [],
        query: ''
    },
    methods: {
        todoInput: function() {
            if(this.query !== ''){
                var obj = {};
                localStorage.setItem(this.query, this.query);
                this.todoItem.push(this.query);
                this.query = '';
            }else {
                alert('message');
            }
            
        }
    }
})