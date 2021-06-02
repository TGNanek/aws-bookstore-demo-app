from concurrent.futures import FIRST_EXCEPTION
from pathlib import Path
import sys
import os


for path in Path('src').rglob('*.ts'):
      with open(path, "r") as file:
        first_line = file.readline()
        if(first_line.strip() != "// Kenan Grant 1521791".strip()):
                print('1')
                #print(path)
                sys.exit(0)      
print('0')
sys.exit(0)