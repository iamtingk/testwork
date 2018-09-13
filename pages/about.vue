<!-- // https://jsonplaceholder.typicode.com/posts -->
<template>
  <div class="container">
    <!-- <p>
      <nuxt-link to="/">Home</nuxt-link> - About</p> -->
    <p>1{{ amount }}</p>
    <a class="btn" href="#" v-on:click="increaseAmount()">Plus (+)</a>
    <a class="btn" href="#" v-on:click="decreaseAmount()">Minus (-)</a>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <!-- <button v-on:click="greet">Greet</button> -->
    <input type="text" v-model="text4" v-on:input="vvii()">
    <p>text4 : {{vvii}}</p>
    <button v-on:click="addCCC()">Btn11</button>
    <input type="text" v-model="text0" v-on:input="addBBB()">
    <input type="number" v-model.number="text1">
    <input type="number" v-model.number="text2">
    <p>text999 : {{text999}}</p>
    <p>text000 : {{text000}}</p>
    <p>title : {{title}}</p>
    <p>text1 : {{text1}}</p>
    <p>text2 : {{text2}}</p>
    <p>text3 : {{parseInt(text1)+parseInt(text2)}}</p>
    <!-- <p>{{data}}</p> -->
    <!-- <p>{{ books }}</p> -->
    <!-- <p>Info-Title : {{info.title}}</p> -->
    <!-- <p>Info-Url : {{info.url}}</p> -->
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <p>{{ user }}</p>
      </li>
    </ul>
    <!-- <p>{{ abc }}</p> -->
    <!-- ok -->
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <!-- <td>{{book.title}}</td> -->
          <td>{{book.url}}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>{{ infoObj }}</p>
  </div>
</template>
<script>
import axios from 'axios'
import jjj from 'static/user.json'

// ok 
import { DB } from '@/services/fireinit.js'
var abcc=""
// import firebase from 'firebase'

// var config = {
//   apiKey: "AIzaSyB1xXJjWaZm_ztInYHCEb5sR7hAPCI_e6U",
//   databaseURL: "https://sherrywork-bb2ec.firebaseio.com/",
//   projectId: "sherrywork-bb2ec",
//   messagingSenderId: "710139833896"
// }

// let app = firebase.initializeApp(config)

// let db = app.database();
// let booksRef = db.ref('books');


// if (!firebase.apps.length) {
//   firebase.initializeApp(config)
// }

// export const DB = firebase.database();
// export const ref = DB.ref('books');

