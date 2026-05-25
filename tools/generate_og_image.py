#!/usr/bin/env python3
"""Generate OG share image for FinWiki (1200x630, Japanese only)."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NOTO = "C:/Windows/Fonts/NotoSansJP-VF.ttf"

INK = "#ffffff"
MUTED = "#a4bbb7"
ACCENT = "#5be3da"
ACCENT_DEEP = "#0b7a75"


def font(size, weight=400):
    f = ImageFont.truetype(NOTO, size)
    f.set_variation_by_axes([weight])
    return f


# Canvas + gradient (dark teal -> near-black, top to bottom)
img = Image.new("RGB", (W, H), "#0a1414")
d = ImageDraw.Draw(img, "RGBA")
for y in range(H):
    t = y / H
    r = int((10 + (6 - 10) * t) * 1.0)
    g = int((30 + (14 - 30) * t) * 1.0)
    b = int((30 + (16 - 30) * t) * 1.0)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# Soft accent radial top-right
for radius in range(0, 520, 2):
    alpha = int(40 * (1 - radius / 520) ** 2)
    d.ellipse(
        [W - 80 - radius, -260 - radius, W - 80 + radius, -260 + radius],
        outline=(11, 122, 117, alpha),
        width=1,
    )

# Left accent bar
d.rectangle([0, 0, 10, H], fill=ACCENT_DEEP)

# Brand block (top-left)
brand_font = font(40, 700)
sub_font = font(28, 500)
d.text((60, 50), "FinWiki", font=brand_font, fill=INK)
d.rectangle([60, 100, 60 + 220, 104], fill=ACCENT)
d.text((60, 116), "金融ナレッジベース", font=sub_font, fill=MUTED)

# Main title (left column, max width ~700)
# Use 66pt to ensure no overflow into right panel (which starts at x=780)
title_font = font(66, 800)
d.text((60, 188), "日本金融機関 × 決済", font=title_font, fill=INK)
d.text((60, 268), "暗号資産 × 資本市場", font=title_font, fill=INK)

# Tag chips (under title, left column only)
chip_font = font(20, 600)
chips = ["フィンテック", "デリバティブ", "不動産金融", "ストラクチャード", "エージェント経済"]
chip_x = 60
chip_y = 372
max_chip_x = 760  # stay left of stat panel
for tag in chips:
    bbox = d.textbbox((0, 0), tag, font=chip_font)
    tw = bbox[2] - bbox[0]
    pad_h = 16
    if chip_x + tw + pad_h * 2 > max_chip_x:
        # wrap to next row
        chip_x = 60
        chip_y += 44
    d.rounded_rectangle(
        [chip_x, chip_y, chip_x + tw + pad_h * 2, chip_y + 36],
        radius=18,
        fill=(91, 227, 218, 30),
        outline=(91, 227, 218, 180),
        width=1,
    )
    d.text((chip_x + pad_h, chip_y + 6), tag, font=chip_font, fill=ACCENT)
    chip_x += tw + pad_h * 2 + 8

# Stat panel (right side)
panel_x = 800
panel_y = 188
panel_w = 350
# 4 entries, each block ~90px (number 56 + label 20 + gap 14)
entry_h = 88
panel_h = 24 + entry_h * 4 + 8
d.rounded_rectangle(
    [panel_x, panel_y, panel_x + panel_w, panel_y + panel_h],
    radius=18,
    fill=(255, 255, 255, 12),
    outline=(255, 255, 255, 40),
    width=1,
)
num_font = font(46, 800)
label_font = font(18, 500)
stats = [
    ("1,449", "Markdown ファイル"),
    ("1,411", "リンク監査済"),
    ("23", "テーマ領域"),
    ("約1,043万字", "本文ボリューム"),
]
sy = panel_y + 24
for i, (num, label) in enumerate(stats):
    d.text((panel_x + 26, sy), num, font=num_font, fill=ACCENT)
    d.text((panel_x + 26, sy + 56), label, font=label_font, fill=MUTED)
    sy += entry_h
    if i < len(stats) - 1:
        d.line(
            [(panel_x + 26, sy - 6), (panel_x + panel_w - 26, sy - 6)],
            fill=(255, 255, 255, 28),
            width=1,
        )

# Footer: URL + tagline
url_font = font(28, 600)
tag_font = font(20, 400)
d.text((60, H - 70), "finwiki.zksc.io", font=url_font, fill=ACCENT)
d.text(
    (60, H - 38),
    "AI が読み取り・検索・引用・接続するための公開 knowledge graph",
    font=tag_font,
    fill=MUTED,
)

# Save
img.save("og-image.png", "PNG", optimize=True)
print("OK: og-image.png written, size:", img.size)
