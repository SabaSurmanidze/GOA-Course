# 1) შევქმანთ 10 ფაილი და ფოლდერი for loop ის და os ის გაოყენებთ

for i in range(10):
    filename = f"file_{i}.txt" 
    
    with open(filename, 'w') as f:
        f.write(f"file1 {filename}\n") 
        f.write("file2.\n")