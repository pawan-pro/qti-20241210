#!/usr/bin/env python3
"""Update HTML files with Google Drive links."""

import os
import re

HTML_FOLDER = "/Users/pawan/qti/public/blogs"

# File IDs mapping
FILE_IDS = {
    "20260302": "1yDvU09if2mlb1JPNgN5WhY-0YRqbbTsn",
    "20260222": "1NGd2HnR5HbA4chPTHFOAz3HgmkzZuWW1",
    "20260215": "1eRf5GNjNueXQVCEzFNyGV0AgCPxcuvMY",
    "20260208": "1kDm3ntiYzw0tG13ZOiR_xtvKoK7E2L4Q",
    "20260202": "1yteFFMWezCGsORfTrzHpytx3bxDcRjtF",
    "20260126": "1_lhoYbZKyRbsjAcLEhCRSYwPb4D7UF8L",
    "20260119": "1xcYtHniPeKLlWpC6ueQseda-wwAvh7I5",
    "20260112": "1vjCSZqfbZBkbVI4c-iRe2gWN9ZNtjpCy",
    "20260105": "1QUOFRSZ1kqRun2YDjnynFzAJKWY4mqnw",
    "20251229": "1k5ItSkZiFFzhoYH2xOHiO-N0FeURYSXe",
    "20251221": "1JfQs5duST6zNLBLDhVoXJx44f68o-PsO",
    "20251214": "1zOdKKpquZdtlWwL1Dxn_XJiRXTjaTYHb",
    "20251208": "1b82KkM6iqb2lX5SPo89GiuJzs9ikVpUt",
    "20251130": "10nhOwrPt3Pom379yonOl3tx6Vlrb4LJ8",
    "20251124": "1DwzWCas3L0yNX64HLs0zkg45ObQHj16M",
    "20251120": "1q42_Nj7QXmIgOIFCKiw_3TnDC096VvlO",
    "20251117": "17DTSiNDyHe_vXsmJeBvc2kXXJNRMxQrb",
    "20251109": "1HbYuh4-5Q_Yh_XKxWs-i219FH8L9b4kI",
    "20251103": "1un9Gjri4FyEFaiMDuw1cWHwYdwKSHKEn",
    "20251027": "1ABUwrOo_6iWbVkEU1p_DwxOklsYK1eNa",
    "20250707": "16C22wbeCjsgnZEKTNmSBnfSVNHpm0a86",
}

print("Updating HTML files with Google Drive links...")
print("=" * 60)

total_updates = 0
for pdf_name, file_id in FILE_IDS.items():
    html_file = os.path.join(HTML_FOLDER, f"{pdf_name}.html")
    if not os.path.exists(html_file):
        print(f"{pdf_name}: HTML file not found")
        continue
    
    google_drive_link = f"https://drive.google.com/file/d/{file_id}/view"
    old_link = f"/blogs/blog-pdf/{pdf_name}.pdf"
    
    with open(html_file, 'r') as f:
        content = f.read()
    
    # Count occurrences
    count = content.count(old_link)
    
    if count > 0:
        # Replace all occurrences
        new_content = content.replace(old_link, google_drive_link)
        
        with open(html_file, 'w') as f:
            f.write(new_content)
        
        print(f"{pdf_name}: Updated {count} references")
        total_updates += count
    else:
        print(f"{pdf_name}: No references found")

print("=" * 60)
print(f"Total updates: {total_updates}")
