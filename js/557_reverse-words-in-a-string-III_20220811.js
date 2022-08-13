/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
 
Constraints:
1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.

*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let len = s.length;
    let slow = 0;
    let fast = 1;
    
    const charArr = [len];
    while(slow < len){
        if(s[fast] != " " && s[fast] != null) {
            fast++;
        } else {
            if(fast < len){
                charArr[fast] = " ";
            }
            
            for(var j = fast-1; j >= slow; j--) {
                charArr[slow] = s[j];
                charArr[j] = s[slow];
                
                slow++;
            }
            
            
            slow = fast + 1;
            fast = slow + 1;
        }
    }
    
    return charArr.join("");
};