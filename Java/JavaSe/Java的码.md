[TOC]



### 1、输入成绩，给他排优劣

```java
package com.xxx.hello;

import java.util.Scanner;//写了这一行就不用写java.util.Scanner了
public class hello{
    public static void main(String[] args){

        //java.util.Scanner s = new java.util.Scanner(System.in);
        while(true) {
            Scanner s = new Scanner(System.in);
            System.out.print("请输入您的成绩：");
            double score = s.nextDouble();
            if (score < 0 || score > 100) {
                System.out.println("你输入的玩意不合法啊！");
                return;
            }
            int grade = (int) (score / 10);//这里强转一下配合一下switch语句
            //上面一行代码真的十分重要，首先进行了对浮点数除十的操作，其次为了配合switch语句进行了强转
            String str = "不合格";

            switch (grade) {
                case 10:
                case 9:
                    str = "优秀";
                    break;
                case 8:
                    str = "良";
                    break;
                case 7:
                    str = "中";
                    break;
                case 6:
                    str = "及格";
                    break;
            }
            
            System.out.println("您的成绩属于" + str);
        }
    }

}
```



### 2、利用for循环输出100以内奇数的和

##### 第一种算法，遍历一遍，有点憨憨

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        int i = 0, sum = 0;

        for(i = 1; i <= 100; i++) {
            if (i % 2 == 1) {
                sum += i;
         //       System.out.println("i =" + i);
            }
        }
        System.out.println("奇数的和为" + sum);
    }

}
```

##### 第二种算法，直接每次+2，完美避开偶数

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        int i = 0, sum = 0;

        for(i = 1; i < 100; i += 2){
            if(i % 2 ==1){
                sum += i;
            }
        }
        System.out.println("奇数的和为" + sum);
    }

}
```



### 3、利用for循环输出标准对齐的九九乘法表

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        int i = 0, nei = 0;

        for(i = 1; i <= 9; i++){
            for(nei = 1; nei <= i; nei++){
                if((nei == 3 && (i == 3 || i == 4))){
                    System.out.print(" " + nei + "*" + i + "=" + (nei * i) + " ");
                }
                else{
                    System.out.print(nei + "*" + i + "=" + (nei * i) + " ");
                }
            }
            System.out.print('\n');
        }
    }

}
```

### 4、利用双重while输出标准对齐的九九乘法表

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        int i = 0, sum = 0, nei = 0;

		i = 1;
		while(i <= 9){
    		nei = 1;
   		 while(nei  <= i){
                  if((nei == 3 && (i == 3 || i == 4))){
                      System.out.print(" " + nei + "*" + i + "=" + (nei * i) + " ");
                      nei++;
                  }
                else{
                    System.out.print(nei + "*" + i + "=" + (nei * i) + " ");
                    nei++;
                }
   		 }
   		 i++;
    	System.out.println();
		}
    }

}
```

### 5、利用do-while输出标准对齐的九九乘法表

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        int i = 0, sum = 0, nei = 0;

        i = 1;
            do{
            nei = 1;
              do{
                  if((nei == 3 && (i == 3 || i == 4))){
                      System.out.print(" " + nei + "*" + i + "=" + (nei * i) + " ");
                      nei++;
                  }
                else{
                    System.out.print(nei + "*" + i + "=" + (nei * i) + " ");
                    nei++;
                }
                }while(nei <= i);
            i++;
            System.out.println();
        }while(i <= 9);
    }

}
```

### 6、输出1+2-3......+100的结果

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
       int sum = 1;
       for(int i = 2; i <= 100; i++){
           if(i % 2 == 0){ //偶数
               sum += i;
           }else{ //奇数
               sum -= i;
           }
       }
       System.out.println("结果是" + sum);
    }

}
```

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
       int sum = 1, flag = -1;
       for(int i = 2; i <= 100; i++){
           flag = -1 * flag;//这里每次根据情况换个符号
           sum += (flag * i);
           }

       System.out.println("结果是" + sum);
    }

}
```

### 7、判断是否质数

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
        java.util.Scanner s = new java.util.Scanner(System.in);
        boolean jieGuo = true;

        System.out.print("请输入一个整数：");
        int num = s.nextInt();

        for(int i = 2; i <= num / 2; i++){
            if(num % i == 0){
                jieGuo = false;
                break;
            }
        }

        System.out.println(num + (jieGuo? "是质数": "不是质数") + "啦");
    }

}
```

