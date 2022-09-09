[TOC]





## 1、翻转数组

学下新方法异或操作

```javascript
var arr = ['1', '2', '3', '4', '5', true];//true实际值为1
var length = arr.length;
var times = (length - 1) / 2;//这一步很妙，因为长度为4和5的数组经历的交换次数都是2,而6,7经历地交换次数都是3

//加法交换位置
for (let i = 0; i < times; i++) {
    arr[i] = arr[i] + arr[length - i - 1];
    arr[length - i - 1] = arr[i] - arr[length - i - 1];
    arr[i] = arr[i] - arr[length - i - 1];
}

//利用异或交换位置
//这玩意优势就是可以交换各种数据类型
for (let i = 0; i < times; i++) {
    arr[i] = arr[i] ^ arr[length - i - 1];
    arr[length - i - 1] = arr[i] ^ arr[length - i - 1];
    arr[i] = arr[i] ^ arr[length - i - 1];
}
console.log(arr);
```









## 2、打印当前具体日期时间

```javascript
//格式化日期 年月日
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;//加1，是因为返回的月份比实际小1
var dates = date.getDate();//返回的是号数
var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var day = date.getDay();//由于返回是数字，所以利用了上面的数组，返回的0代表星期天
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);

//封装一个函数，返回当前的时分秒，格式 01:01:01
function getTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    //下面的操作就是避免出现 1:2:3 这种情况，也就是为了好看点，前面补个0
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    return h + ':' + m + ':' + s;
}
console.log(getTime());

//获取当前的年月日，具体时间
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day] + ' ' + getTime());
```





## 3、倒计时

```javascript
// 倒计时函数
// 参数为允许输入的时间(规定的时间)
function countDown(time) {
    var nowTime = +new Date(); // 返回当前时间毫秒数
    var inputTime = +new Date(time); // 返回的是允许用户输入的总的毫秒数
    var times = (inputTime - nowTime) / 1000; // 得到当前时间的秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    // 算法强啊，先除以3600得到应该差多少个小时，然后余24，满了24的就算到一天里面去，不满的就是差的小时，补上了一天，不到一天的那几个小时
    var h = parseInt(times / 60 / 60 % 24); // 时
    h = h < 10 ? '0' + h : h;
    // 跟算小时差不多，求出差多少个分钟，满了60分钟的算到小时去，分钟只计算不满一个小时的那几个分钟
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    // 爱了，直接计算不满一分钟的秒数
    var s = parseInt(times % 60); // 当前秒数
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
// 特别注意下面这个写法，参数写字符串，只要按照这个格式，它就会依次读取你的年月日，时分秒
console.log(countDown('2022-9-5 16:16:49'));

```





## 4、数组去重

```javascript
// 数组去重
function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // 遍历原数组，如果遍历的元素在newArr了就不放进去，如果不存在就push进去，保证相同的元素只能push一个
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
```





## 5、求字符出现位置及次数

```javascript
// 查找某个字符出现的次数和位置
//str 目标字符串，c 查找的字符
function query(str, c) {
    var index = str.indexOf(c);
    var number = 0;
    while (-1 !== index) {
        number++;
        console.log('index:' + index);
        index = str.indexOf(c, index + 1);
    }
    console.log('number是' + number);
}
```





## 6、统计出现次数最多的字符

```javascript
// 判断字符串 'aassccaa' 中出现最多的字符，并统计其个数
//o.a = 4;
//o.s = 2;
//o.c = 2;
// 核心算法：利用charAt() 遍历这个数组
// 把每个字符都存储给对象，如果对象没有该属性，则为 1，如果有了则 加1
//遍历对象，得到最大值和字符
//@param str 遍历的字符串
function findMost(str) {
    //1.统计次数
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var chars = str.charAt(i); // chars 是字符串的每一个字符
        //判断对象obj是否有chars属性
        if (obj[chars]) { // 这里是判断是否存在属性chars
            obj[chars]++; // 这里则是给chars属性值++
        } else {
            obj[chars] = 1; // 这里是创建这个属性，属性名 chars 值 1
        }
    }
    console.log('统计结果如下');
    console.log(obj);

    //2.遍历对象
    var max = 0;
    var ch = ''
    for (var k in obj) {
        //k 得到的是属性名
        //o[k] 就是属性值
        if (obj[k] > max) {
            max = obj[k];
            ch = k;
        }
    }
    console.log('最多的字符：' + ch + '' + ' 次数为' + max);
}
findMost('dadwfafwafgafcaefxfrfwca');
```