export const _pppp ="ppppp"
export default {

  data() {
    return {
      amount: 0,
      counter: 0,
      text1: 0,
      text2: 0,
      text3: "",
      text4: "",
      text555:"",
      lists:[],
      // text123: "",
      item: '',
      items: {},
      text0: '',
      newbook: {
        title: '',
        url: ''
      },
      text123: DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then(function(snapshot) {
        alert(snapshot.val().title)
        lists.push("1")
        alert(lists.length)
        lists.push(snapshot.val().title)
        
        // _pppp:(snapshot.val().title)
        
        
        // this.text4 = snapshot.val().title.toString(); 
        return snapshot.val().title

      }),
      // text000:"hello",
      text000:_pppp
      // ,books:DB.ref('books').child('-LLfZnhpmExXsNHab8ud')
      // ,books:DB.ref('books').once('value') 

      // ...

      //     .then((res) => {
      //       return { users: res.data.slice(0, 5) }
      //     })

      // abc:booksRef

      //ok
      // ,
      // books: DB.ref('books')
    }

  },
  computed: {
    vvii() {
      return "text123"
    },
    text999:function(){
      // alert("text999")
      var abc = "999"
      // DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then(function(snapshot) {
      //   alert(snapshot.val().title)
      

      // })
      return  abc
    }
  },
  async asyncData() {
    // const nb = Math.max(1, Math.round(Math.random() * 10))
    // return axios.get('static/user.json').then(res => res.data)

    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    // return { users: data }

    // const { data } = axios.get('static/test.json')
    // return { users: data }

    //ok
    // return axios.get('/test.json')
    // .then((res) => {
    //   return { users: res.data.slice(0, 5) }
    // })

    // itemsRef: DB.ref('items/')



    // DB.ref('books').once('value').then(function(snapshot) {
    //   alert(snapshot.val().title);
    // });


    //ok
    // return DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then(function(snapshot) {
    //     // alert(snapshot.val().title)
    //     return {title:(snapshot.val().title)}
    //   })

    return DB.ref('/books/').once('value').then(function(snapshot) {
        // alert(snapshot.val().title)
        return {title:(snapshot.val())}
      })



    // return await DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then((snapshot)=>{
    //   return {title:(snapshot.val().title)}
    // })



      // text000:"hello",

  },
  // firebase: {
  // books: DB.ref('books')
  // },


  // created () {
  //   let vm = this
  //   vm.itemsRef.on('value', function(snapshot) {
  //     vm.items = snapshot.val()
  //   });
  // },

  // 
  // mounted() {
  //   axios.get('/test.json')
  //     .then((res) => {
  //       return { users: res.data.slice(0, 5) }
  //     })
  // },
  methods: {
    increaseAmount() {
      this.amount = this.amount + 1
    },
    decreaseAmount() {
      this.amount = this.amount - 1

    },
    addM() {
      text3 = text1
    },
    addCCC() {
      this.amount = this.amount + 1
      DB.ref('books').push(this.newbook);
    },
    addBBB() {
      this.amount = this.amount + 1;
      this.newbook.title = this.text0;
      this.newbook.url = '0';

      // DB.ref('/books/-LLfZnhpmExXsNHab8ud').once('value').then(function(snapshot) {
      //           return this.text4=snapshot.val().title;
      //         }) 
      let acc=""
      DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then(function(snapshot) {
        // alert(snapshot.val().title)
        alert(snapshot.val().title.toString());
        acc = snapshot.val().title.toString();
        this.newbook.url = snapshot.val().title.toString();
        
      })
      alert(acc)
      alert("AAA")
      alert(this.newbook.url+"321")


      DB.ref('/books/-LLhvYLJd8SXUmIdeWfg').once('value').then(function(snapshot) {
        // alert(snapshot.val().title)
        this.text4 = snapshot.val().title.toString();
        setDat(snapshot.val().title.toString());

      })


      // .then((res) => {
      //       return { users: res.data.slice(0, 5) }
      //     })



      if (this.text0.length > 2) {
        // DB.ref('books').child('-LLfZnhpmExXsNHab8ud').set(this.newbook)
        // DB.ref('books').push(this.newbook);
      }

    },
    setDat: function(data) {
      //     // `this` 在方法里指向当前 Vue 实例
      //     alert('Hello ' + this.name + '!')
      //     // `event` 是原生 DOM 事件
      //     if (event) {
      //       alert(event.target.tagName)
      //     }
      //   } {
      alert(data)

      // this.text4 = data;
      // alert(data)
    }
  }
  // ,
  // methods: {
  //   greet: function(event) {
  //     // `this` 在方法里指向当前 Vue 实例
  //     alert('Hello ' + this.name + '!')
  //     // `event` 是原生 DOM 事件
  //     if (event) {
  //       alert(event.target.tagName)
  //     }
  //   },
  //   getTableData: function() {
  //     var self = this;
  //     this.$http.get('static/user.json').then(response => {
  //       console.log('数据加载成功')

  //       this.data = JSON.parse(response.data)
  //       // console.log(JSON.parse(response.data));
  //       // self.tableContent.push(response.body);
  //     }, response => {
  //       console.log('数据加载失败')
  //     })
  //   }
  // }
}

</script>
<!-- 
<script>
import axios from 'axios'

export default {
  data () {
    return {
      amount: 0
    }
  },
  asyncData() {
    const nb = Math.max(1, Math.round(Math.random() * 10))
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${nb}`).then(res => res.data)
  },
  transition: 'bounce',
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
  ],methods: {
    increaseAmount () {
      this.amount = this.amount + 1
    },
    decreaseAmount () {
      this.amount = this.amount - 1
    }
  }
  // mounted () {
  //       $("body").append("1");
  //   }


}

</script> -->
<style>
.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}

</style>
