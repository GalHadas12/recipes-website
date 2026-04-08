# 🎨 Image Generation Guide

This project uses AI-generated images for each recipe in an "artistic painting" style.

## Generation Script

A script is provided in `scripts/generate_images.sh` to download the images into the `public/recipes/` folder.

```bash
# To run the script:
bash scripts/generate_images.sh
```

## Recipe Prompts

Each recipe has a specific prompt that ensures a consistent playful, artistic style.

| Recipe Slug | Prompt |
| :--- | :--- |
| `mini-pizzas` | An artistic watercolor painting of small pita pizzas with melting cheese and olives, vibrant warm colors, playful style |
| `fruit-skewers` | Oil painting of colorful fruit skewers on a wooden plate, bright sunlight, impressionist style |
| `choco-balls` | Whimsical gouache painting of chocolate balls covered in colorful sprinkles, playful kitchen background |
| `quick-pasta` | Vibrant acrylic painting of a steaming bowl of pasta with red tomato sauce and green basil leaves |
| `shakshuka` | Textured palette knife painting of a red shakshuka in a cast iron skillet, rustic style |
| `pan-omelette` | Impressionist painting of a golden herb omelette on a turquoise plate, soft morning light |
| `no-bake-cheesecake` | Delicate watercolor painting of a creamy cheesecake with golden crumbs, soft pastel background |
| `brownies` | Rich oil painting of dark chocolate brownies with melting chips, deep shadows and highlights |
| `alfajores` | Soft pastel drawing of stacked alfajores cookies with dulce de leche and coconut, dreamy atmosphere |
| `quinoa-salad` | Modern abstract painting of a quinoa salad bowl, splashes of orange, green and purple |
| `sweet-potato-boats` | Warm watercolor of baked sweet potatoes filled with white cheese, cozy kitchen lighting |
| `green-smoothie` | Fresh digital painting of a green smoothie glass with a straw, surrounded by spinach and apples |
| `roast-chicken` | Classic still life oil painting of a golden roasted chicken and potatoes in a ceramic dish |
| `challah` | Folk art style painting of two braided challah breads, warm golden tones, cozy vibes |
| `stuffed-peppers` | Detailed gouache painting of colorful stuffed peppers in a rich red sauce, Mediterranean style |

## Image Handling

- Images are stored in `public/recipes/{slug}.png`.
- If a local image is missing, the `RecipeImage` component automatically falls back to generating the image on-the-fly using the `pollinations.ai` service.