### 8、输入行数，打印等腰三角形

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args) {
        java.util.Scanner s = new java.util.Scanner(System.in);
        System.out.print("请输入行数：");
        int rows = s.nextInt();

        for (int i = 0; i < rows; i++) {//有多少行
            for (int j = 0; j < rows - i; j++) {//先打印空格
                System.out.print(' ');
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                System.out.print('*');
            }
            System.out.println();
        }
    }
}
```

### 9、输入一个整数，判断比它大的最近的一个质数

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args) {
        java.util.Scanner s = new java.util.Scanner(System.in);
        System.out.print("请输入一个整数：");
        int n = s.nextInt();

        hello.printZhishu(n);
    }

    public static void printZhishu(int num){//封装好的方法，把一个功能拆成一块一块
        boolean flag;
        while(true) {
           num++;
           flag = hello.isZhishu(num);
            if (flag) {
                System.out.println("质数是" + num);
                break;
            }
        }
    }

    public static boolean isZhishu(int num){
        for(int i = 2; i <= num / 2; i++){
            if(num % i == 0){//这里只能写==0，而不能写!=0，因为你遍历一遍，百分百出现不等于0啊这个时候居然判断为质数，笑死，你的逻辑应该是
                return false;//判断不为质数，返回假                 遍历一遍，能出现一个除尽的就返回不是质数，不能除尽的就返回就是质数
            }
        }//看到没，当你把return放到for或者if里面它就会叼你，你一定要保证return放在它能一眼看到的地方，你这个for万一不执行了，不就没有返回值了吗
        return true;//判断为质数，返回为真
    }

}
```

精简过的代码

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args) {
        java.util.Scanner s = new java.util.Scanner(System.in);
        System.out.print("请输入一个整数：");
        int n = s.nextInt();

        hello.printZhishu(n);
    }

    public static void printZhishu(int num){//封装好的方法，把一个功能拆成一块一块
        boolean flag;
        //num++;
        while(!isZhishu(++num)) {
          }
            System.out.println("质数是" + num);
        }

    public static boolean isZhishu(int num){
        for(int i = 2; i <= num / 2; i++){
            if(num % i == 0){//这里只能写==0，而不能写!=0，因为你遍历一遍，百分百出现不等于0啊这个时候居然判断为质数，笑死，你的逻辑应该是
                return false;//判断不为质数，返回假                 遍历一遍，能出现一个除尽的就返回不是质数，不能除尽的就返回就是质数
            }
        }//看到没，当你把return放到for或者if里面它就会叼你，你一定要保证return放在它能一眼看到的地方，你这个for万一不执行了，不就没有返回值了吗
        return true;//判断为质数，返回为真
    }

}
```

### 10、关于一个数据简单的封装

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    public static void main(String[] args){
    int kk, lzo;
    java.util.Scanner s = new java.util.Scanner(System.in);
    fengZhuang p1 = new fengZhuang();//千万别忘了实例方法调用需要一个对象啊！！！

    System.out.println("输入1是查看，输入其他数字是修改");
    System.out.print("请输入对应数字：");
    lzo = s.nextInt();

    switch(lzo){
        case(1):
            System.out.println(p1.getYear());
        break;
        default:
        System.out.print("请输入需要修改的年份");
        kk = s.nextInt();
        p1.setYear(kk);
        System.out.println("修改后的年份为" + p1.getYear());
    }
   }

}

class fengZhuang{
    private int year;

    public int getYear(){
        return year;
    }

    public void setYear(int i){
        if(i <= 0 || i > 3000){
            System.out.println("修改的年份非法！");
            return;
        }
        year = i;
    }

}
```



### 11、关于两个对象的相互调用

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello {

    public static void main(String[] args) {
        int kk;
        java.util.Scanner s = new java.util.Scanner(System.in);

        System.out.print("请随机输入一个数字：");
        kk = s.nextInt();

        Husband man1 = new Husband();
        Husband man2 = new Husband("小明");

        Wife girl1 = new Wife();
        Wife girl2 = new Wife("小红");

        man2.wife = girl2;
        girl2.husband = man2;

        System.out.println("妻子的名字是" + man2.wife.name);//通过丈夫打印妻子的名字
        System.out.println("丈夫的名字是" + girl2.husband.name);//通过妻子打印丈夫的名字
        System.out.println(man2.wife.name + "的丈夫是" + girl2.husband.name);//通过妻子打印丈夫的名字

    }
}


