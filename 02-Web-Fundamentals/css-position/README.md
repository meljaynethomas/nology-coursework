Using the 3 children to show each example,run through each of the following position values in css.

1. Static
2. Relative
3. Absolute
4. Fixed
5. Sticky 


**CSS-Position Info**

1. STATIC: All html elements are static by default, which means the element will stick to the normal page flow and follow the order of the elements laid out on the page by the html. 

2. RELATIVE : acts exactly like static but relative allows us 4 specific things that static does not.  To be able to move top, bottom, right and left. It allows us to move the element, relative to where its original position was if it was statically positioned. It comes out of the document flow, so can overlap other elements around it and doesn’t have the knock on effect it would have if it was statically positioned. DIFFICULT TO STYLE THINGS AROUND IT BECAUSE OUT OF DOCUMENT FLOW. 

3. ABSOLUTE: Completely removes that element from the document flow, so that everyone else around it renders as if the element wasn’t there at all. Good for if you want to put something somewhere, but not have anything else to move around it. Can use top, bottom, right and left, but its taken from the edge of the page. Different to relative. Have to put a position of relative on the parent, otherwise absolute will go out of the parent and take the top, left , bottom and right measurements from the very edge of the page rather than being contained inside its parent.  

4. FIXED: Very similar to absolute but there are some differences. Fixed elements are always fixed relative to the whole html document as a whole. Don’t care about parents. Fixed moves with the page as you scroll and is always in the same position on the page. Absolute doesn’t move with you as you scroll. 

5. STICKY: Relative and fixed position rolled into one. You scroll, and as soon as the sticky element hits the top of the page, it becomes fixed and stays there. By default its relative, but as soon as it hits top of the page it becomes fixed. 