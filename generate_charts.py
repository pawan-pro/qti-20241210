import os
import matplotlib.pyplot as plt
import numpy as np

# --- Configuration ---
OUTPUT_DIR = "public/resources/gcc-cement-sector"
DPI = 300
FACE_COLOR = '#1e1e1e' # Match body background
TEXT_COLOR = '#e0e0e0' # Match body text color
GRID_COLOR = '#404040' # Dark grey for grid
BAR_COLOR = '#8a8a8a' # Light grey for bars
LINE_COLOR = '#b8b8b8' # Silver for lines

# --- Setup ---
# Ensure the output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

plt.rcParams.update({
    'font.family': 'sans-serif',
    'font.sans-serif': 'Century Gothic', # Match website font if available, otherwise sans-serif
    'text.color': TEXT_COLOR,
    'axes.labelcolor': TEXT_COLOR,
    'xtick.color': TEXT_COLOR,
    'ytick.color': TEXT_COLOR,
    'axes.edgecolor': GRID_COLOR,
    'axes.facecolor': FACE_COLOR,
    'figure.facecolor': FACE_COLOR,
    'savefig.facecolor': FACE_COLOR,
    'grid.color': GRID_COLOR
})

def create_market_share_chart():
    """Chart 1: GCC Cement Market Share by Country (Bar Chart)"""
    countries = ['Saudi Arabia', 'UAE', 'Other GCC']
    market_share = [47.5, 26, 26.5] # KSA at 47.5% (midpoint of 45-50), UAE at 26%

    fig, ax = plt.subplots(figsize=(8, 6))
    bars = ax.bar(countries, market_share, color=BAR_COLOR)

    ax.set_ylabel('Market Share (%)')
    ax.set_title('GCC Cement Market Share by Country', pad=20)
    ax.set_ylim(0, 55)
    ax.yaxis.grid(True, linestyle='--', alpha=0.6)

    for bar in bars:
        yval = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2.0, yval + 1.5, f'{yval}%', ha='center', va='bottom')

    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    plt.tight_layout()
    plt.savefig(os.path.join(OUTPUT_DIR, 'gcc_market_share.png'), dpi=DPI, bbox_inches='tight')
    plt.close(fig)
    print("Chart 1: Market share chart created.")

def create_projected_growth_chart():
    """Chart 2: Projected Growth of GCC Cement Market (Line Chart)"""
    years = np.arange(2024, 2034)
    initial_volume = 94.5
    cagr = 0.047

    projected_volume = initial_volume * (1 + cagr) ** (years - 2024)

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(years, projected_volume, marker='o', linestyle='-', color=LINE_COLOR)

    ax.set_xlabel('Year')
    ax.set_ylabel('Market Volume (Million Tons)')
    ax.set_title('Projected Growth of GCC Cement Market (2024-2033)', pad=20)
    ax.grid(True, linestyle='--', alpha=0.6)
    ax.set_xticks(years)
    plt.xticks(rotation=45)
    ax.set_ylim(bottom=90)

    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    plt.tight_layout()
    plt.savefig(os.path.join(OUTPUT_DIR, 'gcc_projected_growth.png'), dpi=DPI, bbox_inches='tight')
    plt.close(fig)
    print("Chart 2: Projected growth chart created.")

def create_comparative_cagr_chart():
    """Chart 3: Comparative CAGR by GCC Country (Horizontal Bar Chart)"""
    countries = ['Oman', 'Kuwait', 'Qatar', 'UAE', 'Saudi Arabia']
    cagr_values = [6.0, 5.7, 5.3, 4.9, 4.6]

    fig, ax = plt.subplots(figsize=(8, 6))
    bars = ax.barh(countries, cagr_values, color=BAR_COLOR)

    ax.set_xlabel('Compound Annual Growth Rate (CAGR) %')
    ax.set_title('Comparative CAGR by GCC Country', pad=20)
    ax.invert_yaxis() # Highest on top

    # Add labels to the bars
    for bar in bars:
        width = bar.get_width()
        ax.text(width + 0.1, bar.get_y() + bar.get_height()/2, f'{width}%', ha='left', va='center')

    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.xaxis.grid(True, linestyle='--', alpha=0.6)

    plt.tight_layout()
    plt.savefig(os.path.join(OUTPUT_DIR, 'gcc_comparative_cagr.png'), dpi=DPI, bbox_inches='tight')
    plt.close(fig)
    print("Chart 3: Comparative CAGR chart created.")

def create_challenges_infographic():
    """Chart 4: Key Challenges (Info-Graphic Style)"""
    fig, ax = plt.subplots(figsize=(8, 4))

    # Hide all axes and spines
    ax.set_xticks([])
    ax.set_yticks([])
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.spines['left'].set_visible(False)

    # Overcapacity text
    ax.text(0.25, 0.6, '50-60M Tons', fontsize=24, fontweight='bold', ha='center', va='center', color=TEXT_COLOR)
    ax.text(0.25, 0.4, 'Excess Production Capacity', fontsize=12, ha='center', va='center', color=TEXT_COLOR, wrap=True)

    # Separator
    ax.plot([0.5, 0.5], [0.2, 0.8], color=GRID_COLOR, linestyle='-', linewidth=2)

    # Utilization text
    ax.text(0.75, 0.6, '<70%', fontsize=24, fontweight='bold', ha='center', va='center', color=TEXT_COLOR)
    ax.text(0.75, 0.4, 'Capacity Utilization Rate', fontsize=12, ha='center', va='center', color=TEXT_COLOR, wrap=True)

    fig.suptitle('Key Challenges: Overcapacity vs. Utilization', fontsize=16, color=TEXT_COLOR)

    plt.tight_layout(rect=[0, 0, 1, 0.95])
    plt.savefig(os.path.join(OUTPUT_DIR, 'gcc_key_challenges.png'), dpi=DPI, bbox_inches='tight')
    plt.close(fig)
    print("Chart 4: Key challenges infographic created.")


if __name__ == "__main__":
    create_market_share_chart()
    create_projected_growth_chart()
    create_comparative_cagr_chart()
    create_challenges_infographic()
    print(f"All charts saved to '{OUTPUT_DIR}' directory.")
