# Problem Set #1.

1.  3-way-Merge Sort:  Suppose that instead of dividing in half at each step of Merge Sort, you divide into thirds, sort each third, and finally combine all of them using a three-way merge subrouting.  What is the overall asymptotic running time of this algorithm.  (Hint: Note that the merge step can still be implemented in O(n) time.)

<input type="radio" /> <em>n<sup>2</sup></em> log(<em>n</em>)<br />
<input type="radio" /> <em>n</em>(log(<em>n</em>))<sup>2</sup><br />
<input type="radio" /> <em>n</em><br />
<input type="radio" checked /> <em>n</em> log(<em>n</em>)<br />

<em>Explanation: There is still a logatithmic number of levels, and the overall amount of work at each level is still linear.</em>

2.  You are given functions <em>f</em> and <em>g</em> such that f(n) = O(g(n)).  Is <em>f(n)*log<sub>2</sub>(f(n)<sup>c</sup>) = O(g(n)*log<sub>2</sub> (g(n)))</em>?  (Here <em>c</em> is some positive constant.)  You should assume that <em>f</em> and <em>g</em> are nondecreasing and always bigger than 1.

<input type="radio" /> <s>Sometimes yes, sometimes no, depending on the constant <em>c</em></s><br />
<input type="radio" /> Sometimes yes, sometimes no, depending on the functions <em>f</em> and <em>g</em><br />
<input type="radio" /> False<br /> 
<input type="radio" checked /> True<br />

3.  Assume two (positive) nondecreasing functions <em>f</em> and <em>g</em> such that f(n) = O(g(n)).  Is 2<sup><em>f(n)</em></sup> = O(2<sup><em>g(n)</em></sup>)?  (Multiple answers may be correct, you should check all of those that apply.)

<input type="checkbox" checked /> Sometimes yes, sometimes no (depending on <em>f</em> and <em>g</em>)<br />
<input type="checkbox" /> Never <br />
<input type="checkbox" /> Always<br />
<input type="checkbox" checked /> Yes, if <em>f(n)</em> &ge; <em>g(n)</em> for all sufficiently large <em>n</em><br />

4.  k-way-Merge Sort.  Supposed you are given <em>k</em> sorted arrays, each with n elements, and you want to combine them into a single array of <em>kn</em> elements.  Consider the following approach.  Using the merge subrouting taught in lecture, you merge the first 2 arrays, then merge the 3<sup>rd</sup> given array with this merged version of the first two arrays, then merge the 4<sup>th</sup> given array with the merged version of the first three arrays, and so on until you merge in the final (k<sup>th</sup>) input array.  What is the running time taken by this suggessive merging algorithm, as a function of <em>k</em> and <em>n</em>?  (Optional: can you think of a faster way to do the k-way merge procedure?) <strong>Note that this is little-theta, not big-O</strong>
   
<input type="radio" /> <s>&theta;(n log (k)) </s><em>Why a logarithm?</em><br /> 
<input type="radio" checked/> &theta;(nk<sup>2</sup>)<br />
<input type="radio" /> &theta;(n<sup>2</sup>k)<br />
<input type="radio" /> &theta;(nk)<br />

5.  Arrange the following functions in increasing order of growth rate (with g(n) following f(n) in your list if and only if f(n) = O(g(n))).

a) 2<sup>2<sup>n</sup></sup><br />
b) 2<sup>n<sup>2</sup></sup><br />
c) n<sup>2</sup> log(n)<br />
d) n<br />
e) n<sup>2<sup>n</sup></sup><br />

<s>dcabe</s>

a) 2<sup>log(n)</sup><br />
b) 2<sup>2<sup>log(n)</sup></sup><br />
c) n<sup>5/2</sup><br />
d) 2<sup>n<sup>2</sup></sup><br />
e) n<sup>2</sup>log(n)<br />

<s>abecd</s>

I think I'm doing these in reverse order!