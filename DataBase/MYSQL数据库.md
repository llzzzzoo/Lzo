[TOC]



### 一、基础概述

![image-20220328204711123](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220328204711123.png)

![image-20220328205907926](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220328205907926.png)

### 二、基本操作指令

![image-20220329210312326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329210312326.png)

![image-20220329210720217](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329210720217.png)

![image-20220329211701958](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329211701958.png)

### 三、表

![image-20220329212109222](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329212109222.png)

### 四、SQL语句

#### (1)基础定义

![image-20220329212930933](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329212930933.png) 

![image-20220329213002675](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329213002675.png)

#### (2)导入文件

#### (3)查看数据

导入的时候注意几个点

第一，得先show database; 发现没有我数据库名

第二，就是create database 数据库名;

第三，就是use 数据库名;

三面几步就是确保你use了对应的数据库

第四，就是source, 把文件拖过来，但是要注意' \ '改成个' / '，即改为正斜杠，而且不用接;

![image-20220329214458924](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329214458924.png)

#### (4)查看表的结构

![image-20220329214745245](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329214745245.png)

![image-20220329215223428](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329215223428.png)

不见分号--“;”不执行，看下面

![image-20220329214859923](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329214859923.png)

![image-20220329215016126](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329215016126.png)

### （5）查询

Data QueryLanguage

不区分大小写哦

#### 1、简单查询

```mysql
select BIRTH_date from employees;/*两者一样的*/
select birth_date from employees;
```

![image-20220329220201660](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329220201660.png)

##### ①查询两个或多个字段

```mysql
select emp_no,birth_date from employees;/*select 字段名 from 数据库名*/
```

![image-20220329222240505](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329222240505.png)

##### ②查询所有字段

```mysql
select * from employees;
```

![image-20220329222459694](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329222459694.png)

##### ③起别名，以及加减乘除

```mysql
select emp_no as empnum from employees;/*空格名的话就得加''让这玩意变成字符串*//*信我，这玩意真不知道有啥用
怎么说呢，就是你不是select可以选择一个字段输出吗，但是这玩意输出的时候顺便把显示的名字给改成你要求的了
但实际上在数据库里面的名字还是没变
记住一个点，select关键字永远不能修改数据库的数据
*/
/*我又回来了，喵的，空格一定要带''啊，不带''的话打了空格你就傻了，错误都找不到*/
select emp_no as 'emp num' from employees;/*空格名的话就得加''让这玩意变成字符串*/
select emp_no*12 as '年薪' from employees;/*很精彩啊，*了一个整数，然后还用''实现齐了个中文别名*/
```

![image-20220329223409019](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329223409019.png)



#### 2、条件查询

![image-20220329224636862](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220329224636862.png)

##### 常见函数

###### ①查询指定范围

###### ②and/or

###### ③in

###### ④%和_

###### ⑤按照指定顺序排序

```mysql
/*下面这个比较有意思，相当于输出了个闭区间范围*/
select first_name,last_name from employees where emp_no between 10006 and 10007;

/*下面这个注意了得是，emp_no >= ..and emp_no <= ..，别忘了and*/
select first_name,last_name from employees where emp_no >=10006 and <=10007;

/*这个也很有意思，这个是不等于的意思，<>哈哈有意思啊*/
select first_name,last_name from employees where emp_no <> 10006;
select first_name,last_name from employees where emp_no >= 10006;
select first_name,last_name from employees where emp_no <= 10006;

/*这个!= 可以操作'字符哦'*/
select first_name,last_name from employees where gender != 'F';

/*关于null的比较只能用is*/
select emp_no from employees where gender is not null;

/*使用and*/
mysql> select
    ->   emp_no,gender
    -> from
    ->  employees
    -> where
    ->  gender = 'M' and emp_no < 10008;

/*使用or*/
mysql> select
    ->  emp_no,gender
    -> from
    ->  employees
    -> where
    ->  gender = 'M' or emp_no < 10008;

/*and和or连用的时候，如果不加小括号的话，其实and优先级是高于or的*/
    gender = 'F'and (emp_no = 10003 or emp_no = 10005);

/*使用in就当于 字段 = 指定值，千万注意where 字段 in (指定值) 括号括号括号！！！*/
select emp_no from employees where gender in ('F');
select emp_no from employees where gender in ('F', 'M');
mysql> select emp_no from employees where gender not in ('F');

/*时刻记住，%代表中间*/
mysql> select first_name from employees where first_name like '%e';/*这是求e在最后的数据*/
mysql> select first_name from employees where first_name like 'e%';/*开头为字母e的数据*/
mysql> select first_name from employees where first_name like '%e%';/*这是指字符串中含有字母e的data*/
mysql> select first_name from employees where first_name like '_e%';/*这是第二个字符为e的数据*/
mysql> select first_name from employees where first_name like 'S_m%';/*这是开头为S，第三个为m的数据*/

/*指定排序*/
mysql> select
    ->  birth_date,hire_date
    -> from
    ->  employees
    -> order by
    ->  emp_no desc;/*指定降序*/
    /*指定升序，其实你默认也是升序，不知道有啥用*/
    mysql> select
    ->  birth_date,hire_date
    -> from
    ->  employees
    ->order by
    ->  emp_no asc;
    /*默认升序*/
    mysql> select
    ->  birth_date,hire_date
    -> from
    ->  employees
    ->  order by
    ->  emp_no;
    /*如果前面的一样，那么再看排序后面的*/
    mysql> select
    ->  birth_date,hire_date
    -> from
    ->  employees
    -> order by
    ->  gender asc,emp_no ;
```

