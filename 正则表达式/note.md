**元字符与原义文本字符**
1. 原义文本字符：就是字符本身的含义
   ```
    /abc/
    // 含义，就是检查字符串中有没有abc。 别想多了
    // 不是说有a或者有b或者有c，也不是说有a 和 b 和 c
    console.log(/abc/.test('a123'));//false
    console.log(/abc/.test('ab123c'));//false
    console.log(/abc/.test('abc123'));//true

   ```
2. 元字符：改变了字符串本身的含义（相当于js的关键字）
   ```
   . \ | [] {} () + ? * $ ^
   ```


**字符类**
有时候我们并不想只匹配一个字符，而是想要匹配符合某一类特征的字符，这时就可以使用字符类

1. 简单字符类:**[]**
   ```
    /[abc]/ 
    // 把字符a或b或c归为一类，可以匹配这类的字符
    // 含义是，匹配字符串中只要有 a或者b或者c任何一个即可
    console.log ( /[abc]/.test ( "eeeeefffff" ) );//false
    console.log ( /[abc]/.test ( "eaeeffffff" ) );//true
    console.log ( /[abc]/.test ( "ebeeeffffff" ) );//true
   ```
2. 反向类（负向类）:**^**
   ```
    // 反向类意思是不属于某类的内容
    /[^abc]/ 
    // 含意是，不是字符a或b或c的内容
    // 只要有任何一个字符不是a或者b或者c，就满足条件
    console.log ( /[^abc]/.test ( "1abacbc" ) );//true
    console.log ( /[^abc]/.test ( "aaabbbcccc" ) );//false
    console.log ( /[^abc]/.test ( "aaabbbcccce" ) );//true
   ```
3. 范围类:**-**
   ```
    [0-9] : 含义是， 0-9之间的任意字符
    [a-z]: 含义是，a-z之间的任意字符
    [A-Z]:含义是，A-Z之间的任意字符

    console.log ( /[0-9]/.test ( "1acasdas" ) );//true  只要有数字就满足
    console.log ( /[0-9]/.test ( "acasdas" ) );//false
   ```
   **注意：**
    1. 范围类是一个闭区间， [a-z]，这个范围包含字符a和z本身
    2. 在[]内部是可以连写的， [0-9a-zA-Z] : 含义是，包含数字0-9，或者a-z，或者A-Z任意字符
    3. 右边一定要大于左边，例如 [5-8],这是合法的，表示5-8之间的数字，不能写[8-5],程序会报错（正则语法错误）
4. 预定义类
   正则表达式提供好的用来匹配常见的字符类
   1. **.**：除了回车和换行之外的所以字符
   ```
    console.log ( /./.test ( "\r\n" ) );//false
    console.log ( /./.test ( "" ) );//false 空字符
    console.log ( /./.test ( " " ) );//true 空格字符
   ```
   2. **\d**：数字字符（只要有数字即可）
   ```
    console.log ( /\d/.test ( "123abc" ) );//true
    console.log ( /\d/.test ( "abc" ) );//false
   ```
   3. **\D**：非数字字符
   ```
    console.log ( /\D/.test ( "123abc" ) );//true
    console.log ( /\D/.test ( "123" ) );//false
   ```
   4. **\s**：空白字符（只要有空白字符即可）
   ```
    console.log ( /\s/.test ( "\nabc" ) );//true
    console.log ( /\s/.test ( "abc" ) );//false
   ```
   5. **\S**：非空白字符（只要有非空白字符即可）
   ```
    console.log ( /\S/.test ( "\nabc" ) );//true
    console.log ( /\S/.test ( "abc" ) );//true
    console.log ( /\S/.test ( "" ) );//false
    console.log ( /\S/.test ( "\t\n" ) );//false
   ```
   6. **\w**：单词字符（只要有字母、数字、下划线即可）
   ```
    console.log ( /\w/.test ( "abc123_中国" ) );//true
    console.log ( /\w/.test ( "中国" ) );//false
   ```
   7. **\W**：非单词字符
   ```
    console.log ( /\W/.test ( "abc123_中国" ) );//true
    console.log ( /\W/.test ( "中国" ) );//true
    console.log ( /\W/.test ( "abc123_" ) );//false
   ```
