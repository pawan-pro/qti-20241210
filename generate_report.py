import json
import os
import subprocess

def run_analyzer():
    """Runs the analyzer script to generate images and JSON data."""
    print("Running analyzer script...")
    try:
        # Make sure the script is executable
        os.chmod('analyzer_modified.py', 0o755)

        # Run the script
        process = subprocess.run(
            ['python3', 'analyzer_modified.py'],
            capture_output=True,
            text=True,
            check=True
        )
        print(process.stdout)
        if process.stderr:
            print("Analyzer script stderr:")
            print(process.stderr)
        print("Analyzer script finished successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error running analyzer script: {e}")
        print(e.stdout)
        print(e.stderr)
        raise
    except FileNotFoundError:
        print("Error: 'python3' command not found. Make sure Python 3 is installed and in your PATH.")
        raise


def generate_latex_content(data):
    """Generates the LaTeX content from the events data."""
    latex_content = []

    for event in data:
        event_name = event.get('event_name', 'Unnamed Event')

        # Add event divider to TOC and content
        latex_content.append(f"\\addcontentsline{{toc}}{{section}}{{{event_name}}}")
        latex_content.append(f"\\eventdivider{{{event_name}}}")

        # For simplicity, we'll just use the first asset's details for the event details page
        if event['assets']:
            first_asset_details = event['assets'][0]['event_details']
            details_rows = []
            # This is a simplification. A more robust solution would handle multiple dates per event.
            details_rows.append(f"{first_asset_details.get('time', 'N/A')} & "
                                f"{first_asset_details.get('actual', 'N/A')} & "
                                f"{first_asset_details.get('forecast', 'N/A')} & "
                                f"{first_asset_details.get('previous', 'N/A')} & "
                                f"{first_asset_details.get('time', 'N/A')} \\\\")

            latex_content.append(f"\\eventdetails{{\n{''.join(details_rows)}\n}}")

        for asset in event.get('assets', []):
            asset_name = asset.get('asset_name', 'Unnamed Asset')

            # Add asset divider to TOC and content
            latex_content.append(f"\\addcontentsline{{toc}}{{subsection}}{{{asset_name}}}")
            latex_content.append(f"\\assetdivider{{{event_name}}}{{{asset_name}}}")

            for chart_path in asset.get('charts', []):
                # Add a page for each chart
                latex_content.append("\\newpage")
                latex_content.append(f"\\includegraphics[width=\\textwidth,height=\\textheight,keepaspectratio]{{{chart_path}}}")
                latex_content.append("") # Add a newline for readability

    return "\n".join(latex_content)

def compile_latex(filename):
    """Compiles the LaTeX file to a PDF."""
    print(f"Compiling {filename} to PDF...")
    try:
        for i in range(2): # Run twice for TOC and references
            process = subprocess.run(
                ['pdflatex', '-interaction=nonstopmode', filename],
                capture_output=True,
                text=True,
                check=True
            )
            print(f"Compilation pass {i+1} stdout:")
            print(process.stdout)
            if process.stderr:
                print(f"Compilation pass {i+1} stderr:")
                print(process.stderr)
        print("PDF compilation successful.")
    except subprocess.CalledProcessError as e:
        print(f"Error compiling LaTeX: {e}")
        print(e.stdout)
        print(e.stderr)
        # Try to read the log file for more details
        log_filename = filename.replace('.tex', '.log')
        if os.path.exists(log_filename):
            with open(log_filename, 'r') as log_file:
                print(f"\n--- {log_filename} content ---")
                print(log_file.read())
        raise
    except FileNotFoundError:
        print("Error: 'pdflatex' command not found. Make sure a LaTeX distribution is installed.")
        raise

def main():
    # Step 1: Run the analyzer to generate data
    run_analyzer()

    # Step 2: Read the generated JSON data
    try:
        with open('events.json', 'r') as f:
            events_data = json.load(f)
    except FileNotFoundError:
        print("Error: events.json not found. The analyzer script might have failed.")
        return
    except json.JSONDecodeError:
        print("Error: Could not decode events.json. The file might be empty or malformed.")
        return

    # Step 3: Read the LaTeX template
    try:
        with open('report_template.tex', 'r') as f:
            template = f.read()
    except FileNotFoundError:
        print("Error: report_template.tex not found.")
        return

    # Step 4: Generate LaTeX content from data
    dynamic_content = generate_latex_content(events_data)

    # Step 5: Populate the template
    final_latex = template.replace('{{content}}', dynamic_content)

    # Step 6: Write the final .tex file
    report_filename = 'report.tex'
    with open(report_filename, 'w') as f:
        f.write(final_latex)

    print(f"Final LaTeX file '{report_filename}' created.")

    # Step 7: Compile the PDF
    compile_latex(report_filename)

if __name__ == '__main__':
    main()
