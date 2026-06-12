from PIL import Image
from collections import Counter

path = r'C:\Users\dell\OneDrive\Desktop\vijil\vijil-connect\public\vigil_logo_new.png'
img = Image.open(path).convert('RGBA')

# Let's get the colors of the first few rows to identify the checkerboard colors
edge_colors = []
for x in range(img.width):
    edge_colors.append(img.getpixel((x, 0)))
    edge_colors.append(img.getpixel((x, img.height-1)))
for y in range(img.height):
    edge_colors.append(img.getpixel((0, y)))
    edge_colors.append(img.getpixel((img.width-1, y)))

most_common = Counter(edge_colors).most_common(5)
print("Most common edge colors:", most_common)
