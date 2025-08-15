import os
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

def setup_plot(title, xlabel='', ylabel=''):
    """Set up plot styles and labels."""
    plt.title(title, fontsize=16, weight='bold', pad=20)
    plt.xlabel(xlabel, fontsize=12)
    plt.ylabel(ylabel, fontsize=12)
    plt.xticks(rotation=0)
    plt.tight_layout(pad=3.0)

def save_plot(filename, output_dir):
    """Save the plot to the specified directory."""
    filepath = os.path.join(output_dir, filename)
    plt.savefig(filepath, dpi=300, bbox_inches='tight')
    plt.close()

def generate_market_size_projection(output_dir, color):
    """Chart 1: Market Size Projection (Bar Chart)"""
    plt.figure(figsize=(8, 6))
    years = ['2025', '2034']
    values = [68.3, 152.6]
    bars = plt.bar(years, values, color=color, width=0.5)
    plt.bar_label(bars, fmt='$%.1fB', fontsize=12, padding=3)
    setup_plot("KSA Healthcare Market Value (USD Billions)", ylabel="USD Billions")
    plt.text(0.5, 0.5, 'CAGR: 9.3%', ha='center', va='center', transform=plt.gca().transAxes, fontsize=14, color='green', weight='bold')
    save_plot("market_size_projection.png", output_dir)

def generate_private_sector_gdp(output_dir, color):
    """Chart 2: Private Sector GDP Contribution (Donut Chart)"""
    plt.figure(figsize=(8, 8))
    labels = ['2030 Target', '']
    sizes = [35, 65]
    colors = [color, '#d3d3d3']
    plt.pie(sizes, labels=None, colors=colors, autopct=None, startangle=90, wedgeprops=dict(width=0.4, edgecolor='w'))
    plt.text(0, 0, '35%', ha='center', va='center', fontsize=40, weight='bold', color=color)
    setup_plot("Growing Private Sector Share of Healthcare GDP")
    plt.ylabel('') # remove default ylabel
    plt.legend(labels=['Private Sector (35%)', 'Other (65%)'], loc="upper right", bbox_to_anchor=(1.2, 0.9))
    plt.text(0.5, -0.1, 'Shift from 25% Current Share', ha='center', va='center', transform=plt.gca().transAxes, fontsize=12)
    save_plot("private_sector_gdp.png", output_dir)

def generate_hospital_bed_gap(output_dir, color):
    """Chart 3: Hospital Bed Infrastructure Gap (Comparative Bar Chart)"""
    plt.figure(figsize=(8, 6))
    labels = ['KSA', 'G20 Emerging Avg.']
    values = [2.26, 2.85]
    bars = plt.bar(labels, values, color=[color, '#d3d3d3'], width=0.5)
    plt.bar_label(bars, fmt='%.2f', fontsize=12, padding=3)
    setup_plot("Hospital Beds per 1,000 People: KSA vs. G20 Average", ylabel="Beds per 1,000 People")
    gap = values[1] - values[0]
    plt.annotate(f'Gap: {gap:.2f}', xy=(0.5, (values[0] + values[1])/2), xytext=(0.5, values[1] * 0.8),
                 arrowprops=dict(facecolor='black', shrink=0.05, width=1, headwidth=8),
                 ha='center', va='top', fontsize=12, color='red')
    save_plot("hospital_bed_gap.png", output_dir)

def generate_pharma_market_growth(output_dir, color):
    """Chart 4: Pharmaceutical Market Growth (Bar Chart)"""
    plt.figure(figsize=(8, 6))
    years = ['2023', '2032']
    values = [9.2, 11.5]
    bars = plt.bar(years, values, color=color, width=0.5)
    plt.bar_label(bars, fmt='$%.1fB', fontsize=12, padding=3)
    setup_plot("Pharmaceutical Market Forecast (USD Billions)", ylabel="USD Billions")
    save_plot("pharma_market_growth.png", output_dir)

def generate_insurance_market_growth(output_dir, color):
    """Chart 5: Health Insurance Market Growth (Bar Chart)"""
    plt.figure(figsize=(8, 6))
    years = ['2024', '2033']
    values = [7.8, 12.5]
    bars = plt.bar(years, values, color=color, width=0.5)
    plt.bar_label(bars, fmt='$%.1fB', fontsize=12, padding=3)
    setup_plot("Health Insurance Market Expansion (USD Billions)", ylabel="USD Billions")
    plt.text(0.5, 0.5, 'CAGR: 5.14%', ha='center', va='center', transform=plt.gca().transAxes, fontsize=14, color='green', weight='bold')
    save_plot("insurance_market_growth.png", output_dir)

def generate_digital_health_growth(output_dir, color):
    """Chart 6: Digital Health Market Expansion (Bar Chart)"""
    plt.figure(figsize=(8, 6))
    years = ['2024', '2030', '2032 (est.)']
    values = [1.46, 2.14, 2.8]
    bars = plt.bar(years, values, color=color, width=0.6)
    plt.bar_label(bars, fmt='$%.2fB', fontsize=12, padding=3)
    setup_plot("Digital Health Sector Growth (USD Billions)", ylabel="USD Billions")
    save_plot("digital_health_growth.png", output_dir)

def generate_medical_tourism_growth(output_dir, color):
    """Chart 7: Medical Tourism Revenue Surge (Bar Chart)"""
    plt.figure(figsize=(8, 6))
    years = ['2024', '2030']
    values = [200, 680]
    bars = plt.bar(years, values, color=color, width=0.5)
    plt.bar_label(bars, fmt='$%dM', fontsize=12, padding=3)
    setup_plot("Medical Tourism Revenue Projections (USD Millions)", ylabel="USD Millions")
    plt.text(0.5, 0.5, 'CAGR: 22.5%', ha='center', va='center', transform=plt.gca().transAxes, fontsize=14, color='green', weight='bold')
    save_plot("medical_tourism_growth.png", output_dir)

def generate_saudization_targets(output_dir, color):
    """Chart 8: Saudization Targets in Healthcare (Horizontal Bar Chart)"""
    plt.figure(figsize=(10, 6))
    professions = ['Radiology', 'Medical Labs', 'Clinical Nutrition & Physiotherapy']
    targets = [65, 70, 80]
    # Reorder for better visualization
    professions.reverse()
    targets.reverse()
    bars = plt.barh(professions, targets, color=color, height=0.6)
    plt.bar_label(bars, fmt='%d%%', fontsize=12, padding=5)
    setup_plot("Key Saudization Localization Targets by Profession", xlabel="Localization Target (%)")
    plt.xlim(0, 100)
    save_plot("saudization_targets.png", output_dir)

def main():
    """Main function to generate all charts."""
    output_dir = 'public/images/ksa-report'
    os.makedirs(output_dir, exist_ok=True)

    plt.style.use('seaborn-v0_8-whitegrid')
    primary_color = '#595959'

    generate_market_size_projection(output_dir, primary_color)
    generate_private_sector_gdp(output_dir, primary_color)
    generate_hospital_bed_gap(output_dir, primary_color)
    generate_pharma_market_growth(output_dir, primary_color)
    generate_insurance_market_growth(output_dir, primary_color)
    generate_digital_health_growth(output_dir, primary_color)
    generate_medical_tourism_growth(output_dir, primary_color)
    generate_saudization_targets(output_dir, primary_color)

    print(f"Generated 8 charts in {output_dir}")

if __name__ == "__main__":
    main()
