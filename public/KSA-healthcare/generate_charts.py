import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

# Ensure the output directory exists
output_dir = "/Users/pawan/Documents/GitHub/qti/public/KSA-healthcare/images/report"
os.makedirs(output_dir, exist_ok=True)

# --- Chart Styling & FONT CONFIGURATION ---
# Using Gill Sans, a professional font available on macOS
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['Gill Sans']

plt.style.use('seaborn-v0_8-whitegrid')
main_color = '#6c757d'
secondary_color = '#495057'
highlight_color = '#007bff'
palette = [main_color, secondary_color]

# --- Chart 1: Market Size Projection ---
fig1, ax1 = plt.subplots(figsize=(8, 6))
years = ['2025', '2034']
values = [68.3, 152.6]
bars = ax1.bar(years, values, color=main_color)
ax1.set_title('KSA Healthcare Market Value (USD Billions)', fontsize=16)
ax1.set_ylabel('USD Billions')
ax1.set_ylim(0, 170)
for bar in bars:
    yval = bar.get_height()
    ax1.text(bar.get_x() + bar.get_width()/2.0, yval + 5, f'${yval}B', ha='center', va='bottom')
ax1.text(0.5, 0.5, 'CAGR: 9.3%', ha='center', va='center', transform=ax1.transAxes, fontsize=12, color='white', bbox=dict(facecolor=secondary_color, alpha=0.8))
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'market_size_projection.png'), dpi=300)
plt.close(fig1)

# --- Chart 3: Hospital Bed Gap ---
fig3, ax3 = plt.subplots(figsize=(8, 6))
locations = ['KSA', 'G20 Emerging Avg']
beds = [2.26, 2.85]
bars = ax3.bar(locations, beds, color=[main_color, secondary_color])
ax3.set_title('Hospital Beds per 1,000 People: KSA vs. G20 Average', fontsize=14)
ax3.set_ylabel('Beds per 1,000 People')
ax3.set_ylim(0, 3.5)
for bar in bars:
    yval = bar.get_height()
    ax3.text(bar.get_x() + bar.get_width()/2.0, yval + 0.1, round(yval, 2), ha='center', va='bottom')
ax3.annotate('Gap: 0.59', xy=(0.5, (2.26 + 2.85) / 2), xytext=(0.5, 3.0),
             arrowprops=dict(facecolor='black', shrink=0.05),
             ha='center', va='top', fontsize=12, color='red')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'hospital_bed_gap.png'), dpi=300)
plt.close(fig3)

# --- Chart 4: Pharma Market Growth ---
fig4, ax4 = plt.subplots(figsize=(8, 6))
years = ['2023', '2032']
values = [9.2, 11.5]
bars = ax4.bar(years, values, color=main_color)
ax4.set_title('Pharmaceutical Market Forecast (USD Billions)', fontsize=16)
ax4.set_ylabel('USD Billions')
ax4.set_ylim(0, 13)
for bar in bars:
    yval = bar.get_height()
    ax4.text(bar.get_x() + bar.get_width()/2.0, yval + 0.2, f'${yval}B', ha='center', va='bottom')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'pharma_market_growth.png'), dpi=300)
plt.close(fig4)

# --- Chart 5: Insurance Market Growth ---
fig5, ax5 = plt.subplots(figsize=(8, 6))
years = ['2024', '2033']
values = [7.8, 12.5]
bars = ax5.bar(years, values, color=main_color)
ax5.set_title('Health Insurance Market Expansion (USD Billions)', fontsize=16)
ax5.set_ylabel('USD Billions')
ax5.set_ylim(0, 14)
for bar in bars:
    yval = bar.get_height()
    ax5.text(bar.get_x() + bar.get_width()/2.0, yval + 0.3, f'${yval}B', ha='center', va='bottom')
ax5.text(0.5, 0.5, 'CAGR: 5.14%', ha='center', va='center', transform=ax5.transAxes, fontsize=12, color='white', bbox=dict(facecolor=secondary_color, alpha=0.8))
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'insurance_market_growth.png'), dpi=300)
plt.close(fig5)

# --- Chart 6: Digital Health Growth ---
fig6, ax6 = plt.subplots(figsize=(8, 6))
years = ['2024', '2030', '2032 est']
values = [1.46, 2.14, 2.8]
bars = ax6.bar(years, values, color=main_color)
ax6.set_title('Digital Health Sector Growth (USD Billions)', fontsize=16)
ax6.set_ylabel('USD Billions')
ax6.set_ylim(0, 3.2)
for bar in bars:
    yval = bar.get_height()
    ax6.text(bar.get_x() + bar.get_width()/2.0, yval + 0.1, f'${yval}B', ha='center', va='bottom')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'digital_health_growth.png'), dpi=300)
