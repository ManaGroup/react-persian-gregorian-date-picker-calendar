![gif.gif](gif.gif)  
```js
<Calendar
    popUp // show full calender with/without on input click
    autoClose //close after select date 
    twoWay={true}//available for select return date or rangepicker
    singleMode={true}// double side calender or signle side
    onSelectDate={(d)=>{}}//1397-11-12
    onSelectObjectDate={(d)=>alert(JSON.stringify(d))}//{fa:'1397-11-19',en:'2019-02-08'}
    onSelectObjectDate2={(d)=>alert(JSON.stringify(d))}
/>
```