class Husband{
    String idCard;
    String name = "他";
    String birthday;
    Wife wife;

    public Husband(){
        System.out.println("Husband的无参构造方法设置");
    }

    public Husband(String manName){
        name = manName;
    }

}

class Wife{
    String idCard;
    String name = "她";
    String birthday;
    Husband husband;

    public Wife(){
        System.out.println("Wife的无参构造方法设置");
    }

    public Wife(String womanName){
        name = womanName;
    }

}
```

### 12、创建一个账户，实现可以修改查看基本信息

#### （1）天真无邪的时候写的代码

下面这个代码是我还很天真的时候写的

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello {
    public static void main(String[] args){
 while(true) {
     int id = 0, i;
     double saveMoney = 0.0;
     double getMoney = 0.0;
     double changeAnnual = 0.0;
     String userId;
     double balance = 0.0;
     double annualInterestRate = 0.0;
     java.util.Scanner s = new java.util.Scanner(System.in);

     Account user = new Account("500228", 2000, 1.5);//new对象并进行初始化
     System.out.println("1.查询账号");
     System.out.println("2.修改账号");
     System.out.println("3.查询余额");
     System.out.println("4.查询年利率");
     System.out.println("5.修改年利率");
     System.out.println("6.存款");
     System.out.println("7.取款");
     System.out.print("请输入对应数字：");
     i = s.nextInt();

     switch (i) {
         case (1):
             System.out.println("账号为" + user.getId());
             break;

         case (2):
             System.out.print("请输入修改后的账户名：");
            userId = s.next();
            System.out.println(userId);
            user.changeId(userId);
            break;

         case (3):
             System.out.println("余额为" + user.getBalance());
             break;

         case (4):
             System.out.println("年利率为" + user.getAnnualInterestRate());
            break;

         case (5):
                System.out.print("请输入修改后的年利率：");
                changeAnnual = s.nextDouble();
                user.changeRate(changeAnnual);
                break;

         case(6):
             System.out.print("请输入需要存入的金额：");
             saveMoney = s.nextDouble();
             user.deposit(saveMoney);//调用存钱方法
             break;

         case(7):
             System.out.print("请输入需要取走的金额：");
             getMoney = s.nextDouble();
             user.withdraw(getMoney);//调用取钱方法
             break;

         default:
             System.out.println("输入有误");

        }
        System.out.println("输入任意字符继续...");
        s.next();//屏幕暂留，等待用户输入
    }
    }
}

class Account{
    private  String id;//ID
    private double balance;//账户余额
    private double annualInterestRate;//年利率

    public Account(){//构造方法，不管如何都应该写构建这一行

    }

    public Account(String id, double balance, double annualInterestRate){
        this.id = id;//这个是把传过来的形参的值赋给new对象时的示例变量
        this.balance = balance;
        this.annualInterestRate = annualInterestRate;
    }

    public void setId(String id){//id的封装
        this.id = id;
    }
    public String getId(){
        return id;
    }

    public void setBalance(double balance){//余额的封装
        this.balance = balance;
    }
    public double getBalance(){
        return balance;
    }

    public void setAnnualInterestRate(double annualInterestRate){//年利率的封装
        this.annualInterestRate = annualInterestRate;
    }
    public double getAnnualInterestRate(){
        return annualInterestRate;
    }

    public void deposit(double money){//存钱
        //这里我写复杂一点主要想体现一下思想
        this.setBalance(this.getBalance() + money);//这里实现存钱
        System.out.println("成功存入" + money + "元" + '!');
    }

    public void withdraw(double money){//取钱
        if(money > this.balance){
            System.out.println("余额不足！");
            return;
        }
        this.setBalance(this.getBalance() - money);
        System.out.println("成功取款" + money + "元" + '!');
    }

    public void changeId(String id){
        this.setId(id);
        System.out.println("修改后的账户名是" + getId());
    }

    public void changeRate(double rate){
        if(rate < 0 || rate > 100){
            System.out.println("利率修改有误！");
            return;
        }
        this.setAnnualInterestRate(rate);
        System.out.println("修改后的年利率是" + getAnnualInterestRate() + "%");
    }

}


```

