const myInt = 7;
const myString = "the number 7";
const myNumString = "7";
$("table#calculations").append(`
    	<tr>
    		<td>Addition</td>
    		<td></td>
    		<tr>
    			<td>myInt + myInt?</td>
    			<td>${myInt+myInt}</td>
    		</tr>
    		<tr>
    			<td>myInt + myString?</td>
    			<td>${myInt+myString}</td>
    		</tr>
    		<tr>
    			<td>myInt + myNumString?</td>
    			<td>${myInt+myNumString}</td>
    		</tr>
    		<tr>
    			<td>myNumString + myInt?</td>
    			<td>${myNumString+myInt}</td>
    		</tr>
    		<tr>
    			<td>Fancier addition</td>
    			<td></td>
    		</tr>
    		<tr>
    			<td>myInt + myNumString + myString?</td>
    			<td>${myInt+myNumString+myString}</td>
    		</tr>
    		<tr>
    			<td>myInt + myInt + myString?</td>
    			<td>${myInt+myInt+myString}</td>
    		</tr>
    		<tr>
    			<td>myString + myInt + myInt?</td>
				<td>${myString+myInt+myInt}</td>
    		</tr>
    		<tr>
    			<td>Subtraction</td>
    			<td></td>
    		</tr>
    		<tr>
    			<td>myInt - myString?</td>
    			<td>${myInt-myString}</td>
    		</tr>
    		<tr>
    			<td>myInt - myNumString?</td>
    			<td>${myInt-myNumString}</td>
    		</tr>
   			<tr>
   				<td>myString - myNumString?</td>
   				<td>${myString-myNumString}</td>
   			</tr>
   			<tr>
    			<td>Comparisons</td>
    			<td></td>
    		</tr>
    		<tr>
    			<td>myInt == myNumString?</td>
    			<td>${myInt==myNumString}</td>
    		</tr>
   			<tr>
    			<td>myInt === myString?</td>
    			<td>${myInt===myString}</td>
    		</tr>
    	</tr>`);
