#!/bin/bash

# PDFs to migrate (excluding 20260323 - latest, and 20260309, 20260314 - already done)
PDFS=(
    "20260302"
    "20260222"
    "20260215"
    "20260208"
    "20260202"
    "20260126"
    "20260119"
    "20260112"
    "20260105"
    "20251229"
    "20251221"
    "20251214"
    "20251208"
    "20251130"
    "20251124"
    "20251120"
    "20251117"
    "20251109"
    "20251103"
    "20251027"
    "20250707"
)

DRIVE_FOLDER="/Users/pawan/Library/CloudStorage/GoogleDrive-quantwatertechinvestments@gmail.com/My Drive/Quantwater Tech Investments"
SOURCE_FOLDER="/Users/pawan/qti/public/blogs/blog-pdf"
HTML_FOLDER="/Users/pawan/qti/public/blogs"

echo "Starting PDF migration to Google Drive..."
echo "========================================="

for pdf in "${PDFS[@]}"; do
    echo ""
    echo "Processing: $pdf.pdf"
    echo "-------------------"
    
    # Copy to Google Drive
    cp "$SOURCE_FOLDER/$pdf.pdf" "$DRIVE_FOLDER/$pdf.pdf"
    echo "  - Copied to Google Drive"
    
    # Wait for sync
    sleep 5
    
    # Get file ID from extended attributes
    for i in 1 2 3 4 5 6; do
        file_id=$(xattr -l "$DRIVE_FOLDER/$pdf.pdf" 2>/dev/null | grep "com.google.drivefs.item-id" | cut -d':' -f2 | tr -d ' ')
        if [ -n "$file_id" ]; then
            echo "  - Got File ID: $file_id"
            break
        fi
        echo "  - Waiting for sync... (attempt $i)"
        sleep 10
    done
    
    if [ -z "$file_id" ]; then
        echo "  - ERROR: Could not get file ID for $pdf.pdf"
        continue
    fi
    
    # Update HTML file
    html_file="$HTML_FOLDER/$pdf.html"
    if [ -f "$html_file" ]; then
        sed -i '' "s|/blogs/blog-pdf/$pdf\.pdf|https://drive.google.com/file/d/$file_id/view|g" "$html_file"
        echo "  - Updated $pdf.html"
    else
        echo "  - WARNING: HTML file not found: $html_file"
    fi
done

echo ""
echo "========================================="
echo "Migration complete!"