5. 边界
   1. **严格匹配: ^字符串$**：
   列如**^abc$**，含义是字符串必须以a开头，中间必须是b，结尾必须是c，满足该条件的只有一个字符串： abc
   2. **^**：以xxxx开头
   这里容易记混的知识点：
   **[^]**：负向类，有取反的意思。 例如**[^abc]**：不包含abc的任意字符
   **/^/**：边界，以xxxx开头。 例如**/^\d/**：以数字开头的任意字符
   ```
    /^abc/ ： 以a开头，后面是bc的字符  
    （不是以abc开头，虽然最终结果一样，但是含义不同）
    console.log ( /^abc/.test ( "a" ) );//false
    console.log ( /^abc/.test ( "abc" ) );//true
    console.log ( /^abc/.test ( "abc123" ) );//true

    /^\d/ ： 以任意数字开头的任意字符
    console.log ( /^\d/.test ( "1abc" ) );//true
    console.log ( /^\d/.test ( "a1bc" ) );//false
   ```
   3. **$**：以xxxx结束
   ```
    /b$/   : 结尾是b的任意字符
    console.log ( /b$/.test ( "b" ) );//true
    console.log ( /b$/.test ( "abc" ) );//false
    console.log ( /b$/.test ( "acb" ) );//true

    /^ab$/ : 以a开头 + 以b结尾的字符  （言外之意：只能是ab）
    console.log ( /^ab$/.test ( "ab" ) );//true
    console.log ( /^ab$/.test ( "acb" ) );//false
   ```
   4. **\b,\B**：单词边界（非单词边界），晦涩难懂，用的不多
   单词：由\w（字母数字下划线）组成的一串字符
   边界：指的是某一个位置，而不是字符
   ```
    // 将单词is替换成XX
    console.log ( "this is a girl".replace ( /\bis/, "XX" ) )// this XX a girl

    // 将非单词is替换成XX
    console.log ( "this is a girl".replace ( /\Bis/, "XX" ) )// thXX is a girl
   ```
6. 量词
   量词：表示字符出现的数量
   ```
   ?            出现零次或一次（最多出现一次）
   +            出现一次或多次（至少出现一次）
   *            出现零次或多次（任意次）
   {n}          出现n次
   {n,m}        出现n-m次
   {n,}         出现至少n次（>=n）
   ```
   需求：匹配一个连续出现10次数字的字符
   正则表达式：/\d\d\d\d\d\d\d\d\d\d/
   弊端：表达式冗余 解决方案：使用量词
   ```
    console.log ( /\d{10}/.test ( "1234567abc" ) );//false
    console.log ( /\d{10}/.test ( "1234567890abc" ) );//true
   ```
7. 分组
   1. **()**：一个元字符有三个含义
      1. 分组：使量词作用于分组
      2. 提升优先级：通常与元字符|一起使用
      3. 反向引用
   ```
    // 需求： 匹配连续出现三次love的字符串 - lovelovelove
    // 1.错误写法:  /love{3}/  , 含义： lov + e{3}
    console.log ( /love{3}/.test ( "lovelovelove" ) );//false
    console.log ( /love{3}/.test ( "loveee" ) );//true
    console.log ( /love{3}/.test ( "loveeeabc" ) );//true

    //2.正确做法：使用分组   /(love){3}/
    console.log ( /(love){3}/.test ( "lovelovelove" ) );//true
    console.log ( /(love){3}/.test ( "loveee" ) );//false
   ```
   2. **|**
   ```
    // 1.错误写法:  /lo|ive/  ,含义：  lo  或者  ive
    console.log ( "I love you".replace ( /lo|ive/, "X" ) );// I Xve you
    console.log ( "I live you".replace ( /lo|ive/, "X" ) );// I lX you

    //2.正确写法： /l(o|i)ve/, 含义：匹配love 或者 live
    console.log ( "I love you".replace ( /l(o|i)ve/, "X" ) );// I X you
    console.log ( "I live you".replace ( /l(o|i)ve/, "X" ) );// I X you
   ```
8. 修饰符
   修饰符：影响整个正则规则的特殊符号
   ```
    书写位置：  /pattern/modifiers(修饰符)
    i (intensity)：大小写不敏感（不区分大小写）
    g (global) : 全局匹配
    m(multiple) : 检测换行符，使用较少，主要影响字符串的开始^与结束$边界
   ```
   1. **i**：不区分大小写
   ```
    let str = 'ABCabcdefgaaaAAA';
    console.log ( str.replace ( /a/, "X" ) );//ABCXbcdefgaaaAAA   //默认区分大小写
    console.log ( str.replace ( /a/i, "X" ) );//XBCabcdefgaaaAAA
   ```
   2. **g**：全局匹配
   ```
    let str = 'ABCabcdefgaaaAAA';
    console.log ( str.replace ( /a/, "X" ) );//ABCXbcdefgaaaAAA   //默认匹配第一个就停止
    console.log ( str.replace ( /a/g, "X" ) );//ABCXbcdefgXXXAAA   //默认匹配第一个就停止
    //修饰符可以同时使用多个
    console.log ( str.replace ( /a/ig, "X" ) );//XBCXbcdefgXXXXXX
   ```
   3. **m**：检测换行符 主要针对边界^与$（见demo1）
   ```
    //需求：将下列字符串中每一行开头的字符变成0
    let str = "aascdascd\nwebdfbdfbdfbfd\ngcsdfcwdfwfwe";
    console.log ( str );//虽然在控制台看到三行字符串，实际上代码中每一行只是一个换行符\n
    console.log ( str.replace ( /^\w/g, "0" ) );//错误    只能替换第一个字符
    /*注意不要漏掉了全局匹配g*/
    console.log ( str.replace ( /^\w/gm, "0" ) );//正确    能替换每一行第一个字符，m能检测换行符把\n后i面字符作为单独一行
   ```
