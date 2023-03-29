[TOC]



### 八、集合

#### （1）基本定义

容器就是这家伙啊
集合也是对象，也有内存地址，所以你很可能在集合中放集合的内存地址，老套娃了桀桀

![image-20220319210004647](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319210004647.png)

![image-20220319210035263](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319210035263.png)

![image-20220319210650511](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319210650511.png)

![image-20220319210749807](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319210749807.png)

#### （2）集合的继承结构

##### 一、Collection集合

> [我自己画的图在里面的Logical View里面 有耐心点 等会就加载出来 
>
> 2022/3/20，有对ArrayList集合进行补充一些要点，详情请点击链接
>
> [关于Collection集合的相关数据结构.mdl](..\Rose\关于Collection集合的相关数据结构.mdl) 

> ![image-20220320144343122](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320144343122.png)
>
> ![image-20220321110546545](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321110546545.png)

Collection继承了Iterable，然后对象Collection就可以调用Iterator方法，就可以返回一个迭代器，拿到这个迭代器的目的就是去遍历集合中的元素
下图全是接口嗷

![image-20220319212551442](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319212551442.png)

下面这三兄弟是对上面List接口的实现

![image-20220319213031373](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319213031373.png)

下图是关于Set接口的操作

![image-20220319213514552](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319213514552.png)

##### 二、map集合

> [我自己画的图在里面的Logical View里面 有耐心点 等会就加载出来]
>
> [关于Map集合相关的数据结构.mdl](..\Rose\关于Map集合相关的数据结构.mdl) 
>
> ![image-20220322163855310](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322163855310.png)

![image-20220319215222324](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319215222324.png)

下面是几个小弟

![image-20220319215431525](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319215431525.png)

![image-20220319215602623](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319215602623.png)

#### （3）所有的实现类的特点

![image-20220319220111935](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319220111935.png)

![image-20220319220046096](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319220046096.png)

#### （4）集合存储元素的特点

![image-20220319220302587](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319220302587.png)

### ====Collection集合====

#### （1）Collection集合的常用方法

```java
//把e引用加进去，感觉就是把一个对象的地址加进集合去
boolean add(Object e);
//获取集合中元素的个数
//我又回来啦，注意注意这size获取的是集合中元素的个数，而不是集合的capacity
int size();
//清空集合
void clear();
//判断当前集合是否包含元素e，包含就返回true，不包含就返回false
/*注意，特意回来补充，这个包含方法底层调用了equals方法，遇到重写了该方法的像String类型的得小心啊，毕竟字符串的contains其实是比较字符串内容*/
boolean contains(Object e);
//去除集合中的元素e
boolean remove(Object e);
//判断集合是否为空（集合中是否存在元素）
boolean isEmpty();
//把集合中的元素转换为数组
Object[] toArray();//具体见下面的图片
```

![image-20220320004429191](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320004429191.png)

![image-20220320004821769](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320004821769.png)

![image-20220320005751796](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320005751796.png)

#### （2）迭代器

```java
/*三个点
第一，这个是Iterator类里面的方法，所以需要通过new一个Collection对象，由于继承了父类Iterable，由此可以调用父类的iterator方法，然后由此new一个迭代器Iterator对象，然后就可以调用这几个迭代的方法了，所以别忘了Iterator嗷
第二，看下图，你会发现迭代器的指针并不是一开始指向第一个元素的，当你next()之后才会指向吧，估计也是不为了漏元素，不然你第一个就打印next了，那first的首元素不是寄了
第三，注意你存进去什么类型，调用it.next()，返回值是Object类型的，所以得写一个Object obj = it.next();来接收，我开始还以为你存进去什么类型，it.next();的返回值也是什么类型呢
*/
boolean hasNext();//检查是否还有元素可以迭代
Object next();//返回集合的下一个元素
```

![image-20220320142920151](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320142920151.png) 

​	![image-20220320142955178](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320142955178.png)

```java
public static void main(String[] args) {
    //创建集合对象
    Collection c = new ArrayList();/*这里如果是ArrayList那么下面打印的时候会有序（即跟存进去一个顺序），而且能打印重复的*/
    Collection c = new HashSet();/*这里如果是HashSet那么下面打印的时候就不会有序了（即跟存进去不是一个顺序），而且也不能打印重复的*/
    //添加元素
    c.add("第一");//尽管这里添加的是字符串，即String对象，但是，add参数的方法是Object，这玩意就向上转型了
    c.add("第二");//然后下面it.next()指向的内容就是个这个字符串对象
    c.add("第三");
    c.add("第四");
    c.add("第五");
    c.add("第六");
    //对集合进行迭代
    //首先先创建迭代器对象Iterator
    Iterator it = c.iterator();
    //好了现在我们搞定了个对象，我们将通过这个迭代器进行迭代
    while(it.hasNext()){
        System.out.println(it.next());
    }

}
```

#### （3）一道有趣的易错题

这是题目可以试着先做一下

![image-20220320153102812](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320153102812.png)

下面就是该题的内存图
我只给你点一下，首先contains();方法底层其实是用equals()方法去比较是否包含的，上面的题理论上来说确实不应该包含啊，但是为什么答案为true呢，因为啊，你放进容器的这几个引用都是String类型的，而你看下面第三张图，其实是通过equals();方法区进行遍历的，那么你还记得吗，两个String类型相互equals比较，最后其实是比较他们的内容啊，因为他们重写了该方法，而上题其实你的两个不同的引用new的两个不同的对象都是指向同一个字符串常量池对象的，也就是说这两个new出来的对象指向的都是同一个字符串对象啊，结合下图最好

这里可能有点不同的是我们有时候String s1 = "aaa"; 或者String s2 = new String("aaa");尽管第二种中间多了个堆内存的对象，但调用equals();应该还是比较他们在方法区字符串常量池创建的字符串对象的内容吧，这个可能要翻源码了，先记着吧

![image-20220320153008778](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320153008778.png)

![image-20220320152955891](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320152955891.png)

![image-20220320153026430](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320153026430.png)

### （4）每个集合里面的元素都要重写equals方法

但是8种数据类型不用，因为数据类型SUN公司都重写好了，只是你自己搞得类的引用类型要用

为什么我要这样强调呢，万一用户突然想查看集合里面是否包含某个元素，我如果不重写必然是false啊，但其实呢是有重复的，所以重写之后就不会出这样的问题了，而且你也可以通过这个来避免用户名注册时重复这种情况的发生啊

```java
public class test01 {
    int i = 0;

/*总的来说我写这段代码就是想告诉你，记得自己创建的类要重写equals和toString方法，然后还有几个点
contains方法和remove方法都会因为你equals方法的重写而改变，而且我个人也很支持这种变化，因为你问是否包含
和删除时，都应该以别人输入对应的内容，然后我再挨个遍历，找到集合中符合这个内容的元素的内容进行查找，而不是查找这些
元素的地址，然后记得要打印内容得重写toString()方法嗷
*/
public static void main(String[] args) {
        //先创建集合对象
        Collection c = new ArrayList();
        //创建用户对象
        User user1 = new User("小明");
        User user2 = new User("小明");
        //User user2 = new User("小红");

        //添加一个对象
        c.add(user1);
        //搞一个迭代器对象
        Iterator it = c.iterator();
        //判断是否包含
        if(c.contains(user2)){
            System.out.println("用户名重复，请重新输入！");
        }else{
            System.out.println("账户注册成功！");
        }
        //这里因为remove也重写了equals方法所以判断字符串，然后把user1也删了
        if(c.remove(user2)){
            System.out.println("删除咯");
        }else{
            System.out.println("妹儿删呢");
        }

        while(it.hasNext()){
            System.out.println("现在的用户有：" + it.next());
        }
    }


}

class User{
    private String name;

    //无参构造方法
    public User(){

    }
    //搞个有参的拿来赋值
    public User(String name){
        this.name = name;
    }
    //重写个equals方法
    public boolean equals(Object o){
        //这里我再简化一下不判断o==null了，因为你既然为空指针肯定底层对象不会是User，但是我还是希望你不要忘记要排除空指针这回事
        //算了还是写了吧
        if(!(o instanceof User) || o == null) return false;
        if(o == this) return false;
        User u = (User) o;
        return u.name.equals(this.name);
    }
    //重写个toString()方法
    public String toString() {
        return this.name;
    }

}
```

#### （5）关于迭代器使用的注意事项

迭代器相当于在你创建迭代器的时候拍一张快照，然后如果你在迭代器后面再添加元素，明显在拍照后面加，那么迭代器很可能迭代不到了，然后就是如果你想删元素的话，就调用迭代器里面的iterator.remove()，因为这个玩意可以实现把快照的和原本集合的指定元素全部删除，具体请看下面的叙述

![image-20220320183059189](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320183059189.png)

![image-20220320183204209](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320183204209.png)

![image-20220320183135947](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320183135947.png)

#### （6）List接口特有方法

![image-20220320184339325](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320184339325.png)

```java
//这里是特有的接口方法
//在列表指定的位置插入一个指定元素（第一个参数是下标）,这个是插到那里去，然后把本来下标的元素和其后面的全部往后移
//该方法使用次数不多，因为对于ArrayList集合效率较低
void add(int index, Object element);
//根据下标获取元素
Object get(int index);
//获取指定对象第一次出现处的索引
int indexOf(Object o);
//获取对象最后一次出现处的索引
int lastIndexOf(Object o);
//删除指定下标的元素
Object remove(int index);
//修改指定下标的元素，右边是修改内容
Object set(int index, Object element);
```

```java
package com.lzo.test;

import java.util.*;

public class aaa {
    public static void main(String[] args) {
        //创建List类型的集合
        List myList1 = new LinkedList();
        List myList2 = new Vector();
        List myList = new ArrayList();

        //添加元素，注意都是默认尾插法奥
        myList.add("a");
        myList.add("b");
        myList.add("c");
        myList.add("d");
        myList.add("c");
        myList.add("f");

        System.out.println("先迭代原始集合的元素");
        for (int i = 0; i < myList.size(); i++) {
            Object o = myList.get(i);
            System.out.println("第" + i + "位的元素是" + o);
        }
        
        System.out.println("====================");
        //在列表指定的位置插入一个指定元素（第一个参数是下标）
        //该方法使用次数不多，因为对于ArrayList集合效率较低
        myList.add(1, "插入的下标为1的元素");

        //迭代
        Iterator it = myList.iterator();
        System.out.println("插入后用whiel循环迭代出来的集合是：");
        while(it.hasNext()){
            System.out.println(it.next());
        }

        System.out.println("====================");
        //根据下标获取元素
        System.out.println("用for循环迭代出来的结果是：");
        for (int i = 0; i < myList.size(); i++) {
            Object firstOjb = myList.get(i);
            System.out.println(firstOjb);
        }

        System.out.println("====================");
        //获取指定对象第一次出现处的索引
        System.out.println("字符c第一次出现处的索引是：" + myList.indexOf("c"));
        //获取对象最后一次出现处的索引
        System.out.println("字符c最后一次出现处的索引是：" + myList.lastIndexOf("c"));

        //删除指定下标的元素
        System.out.println("删除了下标为0的元素");
        myList.remove(0);
        System.out.println("集合剩余长度为：" + myList.size());

        System.out.println("====================");
        //修改指定下标的元素，右边是修改内容
        System.out.println("修改了指定位置的元素d，下标为3");
        myList.set(3, "d被改了哦");

        System.out.println("用for循环迭代出来的结果是：");
        for (int i = 0; i < myList.size(); i++) {
            Object obj = myList.get(i);
            System.out.println("第" + i + "位的元素是" + obj);
        }

    }
}
/*
先迭代原始集合的元素
第0位的元素是a
第1位的元素是b
第2位的元素是c
第3位的元素是d
第4位的元素是c
第5位的元素是f
====================
插入后用whiel循环迭代出来的集合是：
a
插入的下标为1的元素
b
c
d
c
f
====================
用for循环迭代出来的结果是：
a
插入的下标为1的元素
b
c
d
c
f
====================
字符c第一次出现处的索引是：3
字符c最后一次出现处的索引是：5
删除了下标为0的元素
集合剩余长度为：6
====================
修改了指定位置的元素d，下标为3
用for循环迭代出来的结果是：
第0位的元素是插入的下标为1的元素
第1位的元素是b
第2位的元素是c
第3位的元素是d被改了哦
第4位的元素是c
第5位的元素是f
*/
```

![image-20220320184339325](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320184339325.png)

![image-20220320184724622](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320184724622.png)

![image-20220320184741181](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320184741181.png)

![image-20220320185036670](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320185036670.png)

##### ①关于ArrayList

两个点，底层是先创建一个长度为0的数组，当添加第一个元素的时候，初始化容量为10，也就是说不是一开始就是10的
底层是一个Object的数组

还有个点，当容量不够了，这家伙会自动算出当前的容量的一半，然后把这个增加的容量加上原有的容量，也就是说每次扩容*1.5倍
关于由来其实跟底层代码有关，我只提一嘴，它有一个操作是，旧的容量 >> 1 ，很明显这就是相当于算出了容量的一半 

![image-20220320205355833](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320205355833.png)

![image-20220320211844784](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320211844784.png)	

##### ②ArrayList的另一个可以实现集合转型的构造方法

![image-20220320213139199](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320213139199.png)

#### （7）手动建立一个单链表

```java
package com.lzo.test;


import java.util.*;

public class aaa {
    public static void main(String[] args) {
        SingleLink link = new SingleLink();

        link.add(100);
        link.add(200);
        link.add(300);
        link.add(400);

        System.out.println("一共添加了" + link.size() + "个节点");

    }
}

class SingleLink{
    //头结点
    Node header;

    int size = 0;

    public int size(){
        return size;
    }
    //向链表添加元素的方法
    public void add(Object data){
        //创建一个新的节点对象
        //让之前单链表的末尾节点next指向新节点对象
        if(header == null){
            //如果没有节点就new一个对象作为新节点
            header = new Node(data, null);
        }else{
            //说明头节点不为空
            //头节点已经存在了
            //找到当前末尾节点，让当前末尾节点的next是null
            Node currentLinkLastNode = findLast(header);
            currentLinkLastNode.next = new Node(data, null);  //这行就是让它的尾巴指向null
        }
        size++;
    }

    //专门查找末尾节点的方法，不知道为啥总之搞个私有的吧
    private Node findLast(Node node){
        //下面是一个递归去找最后的节点的内容，也可以用while，不过试试递归嘛都挺好的
        if (node.next == null) {
            return node;
        }else{
            return findLast(node.next);
        }
    }


    //删除链表中某个结点的方法
    public void remove(Object data){

    }

    //修改链表中某个数据的方法
    public void modify(Object data){

    }

    //查找链表中某个数据的方法
    public void search(Object data){

    }

}

class Node{
    //存储的数据
    Object data;

    //下一个结点的地址
    Node next;

    //无参构造
    public Node(){

    }

    //有参构造
    public Node(Object data, Node next){
        this.data = data;
        this.next = next;
    }

}
```

#### （8）链表优缺点

这里补充一个小地方，那就是LinkedList集合底层也是有下标的，不是说链表数据结构就没有下标，不信你看下下图嘛，照样迭代get(i)打印，为什么咱们说数组快呢，仅仅是因为ArrayList集合底层是数组啊，内存连续，遍历起来多快
还有些区别就看下图吧

![image-20220320235429084](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320235429084.png)

![image-20220320235726275](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220320235726275.png)

#### （9）LinkedList源码及双向链表

https://www.bilibili.com/video/BV1Rx411876f?p=686&t=26.6

下图的意思就是告诉你我们是面向接口编程，因为他们都是实现了同一个接口List的类，所以我们调用的方法都是接口中的方法，而看下图，你可以你换个接口中的方法依然能实现同样的操作，只是底层不同，具体的请你后面理解了再回来补充吧时

![image-20220321105742680](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321105742680.png)

#### （10）Vector

和ArrayList集合区别就是，Vector集合是线程安全的，并且**每次扩容是2倍，而ArrayList是1.5倍**

![image-20220321111339430](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321111339430.png)

![image-20220321111351498](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321111351498.png)

#### （11）泛型

###### ①基本使用及定义

说白了就是强行让集合只能存储同一类型的数据

![image-20220321113607993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321113607993.png)

![image-20220321113650601](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321113650601.png)

![image-20220321113438035](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321113438035.png)

###### ②自动类型推断机制（又称钻石表达式）

说白了就是

```java
List<Animal> myList = new ArrayList<Animal>();//这是以前的写法
List<Animal> myList = new ArrayList<>();//也就是说比上面可以少写个Animal
```

![image-20220321113848945](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321113848945.png)

###### ③优点

我在网上看到如果你使用泛型，那么你存进去什么类型，取出来还是什么类型，而如果你不使用取出来的就是Object类，那这个时候你想调用子类的方法就需要instanceof向下转型了

![image-20220321114541351](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321114541351.png)

###### ④自定义泛型

卧槽感觉下面这玩意好像是让类也能够带一个形式参数链表了的感觉，这个自定义挺牛啊

![image-20220321115639569](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321115639569.png)

具体实现请看点击下方链接

https://www.bilibili.com/video/BV1Rx411876f?p=691&t=11.7

#### （12）增强for循环（foreach）

说白了就是通过元素类型和集合的变量名从头至尾比比遍历输出整个集合

![image-20220321120301994](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321120301994.png)

![image-20220321120236758](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321120236758.png)

#### （13）HashSet和TreeSet集合

感觉很少用啊，具体的去看下面的视频吧

https://www.bilibili.com/video/BV1Rx411876f?p=694&t=6.8

### ====Map集合====

#### （1）Map集合里面的方法

###### ①具体方法

```java
package com.lzo.test.hello.StringBuffer;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class IDoNotKonwWhatIsThis {
    public static void main(String[] args) {
        //创建集合Map对象
        Map<Integer, String> map = new HashMap<>();
        //向集合中添加键值对
        map.put(1, "我");//1在此处进行了自动装箱
        map.put(2, "爱");
        map.put(3, "你");

        //遍历所有元素
        System.out.println("==============");
        Collection<String> values1 = map.values();
        for(String s: values1){
            System.out.println(s);
        }
        System.out.println("==============");

        //通过key获取value
        String value = map.get(2);
        System.out.println("获取的下标为2的元素是：" + value);
        //获取键值对的数量
        System.out.println("键值对的数量是" + map.size());
        //通过key删除key-value
        map.remove(2);
        System.out.println("删除一个key之后键值对的数量是" + map.size());
        //判断是否包含某个key
        //contains方法底层依旧调用equals进行对比，所以自定义的类型（自己写的类），需要重写equals方法
        System.out.println("是否包含key为4的元素：" + map.containsKey(4));
        //判断是否包含某个value
        System.out.println("是否包含被删除的value爱：" + map.containsValue("爱"));

        //打所有value
        System.out.println("==============");
        Collection<String> values = map.values();
        for(String s: values){
            System.out.println(s);
        }
        System.out.println("==============");
        //清空集合
        map.clear();
        System.out.println("清空后键值对的数量是" + map.size());
        //判断是否为空
        System.out.println("集合的元素是空：" + map.isEmpty());
    }
}
/*
==============
我
爱
你
==============
获取的下标为2的元素是：爱
键值对的数量是3
删除一个key之后键值对的数量是2
是否包含key为4的元素：false
是否包含被删除的value爱：false
==============
我
你
==============
清空后键值对的数量是0
集合的元素是空：true
*/
```

https://www.bilibili.com/video/BV1Rx411876f?p=696&t=645.3

具体的请看视频

![image-20220321135943774](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321135943774.png)

###### ②关于Map.Entry<K, Y>内部类的理解

下面的内容是

```java
Set<Map.Entry<K, V>> entrySet();//将Map集合转换为一个Set集合
/*看下面第一张图 Set集合中的单个对象就是"1=zhangsan"，单个对象就是"2=lisi"...这个Map.Entry其实就是一个数据类型，记得一个类可以叫做数据类型吗，而这个正是一个内部类，即Map类里面还有个Entry类，而Map.Entry正是内部类，而它也是一个数据类型，而Set集合里面存储的就是元素就是这个类型，至于为什么会是"1=zhangsan"，我也还不太明白*/
//我回来啦，我这就告诉你这是什么意思
Map.Entry<Integer, String> node = it2.next();//搞一个引用node指向那个内部类Map.Entry
Integer key = node.getKey();//我现在大概懂那个所谓的"1=zhangsan"成为一个对象了
String value = node.getValue();//其实就是通过泛型，把这个键值对引入到Map.Entry这个内部类里面去了
System.out.println(key + "=" + value);//然后我们就可以分别单独的打印他们了，也就是把这个数据放到那个内部类里面去了

```

![image-20220321140202683](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321140202683.png)

![image-20220321140102698](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321140102698.png)

![image-20220321140149404](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321140149404.png)

下面是一个内部类的一些操作，方便你理解

![image-20220321140806197](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321140806197.png)

![image-20220321140751712](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321140751712.png)

###### ③遍历Map集合

如果是大数据量迭代的话，**建议用增强for循环，这个效率高点**
因为你看下面代码嘛，你如果迭代器的话是每次迭代要先创建一个node，然后再创建一个key和value变量去接受node.getKey()和node.getValue的值，然后再打印这两个变量的，而那个foreach就是像遍历数组的感觉（当然底层并不是数组，而是哈希表数据结构），直接打印node.getKey()和node.getValue()，具体的我也不太懂

```java
package com.lzo.test.hello.StringBuffer;

import java.util.*;

public class IDoNotKonwWhatIsThis {
    public static void main(String[] args) {
        //第一种方式，获取所有的key，通过key对集合进行遍历value
        Map<Integer, String> map = new HashMap<>();
        map.put(4, "四号");
        map.put(5, "五号");
        map.put(3, "三号");
        map.put(2, "二号");
        map.put(1, "一号");
        //遍历Map集合
        //获取所有的key，并且把其放到一个Set集合里面去
        Set<Integer> keys = map.keySet();
        //遍历key，通过键获取值
        //两种方法，迭代器可以，foreach也行
        Iterator<Integer> it = keys.iterator();
        System.out.println("注意这是个无序不重复的集合，但是它会帮你自动按key大小排序");
        System.out.println("用迭代器打印");
        while(it.hasNext()){
            //取出Set集合中的一个key
            Integer key = it.next();
            //通过key获取value
            String value = map.get(key);
            System.out.println(key + "=" + value);
        }

        System.out.println("用foreach打印");
        for(Integer key: keys){
            System.out.println(key + "=" + map.get(key));
        }

        System.out.println("下面是转换为Set集合迭代器打印出来的操作");
        //第二种方式：Set<Map.Entry<K, V>> entrySet()
        //以上这种方法是把Map集合直接全部转化为Set集合
        //Set集合中的元素类型是：Map.Entry
        Set<Map.Entry<Integer, String>> set = map.entrySet();
        //遍历Set集合，每次取出一个Node
        //迭代器，下面得物泛型有点骚
        Iterator<Map.Entry<Integer, String>> it2 = set.iterator();
        while(it2.hasNext()){
            Map.Entry<Integer, String> node = it2.next();
            Integer key = node.getKey();//我现在大概懂那个所谓的"1=zhangsan"成为一个对象了
            String value = node.getValue();//其实就是通过泛型，把这个键值对引入到Map.Entry这个内部类里面去了
            System.out.println(key + "=" + value);//然后我们就可以分别单独的打印他们了，也就是把这个数据放到那个内部类里面去了
        }

        System.out.println("下面是用增强for循环迭代出来的结果");
        for(Map.Entry<Integer, String> node: set){
            System.out.println(node.getKey() + "=" + node.getValue());
        }

    }
}
/*
注意这是个无序不重复的集合，但是它会帮你自动按key大小排序
用迭代器打印
1=一号
2=二号
3=三号
4=四号
5=五号
用foreach打印
1=一号
2=二号
3=三号
4=四号
5=五号
下面是转换为Set集合迭代器打印出来的操作
1=一号
2=二号
3=三号
4=四号
5=五号
下面是用增强for循环迭代出来的结果
1=一号
2=二号
3=三号
4=四号
5=五号
*/
```

#### （2）哈希表

###### ①基础定义

我这里口头阐述一下*map.put(k, v)*底层实现原理
第一步：现将k,v封装到Node对象中去，感觉像给了类两个参数一样
第二步，调用k底层的hashCode方法，得到一个hash值
第三步，hash值经过哈希算法，会将hash值转化为一个数组的下标
第五步，如果下标那个所指向的位置没有任何元素，就把Node添加到这个位置上去，如果说下标的位置上有元素，即有Node的链表，此时就会拿着k和链表上的每个key进行equals，如果所有的equals方法返回都是false，那儿就把这个新节点放到链表放到链表的末尾（JDK8之前是放到链表的头部，头插法），如果遍历链表的时候，有一个equals方法返回的是true，就把这个结点的value值覆盖了，应该是用封装好的v覆盖吧

我这里口头阐述一下*map.put(k, v)*底层实现原理
第一步：现将k,v封装到Node对象中去，感觉像给了类两个参数一样
第二步，调用k底层的hashCode方法，得到一个hash值
第三步，hash值经过哈希算法，会将hash值转化为一个数组的下标
第四步，如果那个地方没有任何元素，那么就返回null，如果有元素，就拿着这个key去跟那一条链表遍历，equals一下嘛，如果所有的equals方法返回的都是false，那么这个方法就返回一个null，如果equals返回true，那么就把那一个节点的value值返回

而为什么我们说哈希表的效率高呢？
第一，你发现没有你增删操作都是在链表上完成的
第二，你发现没有你查询也是部分扫描的，也就是说你甚至都不用遍历数组，根据指定的数组下标就开始遍历链表，而且你想啊，处理同样多的元素，假设100个嘛，我每个数组下标都挂10个，就算我遍历链表的时候，也是遍历10个嘛，你遍历数组的话就得遍历100个啊

注意，同一个数组下标上的一条链表的每个节点的hash值是一样的，但是k是绝对不重复的哦，因为你每次添加元素，只要k重复了，那么就会用新的value把旧的value覆盖了
**（注意，hashCode方法是在Object父类里面的方法）**

![image-20220322145349798](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322145349798.png)

key值经过hashCode()方法之后会得到一个hash值，然后这个hash值再经过哈希算法/函数，会得到数组的下标其实这个key就相当于键值对的左值，value就相当于键值对的右值

![image-20220322141316694](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322141316694.png)

![image-20220321212712533](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321212712533.png)

小心**散列分布不均匀**

所以初始化HashMap集合的容量必须是2的幂次方，憋问为啥，俺也不懂尼

![image-20220321212932764](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321212932764.png)

![image-20220322151807751](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322151807751.png)

###### ②重写HashCode()和equals()

**注意，放到HashMap集合key部分的元素和HashSet集合中的元素，都需要重写equals方法和hashCode方法**

```java
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class hhh {
    public static void main(String[] args) {
        //注意我这里是当你year和name一样的时候才是一样的
        //你也可以更改假设year一样就算重复，这个跟下面的几个equals和hashCode方法有关系了
        //你不用管具体怎么实现的，你只要知道传过去给hashCode传过去两个一样的参数，得到的也会是同一个值
        Date d1 = new Date(1, "小林");
        Date d2 = new Date(1, "小林");

        System.out.println(d1.equals(d2));

        System.out.println("d1的hash值：" + d1.hashCode());
        System.out.println("d2的hash值：" + d2.hashCode());

        Set<Date> date = new HashSet<>();//调用了实现了接口Set的集合HashSet，并且HashSet底层搞了一个HashMap来存储数据
        date.add(d1);
        date.add(d2);

        System.out.println(date.size());


    }
}

class Date{
    int year;
    String name;

    public Date(){

    }

    public Date(int year, String name) {
        this.year = year;
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Date date = (Date) o;
        return year == date.year &&
                Objects.equals(name, date.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(year, name);
    }
}
```

![image-20220321214405708](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321214405708.png)

![image-20220321214854750](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321214854750.png)

###### ③HashMap和HashTable的区别

![image-20220322163119619](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322163119619.png)

![image-20220322163110818](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322163110818.png)

#### （3）Properties类

![image-20220322164435112](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322164435112.png)

#### （4）TreeSet集合

###### ①基本概述

![image-20220321222105202](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321222105202.png)

###### ②自定义类型利用TreeSet排序

![image-20220322170354302](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322170354302.png)

下面我用自定义类型实现Comparable接口

注意我现在才发现如果你想把自己创建的类型放到这个TreeSet集合里面去的话
（1）那么你就需要先实现Comparable这个接口
（2）然后再重写这个接口里面的一个compareTo方法
要完成上面两步才能实现把自己写的类放到TreeSet集合里面去

```java
package com.lzo.test;


import java.util.*;

public class aaa {
    public static void main(String[] args) {

        //创建TreeSet集合
        //注意我现在才发现如果你想把自己创建的类型放到这个TreeSet集合里面去的话，那么你就需要先实现Comparable这个接口
        //然后再重写这个接口里面的一个compareTo方法
        //要完成上面两步才能实现把自己写的类放到TreeSet集合里面去
        TreeSet<Customer> customers = new TreeSet<>();
        //添加元素
        customers.add(new Customer(5, "小王"));
        customers.add(new Customer(5, "小张"));
        customers.add(new Customer(5, "小李"));
        customers.add(new Customer(10, "小林林"));
        customers.add(new Customer(5, "小林林"));

        for(Customer c: customers){
            System.out.println(c);
        }

    }
}

//注意放到TreeSet的元素需要实现java.lang.Comparable接口
//并且实现了compareTo方法，equals方法可以不用重写，因为这个集合只要你实现了这个接口就会帮你操作，其中就有调用比较的方法，不用你直接搞
class Customer implements Comparable<Customer>{
    int age;
    String name;

    public Customer(){

    }

    public Customer(int age, String name) {
        this.age = age;
        this.name = name;
    }

    //需要在重写的这个方法里面，编写比较的逻辑，或者说比较的细则
    //k.compareTo(t.key)
    //拿着参数k和集合中的每一个k进行比较，返回值可能是正数 0 负数
    //最终规则由你制定，是按照年龄升序还是按照年龄降序


    //这行的意思是先比较年龄，如果年龄一样的话就按照名字排序
    //如果不一样的话就按照年龄排序
    //你只需要记住，在compareTo方法里面 return this.age - o.age决定了排序方式
    public int compareTo(Customer o) {
        if(this.age == o.age){
            return this.name.compareTo(o.name);
        }else{
            return this.age - o.age;
        }


    }

    @Override
    public String toString() {
        return "Customer{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
```

#### （5）自平衡二叉树

可以参考下面的视频

https://www.bilibili.com/video/BV1Rx411876f?p=713&t=19.2

总之两个思想，遍历有个顺序，还有个递归思想

![image-20220322194213934](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322194213934.png)

#### （6）关于比较器和实现Comparable接口的选择

那么我们怎么选择用什么来比较呢，这个跟下面有关，如果比较规则很容易变化的，建议你可以多写两个比较器，因为这样操作比较符合OCP原则，如果比较规则换了，我就换个比较器嘛

![image-20220322184530467](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322184530467.png)

代码实现，确实耦合度很低啊

```java
package com.lzo.test;


import java.util.*;

public class aaa {
    public static void main(String[] args) {

        //创建TreeSet集合
        //注意我现在才发现如果你想把自己创建的类型放到这个TreeSet集合里面去的话，那么你就需要先实现Comparable这个接口
        //然后再重写这个接口里面的一个compareTo方法
        //要完成上面两步才能实现把自己写的类放到TreeSet集合里面去
        TreeSet<Customer> customers = new TreeSet<>(new CustomerComparator());
        //添加元素
        customers.add(new Customer(5, "小王"));
        customers.add(new Customer(5, "小张"));
        customers.add(new Customer(5, "小李"));
        customers.add(new Customer(10, "小林林"));
        customers.add(new Customer(2, "小林林"));

        for(Customer c: customers){
            System.out.println(c);
        }

    }
}
//这里我不实现一个Comparable接口，我搞一个类，这个类专门用作比较
class Customer{
    int age;
    String name;

    public Customer(){

    }

    public Customer(int age, String name) {
        this.age = age;
        this.name = name;
    }
    
    @Override
    public String toString() {
        return "Customer{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
//这个类就叫做比较器，记得实现了Comparator接口
class CustomerComparator implements Comparator<Customer>{

    //单独在这里写一个比较器
    //比较器实现java.util.Comparetor接口（Comparable是java.lang包下的，而Comparator是java.util包下的）

    //必须完成下面的操作需要实现这个接口下面的compare方法
    //这里就是比较年龄，如果相等再比较姓名
    @Override
    public int compare(Customer o1, Customer o2) {
        //在这里指定比较规则
        if(o1.age == o2.age){
            return o1.name.compareTo(o2.name);
        }else{
            return o1.age - o2.age;
        }
    }
    
}
```

当你规则不会改变的时候，就试下下面的匿名内部类写法，可以偷下懒，装个b什么的

```java
package com.lzo.test;


import java.util.*;

public class aaa {
    public static void main(String[] args) {

        //创建TreeSet集合
        //注意我现在才发现如果你想把自己创建的类型放到这个TreeSet集合里面去的话，那么你就需要先实现Comparable这个接口
        //然后再重写这个接口里面的一个compareTo方法
        //要完成上面两步才能实现把自己写的类放到TreeSet集合里面去
        //下面的写法就是所谓匿名内部类，很装逼的搞法
        //当你打new Com..的时候看一下IDEA提示，可以自动生成，但是需要改一下排序规则
        TreeSet<Customer> customers = new TreeSet<>(new Comparator<Customer>() {
            @Override
            public int compare(Customer o1, Customer o2) {
                if(o1.age == o2.age){
                    return o1.name.compareTo(o2.name);
                }else{
                    return o1.age - o2.age;
                }
            }
        });
        //添加元素
        customers.add(new Customer(5, "小王"));
        customers.add(new Customer(5, "小张"));
        customers.add(new Customer(5, "小李"));
        customers.add(new Customer(10, "小林林"));
        customers.add(new Customer(17, "小林林"));

        for(Customer c: customers){
            System.out.println(c);
        }

    }
}
//这里我不实现一个Comparable接口，我搞一个类，这个类专门用作比较
class Customer{
    int age;
    String name;

    public Customer(){

    }

    public Customer(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
```

#### （7）Collections工具类

这里只讲三个，都请看看图
第一个，把ArrayList转换为线性安全的

第二个，排序

第三个，怎么对无序不重复的Set集合进行排序呢，那就是把它转为List集合，具体代码请看第二张图

![image-20220322195640931](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322195640931.png)

![image-20220322195614734](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220322195614734.png)

### 九、IO流

### ===注意，里面很多示例代码我都没有捕捉异常(看的眼睛花)，要用的话要记得捕捉哦===

##### （1）IO流概述

站在内存嗷，从内存出来叫做写，输出，输出流
进入内存叫做读，输入，输入流

![image-20220321223322534](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321223322534.png)

##### （2）IO流的分类

![image-20220321223842901](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321223842901.png)

##### （3）四大类型的流

![image-20220321224832709](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321224832709.png)



##### （4）java.io包下的16个流

![image-20220321225055945](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220321225055945.png)

##### （5）IDEA默认的文件

默认的相对路径起点是那个你的单个的project里面的模块，看下面，在同一模块下的文件可以利用相对路径相互访问

**重点，你的输入的文件一定要跟文件那边的名字一模一样，.txt啥的后缀这些自己注意就好**

![image-20220323000652027](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323000652027.png)

##### （6）File类

###### ①基本概述

![image-20220323173210280](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323173210280.png)

###### ②相关方法

```java
package com.lzo.test.hello;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileTest {
    //这里我就不捕捉异常了，因为太花了，看的脑壳疼，你自己写的时候记得捕捉哦！！！
    public static void main(String[] args) throws IOException {
        //创建一个File对象
        File f1 = new File("E:\\z95\\zz");

        //判断是否存在
        System.out.println("文件是否创建：" + f1.exists());

        //如果D:\file不存在，则以文件的形式创建出来
        if(!f1.exists()){
            //以文件形式创建
            f1.createNewFile(	);
        }

        //如果D:\file不存在，则以目录的形式创建出来
        File f2 = new File("E:\\z95\\zzz");
        if(!f2.exists()){
            //以目录的形式新建
            f2.mkdir();
        }

        //如果D:\file不存在，则以多重目录的形式创建出来
        File f3 = new File("E:\\z95\\zzzz/z1/z2/z3");
        if(!f3.exists()){
            //以多重目录的形式新建
            f3.mkdirs();
        }
        /**
        * mkdir和mkdirs的区别
        * 如果你指定的路径只有一层目录不存在，那么mkdir就能创建那一层(文件夹)
        * 如果有两层目录不存在，mkdir就无法使用，只能使用mkdirs来创建两层目录，即文件夹套文件夹
        */

        //获取文件的父路径
        File f4 = new File("E:/z95/FileTest.txt");
        String parentPath = f4.getParent();
        System.out.println(parentPath);
        //上面那种方式返回的是一个String字符串
        //下面这个方式返回的是一个File
        //这个File再调用其中的方法就可以输出路径了
        File parentFile = f4.getParentFile();//得到父文件了都
        System.out.println("获取到父路径的绝对路径：" + parentFile.getAbsolutePath());

        //获取绝对路径
        File f5 = new File("C:\\Users\\Lzo\\IdeaProjects\\asd\\qwer\\src\\com\\lzo\\test\\hello\\FileTest.java");
        System.out.println("绝对路径是" + f5.getAbsolutePath());

        //获取文件名
        File f6 = new File("C:\\Users\\Lzo\\IdeaProjects\\asd\\qwer\\src\\com\\lzo\\test\\hello\\FileTest.java");
        System.out.println("文件名" + f6.getName());

        //判断是否是一个目录
        System.out.println("是否是一个目录" + f6.isDirectory());

        //判断是否是一个文件
        System.out.println("是否是一个文件" + f6.isFile());

        //获取一个文件最后的修改时间
        long haoMiao = f6.lastModified();//这个毫秒是1970年到现在的毫秒数
        //将总毫秒数转换为日期
        Date time = new Date(haoMiao);//获取资源
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");//固定格式
        String strTime = sdf.format(time);//将资源以格式打印
        System.out.println("最后的修改时间是在" + strTime);

        //获取文件大小
        System.out.println("文件的字节数是" + f6.length());

        //获取当前目录下的所有的子文件
        //File[] listFiles();
        File f = new File("C:\\Users\\Lzo\\IdeaProjects\\asd\\qwer\\src");
        File[] files = f.listFiles();
        System.out.println("当前目录下的子文件是");
        //foreach
        for(File file: files){
            System.out.println(file.getName());
        }
    }
}
```

##### （7）IO和Properties联合使用

说白了这玩意就是跟c语言那个fread一样，而且更加人性化，更加牛逼

![image-20220323232206615](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323232206615.png)

![image-20220323233810036](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323233810036.png)

```java
package com.lzo.test;


import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.*;

public class aaa {
    public static void main(String[] args) throws IOException {
        //properties是一个Map集合，key和value都String类型
        //新建一个输入流对象
        FileReader fileReader = new FileReader("qwer\\src\\com\\test.properties");

        //新建一个输入流对象
        Properties pro = new Properties();

        //调用Properties对象的load方法将文件的数据加载到Map集合当中
        pro.load(fileReader);//文件顺着管道加载到Map集合中，其中等号左边等于key，右边等于value

        String username = pro.getProperty("username");//getproperties的参数应该是key吧，返回值是value
        System.out.println("用户名：" + username);

        String password = pro.getProperty("password");
        System.out.println("密码：" + password);

    }
}
```

### ====字节流(Stream)====

#### 注意不管是什么流都要记得close文件，而且输出流要记得flush一哈

##### （1）FileInputStream(文件字节输入流)

###### ①操作示例

```java
package com.lzo.test.hello;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileTet {
    public static void main(String[] args) {

        FileInputStream fis = null;

        //创建文件字节流对象
        //其实\\写成/也是可以的
        try {
            fis = new FileInputStream("E:\\z95\\FileTest.txt");

            //开始读
            //每读一位，fis指针都下一个位	移动一位字节
            int readData = fis.read();//方法的返回值是：读取到的“字节”本身的ASCII码
            System.out.println(readData);

            readData = fis.read();//方法的返回值是：读取到的“字节”本身的ASCII码
            System.out.println(readData);

            readData = fis.read();//方法的返回值是：读取到的“字节”本身
            System.out.println(readData);

            readData = fis.read();//方法的返回值是：读取到的“字节”本身
            System.out.println(readData);

            readData = fis.read();//方法的返回值是：读取到的“字节”本身
            System.out.println(readData);
            
            //读到空的时候返回-1
            readData = fis.read();//方法的返回值是：读取到的“字节”本身
            System.out.println(readData);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            //在finally语句块中确认流是否关闭
            if(fis == null){
                //关闭的前提：流不是空，是空的话就不用关闭
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

}
```

###### ②用while循环打印的纵享丝滑版

```java
package com.lzo.test.hello;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileTet {
    public static void main(String[] args) {

        FileInputStream fis = null;

        //创建文件字节流对象
        //其实\\写成/也是可以的
        try {
            fis = new FileInputStream("E:\\z95\\FileTest.txt");
           //while循环以字节方式遍历文件
            while(((readData = fis.read()) != -1)){
                System.out.println(readData);
            }
            //上面这个代码更丝滑
          /*  while(true){
                int readData = fis.read();
                if(readData == -1){
                    break;
                }
                System.out.println(readData);
            }*/
            
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            //在finally语句块中确认流是否关闭
            if(fis == null){
                //关闭的前提：流不是空，是空的话就不用关闭
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

}
```

###### ③最常使用的使用byte[]数组进行读取

接下来是我们常用的用byte数组读取，因为你想啊，你一个一个读，内存和硬盘的交互是不是太频繁了，效率都感觉低了，所以我们用数组一次接受n个值，然后利用while循环把所有接受到的值打印出来

```java
package com.lzo.test.hello;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileTet {
    public static void main(String[] args) {

        FileInputStream fis = null;
        int readData;

        //创建文件字节流对象
        //其实\\写成/也是可以的
        try {
            fis = new FileInputStream("qwer/11");

            //准备一个8个长度的byte数组，一次最多读取8个字节
            byte[] bytes = new byte[8];
           //使用while循环读取放到byte数组里面
            while(true) {
                //这个方法的返回值：是读取到的字节数量（不是字节本身）
                int readCount = fis.read(bytes);
                //因为这个读取如果读取到没有的话是会返回-1的，以此作为结束条件
                if(readCount == -1){
                    break;
                }
                //下面的这个就是把一个byte数组转化为String字符串然后打印出来
                //憋问为什么，记住就好，offset是起始位置，后面的是length
                //我觉着下面的这个new String就是把ASCII转换为普通字符，而且这种格式刚好能把文件的内容一模一样打印出来
                System.out.println(new String(bytes, 0, readCount));
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            //在finally语句块中确认流是否关闭
            if(fis == null){
                //关闭的前提：流不是空，是空的话就不用关闭
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
```

###### ④skip求没有读取到的字节数量和跳过字节

这玩意可以实现不需要while一波读取全部字节，但是不太适合太大的容量（上百万长度那种吧），毕竟开辟不了那么大的连续内存空间

```java
package com.lzo.test.hello;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileTet {
    public static void main(String[] args) {

        FileInputStream fis = null;
        //创建文件字节流对象
        //其实\\写成/也是可以的
        try {
            fis = new FileInputStream("qwer/11");
            System.out.println("剩余总字节数量：" + fis.available());
            //skip跳过几个字节不读取
            fis.skip(2);
            System.out.println("跳过了2个字节读取到的第一个字符w的ASCII码是" + fis.read());

            int readByte = fis.read();
            System.out.println("读取" + readByte +"个字节后剩余总字节数量：" + fis.available());
            byte[] bytes = new byte[fis.available()];
            //现在我调用fis.read往数组中输入内容
            int readCount = fis.read(bytes);
            System.out.println("读取了" + readCount + "个字节后打印了\n" + new String(bytes));

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            //在finally语句块中确认流是否关闭
            if(fis == null){
                //关闭的前提：流不是空，是空的话就不用关闭
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }
}

/*
剩余总字节数量：33
跳过了2个字节读取到的第一个字符w的ASCII码是119
读取113个字节后剩余总字节数量：29
读取了29个字节后打印了
qdragasdadsadsajtrssjhetRjdhe
*/
```

![image-20220323112817332](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323112817332.png)

##### （2）FileOutputStream（文件字节输出流）

###### ①输入到文件实例

看下面的
没有就创建，有就覆盖，想追加就调用append

![image-20220323115423046](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323115423046.png)

如果想输入字符串 一定要先转换为byte数组再输入看下面

![image-20220323115723606](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323115723606.png)

###### ②文件拷贝

![image-20220323123941975](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323123941975.png)

```java
package com.copyTest.test01;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class copyThat {
    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            //这个有个很容易搞混的地方 那就是输入流对象是用来读取内容的
            //输出流对象是用来输出内容的
            //也就是说我先在一个文件输入流放到内存里面去
            //然后在内存中输出流输出到另一个文件里面去
            //创建一个输入流对象
            fis = new FileInputStream("qwer\\11");
            //创建一个输出流对象
            fos = new FileOutputStream("test\\src\\com\\copyTest\\copyHere");

            //最核心的：一边读，一边写
            byte[] bytes = new byte[1024 * 1024];//1Mb（这样设置是表明一次最多拷贝1MB）
            int readCount = 0;
            while((readCount = fis.read(bytes)) != -1){
                fos.write(bytes, 0, readCount);
            }

            //噢，我的天啦，看看这个孩子，他竟然忘了刷新
            fos.flush();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //分开try，不要一起try
            //因为万一哪个家伙有问题，另一个就关不了了
            //好像听说先打开的要后关，不知道为啥
            //好像为了防止IOException，规范嘛，就这么写也挺好
            if(fos != null){
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(fis != null){
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

### ====字符流（er）====

这玩意是一次读取一个字符，不是字节，所以你不会遇到汉字读取到问号的那种情况了

但是，这个玩意只能操作普通文本文件，也就是说搞不了word，搞不了图片视频音频文件

**这里科普一下什么是普通文件**
能用**记事本打开 并且正常编辑**的都普通文本文件，.java .temp这些都是普通文本文件

##### (1)FileReader（文件字符输入流）

![image-20220323124851330](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323124851330.png)

##### (2)FileWriter（文件字节输出流）

想换行记得输出‘\n’

![image-20220323125224926](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323125224926.png)

#### （3）拷贝文件

![image-20220323125601891](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323125601891.png)

### ====缓冲流====

##### （1）BufferedReader（带有缓冲区的字符输入流）

注意只能操作字符流，如果想操作字节流要转换，看下面

![image-20220323153628142](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323153628142.png)

```java
package com.copyTest.test01;

import java.io.*;

public class copyThat {
    public static void main(String[] args) {
        //使用这个流的时候不需要自定义char数组，或者byte数组。自带缓冲
        BufferedReader br = null;

        FileReader reader = null;
        try {
            reader = new FileReader("qwer\\src\\com\\lzo\\test\\aaa.java");
            //当一个流的构造方法需要一个流时，这个被传进来的的流叫做，节点流
            //外部负责包装这个流的名字叫做，包装流，也叫，处理流
            //对当前这个程序来说，FileReader就是一个包装流（处理流），reader这个流叫做节点流
            br = new BufferedReader(reader);
            String s = null;
            while((s = br.readLine()) != null){
                System.out.println(s);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //注意这个只用关一个br就行了
            //因为br的关方法里面会把它的节点流也关了
            try {
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

##### (2)BufferedWriter(带有缓冲区的字符输出流)

![image-20220323160840080](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323160840080.png)

### ====转换流====

##### （1）InputStreamReader（字节输入流转换字符输入流）

可以搞个装逼的写法

```java
BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(...)));//下面写法的改造，极致装逼
```

![image-20220323160008229](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323160008229.png)

##### (2)OutputStreamWriter（字节输出流转换字符输出流）

![image-20220323161036613](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323161036613.png)

### ====数据流====

##### （1）DataOutputStream（数据专属的流）

![image-20220323161925927](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323161925927.png)

![image-20220323162028431](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323162028431.png)

##### （2）DataInputStream（数据字节输入流）

这玩意只有你按照怎么存进去的顺序，怎么按顺序取出来

下面就是我按照上面write的顺序，来进行读取，才让我read出来

![image-20220323162159684](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323162159684.png)

![image-20220323162255217](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323162255217.png)

### ====标准流====

##### （1）PrintStream（标准字节输出流）

不需要手动关闭

并且可以指定标准输出流不输出到控制台，输出到指定文件，看下面

这里我解释一下

```java
System.out.println();
/*这行代码本质如下
首先System是一个类
这个类里面有个属性，叫做out
public final static PrintStream out = null;
表明了这个属性指向一个类，PrintStream
而这个类里面有个方法叫做，println();
这个方法的参数可以把他们经过toString()后打印到控制台
*/
```

![image-20220323163505027](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323163505027.png)

![image-20220323163550616](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323163550616.png)

##### （2）记录日志文件

```java
package com.lzo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.text.SimpleDateFormat;
import java.util.Date;

public class BlogTest {
    public static void main(String[] args) {
        //测试记录日志的工具类
        Logger.log("用户尝试登录，登录失败...");
        Logger.log("用户尝试登录，登录失败...");
        Logger.log("用户尝试登录，登录失败...");
        Logger.log("用户登录成功");

    }
}

class Logger{
    public static void log(String msg) {
        //指向一个日志文件
        try {
            //默认第二个参数是false，表示不追加，每次new对象都会清空之前的内容创建新的内容，ture表示在之前的基础上追加内容
            PrintStream out = new PrintStream(new FileOutputStream("myblog.txt", true));
            //改变输出方向
            System.setOut(out);
            //日期当前时间
            Date nowTime = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
            String strTime = sdf.format(nowTime);

            System.out.println(strTime + ":" + msg);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

### ====对象专属流====

##### （1）序列化和反序列化

感觉就像c语言的链表读到文件，再以链表的形式读取出来
序列化：把对象拆分，然后放到硬盘文件里面去
反序列法：把对象组装，然后从硬盘文件中读取出来
反序列就是你去读那个你存放序列了看起来乱码的文件 但是能读出对象来

![image-20220323190130936](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323190130936.png)

![image-20220323190953420](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323190953420.png)

**序列化**

下面是单重的

```java
package com.lzo.test;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.Objects;

public class xuliehua {
    public static void main(String[] args) throws IOException {
        //创建java对象
        Student s = new Student(11, "小明");
        //序列化
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("qwer\\11"));

        //序列化对象
        oos.writeObject(s);

        //刷新
        oos.flush();
        //关闭
        oos.close();
    }
}


class Student implements Serializable {
    private int no;
    private String name;

    public Student(){

    }

    public Student(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "no=" + no +
                ", name='" + name + '\'' +
                '}';
    }
}
```

下面是多重的

```java
package com.lzo.test;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class xuliehua {
    public static void main(String[] args) throws IOException {
        List<Student> userList = new ArrayList<>();
        userList.add(new Student(1, "小明"));
        userList.add(new Student(2, "小张"));
        userList.add(new Student(5, "小宏"));
        userList.add(new Student(4, "小白"));

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("qwer\\11"));

        //序列化对象
        oos.writeObject(userList);

        //刷新
        oos.flush();
        //关闭
        oos.close();
    }
}


class Student implements Serializable {
    private int no;
    private String name;

    public Student(){

    }

    public Student(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{" +
                "no=" + no +
                ", name='" + name + '\'' +
                '}';
    }
}
```

**反序列化**

下面是单重的

```java
package com.lzo.test;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class fanxuliehua {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        ObjectInputStream ois = new ObjectInputStream((new FileInputStream("qwer\\11")));
        //开始反序列化，读取
        Object obj = ois.readObject();
        //反序列化回来是一个学生对象，所以会调用学生对象的toString()方法
        System.out.println(obj);
        ois.close();
    }
}
```

下面是多重的

```java
package com.lzo.test;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.List;

public class fanxuliehua {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        ObjectInputStream ois = new ObjectInputStream((new FileInputStream("qwer\\11")));

        //因为下面的read方法返回的对象是Object类的，但是你要把这玩意放到数组里面去
        //因为你左边不是一个List类型吗，你右边本来返回的是个Object，你拿子类接受父类，那么肯定要向下转型啊
        List<Student> userList = (List<Student>)ois.readObject();

        for(Student student: userList){
            System.out.println(student);
        }

        ois.close();
    }
}
```

##### （2）transient关键字不让某个属性参与序列化

![image-20220323203817845](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323203817845.png)

##### （3）序列化版本号

我经过反复测试，发现了一些端倪
首先，我先写了一个类，没有手动写序列化版本号，然后对其序列化，然后再反序列化，一切如常
之后，我再在类里面进行增删操作（注意，是增删哦，我在原有基础上进行修改，类似于令构造方法里面this.name = "1";他都没有报错，所以我疑心应该是增删才行），然后，我再run那个反序列，出现了InvalidClassExcepton
然后我再在那个类里面写一个序列化版本号，然后再对其序列化，反序列化
之后，我在类里面加了一行int i;此时我去run那个反序列的方法，没有报错哦
所以通过以上对照实验，我终于发现了其中的奥妙

首先，实现了那个Serializable接口的，你不给它个版本号，编译器会给你自动搞一个，那么当你序列化后，再反序列化的时候，编译器会把这个版本号记住，放到本地，也就是说，反序列化的时候，看到这个版本号，对头了，那么我就给你反序列

而你给这个类增删的时候(并且编译)，你在直接run反序列，就大问题了，因为这个类生成了一个新的序列号，你反序列的时候跟本地的不同，于是就报错（注意此时不能run序列化的，因为你一run，这个新的序列号就会替代旧的了，那么反序列化的也会抛弃旧的）

如果你自己手动写了一个版本号，那么这个版本号就跟这个类绑死了，也就是你不管怎么搞，云端的版本号总是这个，本地的版本号也是这个，你直接run反序列也不会有事

![image-20220323205640810](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323205640810.png)

![image-20220323205626630](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220323205626630.png)
