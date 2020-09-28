// mixinはvue-cliの場合jsに書く
export default {
    data() {
        return {
           message1: "hi",
           message2: "takehiko",
        }
    },
    methods: {
        alert(){
            alert(this.message1);
        }
    },
    computed: {
        upper(){
            return this.message.toUpperCase();
        }
    }
}