#### （2）两个类的两个对象的好代码

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello {
    public static void main(String[] args){
 while(true) {
     int id = 0, i;
     double saveMoney = 0.0;
     double getMoney = 0.0;
     double changeAnnual = 0.0;
     String userId;
     double balance = 0.0;
     double annualInterestRate = 0.0;
     java.util.Scanner s = new java.util.Scanner(System.in);

     Account user = new Account("500228", 2000, 1.5);//new对象并进行初始化
     Customer man = new Customer("靓仔", user);

     System.out.println("欢迎用户“" + man.getName() + "”使用账户管理系统");
     System.out.println("1.查询账号");
     System.out.println("2.修改账号");
     System.out.println("3.查询余额");
     System.out.println("4.查询年利率");
     System.out.println("5.修改年利率");
     System.out.println("6.存款");
     System.out.println("7.取款");
     System.out.print("请输入对应数字：");
     i = s.nextInt();

     switch (i) {
         case (1):
             System.out.println("账号为" + man.getAct().getId());
             break;

         case (2):
             System.out.print("请输入修改后的账户名：");
             userId = s.next();
             man.getAct().changeId(userId);
            break;

         case (3):
             System.out.println("余额为" + man.getAct().getBalance() + "元");
             break;

         case (4):
             System.out.println("年利率为" + man.getAct().getAnnualInterestRate());
            break;

         case (5):
                System.out.print("请输入修改后的年利率：");
                changeAnnual = s.nextDouble();
                man.getAct().changeRate(changeAnnual);
            break;

         case(6):
             System.out.print("请输入需要存入的金额：");
             saveMoney = s.nextDouble();
             man.getAct().deposit(saveMoney);//调用存钱方法
             break;

         case(7):
             System.out.print("请输入需要取走的金额：");
             getMoney = s.nextDouble();
             man.getAct().withdraw(getMoney);//调用取钱方法
             break;

         default:
             System.out.println("输入有误");

        }
        System.out.println("输入任意字符继续...");
        s.next();//屏幕暂留，等待用户输入
    }
    }
}

class Customer{//这个是用户类
    private String name;
    private Account act;

    public Customer(){

    }

    public Customer(String name, Account act){
        this.name = name;
        this.act = act;
    }

    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }

    public Account getAct(){
        return this.act;
    }
    public void setAct(Account act){
        this.act = act;
    }

}


class Account{//这个是用户的账户类
    private  String id;//ID
    private double balance;//账户余额
    private double annualInterestRate;//年利率

    public Account(){//构造方法，不管如何都应该写构建这一行

    }

    public Account(String id, double balance, double annualInterestRate){
        this.id = id;//这个是把传过来的形参的值赋给new对象时的示例变量
        this.balance = balance;
        this.annualInterestRate = annualInterestRate;
    }

    public void setId(String id){//id的封装
        this.id = id;
    }
    public String getId(){
        return id;
    }

    public void setBalance(double balance){//余额的封装
        this.balance = balance;
    }
    public double getBalance(){
        return balance;
    }

    public void setAnnualInterestRate(double annualInterestRate){//年利率的封装
        this.annualInterestRate = annualInterestRate;
    }
    public double getAnnualInterestRate(){
        return annualInterestRate;
    }

    public void deposit(double money){//存钱
        //这里我写复杂一点主要想体现一下思想
        this.setBalance(this.getBalance() + money);//这里实现存钱
        System.out.println("成功存入" + money + "元" + '!');
    }

    public void withdraw(double money){//取钱
        if(money > this.balance){
            System.out.println("余额不足！");
            return;
        }
        this.setBalance(this.getBalance() - money);
        System.out.println("成功取款" + money + "元" + '!');
        System.out.println("余额为" + this.getBalance() + "元" + '!');
    }

    public void changeId(String id){
        this.setId(id);
        System.out.println("修改后的账户名是" + getId());
    }

