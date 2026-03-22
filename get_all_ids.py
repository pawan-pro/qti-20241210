#!/usr/bin/env python3
"""Get Google Drive file IDs for all PDFs."""

import subprocess
import os
import re

DRIVE_FOLDER = "/Users/pawan/Library/CloudStorage/GoogleDrive-quantwatertechinvestments@gmail.com/My Drive/Quantwater Tech Investments"

# PDFs to process (excluding 20260323 - latest, and 20260309, 20260314 - already done)
PDFS = [
    "20260302",
    "20260222",
    "20260215",
    "20260208",
    "20260202",
    "20260126",
    "20260119",
    "20260112",
    "20260105",
    "20251229",
    "20251221",
    "20251214",
    "20251208",
    "20251130",
    "20251124",
    "20251120",
    "20251117",
    "20251109",
    "20251103",
    "20251027",
    "20250707",
]

print("Getting Google Drive file IDs...")
print("=" * 60)

results = {}
for pdf in PDFS:
    filepath = os.path.join(DRIVE_FOLDER, f"{pdf}.pdf")
    if not os.path.exists(filepath):
        print(f"{pdf}: FILE NOT FOUND")
        continue
    
    try:
        result = subprocess.run(
            ["xattr", "-l", filepath],
            capture_output=True,
            timeout=10
        )
        # Decode with errors='ignore' to handle binary attributes
        stdout = result.stdout.decode('utf-8', errors='ignore')
        match = re.search(r'com\.google\.drivefs\.item-id#S:\s*(\S+)', stdout)
        if match:
            file_id = match.group(1)
            results[pdf] = file_id
            print(f"{pdf}: {file_id}")
        else:
            print(f"{pdf}: NO ID YET (syncing...)")
            results[pdf] = None
    except Exception as e:
        print(f"{pdf}: ERROR - {e}")
        results[pdf] = None

print("=" * 60)
print("\nSummary:")
found = sum(1 for v in results.values() if v)
print(f"Found IDs: {found}/{len(results)}")

# Output as shell-compatible format
print("\n# File IDs for sed commands:")
for pdf, file_id in results.items():
    if file_id:
        print(f"export ID_{pdf}=\"{file_id}\"")