**注意，数据库中想查找等于null的数据只能用 is null**

![image-20220330001734323](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330001734323.png)

![image-20220330105119471](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330105119471.png)

![image-20220330110209685](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330110209685.png)

![image-20220330113723540](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330113723540.png)

### （6）单行数据处理函数

又被称为单行处理函数

![image-20220330203150518](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330203150518.png)

##### 常见函数

###### ①求和

###### ②大小写转换

###### ③字符串截取

###### ④将首字母大写打印每行名字

###### ⑤求长度

###### ⑥去除空格

###### ⑦打印指定字面量

###### ⑧四舍五入

###### ⑨生成随机数

###### ⑩带有null的运算

###### ⑨case.when.then.else.end

```mysql
/*求和*/
mysql> select sum(emp_no) from employees;

/*转换为大写*/
mysql> select upper(last_name) as '名字大写' from employees;
/*转换为小写*/
mysql> select lower(last_name) as '名字大写' from employees;

/*字符串截取*/
/*下面是找出首字母为S的数据*/
mysql> select
    ->  first_name
    -> from
    ->  employees
    -> where
    ->  substr(first_name, 1, 1) = 'S';
    /*下面是把字符串的首字母大写打印出来，换个lower就是小写了*/
mysql> select upper(substr(first_name,1,1)) from employees;
/*下面这个更是重量级，这个能实现把首字母大写，然后把每个单行打印出来*/
mysql> select concat(upper(substr(first_name,1,1)), substr(first_name,2,length(first_name)-1)) as '把名字都首字母大写打印出来' from employees;

/*求长度，重命名的话加个空格就好*/
mysql> select length(emp_no) '加个空格就可以重命名的' from employees;

/*取出前后空格，下面就是，去除了前面的空格，免得space + F搜索不到*/
mysql> select * from employees where gender = trim(' F');

/*把指定的字面量，字符或者数字，按你给的名字打印出来，长度是你的列表的长度*/
select 'a' as fuck from employees;

/*四舍五入，选择保留几位小数*/
mysql> select round(1234.567, 2) as '保留两位小数' from employees;

/*生成随机数 rand()就可以了*/
/*下面是生成100以内的随机数*/
mysql> select round(rand()*100, 0) as '一百以内的随机数' from employees

/*null做运算时，不论加减都等于null，那这个时候我们应该怎么处理带有null的运算呢*/
/*看下面，下面的意思是说，ifnull，如果comm为null，那么就给它个缺省值0，这样才能让它参与运算*/
select ename,(sal + ifnull(comm, 0)) * 12 as yearsal from emp;

/*这个是打印当上面情况下出现什么操作*/
mysql> select
    ->  first_name,
    ->  last_name,
    ->  emp_no as oldnum,
    ->  (case gender when 'F' then emp_no*10 when 'M' then emp_no*100 else emp_no end) as newnum
    -> from
    ->  employees;
```

![image-20220330140823124](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330140823124.png)

### （7）多组处理函数

这个函数会自动忽略null，包括求和的时候

![image-20220330203345675](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330203345675.png)

##### 常见函数

###### ①求和

###### ②求平均值

###### ③求行数

###### ④求极值

```mysql
/*自动忽略null，所以你指定了求行数，也会忽略null的那一行*/

/*求和*/
mysql> select sum(emp_no) from employees;
			
/*求平均值*/
mysql> select avg(emp_no) from employees;
			
/*求行数*/
mysql> select count(emp_no) from employees;
/*下面这一种写法就是统计全部行数，而上面那种写法，遇到null时会自动忽略*/
mysql> select count(*) from employees;
			
/*求最大最小值*/
mysql> select max(emp_no) from eployees;
mysql> select min(emp_no) from employees;
```

![image-20220330204509230](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330204509230.png)

##### 分组查询

![image-20220330205405715](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330205405715.png)

补充一下，limit在order by之后

![image-20220330220544396](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330220544396.png)

###### ①注意事项

