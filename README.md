Explanation:
The dfs function traverses the grid recursively, marking visited cells.
Each time a 1 is encountered, a new pathway is started, and its size is calculated.
The grid is modified in place, marking visited cells to -1.
Output Example:
For the given grid:

yaml
Copy code
Number of Pathways: 4
Sizes of Pathways: [2, 3, 3, 2]

Imagine a Grid as a Map:
Think of the grid as a map made of blocks. Each block can either be:
1: This is like a piece of a road or pathway.
0: This is like grass or land where you can’t walk.
Goal of the Code:
The code wants to find all the roads (connected 1s) and count:

How many separate roads exist.
How big each road is (how many 1s it has).
How the Code Works:
1. Exploring a Road (DFS Function):
The dfs function is like sending a tiny robot to explore the map. This robot:
Starts at a block that is part of a road (1).
Walks to connected blocks (up, down, left, right) to find out how big the road is.
Marks each visited block as -1 so it doesn’t get counted twice.
2. Walking Around the Map:
The main part of the code goes block by block, checking:
If the block is part of a road (1), it sends the robot to explore the whole road.
After exploring, it knows how big the road is and adds that to the list of road sizes.
It also keeps a count of how many roads it found.
Let’s Follow an Example:
Here’s the map:

csharp
Copy code
[
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
]
Start at the first block:

Top-left corner (1): It’s part of a road. Send the robot to explore!
The robot finds 2 blocks connected ([1, 1]) and marks them as visited (-1).
Keep looking:

Next road starts at (0,3): This road has 3 blocks connected.
Another road at (1,2): It has 3 blocks.
Final road at (3,0): It has 2 blocks.
When it’s done, we know:

Number of Roads: 4
Sizes of Roads: [2, 3, 3, 2]
What Does It Print?
yaml
Copy code
Number of Pathways: 4
Sizes of Pathways: [2, 3, 3, 2]
In Simple Words:
The code looks for roads (1s) in a map.
It finds all the connected roads and tells you how many there are and how long each one is.

