from typing import List, Tuple

def detect_pathways(grid: List[List[int]]) -> Tuple[int, List[int]]:
    def dfs(x: int, y: int) -> int:
        # Check boundaries and if the cell is already visited or not part of a path
        if x < 0 or y < 0 or x >= len(grid) or y >= len(grid[0]) or grid[x][y] != 1:
            return 0
        
        # Mark the cell as visited
        grid[x][y] = -1
        
        # Explore all 4 directions (up, down, left, right)
        size = 1
        size += dfs(x + 1, y)
        size += dfs(x - 1, y)
        size += dfs(x, y + 1)
        size += dfs(x, y - 1)
        
        return size

    num_pathways = 0
    pathway_sizes = []

    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                # Start a new pathway
                size = dfs(i, j)
                num_pathways += 1
                pathway_sizes.append(size)
    
    return num_pathways, pathway_sizes

# Example Usage:
grid = [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
]

pathways, sizes = detect_pathways(grid)
print(f"Number of Pathways: {pathways}")
print(f"Sizes of Pathways: {sizes}")