```mysql
select ename,sal from emp where sal > min(sal);
/*上述语句是会报错的哦*/
/*记住一个顺序
from
where
group by
select
order by
那么下面我就给你细讲一下
*/

/*这个语句原本是这样的*/
select ename,sal from emp where sal > min(sal) (Group by);/*默认为整张表为一组*/
/*但实际上where做判断的时候是这样的，你看上面的顺序嘛*/
select ename,sal from emp where (sal > min(sal))(Group by);
/*发现了吗，它是先where判断的，但是这个时候这个min分组函数是没有进行分组的，也就是说，它连默认的(Group by)都没有，但是分组函数只有在函数分组之后才能进行操作啊*/

```

```mysql
/*下面select后面不能跟其他的字段，不然你打印的行会被压缩*/
mysql> select birth_date,sum(emp_no) from employees group by birth_date;
```

![image-20220330222634954](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220330222634954.png)

###### ②实现多个字段的查询

###### ③实现分组查询并且打印指定范围的数据

###### ④去重

```mysql
/*实现多个字段的查询*/
select
 deptno,job,max(sal)
from
 emp
group by
 depton,job;
 /*上面的这个比较有意思
 就是说它是先把deptno分组，再在这个分好的组里面进行job分组，然后再打印最大的sal
 */
 
 /*实现分组查询并且打印指定范围的数据*/
 mysql> select
    ->  first_name,max(emp_no)
    -> from
    ->  employees
    -> where
    ->  emp_no > 10004
    -> group by
    ->  first_name;
+------------+-------------+
| first_name | max(emp_no) |
+------------+-------------+
| Anneke     |       10006 |
| Duangkaew  |       10010 |
| Kyoichi    |       10005 |
| Mary       |       10011 |
| Saniya     |       10008 |
| Sumant     |       10009 |
| Tzvetan    |       10007 |
+------------+-------------+

/*上面的where可不是全能的哦，假设我要你显示平均的>多少多少值，你怎么办呢，也就是你不得不在where后面写一个分组函数
请看下面，引入了having，having的效率肯定没where高，毕竟是选出来全部的，然后再剔除，但它的确能解决where解决不了的问题*/
mysql> select
    ->  first_name,avg(emp_no) as '平均数'
    -> from
    ->  employees
    -> group by
    ->  first_name
    -> having
    ->  avg(emp_no) > 10007;
+------------+------------+
| first_name | 平均数          |
+------------+------------+
| Duangkaew  | 10010.0000 |
| Mary       | 10011.0000 |
| Saniya     | 10008.0000 |
| Sumant     | 10009.0000 |
+------------+------------+

/*去重*/
mysql> select distinct gender from employees;
```



### （8）连接查询

![image-20220331005315594](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331005315594.png)

![image-20220331005244938](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331005244938.png)

###### ①笛卡尔积现象

![image-20220331010840364](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331010840364.png)

![image-20220331011251668](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331011251668.png)

记住要起个别名，而且

```mysql
emp.deptno/*是让它只去emp字段里面查询，提高效率*/

/*下面就是个起别名的秒操作*/
```

![image-20220331011315110](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331011315110.png)

#### 内连接和外连接

###### ②sql99和sql92的区别

###### ③内连接的(非)等值连接

###### ④内连接的自连接

###### ⑤外连接

内连接和外连接两者的区别就是，外连接讲究表的主次之分，而内连接的连接的表是平级的