## 7、不同时间段 不同问候语

好看喵~o( =∩ω∩= )m

```html
<body>
    <div><img src="images/morning.jpeg" alt=""><p>早上好呀</p></div>    

    <script>
        //1.获取元素
        var img = document.querySelector('img');
        var p = document.querySelector('div p');

        //2.得到当前小时数
        var date = new Date();
        var hour = date.getHours();
        //3.判断小时数改变图片文字信息
        if(hour < 10){
            img.src = 'images/morning.jpeg';
            p.innerHTML = 'buongiorno la mia principessa';
        }else if(hour < 18){
            img.src = 'images/noon.jpeg';
            p.innerHTML = '伸个懒腰，下午的太阳，暖暖的';
        }else {
            img.src = 'images/night.jpeg';
            p.innerHTML = '喵喵喵';
        }
    </script>
</body>
```







## 8、隐藏/显示密码

```html
    <style>
        @font-face {
        font-family: 'icomoon';
        src: url('../fonts/icomoon.eot?d0in8s');
        src: url('../fonts/icomoon.eot?d0in8s#iefix') format('embedded-opentype'),
             url('../fonts/icomoon.ttf?d0in8s') format('truetype'),
             url('../fonts/icomoon.woff?d0in8s') format('woff'),
             url('../fonts/icomoon.svg?d0in8s#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
        }

        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }

        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }

        .box label {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    </style>

<body>
    <div class="box">
        <input type="password" id="pwd">
        <label for="" ><a href='javascript:void(0)' id="eye" style="font-family: 'icomoon'; font-size: 18px; text-decoration: none ;color: #444444;"></a></label>
    </div>

    <script>
        // 1.获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2.注册事件
        var flag = 0;

        eye.onclick = function() {
            if(flag == 0){
                pwd.type = 'text';
                eye.innerHTML = '';
                flag = 1;
            } else {
                pwd.type = 'password';
                eye.innerHTML = '';
                flag = 0;
            }
        }


    </script>
</body>
```







## 9、点叉号元素消失

```html
    <style>
        i {
            font-style: normal;
        }

        .box {
            width: 300px;
            margin: 100px auto;
        }

        .box img {
            width: 300px;
        }
        .box i {
            display: block;
            background-color: #e3e5e7;
            width: 20px;
            padding-left: 5px;
        }
    </style>

<body>
    <div class="box">
        <i class="close-btn">×</i>
        <img src="images/night.jpeg" alt="">
        
    </div>

    <script>
        // 1.获取元素
        var btn = document.querySelector('.close-btn');
        var box = document.querySelector('.box');
        
        // 2.注册事件 处理程序
        btn.onclick = function(){
            box.style.display = 'none';
        }

    </script>
</body>
```









## 10、点击隐藏文本内容

```html
 <!-- search模块 -->
 <div class="search">
     <input type="search" name="" id="" value="嘉然今天吃什么">
     <button></button>
 </div>        


<script>
      var input = document.querySelector('input');

      input.onfocus = function () {
          if (this.value === '嘉然今天吃什么')
              this.value = '';
          //获得焦点需要把文字框里面的颜色变黑
          this.style.color = '#333';
      }

      input.onblur = function () {
          if (this.value === '') {
              this.value = '嘉然今天吃什么';
          }
          this.style.color = '#62676e';
      }
</script>
```







## 11、密码框验证强度

```html
<li><label for="">登录密码：</label><input type="text" class="inp" placeholder="请保证6-14位，且包含大小写"id="pwd">
<span class="error" id='prompt'><i class="error_icon"></i> 密码不正确，请重新输入</span>
</li>

<script>
var inputAll = document.querySelectorAll('.inp');
var plhdArray = new Array(100);
var i = 0;
var inp = document.querySelector('#pwd');
var pmt = document.querySelector('#prompt');                

inputAll[i].onblur = function () {
    this.placeholder = '请保证6-14位，且包含大小写';
    //根据长度进行判断
    if (this.value.length < 6 || this.value.length > 14) {
        pmt.style.color = '#fa5a57';
        pmt.innerHTML = '&nbsp;&nbsp;&nbsp; 长度需保证在6-14位';
    } else {
        pmt.style.color = '#2ba833';
        pmt.innerHTML = '&nbsp;&nbsp;&nbsp; 密码输入正确';
    }
}
</script>
```





