    public void changeRate(double rate){
        if(rate < 0 || rate > 100){
            System.out.println("利率修改有误！");
            return;
        }
        this.setAnnualInterestRate(rate);
        System.out.println("修改后的年利率是" + getAnnualInterestRate() + "%");
    }

}
```



### 13、生成五个不同的随机数并且，放到一个数组里面

#### （1）三个循环嵌套版

```java
public static void main(String[] args) {

    Random random = new Random();

    int num;//每次的随机数
    int mark = 1;//一个标记，很关键
    int count = 0;//计数器
    int[] randomNum = new int[5];

    randomNum[0] = random.nextInt(6);//先生成一个随机数放到数组
    /*先一个for循环实现五个数字*/
    for (int i = 1; i < 5; i++) {
        /*这个地方很重要，因为你下面的while循环离开条件就是mark=0，
        所以第二次循环的时候mark默认为0，那么就不会执行while了
         */
        mark = 1;
        num = random.nextInt(7);
        count++;

        while (mark == 1){//循环直到那个随机数不会重复再离开
            mark = 0;//默认离开循环，如果遇到了重复的，就继续迭代
            /*这个地方必须用count，因为我下面代码的逻辑是遍历发现重复的重新生成，而数组默认的值是0，
            那么这个随机数生成哪怕生成0也会被淘汰，这叫什么随机生成嘛
             */
            for (int j = 0; j < count; j++) {//遍历数组找到重复的

                if(num == randomNum[j]){
                    mark = 1;
                    num = random.nextInt(7);
                    break;//遇到了重复的就赶紧离开for循环，因为你这个for循环是无法检测到j下标前面的数的，
                }         //所以我得赶紧离开，让重新生成的数从下标为0开始遍历
            }


        }
        randomNum[i] = num;//这步也很重要啊宝，得把上面全部检查好了才能放到数组里面去
    }

    for (int i = 0; i < 5; i++) {
        System.out.print(randomNum[i] + " ");
    }
}
```

#### （2）两个for循环嵌套版

感觉其实是伪的少一个循环

```java
Random random = new Random();
int num;//每次的随机数

int count = 0;//计数器
int[] randomNum = new int[5];

randomNum[0] = random.nextInt(5);//先生成一个随机数放到数组
/*先一个for循环实现五个数字*/
for (int i = 1; i < 5; i++) {
    num = random.nextInt(5);//生成一个随机数
    count++;
      /*这个地方必须用count，因为我下面代码的逻辑是遍历发现重复的重新生成，而数组默认的值是0，
        那么这个随机数生成哪怕生成0也会被淘汰，这叫什么随机生成嘛
      */
    for (int j = 0; j < count; j++) {//遍历数组找到重复的

        if(num == randomNum[j]){
            num = random.nextInt(5);
            j = -1;//神来一笔，一行顶替了一个while循环，因为出现了重复又让数组从头开始遍历了
        }

    }//能离开这个里面的for循环的就是经过千锤百炼的，绝对不重复的
    randomNum[i] = num;//这步也很重要啊宝，得把上面全部检查好了才能放到数组里面去
}

for (int i = 0; i < 5; i++) {
    System.out.print(randomNum[i] + " ");
}
```



### 14、注册方法结合异常的实现

```java
package com.linruipeng.www.view;


public class zhuche {

    /**
     * 处理用户注册的操作
     * @param username 用户名
     * @param password 密码
     * @throws IllegalNameException 当输入的用户名不在3~9之间，报错
     */
    public void register(String username, String password) throws IllegalNameException {
        //小于3个字符，大于9个字符，以及没有字符不行
        if(null == username || username.length() < 3 || username.length() > 9){
            throw new IllegalNameException("用户名不合法，长度只能在[3,9]之间！");
        }
    }
}

class IllegalNameException extends Exception{
    public IllegalNameException(){

    }

    public IllegalNameException(String s){
        super(s);
    }

}
```



### 15、实现酒店前台简单系统

实现了打印房间所有信息，订房，退房

```java
import java.util.Scanner;

/**
 * 酒店类
 * 这个就好在它是酒店和酒店的房间隔离开的
 * 酒店类是房间的框架，可以对房间进行一系列操作
 * 而房间的作用其实就是存储一堆信息（一个房间存储它自己的信息）
 * 酒店就是实现管理这一堆信息的大容器
 */
public class Hotel {
    private Room[][] rooms;//模拟二维数组就是酒店

    //此处利用了构造方法来实现盖楼
    public Hotel() {
        //动态初始化
        rooms = new Room[5][10];

        for (int i = 0; i <5; i++) {
            for (int j = 0; j < 10; j++) {
                if (4 == i) {
                    rooms[i][j] = new Room((i + 1) * 100 + j, "总统套房", true);
                } else if (3 == i) {
                    rooms[i][j] = new Room((i + 1) * 100 + j, "dddd", true);
                } else {
                    rooms[i][j] = new Room((i + 1) * 100 + j, "普通房间", true);
                }
            }
        }
    }