```mysql
/*下面这个语句就可以实现两张表的查询了，注意两张表都得在同一个database下面哦*/
mysql> select
    ->  d.dept_no,s.salary
    -> from
    ->  dept_emp d
    -> inner join/*也可以省略inner，写了一眼内连接*/
    ->  salaries s
    -> on
    ->  d.emp_no = s.emp_no/*这个比较巧妙，怎么说呢，就是你的s里面的emp_no或者d里面的emp_no里面纵使千万条，它只会看满足这个条件的，换句话说，你的s里面的emp_no纵使千万条，但是它上面打印的salary只会是拿一条唯一满足条件的*/
    -> where
    ->  salary > 80000;
+---------+--------+
| dept_no | salary |
+---------+--------+
| d001    |  85097 |
| d001    |  88958 |
+---------+--------+

/*下面就是表的非等值连接，也是实现了打印一张表的员工名、薪资和另一张表的薪资等级*/
mysql> select
    ->  e.ename,e.sal,s.grade
    -> from
    ->  emp e
    -> join
    ->  salgrade s
    -> on
    ->  e.sal between s.losal and s.hisal;
+--------+---------+-------+
| ename  | sal     | grade |
+--------+---------+-------+
| SMITH  |  800.00 |     1 |
| ALLEN  | 1600.00 |     3 |
| WARD   | 1250.00 |     2 |
| JONES  | 2975.00 |     4 |
| MARTIN | 1250.00 |     2 |
| BLAKE  | 2850.00 |     4 |
| CLARK  | 2450.00 |     4 |
| SCOTT  | 3000.00 |     4 |
| KING   | 5000.00 |     5 |
| TURNER | 1500.00 |     3 |
| ADAMS  | 1100.00 |     1 |
| JAMES  |  950.00 |     1 |
| FORD   | 3000.00 |     4 |
| MILLER | 1300.00 |     2 |
+--------+---------+-------+

/*下面就是自连接，技巧就是一张表看做两张表，然后起两个别名，下面实现了根据编号打印一张表的打工人的和他们的老板*/
mysql> select
    ->  a.ename as '打工人',b.ename as '资本家'
    -> from
    ->  emp a
    -> join
    ->  emp b
    -> on
    ->  a.mgr = b.empno;
+--------+--------+
| 打工人       | 资本家      |
+--------+--------+
| SMITH  | FORD   |
| ALLEN  | BLAKE  |
| WARD   | BLAKE  |
| JONES  | KING   |
| MARTIN | BLAKE  |
| BLAKE  | KING   |
| CLARK  | KING   |
| SCOTT  | JONES  |
| TURNER | BLAKE  |
| ADAMS  | SCOTT  |
| JAMES  | BLAKE  |
| FORD   | JONES  |
| MILLER | CLARK  |
+--------+--------+

/*下面就是外连接*/
mysql> select
    ->  e.ename,d.dname
    -> from
    ->  emp e /*下面的outer也是可以省略的*/
    -> right outer join /*这个意思把右边的表看做主表，右边的信息都会打印出来，顺带打印出左边的信息*/
    -> dept d
    -> on
    ->  e.deptno = d.deptno;
+--------+------------+
| ename  | dname      |
+--------+------------+
| CLARK  | ACCOUNTING |
| KING   | ACCOUNTING |
| MILLER | ACCOUNTING |
| SMITH  | RESEARCH   |
| JONES  | RESEARCH   |
| SCOTT  | RESEARCH   |
| ADAMS  | RESEARCH   |
| FORD   | RESEARCH   |
| ALLEN  | SALES      |
| WARD   | SALES      |
| MARTIN | SALES      |
| BLAKE  | SALES      |
| TURNER | SALES      |
| JAMES  | SALES      |
| NULL   | OPERATIONS |
+--------+------------+
/*下面这个就实现了把老板king也看做员工打印出来*/
mysql> select
    -> a.ename as '打工人',b.ename as '资本家'
    -> from
    -> emp a
    -> left join
    -> emp b
    -> on
    -> a.mgr = b.empno;
+--------+--------+
| 打工人       | 资本家      |
+--------+--------+
| SMITH  | FORD   |
| ALLEN  | BLAKE  |
| WARD   | BLAKE  |
| JONES  | KING   |
| MARTIN | BLAKE  |
| BLAKE  | KING   |
| CLARK  | KING   |
| SCOTT  | JONES  |
| KING   | NULL   |
| TURNER | BLAKE  |
| ADAMS  | SCOTT  |
| JAMES  | BLAKE  |
| FORD   | JONES  |
| MILLER | CLARK  |
+--------+--------+

/*下面是一个三表连用*/
/*这里实现了每个员工的名字，领导名，薪资，部门名，还有薪资等级*/
/*注意一定是外连接，因为照你140行的条件，你的king即老板是会被排除的，所以一定要外连接打印出老板那一行，看145行*/
mysql> select
    ->  e.ename,e.sal,d.dname,s.grade,l.ename
    -> from
    ->  emp e
    -> join
    ->  dept d
    -> on
    ->  e.deptno = d.deptno
    -> join
    ->  salgrade s
    -> on
    ->  e.sal between s.losal and s.hisal
    -> left join/*这个地方的left对应的是from后面的emp e哦，不是那个join，这个你得注意了*/
    ->  emp l
    -> on
    ->  e.mgr = l.empno;
+--------+---------+------------+-------+-------+
| ename  | sal     | dname      | grade | ename |
+--------+---------+------------+-------+-------+
| SMITH  |  800.00 | RESEARCH   |     1 | FORD  |
| ALLEN  | 1600.00 | SALES      |     3 | BLAKE |
| WARD   | 1250.00 | SALES      |     2 | BLAKE |
| JONES  | 2975.00 | RESEARCH   |     4 | KING  |
| MARTIN | 1250.00 | SALES      |     2 | BLAKE |
| BLAKE  | 2850.00 | SALES      |     4 | KING  |
| CLARK  | 2450.00 | ACCOUNTING |     4 | KING  |
| SCOTT  | 3000.00 | RESEARCH   |     4 | JONES |
| KING   | 5000.00 | ACCOUNTING |     5 | NULL  |
| TURNER | 1500.00 | SALES      |     3 | BLAKE |
| ADAMS  | 1100.00 | RESEARCH   |     1 | SCOTT |
| JAMES  |  950.00 | SALES      |     1 | BLAKE |
| FORD   | 3000.00 | RESEARCH   |     4 | JONES |
| MILLER | 1300.00 | ACCOUNTING |     2 | CLARK |
+--------+---------+------------+-------+-------+
```

![image-20220331095321314](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331095321314.png)

下面这个自连接就是把一张表看成两张表，然后起两个别名，确实厉害

