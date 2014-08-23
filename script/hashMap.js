/**
* key:value �� ����ϴ� HashMap
* @example
* <pre>
* var map = new COMHashMap();
* map.put("key","value");       
* map.get("key");               
* map.length;            ���� ��ȯ        
* map.keys();            ��� Ű ��ü��ȯ        
* map.values():            ��� �� ��ü��ȯ
* map.toQuaryString([option]);   key=value[option] ���ڿ���ȯ
* map.clear();            �ʱ�ȭ               
* map.next();            ���� ��ü ��ȯ
* map.indexValue(index);��ġ�� �� ã��    
* map.splice(key);        key ���� 
* map.point(key);        key �� ��ġ��ȯ             
* </pre>
*/
var COMHashMap = function()
{
    this.obj = [];
    this.length = 0;        
    
    this.put = function(key, value)
    { 
        if( this.obj[key] == null )this.length++; 
        this.obj[key] = value; 
    };
 
    this.get = function(key)
    {
        return this.obj[key];
    };
    
    this.keys = function()
    {
        var keys = [];
        for ( var property in this.obj ) keys.push(property);
        return keys;
    };
    
    this.values = function()
    {
        var values = [];
        for ( var property in this.obj ) values.push(this.obj[property]);
        return values;
    };
    
    this.toQueryString = function(divMark)
    {
        var divMark = (typeof divMark == "undefined") ? "&" : divMark;
        var quaryString = "";
        var key = this.keys();
        var value = this.values();
        if ( this.length < 1 ) return "";
        
        for( var i = 0 ; i < this.length ; i++ )
        {
            if ( quaryString != "" )
                quaryString += divMark;
            quaryString +=     key[i] +"="+ value[i];
        }
        return quaryString;
    };
    
    this.remove = function(index)
    {
        var keys = this.keys();
        keys.splice(index, 1);
        var temp =[];                 
        for ( var i = 0 ; i < keys.length ; i++ )
        {
            temp[keys[i]] = this.obj[keys[i]];
        }     
        this.obj = temp;
        this.length = keys.length;
        index--;
    };
    
    this.indexOf = function(key)
    {
        var cnt = 0;
        for ( var i in this.obj )
        {
            if ( key == i ) return cnt;
                cnt++;    
        }
    };
    
    this.splice = function(spliceIndex)
    {
        var keys = this.keys();
        keys.splice(spliceIndex, 1);
        var temp =[];                 
        for ( var i = 0 ; i < keys.length ; i++ )
        {
            temp[keys[i]]=this.obj[keys[i]];
        }     
        this.obj = temp;
        this.length = keys.length;
        index--;
    };
 
    
    this.point = function(key)
    {
        var cnt = 0;
        for ( var i in this.obj )
        {
            if ( key == i ) return cnt;
                cnt++;    
        }
    };
 
    this.clear = function()
    {
        this.obj = [];
        this.length = 0;
    };
        
    var index = 0;
    this.next = function()
    {
        if ( index == this.length )
        {
            index = 0;
            return -1;
        }
        var values = this.values();
        var currentValue = values[index];     
        index++;
        return currentValue;
    };
 
    this.indexValue = function(Idx)
    {
        var keys = this.keys();
        return this.obj[keys[Idx]];
    };
};