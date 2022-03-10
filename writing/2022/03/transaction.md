记录一个自己使用sqlite的问题。
使用的是spring + sqlite
在使用@Transctional注解时，里面的逻辑会锁住数据库文件，这时候再查询的时候（事务传播）就会报错：
database file is locked
类似的报错。