![image-20220331195718496](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331195718496.png)

下面就是外连接

![image-20220331202603238](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331202603238.png)

![image-20220331202843719](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331202843719.png)

### （9）子查询

![image-20220331205450999](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331205450999.png)

###### ①where中的子查询

###### ②from中的子查询

###### ③select中的子查询

```mysql

/*使用select嵌套的子查询*/
/*查询比最低工资高的人*/
mysql> select ename,sal from emp where sal > (select min(sal) from emp);
+--------+---------+
| ename  | sal     |
+--------+---------+
| ALLEN  | 1600.00 |
| WARD   | 1250.00 |
| JONES  | 2975.00 |
| MARTIN | 1250.00 |
| BLAKE  | 2850.00 |
| CLARK  | 2450.00 |
| SCOTT  | 3000.00 |
| KING   | 5000.00 |
| TURNER | 1500.00 |
| ADAMS  | 1100.00 |
| JAMES  |  950.00 |
| FORD   | 3000.00 |
| MILLER | 1300.00 |
+--------+---------+

/*下面是from中的高级子查询*/
/*这个是属于把from后面的查询结果当做一张表来处理了*/
/*下面就是把平均工资的等级打印出来了*/
mysql> select
    ->  t.*,s.grade
    -> from/*注意下面给avg起个别名很重要，看32行*/
    ->  (select job,avg(sal) as avgsal from emp group by job) t/*这是给那个表起个别名*/
    -> join
    ->  salgrade s
    -> on/*下面是一定要起个别名的，因为t.avg(sal)，系统会觉得它是一个函数，因为咱们一般都是直接avg(sal)，前面不会跟个t.什么的*/
    ->  t.avgsal between s.losal and s.hisal;
+-----------+-------------+-------+
| job       | avgsal      | grade |
+-----------+-------------+-------+
| CLERK     | 1037.500000 |     1 |
| SALESMAN  | 1400.000000 |     2 |
| ANALYST   | 3000.000000 |     4 |
| MANAGER   | 2758.333333 |     4 |
| PRESIDENT | 5000.000000 |     5 |
+-----------+-------------+-------+

/*下面就是select的子查询了*/
/*注意，这个select的子查询只能返回一条结果，也就是说下面的where如果返回了两条结果，那么就会报错*/
/*ERROR 1242 (21000): Subquery returns more than 1 row*/
mysql> select
    ->  e.ename,e.deptno,(select d.dname from dept d where e.deptno = d.deptno) as danme
    -> from
    ->  emp e;
+--------+--------+------------+
| ename  | deptno | danme      |
+--------+--------+------------+
| SMITH  |     20 | RESEARCH   |
| ALLEN  |     30 | SALES      |
| WARD   |     30 | SALES      |
| JONES  |     20 | RESEARCH   |
| MARTIN |     30 | SALES      |
| BLAKE  |     30 | SALES      |
| CLARK  |     10 | ACCOUNTING |
| SCOTT  |     20 | RESEARCH   |
| KING   |     10 | ACCOUNTING |
| TURNER |     30 | SALES      |
| ADAMS  |     20 | RESEARCH   |
| JAMES  |     30 | SALES      |
| FORD   |     20 | RESEARCH   |
| MILLER |     10 | ACCOUNTING |
+--------+--------+------------+


```

![image-20220331205755025](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331205755025.png)

![image-20220331210258564](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331210258564.png)



### （10）union合并查询结果集

```mysql
/*下边就是union实现，确实灵活而且看下面图片确实可以实现更加简便快捷的查询啊*/
mysql> select ename,job from emp where job = 'MANAGER'
    -> union
    -> select ename,job from emp where job = 'SALESMAN';
+--------+----------+
| ename  | job      |
+--------+----------+
| JONES  | MANAGER  |
| BLAKE  | MANAGER  |
| CLARK  | MANAGER  |
| ALLEN  | SALESMAN |
| WARD   | SALESMAN |
| MARTIN | SALESMAN |
| TURNER | SALESMAN |
+--------+----------+
```

![image-20220331213822061](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331213822061.png)



### （11）limit分页

![image-20220331215128568](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331215128568.png)

```mysql
/*打印指定位置的员工的工资*/
mysql> select
    ->  ename,sal
    -> from
    ->  emp
    -> order by
    ->  sal desc
    -> limit
    ->  2,3;/*左边是起始位置（还是数组那套，下标为0才算开始），右边是长度*/
+-------+---------+
| ename | sal     |
+-------+---------+
| FORD  | 3000.00 |
| JONES | 2975.00 |
| BLAKE | 2850.00 |
+-------+---------+
```

![image-20220331221402977](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220331221402977.png)



### （12）表的创建及数据类型

Data Manipulation Language, *DML*

![image-20220401003003602](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401003003602.png)

![image-20220401003021370](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401003049482.png)![image-20220401003144046](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401003144046.png)![image-20220401003246556](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401003246556.png)

