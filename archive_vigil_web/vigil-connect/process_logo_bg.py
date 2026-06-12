from PIL import Image
import sys

# Windows requires adjusting recursion depth if we used recursion, but we use a queue iterative BFS, so it's fine.

path = r'C:\Users\dell\OneDrive\Desktop\vijil\vijil-connect\public\vigil_logo_new.png'
try:
    img = Image.open(path).convert('RGBA')
    width, height = img.size
    pixels = img.load()

    def is_bg(c):
        r, g, b, a = c
        # transparent or light gray/white without much saturation
        return a < 255 or (r > 190 and g > 190 and b > 190 and abs(r-g) < 20 and abs(g-b) < 20)

    to_visit = []
    
    # Initialize corners and edges
    for x in range(width):
        to_visit.append((x, 0))
        to_visit.append((x, height - 1))
    for y in range(height):
        to_visit.append((0, y))
        to_visit.append((width - 1, y))

    visited = set(to_visit)
    white = (255, 255, 255, 255)

    # BFS queue
    queue = to_visit
    head = 0
    
    # Count how many we changed
    changes = 0
    
    while head < len(queue):
        x, y = queue[head]
        head += 1
        
        c = pixels[x, y]
        if is_bg(c):
            pixels[x, y] = white
            changes += 1
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    img.save(path)
    print(f"Successfully removed checkered background! Altered {changes} pixels to solid white.")
except Exception as e:
    print(f"Failed to process image: {e}")
