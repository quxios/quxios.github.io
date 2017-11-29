# Pathfind - Part 1

## About
For this first part it's more of a search and find algorithm rather then a pathfind. This method is fairy similar to Dijkstra's algorithm, it's kind of like an incomplete Dijkstra. This method shouldn't really be used be their are a few use cases which I'll go over later in the guide.

## Visual

## Pseudo-Code
~~~
function Find(start, goal)
  open = [start]
  closed = []

  WHILE open IS NOT EMPTY
    current = FIRST VALUE IN open
    REMOVE current FROM open
    ADD current TO closed

    IF current IS goal
      BREAK LOOP

    FOR EACH neighbor OF current
      IF neighbor IS NOT IN closed
        ADD neighbor TO open
~~~
Basically all we're doing is a radial search around the start point until we reach the goal. This alone won't be much use but we can expand this to do some useful stuff! Before that let me explain what we're doing.

### Explaination
I'll explain step by step what we're doing
~~~
function Find(start, goal)
  open = [start]
  closed = []
~~~
For the first part it's pretty simple. We're just creating out function and defining the variables we'll use in this function. Though for optimizations different data types may be used which I'll go over in [Optimization Section](#optimization)

~~~
  WHILE open IS NOT EMPTY
~~~
Now this is where the algorithm starts. We want to loop until we run out of points to check.

~~~
    current = FIRST VALUE IN open
    REMOVE current FROM open
    ADD current TO closed
~~~
`current` will be the first value in our `open` list. We then need to remove this value from the `open` list so we don't grab it again and we add it to the `closed` list so we can't find this point again. This part is where some changes may start when transforming this algorithm to a pathfind. For example for an A* instead of grabbing the first value in the `open` list, we would sort the `open` list and grab the next best node.

~~~
    IF current IS goal
      BREAK LOOP
~~~
Before continuing we need to check if we're already at the `goal`. If we are we need to end the loop and we can return our data if needed. For example for an A* you would return the `current` value so we can trace back from that node to create a path from it.

~~~
      FOR EACH neighbor OF current
~~~
For this part we would need to create a function to get the neighbors surround the `current` node. This function can return the 4 neighbors (above, below and sides) or 8 neighbors including diagonals. There's a few ways to create this function, here's an example of 1 that returns 8 directions:
~~~
function neighbors(current)
  x = current.x
  y = current.y
  neighbors = []
  FOR x2 IN x - 1 TO x + 1
    FOR y2 IN y - 1 TO y + 1
      IF !inbounds(x2, y2)
        CONTINUE
      IF x2 IS NOT x AND y2 IS NOT y
        ADD (x2, y2) TO neighbors
  RETURN neighbors
~~~
That will return the 8 neighbors surround the passed in point. If you want to change this to a 4dir then you need to add an additional condition check:
~~~
     IF x2 IS x OR y2 IS y
~~~
Now back to the algorithm

~~~
      IF neighbor IS NOT IN closed
        ADD neighbor TO open
~~~
Here we check if we haven't already visited this node. If we haven't we need to add it
to our `open` list. In this section we can add additional conditional checks to only look for certain nodes. For example, might only want to look for passable areas, or maybe only nodes that are X distance from the `start` node. For an A* we would calculate the nodes scores in this section.

## Impliementaions
As mentioned there are a few use cases for this, here's a few I've found:

### Creating a diamond shape
// codepen
explain difference

## Optimizations
Most of the optimization comes down to the data type you use. The `open` list is this case is fine as a list. But if you were to do something like A* where you're sorting the list. Then you may get some better performance by using a binary heap instead. 
The `closed` list is better off not being a list because we have to check if the `current` is inside that list which can get large. In this case it's better to use a hashtable (If using JS then an object is fine) or maybe a 2D bool array.
For example both:
~~~js
var closed = {};
// .... rest
    if (!closed[current]) {
      open.push(current);
    }
~~~
~~~js
var closed = new Array(MAP_WIDTH);
for (var x = 0; x < MAP_WIDTH; x++) {
  closed[x] = new Array(MAP_HEIGHT);
}
// .... rest
    if (!closed[current.x][current.y]) {
      open.push(current);
    }
~~~
May perform better then:
~~~js
var closed = [];
// .... rest
    if (!closed.contains(current)) {
      open.push(current);
    }
~~~