###### ①建表

###### ②删除表

```mysql
/*创建一个学生表*/
/*包含学号，姓名，年龄，性别，邮箱地址*/
mysql> create table t_student(
    ->  no int,
    ->  name varchar(32),
    -> sex char(1),
    -> age int(3),
    -> email varchar(222)
    -> );
    
/*删除如果exists的话*/    
mysql> drop table if exists t_class;
mysql> drop table t_student;/*删除指定的表，如果表不存在就会报错*/
```

### （13）insert语句

###### ①插入数据

###### ②default缺省值

```mysql
/*四个注意的点
第一个，字段名和值必须一一对应，允许颠倒顺序，也允许字段只有一个，但是必须满足一一对应
第二，如果省略了字段名的话，必须对全部字段进行赋值
第三，可以搞个default缺省值
第四，但凡insert语句执行成功了，必然会多加一行，而在原有的行上做修改需要另外的函数了
*/
/*建表示例*/
mysql> insert into t_student(email,name,sex,age,no)
    -> values('xiaolin@666.com', 'xiaozhu', 'F', 22, 3);
```

![image-20220401005352822](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401005352822.png)

![image-20220401005402529](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401005402529.png)

![image-20220401005700241](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401005700241.png)

下面就是实现默认赋值操作

![image-20220401005631815](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401005631815.png)

###### ③数字格式化

数字格式化

![image-20220401010427940](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401010427940.png)

###### ⑤insert语句插入日期

```mysql
/*建表*/
mysql> create table t_user(
    -> id int,
    -> name varchar(32),
    -> birth date
    -> );
    
    /*下面是常见写法*/
    mysql> insert into t_user(id,name,birth) values(1,'Zhang',str_to_date('09-10-1999','%d-%m-%Y'));
    /*下面就是如果你提供的日期是这个格式：%Y-%m-%d，就不需要像上面那样一个一个对齐了*/
    mysql> insert into t_user(id,name,birth) values(2,'Sun','2000-2-10');
    
    /*打印出来就是下面这样*/
    mysql> select * from t_user;
+------+-------+------------+
| id   | name  | birth      |
+------+-------+------------+
|    1 | Zhang | 1999-10-09 |
|    2 | Sun   | 2000-02-10 |
+------+-------+------------+
```

![image-20220401011549191](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401011549191.png)

![image-20220401011629398](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401011629398.png)

###### ⑥格式化打印日期

###### ⑦date和datetime的区别

```mysql
/*下面就是按照指定格式打印*/
/*如果你不指定格式的话，它就会按照默认的格式打印出来*/
mysql> select id,name,date_format(birth,'%Y年%m月%d天') as birth from t_user;
+------+-------+----------------+
| id   | name  | birth          |
+------+-------+----------------+
|    1 | Zhang | 1999年10月09天       |
|    2 | Sun   | 2000年02月10天       |
+------+-------+----------------+

/*下面就是使用了now()函数进行获取系统当前时间*/
mysql> insert into t_user(id,name,birth,create_time) values(1,'zhangshan','2000-1-1',now());
mysql> select * from t_user;
+------+-----------+------------+---------------------+
| id   | name      | birth      | create_time         |
+------+-----------+------------+---------------------+
|    1 | zhangshan | 2000-01-01 | 2022-04-01 10:03:03 |
+------+-----------+------------+---------------------+

/*还可以多次插入哦*/
mysql> insert into t_user(id,name,birth,create_time) values
    -> (2,'wangwu','1999-2-10',now()),
    -> (3,'wowo','2030-4-23',now()),
    -> (4,'heh','2100-9-22',now());
    mysql> select * from t_user;
+------+--------+------------+---------------------+
| id   | name   | birth      | create_time         |
+------+--------+------------+---------------------+
|    1 | lisi   | 1999-01-10 | 2022-04-01 10:03:03 |
|    2 | wangwu | 1999-02-10 | 2022-04-01 14:49:42 |
|    3 | wowo   | 2030-04-23 | 2022-04-01 14:49:42 |
|    4 | heh    | 2100-09-22 | 2022-04-01 14:49:42 |
+------+--------+------------+---------------------+
```

![image-20220401095348554](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401095348554.png)![image-20220401095449671](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401095449671.png)

![image-20220401100129559](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401100129559.png)

![image-20220401100107736](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401100107736.png)

###### ⑧update修改

![image-20220401100552407](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401100552407.png)

```mysql
/*下面就是针对id为1的数据进行修改*/
mysql> update t_user set name = 'lisi',birth = '1999-1-10' where id = 1;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

/*修改前*/
mysql> select * from t_user;
+------+-----------+------------+---------------------+
| id   | name      | birth      | create_time         |
+------+-----------+------------+---------------------+
|    1 | zhangshan | 2000-01-01 | 2022-04-01 10:03:03 |
+------+-----------+------------+---------------------+
/*修改后*/
mysql> select * from t_user;
+------+------+------------+---------------------+
| id   | name | birth      | create_time         |
+------+------+------------+---------------------+
|    1 | lisi | 1999-01-10 | 2022-04-01 10:03:03 |
+------+------+------------+---------------------+
```