    /**
     * 打印所有的房间信息
     */
    public void printAllRoom(){
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 10; j++) {
                System.out.println(this.rooms[i][j]);
            }
            System.out.println();
        }
    }

    /**
     * 订房
     */
    public void order(int roomNum){
        int floor = roomNum / 100;
        int num = roomNum % 100;
        if(this.rooms[floor - 1][num].isStatus() == true){
            this.rooms[floor - 1][num].setStatus(false);
            return;
        }
        System.out.println("房间"+ roomNum +"已被预定");
    }

    /**
     * 退房
     */
    public void checkOut(int roomNum){
        int floor = roomNum / 100;
        int num = roomNum % 100;
        if(this.rooms[floor - 1][num].isStatus() == false){
            this.rooms[floor - 1][num].setStatus(true);
            return;
        }
        System.out.println("房间"+ roomNum +"已被退订");
    }



    public Hotel(Room[][] rooms) {
        this.rooms = rooms;
    }

    public Room[][] getRooms() {
        return rooms;
    }

    public void setRooms(Room[][] rooms) {
        this.rooms = rooms;
    }
}

/**
 * 房间类
 */
class Room {
    private int no;//房间编号
    private String type;//房间类型
    private boolean status;//房间状态，true表示空闲，false表示占用

    public Room(int no, String type, boolean status) {
        this.no = no;
        this.type = type;
        this.status = status;
    }

    public Room() {
    }


    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object obj) {
        if(null == obj || !(obj instanceof Room)) return false;
        if(this == obj) return false;
        Room Room = (Room)obj;
        return this.getNo() == Room.getNo();
    }

    @Override
    public String toString() {
        return "编号："+ this.no + " 类型：" + this.type + " 状态：" + (this.status? "空闲" : "占用");
    }

}


class Test{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("扣1恰大布丁");
        int i = s.nextInt();
        Hotel hotel = new Hotel();
        hotel.printAllRoom();
        hotel.order(101);
        hotel.order(101);
        hotel.order(102);
        hotel.order(103);
        hotel.order(104);
        hotel.order(105);
        hotel.order(106);
        hotel.order(107);
        hotel.order(108);
        hotel.order(109);
        System.out.println();
        hotel.printAllRoom();
        hotel.checkOut(101);
        hotel.checkOut(101);
        hotel.checkOut(102);
        hotel.checkOut(103);
        hotel.checkOut(104);
        hotel.checkOut(105);
        hotel.checkOut(106);
        hotel.checkOut(107);
        hotel.checkOut(108);
        hotel.checkOut(109);
        System.out.println();
        hotel.printAllRoom();
    }

}
```







### 16、模拟栈结构的弹栈压栈

```java

class GaoShuSOS {
    private int index = -1;//栈帧，永远指向栈的顶部元素，此处初始化-1表示了没有指向任何一个元素
    private Object[] stacks;

    public GaoShuSOS() {
        //无参构造方法，默认为10
        this.stacks = new Object[10];
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public Object[] getStacks() {
        return stacks;
    }

    public void setStacks(Object[] stacks) {
        this.stacks = stacks;
    }


    /**
     * 压栈的方法
     * @param obj 被压入的元素
     */
    public void push(Object obj) throws MyStackOperationException {
        if(this.index < this.stacks.length - 1) {
            index++;
            this.stacks[index] = obj;
            System.out.println("push了一个" + this.stacks[index]  +"，栈帧指向" + index);
        }else{
            MyStackOperationException msoe = new MyStackOperationException("栈已经满了");
            throw msoe;//出现异常上抛
        }
    }

    /**
     * 弹栈的方法
     */
    public void pop() throws MyStackOperationException {
        if(this.index >= 0){
            System.out.println("pop了一个"+ this.stacks[index] + "，栈帧指向了" + index);
            this.stacks[index] = null;
            this.index--;
        }else{
            MyStackOperationException msoe = new MyStackOperationException("栈已经空了");
            throw msoe;//出现异常上抛
        }
    }

}

class MyStackOperationException extends Exception{
    public MyStackOperationException(){

    }

