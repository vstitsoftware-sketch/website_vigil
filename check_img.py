from PIL import Image

path = r'C:\Users\dell\OneDrive\Desktop\vijil\vijil-connect\public\vigil_logo_new.png'
img = Image.open(path).convert('RGBA')
print(f"Size: {img.size}")
print(f"Pixel 0,0: {img.getpixel((0,0))}")
print(f"Pixel 5,5: {img.getpixel((5,5))}")
print(f"Pixel 10,10: {img.getpixel((10,10))}")
print(f"Pixel 10,0: {img.getpixel((10,0))}")