###### ⑨删除

```mysql
/*下面就是指定条件删除*/
delete from  t_user where id = 2;
/*没有条件直接删除整张表*/
delete from t_user;
```

![image-20220401100936093](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401100936093.png)

###### ⑩快速建表

备份

```mysql
/*感觉实现了备份的感觉*/
mysql> create table emp2 as select * from emp;
mysql> select * from emp2;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-

/*可以实现赋值一份表的一部分*/
mysql> create table mytable as select empno,ename from emp where job = 'MANAGER';
mysql> select * from mytable;
+-------+-------+
| empno | ename |
+-------+-------+
|  7566 | JONES |
|  7698 | BLAKE |
|  7782 | CLARK |
+-------+-------+


```

### （12）删除大表

```mysql
/*这两种删除方式是有区别的，但千万注意，这两种删除都是删除表中的数据，不是删除表哦*/
/*首先，前者是可以rollback恢复的，后者是不能恢复的*/
/*第二，就是前者的效率较低，因为它是一条条的删除表中的数据，而后者直接把表截断，效率较高，怎么理解截断呢，我怀疑，这玩意就是跑到表的末尾像那个EOF一样，然后估计直接把前面的表忽略了，但是依然不是删表哦*/
mysql> delete from dept_bak;
rollback;/*直接输入这句话就可以回滚了*/
truncate table dept_bak;
```

![image-20220401151851139](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401151851139.png)



### （13）对表结构的增删改

![image-20220401153035087](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401153035087.png)



### （14）约束

![image-20220401153308801](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401153308801.png)

###### ①非空约束

not null就是为了让你insert的语句不能是空的

```mysql
create table t_vip(
	id int,
    name varchar(255) not null
);
insert into t_vip(id,name) values(1,'zhangsan');
insert into t_vip(id,name) values(2,'lisi');
/*下面会报这个错*/
/*ERROR 1364 (HY000): Field 'name' doesn't have a default value*/
insert into t_vip(id) values(3);

```

![image-20220401153853875](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401153853875.png)

###### ②唯一性约束

```mysql
create table t_vip(
	id int,
    name varchar(255) unique/*这里就是保证唯一性的操作，称作列级约束*/
);

/*下面的写法很牛，它限制了当你int和varchar重复才能算重复，很牛啊，身份证是不是这样的，姓名可以重复，但是身份证号码不能重复*/
create table t_vip(
	id int,
    name varchar(255),
    unique(int,varchar)/*这个被称作表级约束*/
);
```

![image-20220401154943385](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401154943385.png)

联合唯一性

![image-20220401155327068](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401155327068.png)

当not null和unique可以联合使用，被修饰的字段自动变为主键字段

![image-20220401203643004](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401203643004.png)



##### ③主键约束

![image-20220401204534698](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401204534698.png)

![image-20220401204516776](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401204516776.png)

```mysql
/*下面就是添加主键约束的写法*/
/*注意主键只能有一个，怎么说呢，其实主键就相当于身份证，你添加那一行为主键，那一行就是身份证的感觉，毕竟主键等价于not null和unique联合使用*/
/*主键使用的类型下面也有推荐，别多想了，主键就相当于一个标识，让这个标识就死绑在这行上*/
mysql> create table t_vip(
    ->  id int primary key,/*可以使用列级约束*/
    ->  name varchar(255)
    -> );
    
    mysql> create table t_vip(
    ->  id int,
    ->  name varchar(255)，
    ->  primary key(id)/*也可以使用表级约束*/
    -> );
    
```

###### 复合主键(不建议使用)

![image-20220401205846372](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401205846372.png)

###### 自动维护主键值

![image-20220401210249270](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401210249270.png)



##### ③外键约束

![image-20220401211316072](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401211316072.png)

![image-20220401211405384](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401211405384.png)![image-20220401211659450](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401211659450.png)

```mysql
/*这个sql语句的作用就是使得你的某个字段的值只能是另一张table的字段的值*/
create table t_class(
 	classno int primary key,/*这里是给班级的编号进行主键约束，肯定啊，一个班一个编号*/
    classname varchar(255),
);
create table t_student(
	no int primary key auto_increment,/*这里就是自动维护主键值*/
    name varchar(255),
    cno int,
    foreign key(cno) references t_class(classno)/*这里就是实现外键约束，外来的key元素，必须参考另一张表的某个字段的值*/
);
/*注意：外键约束的参考值不一定是主键，可以为null，但一定要是unique属性哦*/
/*然后就是下面的插入了*/

```

![image-20220401212140981](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401212140981.png)



### （15）存储引擎

###### ①基本定义

![image-20220401214042393](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401214042393.png)

