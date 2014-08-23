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


//alert(map.get("key"));
function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
//    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    
//    alert (digits[1] + '#' + rgb.toString(16));
    return digits[1] + '#' + rgb.toString(16);
};