plt.close(fig6)

# --- Chart 7: Medical Tourism Growth ---
fig7, ax7 = plt.subplots(figsize=(8, 6))
years = ['2024', '2030']
values = [200, 680]
bars = ax7.bar(years, values, color=main_color)
ax7.set_title('Medical Tourism Revenue Projections (USD Millions)', fontsize=16)
ax7.set_ylabel('USD Millions')
ax7.set_ylim(0, 750)
for bar in bars:
    yval = bar.get_height()
    ax7.text(bar.get_x() + bar.get_width()/2.0, yval + 15, f'${yval}M', ha='center', va='bottom')
ax7.text(0.5, 0.5, 'CAGR: 22.5%', ha='center', va='center', transform=ax7.transAxes, fontsize=12, color='white', bbox=dict(facecolor=secondary_color, alpha=0.8))
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'medical_tourism_growth.png'), dpi=300)
plt.close(fig7)

# --- Chart 8: Saudization Targets ---
fig8, ax8 = plt.subplots(figsize=(10, 6))
professions = ['Radiology', 'Medical Labs', 'Clinical Nutrition & Physiotherapy']
targets = [65, 70, 80]
bars = ax8.barh(professions, targets, color=main_color)
ax8.set_title('Key Saudization Localization Targets by Profession', fontsize=16)
ax8.set_xlabel('Localization Target (%)')
ax8.set_xlim(0, 100)
ax8.invert_yaxis()
for index, value in enumerate(targets):
    ax8.text(value - 5, index, f'{value}%', color='white', ha='right', va='center', fontweight='bold')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'saudization_targets.png'), dpi=300)
plt.close(fig8)

# --- Chart 9: Non-Oil GDP Share (2D Pie Chart) ---
# >>>>>>>>>>>> CHANGE 1: Figure size is now less tall <<<<<<<<<<<<<<
fig9, ax9 = plt.subplots(figsize=(3, 2.8)) # Was (3, 3)

labels = 'Non-Oil Sector', 'Oil Sector'
sizes = [52, 48]
colors = ['#6c757d', '#495057']

ax9.pie(sizes, labels=labels, autopct='%1.f%%', startangle=140, colors=colors, textprops={'fontsize': 8})
fig9.suptitle('Non-Oil Sector Share of Real GDP (Q1 2025)', fontsize=9, y=0.95) # Slightly adjusted y
ax9.axis('equal')

# >>>>>>>>>>>> CHANGE 2: Replaced tight_layout with precise margin control <<<<<<<<<<<<<<
# This command gives us exact control over the whitespace around the plot.
plt.subplots_adjust(left=0.05, right=0.95, bottom=0.05, top=0.85)

plt.savefig(os.path.join(output_dir, 'non_oil_gdp_share.png'), dpi=300)
plt.close(fig9)
print("Generated: non_oil_gdp_share.png (with reduced bottom margin)")

# --- Chart 10: Unemployment Rate Decline ---
fig10, ax10 = plt.subplots(figsize=(8, 6))
quarters = ['Q1 2024', 'Q1 2025']
rates = [7.6, 2.8]
bars = ax10.bar(quarters, rates, color=main_color)
ax10.set_title('Unemployment Rate Reduction (Year-on-Year)', fontsize=16)
ax10.set_ylabel('Unemployment Rate (%)')
ax10.set_ylim(0, 9)
for bar in bars:
    yval = bar.get_height()
    ax10.text(bar.get_x() + bar.get_width()/2.0, yval + 0.2, f'{yval}%', ha='center', va='bottom')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'unemployment_decline.png'), dpi=300)
plt.close(fig10)

# --- Chart 11: Population Projection ---
fig11, ax11 = plt.subplots(figsize=(8, 6))
years = ['2025', '2030']
population = [36.96, 39.48]
bars = ax11.bar(years, population, color=main_color)
ax11.set_title('KSA Population Growth Projection (Millions)', fontsize=16)
ax11.set_ylabel('Population (Millions)')
ax11.set_ylim(0, 42)
for bar in bars:
    yval = bar.get_height()
    ax11.text(bar.get_x() + bar.get_width()/2.0, yval + 0.5, f'{yval}M', ha='center', va='bottom')
plt.tight_layout()
plt.savefig(os.path.join(output_dir, 'population_projection.png'), dpi=300)
plt.close(fig11)

print("All charts have been regenerated with the Gill Sans font and centered title fix.")