![image-20220401214317898](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401214317898.png)

###### ②查看支持那些存储引擎

![image-20220401214558390](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401214558390.png)

![image-20220401214634602](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401214634602.png)



###### ③存储引擎的特点

![image-20220401215228939](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401215228939.png)![image-20220401215533971](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401215533971.png)![image-20220401215748513](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401215748513.png)



### （16）事务

只有DML语句跟事物有关，毕竟只有这个语句是真正对数据进行增删改

###### ①基本概述

![image-20220401221815469](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401221815469.png)

###### ②事物实现原理

![image-20220401222724073](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401222724073.png)

###### ③提交和回滚事物

```mysql
commit;/*不撤销DML操作，也清空了事务性活动的日志文件，并且实现把数据全部持久化到数据库中*/
rollback;/*回滚到上一个提交点，说白了就是把你的事务性活动的日志文件清空了，把所有的DML操作撤销*/
start transaction；/*这个就是撤销自动提交的操作，毕竟这个自动提交不符合开发要求嘛*/
```

![image-20220401225908190](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401225908190.png)

###### ④事物的特性

![image-20220401235119168](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220401235119168.png)

![image-20220402003700814](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402003700814.png)

![image-20220402003618487](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402003618487.png)

###### ⑤查看和修改隔离级别

![image-20220402005220643](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402005220643.png)



### （17）索引

###### ①基本概述

![image-20220402005615444](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402005615444.png)

![image-20220402010152503](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402010152503.png)

###### ②索引的实现原理

![image-20220402103012096](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402103012096.png)

底层逻辑就是，当你利用id搜寻记录的时候，你的id字段有索引对象，mysql就会通过索引对象idIndex进行查找，这玩意在一个tree上面查找，最后定位到了idIndex所在的位置，而每条记录都有物理存储编号的其实，当它找到了idIndex的位置时，其实也发现了这个与之对应的编号，然后mysql根据这个编号找到了你那条记录的位置，然后对信息进行打印，类似于key-value的感觉

![image-20220402102949624](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402102949624.png)

![image-20220402105142718](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402105142718.png)

###### ③索引的创建、删除、查询

```mysql

mysql> create index emp_ename_index on emp(ename);/*创建索引*/
mysql> drop index emp_ename_index onemp;/*删除索引*/

/*查询是否用了索引，先输入下面的sql语句发现是这样的*/
/*属于是把全部行数读完，感觉不如索引。。添加*/
mysql> explain select * from emp where ename = 'KING';
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+
| id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+
|  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+

/*创建了索引后发现是这样的*/
/*明显rows检索行数短了好多，一眼索引*/
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+
| id | select_type | table | type | possible_keys   | key             | key_len | ref   | rows | Extra       |
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+
|  1 | SIMPLE      | emp   | ref  | emp_ename_index | emp_ename_index | 33      | const |    1 | Using where |
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+
```

![image-20220402110037843](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402110037843.png)



###### ④索引的失效

![image-20220402111902237](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402111902237.png)

![image-20220402111920454](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402111920454.png)

![image-20220402112139409](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402112139409.png)

![image-20220402112428430](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402112428430.png)

![image-20220402112551440](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402112551440.png)

###### ⑤索引的分类

![image-20220402112756346](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402112756346.png)



### （18）视图

###### ①基本概述

![image-20220402120114780](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402120114780.png)

###### ②创建删除视图对象

![image-20220402120127963](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402120127963.png)

###### ③视图的作用

说白了就是我可以先用select语句创建个视图，像淘宝话术一样，每次我想查看的时候就查询视图的就行了，而不用打一大段select语句啊啥的，而且你想啊，万一你的select里面贼特喵复杂，什么where，主键，外键一大堆，你让我打出来我还不乐意呢，所以我直接创建了一个视图，每次像查看的时候，看这个表就行了，不需要手打那一大段语句

![image-20220402120504143](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402120504143.png)

![image-20220402125008553](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402125008553.png)

C:Create(增)
R:Retrieve(查：检索)
U:Update(改)
D:Delete(删)

![image-20220402125144743](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402125144743.png)



### （19）DBA的命令

###### ①导入导出

```mysql
/*导出的操作是在dos命令窗口，没有进入那个mysql界面哦*/
mysqldump bjpowernode>D:\bjpowernode.sql -u root -p123456

```

![image-20220402182008475](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402182008475.png)



### （20）数据库三范式

![image-20220402190953809](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402190953809.png)

![image-20220402191128321](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402191128321.png)

![image-20220402191332939](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402191332939.png)

![image-20220402193659282](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402193659282.png)

![image-20220402202625215](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402202625215.png)

![image-20220402202918537](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402202918537.png)

![image-20220402202940673](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402202940673.png)



### （21）数据库表的设计

![image-20220402205905019](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402205905019.png)

![image-20220402210208178](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402210208178.png)

## 杜の嘱咐

![image-20220402210423646](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220402210423646.png)