    public MyStackOperationException(String str){
        super(str);
    }

}


class Stack{
    public static void main(String[] args) {
        GaoShuSOS gaoShuSOS = new GaoShuSOS();
        try {
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());
            gaoShuSOS.push(new Object());   
            gaoShuSOS.push(new Object());

            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
            gaoShuSOS.pop();
        } catch (MyStackOperationException e) {
            //其实这个try-catch的意义就是我中途那个环节出问题了，直接就跳到catch了，不会往下执行了
            //对比于我出问题就报错，例如上面那么多方法，假设那一个出问题我就new异常然后e.printStackTrace，如果全出异常，难道全都printStackTrace吗，那多麻烦，而且理论上应该是中途环节出问题代码就停止执行了才对，所以我的new异常后上抛，统一处理才是最好的行为，节省了资源和时间
            e.printStackTrace();
        }
    }

}	
```



### 17、武器数组

主要体现了接口的厉害之处

实现了建立武器数组，添加武器，让全部可移动的武器移动，可攻击的武器攻击

```java
class Army{
    /**
     * 武器数组
     */
    private Weapon[] weapons;
    private int index = -1;//武器数组中的的“栈帧“

    public Army() {
    }

    //根据传过来的参数设置数组的长度
    public Army(int count) {
        weapons = new Weapon[count];
    }

    /**
     * 将武器加入数组
     * @param weapon 武器
     */
    public void addWeapon(Weapon weapon) {
        this.index++;
        if (this.index < weapons.length) {
            weapons[index] = weapon;//加入武器
        }else{
            System.out.println("武器库里面已经塞得满满的了哦~");
        }
    }

    /**
     * 让所有可移动的武器移动
     */
    public void moveAll(){
        for (int i = 0; i < this.weapons.length; i++) {
            if(weapons[i] instanceof Move){
                ((Move) weapons[i]).move();
            }
        }
    }

    /**
     * 让所有可攻击的武器攻击
     */
    public void attackAll(){
        for (int i = 0; i < this.weapons.length; i++) {
            if(weapons[i] instanceof Attack){
                ((Attack) weapons[i]).attack();
            }
        }
    }

    public Weapon[] getWeapons() {
        return weapons;
    }

    public void setWeapons(Weapon[] weapons) {
        this.weapons = weapons;
    }
}

/**
 * 所有武器的父类
 */
class Weapon{

}

//武器：阿帕奇
class Helicopter extends Weapon implements Move, Attack{

    @Override
    public void move() {
        System.out.println("团长！有种你飞来沈阳！");
    }

    @Override
    public void attack() {
        System.out.println("biu~biu~biu~哒哒哒哒");
    }
}
//武器：坦克
class Tank extends Weapon implements Move, Attack{

    @Override
    public void move() {
        System.out.println("报告，我们发现了敌方的九五式坦克！");
    }

    @Override
    public void attack() {
        System.out.println("开炮！！！");
    }
}
//武器：枪
class Gun extends Weapon implements Attack{

    @Override
    public void attack() {
        System.out.println("我赌你的枪里没有子弹！");
    }
}
//武器：刀
class Knife extends Weapon implements Attack{

    @Override
    public void attack() {
        System.out.println("见过这个纹身没有啊！斧头帮的大哥啊！");
    }
}
//武器：嘴巴(莫名其妙的武器，但有时会有出其不意的效果哦)
class Mouth extends Weapon implements Attack{

    @Override
    public void attack() {
        System.out.println("你这种家伙根本就不懂得同伴的力量！");
        System.out.println("我们谈谈吧！");
    }
}


/**
 * 一个移动的接口，可以给武器插上翅膀
 */
interface Move {
    /**
     * 可移动的方法
     */
    void move();
}

/**
 * 一个攻击的接口，可以给武器附魔
 */
interface Attack {
    /**
     * 可攻击的方法
     */
    void attack();
}


class Test{
    public static void main(String[] args) {
        Army army = new Army(5);//武器库容量为5
        army.addWeapon(new Helicopter());
        army.addWeapon(new Tank());
        army.addWeapon(new Gun());
        army.addWeapon(new Knife());
        army.addWeapon(new Mouth());
        System.out.println("----------");
        army.addWeapon(new Mouth());
        System.out.println("fight---------");
        army.attackAll();
        System.out.println("move----------");
        army.moveAll();

    }

}
```





### 18、目录的拷贝

```java
import java.io.*;

