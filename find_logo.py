import os
import glob
from PIL import Image

temp_dir = r"C:\Users\ankit\.gemini\antigravity\brain\e355ddda-385c-4ea5-9c1e-9b3bf3f331c7"
public_dir = r"c:\Users\ankit\OneDrive\Desktop\Banking Device\public"

# Gather all pngs in tempmediaStorage and root brain
files = glob.glob(os.path.join(temp_dir, '.tempmediaStorage', '*.png')) + glob.glob(os.path.join(temp_dir, '*.png'))

logo_file = None
# A logo is probably not a screenshot (width > 1000 usually)
# The logo posted should be square-ish or modest size. We'll pick the file that is least like a standard landscape screenshot, or the most recent one that isn't the React app screenshot (1036x703).
best_candidate = None
best_score = -1

for f in files:
    try:
        with Image.open(f) as img:
            w, h = img.size
            print(f"Checking {f}: {w}x{h}")
            
            # The most recent screenshot is exactly 1036x703. Ignore it.
            if w == 1036 and h == 703:
                continue
                
            # If it's the 1307 height one (the original site), ignore it
            if h == 1307:
                continue
                
            # Otherwise we found our logo!
            best_candidate = f
            break
    except Exception as e:
        print(e)

if best_candidate:
    print(f"Selecting {best_candidate} as logo.")
    # Use rembg
    try:
        from rembg import remove
        with open(best_candidate, 'rb') as i:
            input_data = i.read()
            output_data = remove(input_data)
        
        out_path = os.path.join(public_dir, 'logo.png')
        with open(out_path, 'wb') as o:
            o.write(output_data)
        print(f"Successfully processed logo to {out_path}")
    except Exception as e:
        print("Failed to remove background:", e)
else:
    print("Could not find a valid logo candidate.")
