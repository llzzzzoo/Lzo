

[TOC]



#### 1、JSON基础概述

![image-20220517204124831](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220517204124831.png)



```javascript
<script>

    //定义JSON
    var jsonObj = {
        "key1": 12,
        "key2": "abc",
        "key3": true,
        "key4": [12, "bcd", false],//数组
        "key5": {//嵌套JSON
            "key5_1": 123,
            "key5_2": "key5_2_value",
            "key5_3": false
        },
        "key6": [{//数组并且数组的对象是JSON
            "key6_1_1": 6611,
        },{
            "key6_1_2": 6621
        }]
    };
    alert(typeof jsonObj);//object json是一个对象

    //json的访问
    alert("key1的值：" + jsonObj.key1);
    //遍历数组
    alert("key4数组的值：" + jsonObj.key4);//[12, "bcd", false]
    for (var i = 0; i < jsonObj.key4.length; i++) {
        alert("数组key4的第" + (i+1) + "个值是：" + jsonObj.key4[i]);
    }
    //取嵌套的JSON的值
    alert("jsonObj.key5.key5_2的值：" + jsonObj.key5.key5_2);
    //取json数组中json对象的值
    var jsonItem = jsonObj.key6[0];
    alert("jsonItem.key6_1_1的值：" + jsonItem.key6_1_1);

    //对象转字符串，说白了就是把JSON的代码显示打印成字符串
    var jsonObjString = JSON.stringify(jsonObj);
    alert(jsonObjString);

    //把json字符串转换为JSON
    var jsonObj2 = JSON.parse(jsonObjString);
    alert(jsonobj2);//打印出对象object

</script>
```



**List和JSON的转换**

```java
package com.lzo.servlets;

import com.google.gson.Gson;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class TestJSON {

    //JavaBean和json的转换

    public static void main(String[] args){
        List<Person> personList = new ArrayList<>();

        personList.add(new Person(1, "测试1"));
        personList.add(new Person(2, "测试2"));

        Gson gson = new Gson();

        //将List转换为JSON字符串
        String personListJsonString = gson.toJson(personList);
        System.out.println("打印出来：" + personListJsonString);
	
        //这行的PersonListType，跟下面的类有关系，目的就是能将JSON字符串转换为List集合，并且能调用指定下标的元素
        List<Person> list = gson.fromJson(personListJsonString, new PersonListType().getType());
        System.out.println("List数组" + list);
        Person person = list.get(0);//这个操作需要上面的fromJson的第二个参数如上设置
        System.out.println("数组第一个是：" + person);

    }


}
```

```java
package com.lzo.servlets;

import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;

/**
 * TypeToken是跟反射有关
 * 下面的写法只需要在继承那里利用到泛型就行了，这个ArrayList和Person跟你调用这个方法有关
 * */
public class PersonListType extends TypeToken<ArrayList<Person>> {


}
```



**Map和JSON的转换**

```java
package com.lzo.servlets;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestJSON {

    //JavaBean和json的转换

    public static void main(String[] args){

        Map<Integer, Person> personMap = new HashMap<>();

        personMap.put(1, new Person(1,"乌鱼子"));
        personMap.put(0, new Person(2,"达咩"));

        Gson gson = new Gson();
        //把Map集合转换为json字符串
        String personMapJsonString = gson.toJson(personMap);
        System.out.println(personMapJsonString);

        Map<Integer, Person> personMap1 = gson.fromJson(personMapJsonString, new PersonListType().getType());
        //下面这种匿名内部类的写法，可以简化写法，不用新建一个类
        Map<Integer, Person> personMap2 = gson.fromJson(personMapJsonString, new TypeToken<Map<Integer, Person>>(){}.getType());

        System.out.println(personMap1);
        Person p = personMap1.get(0);
        System.out.println(p);
    }


}
```





#### 2、AJAX

![image-20220517234410126](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220517234410126.png)