class copyFiles{
    public static void main(String[] args) {
        System.out.println("拷贝开始");
        //copyFilesTest();
        //先判断是否为一个文件或者目录，搞一个方法
        //文件的话，就调用文件的操作
        //目录的话就调用目录的操作

        //是这样的吧，我先从第一层遍历一遍当前目录的子文件，如果是文件的话就不用进入下一层，直接进行复制
        //如果是目录的话，就进入下一层，再进行如上操作，直到最后只剩下文件，而没有目录
        //如果是文件的话就获取绝对路径进行复制，文件夹的话没想好
        //if(wenjian) 复制; if(目录) 继续遍历;
       java.util.Scanner s = new java.util.Scanner(System.in);
        System.out.println("请输入文件或文件夹的起始路径");
        System.out.println("示例：C:/User/Administrator;C:/User/1.jpg");
        System.out.print(":");
        String fileBeginPath = s.nextLine();
        System.out.println("请输入文件或文件夹的指定复制路径");
        System.out.print(":");
        String fileEndPath = s.nextLine();

        //进入复制，先进行第一轮的分流
        judgeFileOrDirectory(fileBeginPath, fileEndPath);
        System.out.println("拷贝结束");
    }

    /**
     * 复制文件用的方法
     * @param fileBeginPath 文件的起始路径
     * @param fileEndPath 文件的指定复制路径
     */
    public static void copyFiles(String fileBeginPath, String fileEndPath){
        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            fis = new FileInputStream(fileBeginPath);
            fos = new FileOutputStream(fileEndPath);

            //设置为1MB
            byte[] bytes = new byte[1024 * 1024];
            int readCount = 0;

            //边读边写
            while((readCount = fis.read(bytes)) != -1){
                //这个length放的是readCount，而不是bytes.length感觉就很nice
                //因为readCount的值是read字节的返回值，到最后可能bytes数组不到全部长度
                //但是readCount就很好地避免了读入数组中空的数据
                fos.write(bytes, 0, readCount);
            }

            fos.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    /**
     * 用来判断是否文件还是目录
     * @param fileEndPath 文件或文件夹的的最初目录
     * @param fileEndPath 文件或者文件夹的指定目录
     */
    public static void judgeFileOrDirectory(String fileBeginPath, String fileEndPath){
        File file = new File(fileBeginPath);

        //应该分割开，对普通文件单独的操作，对目录又是一个操作，我要做的就是把文件从一层一层目录揪出来，从里到外进行复制
        if(file.isFile()){
            //由于此处只是第一次判断（文件和目录的第一次分流），路径错误报错就行，我不会创建目录
            copyFiles(fileBeginPath, fileEndPath + "/" + file.getName());
        }else{
            //进入递归
            copyDirectory(fileBeginPath, fileEndPath);
        }

    }


    /**
     * 专门递归操作文件夹的
     * @param fileBeginPath 文件夹起始路径
     * @param fileEndPath 文件夹指定路径
     */
    public static void copyDirectory(String fileBeginPath, String fileEndPath){
        File file = new File(fileBeginPath);//文件夹中的文件
        File directory = new File(fileEndPath);//文件夹中的文件夹
        //很重要的一步，为了处理复制目录（路径）的必须操作
        //因为复制一个文件夹其实就是创建一个相同的文件夹
        //假设文件夹为空嘛，你要把一个黄油油的文件夹copy的话其实是行不通的，因为FileOutputStream字符输出流是不允许输出目录的
        //那我们怎么办呢？直接照着已存在的复制个名字创建一个新的不就很哇塞了吗
        if(!directory.exists()){
            directory.mkdir();
        }

        File[] files = file.listFiles();//获取子文件或者目录
        //遍历子文件或者目录，对齐进行再判断
         for (File innerFile:
                files) {
             //下面是当你遍历文件夹的时候，遇到了文件，直接复制
             //遇到了文件夹，继续递归
                if(innerFile.isDirectory()){
                    //需要注意的是前面的起始路径应该是当前文件夹的绝对路径
                    //后面的指定路径，因为是在文件夹下的文件夹，所以fileEndPath是指当前的文件夹路径
                    //然后再加上/子文件夹名称，这样就构成了子文件夹的路径，因为递归回去的话若是路径下的目录不存在，我就会创建，所以不用担心
                    copyDirectory(innerFile.getAbsolutePath(), fileEndPath + "/" + innerFile.getName());
                }else{
                    //前面的路径需要是当前被复制文件的绝对路径作为起始路径
                    //复制的话记得FileOutputStream是必须指定输出的文件的名称的，所以后面我加了一个复制的当前文件的名称
                    copyFiles(innerFile.getAbsolutePath(), directory.getAbsolutePath() + "/" + innerFile.getName());
                }
         }
    }
}
```

























