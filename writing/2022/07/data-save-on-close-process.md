对于一个应用软件来说，用户的每一个操作都对应着软件相应逻辑的执行。如何保证在任何中断应用程序的情况下，都能保证数据正确呢（不产生脏数据）？对于数据的读取来说，用户对程序的关闭，不会造成对数据的影响，所以只需要讨论对数据的写入就可以了。

### Windows下vscode 和notepad的关闭的比较

vscode在任何时候都能发起正常的关闭且不会弹出需要用户确认是否需要保存当前未保存的修改或文件，如果用户某个修改未保存，在下次启动程序后，会还原到上次关闭前的未保存的状态。notepad需要在关闭的时候去确认是保存当前未保存的文件还是舍弃掉。个人理解vscode对于用户的操作更加友好，可能用户就是没有想好是否要保存当前的内容，或者用户想临时保存下来，但又懒得去选择保存到哪个文件。不过notepad的行为也是可以理解的。

那像vscode这样的可以随时立即关闭的功能该怎么去实现呢？下面写一点示例代码：

```typescript
// OS提供一个回调函数
function onOpen(data: ImportantDataInMemory): void {
    data.load();
}

interface ImportantDataInMemory extends Serializable {
    load();
}
```

需要注意的是，在关闭的时候，不需要vscode做任何操作，底层会保存当前对象中实现了ImportantDataInMemory的所有对象，以及在下次启动时传递给vscode进程。



