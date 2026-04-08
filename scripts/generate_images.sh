#!/bin/bash

# Configuration
PROJECT_ROOT="/Volumes/G/claude/recipes"
IMAGE_DIR="$PROJECT_ROOT/public/recipes"

# Create image directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

# Recipe data (slug:prompt)
recipes=(
  "mini-pizzas:An artistic watercolor painting of small pita pizzas with melting cheese and olives, vibrant warm colors, playful style"
  "fruit-skewers:Oil painting of colorful fruit skewers on a wooden plate, bright sunlight, impressionist style"
  "choco-balls:Whimsical gouache painting of chocolate balls covered in colorful sprinkles, playful kitchen background"
  "quick-pasta:Vibrant acrylic painting of a steaming bowl of pasta with red tomato sauce and green basil leaves"
  "shakshuka:Textured palette knife painting of a red shakshuka in a cast iron skillet, rustic style"
  "pan-omelette:Impressionist painting of a golden herb omelette on a turquoise plate, soft morning light"
  "no-bake-cheesecake:Delicate watercolor painting of a creamy cheesecake with golden crumbs, soft pastel background"
  "brownies:Rich oil painting of dark chocolate brownies with melting chips, deep shadows and highlights"
  "alfajores:Soft pastel drawing of stacked alphajores cookies with dulce de leche and coconut, dreamy atmosphere"
  "quinoa-salad:Modern abstract painting of a quinoa salad bowl, splashes of orange, green and purple"
  "sweet-potato-boats:Warm watercolor of baked sweet potatoes filled with white cheese, cozy kitchen lighting"
  "green-smoothie:Fresh digital painting of a green smoothie glass with a straw, surrounded by spinach and apples"
  "roast-chicken:Classic still life oil painting of a golden roasted chicken and potatoes in a ceramic dish"
  "challah:Folk art style painting of two braided challah breads, warm golden tones, cozy vibes"
  "stuffed-peppers:Detailed gouache painting of colorful stuffed peppers in a rich red sauce, Mediterranean style"
)

echo "🚀 Starting image generation (using Pollinations.ai for high-quality artistic results)..."

for entry in "${recipes[@]}"; do
  slug="${entry%%:*}"
  prompt="${entry#*:}"
  
  output_file="$IMAGE_DIR/$slug.png"
  
  if [ -f "$output_file" ]; then
    echo "✅ Skipping $slug (already exists)"
    continue
  fi

  echo "🎨 Generating image for: $slug..."
  # URL Encode the prompt
  encoded_prompt=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$prompt'))")
  
  # Download from Pollinations AI
  curl -s -L "https://image.pollinations.ai/prompt/${encoded_prompt}?width=800&height=600&nologo=true" -o "$output_file"
  
  if [ $? -eq 0 ]; then
    echo "✨ Successfully generated $output_file"
  else
    echo "❌ Failed to generate $slug"
  fi
done

echo "🏁 All images are ready!"
