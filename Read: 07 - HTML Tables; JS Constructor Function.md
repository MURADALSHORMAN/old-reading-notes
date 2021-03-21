# HTML Tables


What's a Table?

A table represents information in a grid format. Examples of tables include financial reports, TV schedules, and sports results.

![]()


### Basic Table St ructure
```
<table>
<tr>
<td>15</td>
<td>15</td>
<td>30</td>
</tr>
<tr>
<td>45</td>
<td>60</td>
<td>45</td>
</tr>
<tr>
<td>60</td>
<td>90</td>
<td>90</td>
</tr>
</table>
```
``` <table> ```
The table element is used to create a table. The contents of the table are written out row by row.
``` <tr> ```
You indicate the start of each row using the opening tr tag.
``` <td> ``` 
Each cell of a table is represented using a td element.

#### Table Headings

<th>
The <th> element is used just like the```  <td> ``` element but its purpose is to represent the heading for either a column or a row. (The th stands for table heading.)

### Width & Spacing
There are some outdated attributes which you should not use on new websites. You may,however, come across some of them when looking at older code, so I will mention them
here. All of these attributes have been replaced by the use of CSS.
```
<table width="400" cellpadding="10" cellspacing="5">
<tr>
<th width="150"></th>
<th>Withdrawn</th>
<th>Credit</th>
<th width="150">Balance</th>
</tr>
<tr>
<th>January</th>
<td>250.00</td>
<td>660.50</td>
<td>410.50</td>
</tr>
<tr>
<th>February</th>
<td>135.55</td>
<td>895.20</td>
<td>1170.15</td>
</tr>
</table>
```

